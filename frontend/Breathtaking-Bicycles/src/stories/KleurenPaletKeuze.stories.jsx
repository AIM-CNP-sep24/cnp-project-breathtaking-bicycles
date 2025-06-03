import InstelPagina from '../instel-pagina/InstelPagina';
import { MemoryRouter, Routes, Route } from 'react-router';
import { within, userEvent } from '@storybook/test'

export default {
    title: 'instel-pagina/KleurenPalet',
    component: InstelPagina,
    parameters: {
        layout: 'centered',
    },
};

const Template = ({ url = '/instelmenu', ...args }) => (
    <MemoryRouter initialEntries={[url]}>
        <Routes>
            <Route path="/instelmenu" element={ <InstelPagina {...args} /> } />
        </Routes>
    </MemoryRouter>
);

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
    "naam": "Kleurenblinen palet",
    "colorOne": "#FFBE85",
    "colorOneShadow": "#CF9868",
    "colorTwo": "#4090C2",
    "colorTwoShadow": "#3378A3",
    "colorThree": "#265896",
    "colorThreeShadow": "#1C4374",
    "colorFour": "#A0A1A3",
    "colorFourShadow": "#7E8084"
}];

export const visual = Template.bind({});
visual.args = { uiSettings: uiSettings,
    fonts: fonts,
    colorPalettes: colorPalettes
};

export const switchColorPalet = Template.bind({});
switchColorPalet.args = { uiSettings: uiSettings,
    fonts: fonts,
    colorPalettes: colorPalettes
};

switchColorPalet.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const paletteSwitchOne = document.getElementById('Font1')
    const paletteSwitchTwo = document.getElementById('Font2')

    await new Promise((resolve) => setTimeout(resolve, 900));
    await userEvent.click(paletteSwitchTwo);
    await new Promise((resolve) => setTimeout(resolve, 900));
    await userEvent.click(paletteSwitchOne);
    await new Promise((resolve) => setTimeout(resolve, 900));
    await userEvent.click(paletteSwitchTwo);
    await new Promise((resolve) => setTimeout(resolve, 900));
    await userEvent.click(paletteSwitchOne);
};