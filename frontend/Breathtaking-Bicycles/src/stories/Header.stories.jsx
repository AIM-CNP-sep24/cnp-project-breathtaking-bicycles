
import { MemoryRouter, Route, Routes } from "react-router";
import Header from "../Header.jsx";
import { within, userEvent } from '@storybook/test';


export default {
    title: 'stories/Header',
    component: Header,
};

const Template = ({ url = '/instelmenu', ...args }) => (
    <MemoryRouter initialEntries={[url]}>
        <Routes>
            <Route path="/instelmenu" element={<Header {...args} />} />
        </Routes>
    </MemoryRouter>
);

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
    uiSettings: {
        colorPalette: {
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
    },
    selectedLanguageZorgverlener: { id: 1, naam: 'Nederlands', code: 'NL' },
    selectedLanguageZorgvrager: { id: 2, naam: 'Engels', code: 'EN' }
};

export const DefaultHeaderUitgeklapt = Template.bind({});
DefaultHeaderUitgeklapt.args = {
    uiSettings: {
        colorPalette: {
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
    },
    selectedLanguageZorgverlener: { id: 1, naam: 'Nederlands', code: 'NL' },
    selectedLanguageZorgvrager: { id: 2, naam: 'Engels', code: 'EN' },
    isExpanded: true
};

export const KleurenblindenPaletHeader = Template.bind({});
KleurenblindenPaletHeader.args = {
    uiSettings: {
        colorPalette: {
            colorOne: "#FFBE85",
            colorOneShadow: "#CF9868",
            colorTwo: "#4090C2",
            colorTwoShadow: "#3378A3",
            colorThree: "#265896",
            colorThreeShadow: "#1C4374",
            colorFour: "#A0A1A3",
            colorFourShadow: "#7E8084",
        },
        font: "standard"
    },
    selectedLanguageZorgverlener: { id: 1, naam: 'Nederlands', code: 'NL' },
    selectedLanguageZorgvrager: { id: 2, naam: 'Engels', code: 'EN' }
};

export const KleurenblindenPalettHeaderUitgeklapt = Template.bind({});
KleurenblindenPalettHeaderUitgeklapt.args = {
    uiSettings: {
        colorPalette: {
            colorOne: "#FFBE85",
            colorOneShadow: "#CF9868",
            colorTwo: "#4090C2",
            colorTwoShadow: "#3378A3",
            colorThree: "#265896",
            colorThreeShadow: "#1C4374",
            colorFour: "#A0A1A3",
            colorFourShadow: "#7E8084",
        },
        font: "standard"
    },
    selectedLanguageZorgverlener: { id: 1, naam: 'Nederlands', code: 'NL' },
    selectedLanguageZorgvrager: { id: 2, naam: 'Engels', code: 'EN' },
    isExpanded: true
};

DefaultHeaderUitgeklapt.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    const button = canvas.getByRole('button', { name: /menu dropdown/i });

    await new Promise((resolve) => setTimeout(resolve, 1000));
    await userEvent.click(button);
    await new Promise((resolve) => setTimeout(resolve, 1000));
}

KleurenblindenPalettHeaderUitgeklapt.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    const button = canvas.getByRole('button', { name: /menu dropdown/i });

    await new Promise((resolve) => setTimeout(resolve, 1000));
    await userEvent.click(button);
    await new Promise((resolve) => setTimeout(resolve, 1000));
}