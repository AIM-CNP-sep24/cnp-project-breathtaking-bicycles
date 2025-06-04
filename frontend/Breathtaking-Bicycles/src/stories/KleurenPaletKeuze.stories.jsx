import InstelPagina from '../instel-pagina/InstelPagina';
import { MemoryRouter, Routes, Route } from 'react-router';
import { userEvent } from '@storybook/test'
import { useState } from 'react'

export default {
    title: 'instel-pagina/KleurenPalet',
    component: InstelPagina,
    parameters: {
        layout: 'centered',
    },
};

const Template = ({ url = '/instelmenu', ...args }) => {
    const [selectedPalet, setSelectedPalet] = useState(1);

    return (
        <MemoryRouter initialEntries={[url]}>
            <Routes>
                <Route path="/instelmenu" element={
                    <InstelPagina
                        {...args}
                        selectedPalet={selectedPalet}
                        setSelectedPalet={setSelectedPalet}
                    />
                } />
            </Routes>
        </MemoryRouter>
    );
};

const uiSettings = {
    colorPalette: {
        naam: "Standaard palet",
        colorOne: "#F5EEDC",
        colorOneShadow: "#E0D9C8",
        colorTwo: "#27548A",
        colorTwoShadow: "#1C406B",
        colorThree: "#183B4E",
        colorThreeShadow: "#132F3F",
        colorFour: "#DDA853",
        colorFourShadow: "#BA8C43",
    },
    font: "standard"
};

const fonts = ["standard", "font-OpenDyslexic"];

const colorPalettes = [{
    "id": 1,
    "naam": "Standaard palet",
    "colorOne": "#F5EEDC",
    "colorOneShadow": "#E0D9C8",
    "colorTwo": "#27548A",
    "colorTwoShadow": "#1C406B",
    "colorThree": "#183B4E",
    "colorThreeShadow": "#132F3F",
    "colorFour": "#DDA853",
    "colorFourShadow": "#BA8C43"
},{
    "id": 2,
    "naam": "Kleurenblinden palet",
    "colorOne": "#FFBE85",
    "colorOneShadow": "#CF9868",
    "colorTwo": "#4090C2",
    "colorTwoShadow": "#3378A3",
    "colorThree": "#265896",
    "colorThreeShadow": "#1C4374",
    "colorFour": "#A0A1A3",
    "colorFourShadow": "#7E8084"
}];

const selectedLanguageZorgverlener = { id: 1, code: "NL", naam: "Nederlands"}
const selectedLanguageZorgvrager = { id: 2, code: "EN", naam: "Engels"}

export const visual = Template.bind({});
visual.args = { uiSettings: uiSettings,
    fonts: fonts,
    colorPalettes: colorPalettes,
    selectedLanguageZorgverlener: selectedLanguageZorgverlener,
    selectedLanguageZorgvrager: selectedLanguageZorgvrager
};

export const switchColorPalet = Template.bind({});
switchColorPalet.args = { uiSettings: uiSettings,
    fonts: fonts,
    colorPalettes: colorPalettes,
    selectedLanguageZorgverlener: selectedLanguageZorgverlener,
    selectedLanguageZorgvrager: selectedLanguageZorgvrager
};

switchColorPalet.play = async () => {
    const paletteSwitchOne = document.getElementById('Palet1')
    const paletteSwitchTwo = document.getElementById('Palet2')
    console.log(paletteSwitchOne)

    await new Promise((resolve) => setTimeout(resolve, 900));
    await userEvent.click(paletteSwitchTwo);
    await new Promise((resolve) => setTimeout(resolve, 900));
    await userEvent.click(paletteSwitchOne);
    await new Promise((resolve) => setTimeout(resolve, 900));
    await userEvent.click(paletteSwitchTwo);
    await new Promise((resolve) => setTimeout(resolve, 900));
    await userEvent.click(paletteSwitchOne);
};