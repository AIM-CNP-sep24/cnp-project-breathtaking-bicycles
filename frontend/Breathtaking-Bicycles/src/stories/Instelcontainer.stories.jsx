import InstelContainer from "../instel-pagina/InstelContainer.jsx";
import { useState } from 'react';
import { MemoryRouter, Routes, Route } from "react-router";
import { action } from '@storybook/addon-actions';

export default {
    title: 'InstelContainer',
    component: InstelContainer,
    parameters: {
        layout: 'centered',
    },
};

const Template = ({ url = '/instelmenu', ...args }) => (
    <MemoryRouter initialEntries={[url]}>
        <Routes>
            <Route path="/instelmenu" element={<InstelContainer {...args} />} />
        </Routes>
    </MemoryRouter>
)

const talen = ["Nederlands", "Engels"];
const fonts = ["standard", "font-OpenDyslexic"];

const colorPalettes = [{
    "id": 1,
    "colorOne": "#F5EEDC",
    "colorOneShadow": "#E0D9C8",
    "colorTwo": "#27548A",
    "colorTwoShadow": "#1C406B",
    "colorThree": "#183B4E",
    "colorThreeShadow": "#132F3F",
    "colorFour": "#DDA853",
    "colorFourShadow": "#BA8C43"
}, {
    "id": 2,
    "colorOne": "#FFBE85",
    "colorOneShadow": "#CF9868",
    "colorTwo": "#4090C2",
    "colorTwoShadow": "#3378A3",
    "colorThree": "#265896",
    "colorThreeShadow": "#1C4374",
    "colorFour": "#A0A1A3",
    "colorFourShadow": "#7E8084"
}];

export const InstelContainerTestSucces = Template.bind({});
InstelContainerTestSucces.args = {
    disabled: false,
    selectedFont: 'standard',
    setSelectedFont: action('Font veranderd naar'),
    selectedLanguageZorgverlener: 'Nederlands',
    setSelectedLanguageZorgverlener: action('Taal veranderd naar'),
    selectedLanguageZorgvrager: 'Engels',
    setSelectedLanguageZorgvrager: action('Taal veranderd naar'),
    geselecteerdPalet: colorPalettes[0],
    setGeselecteerdPalet: action('Palet veranderd naar'),
};

InstelContainerTestSucces.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('Dyslexie'));
    await userEvent.click(canvas.getByText('opslaan'));
     await waitFor(() => {
        expect(canvas.getByText(/Instellingen opgeslagen/)).toBeInTheDocument();
    });
};


export const InteractieveOpslaanTest = (colorPalettes) => {
    const [selectedFont, setSelectedFont] = useState('standard');
    const [selectedLanguageZorgvrager, setSelectedLanguageZorgvrager] = useState('');
    const [selectedLanguageZorgverlener, setSelectedLanguageZorgverlener] = useState('');
    const [geselecteerdPalet, setGeselecteerdPalet] = useState(1);


    return (
        <InstelContainer
            setSelectedFont={setSelectedFont}
            selectedFont={selectedFont}
            selectedLanguageZorgvrager={selectedLanguageZorgvrager}
            setSelectedLanguageZorgvrager={setSelectedLanguageZorgvrager}
            selectedLanguageZorgverlener={selectedLanguageZorgverlener}
            setSelectedLanguageZorgverlener={setSelectedLanguageZorgverlener}
            colorPalettes={colorPalettes}
            geselecteerdPalet={geselecteerdPalet}
            setGeselecteerdPalet={setGeselecteerdPalet}
        />
    );
};

InteractieveOpslaanTest.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText('opslaan'));
    await waitFor(() => {
        expect(canvas.getByText(/Instellingen opgeslagen/)).toBeInTheDocument();
    });

};