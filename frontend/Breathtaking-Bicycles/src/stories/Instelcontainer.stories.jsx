import InstelContainer from '../instel-pagina/InstelContainer.jsx';
import { MemoryRouter, Routes, Route } from "react-router";
import { within, userEvent, fn } from '@storybook/test';


export default {
    title: 'InstelContainer',
    component: InstelContainer,
};

const Template = ({ url = '/instelmenu', ...args }) => (
    <MemoryRouter initialEntries={[url]}>
        <Routes>
            <Route path="/instelmenu" element={<InstelContainer {...args} />} />
        </Routes>
    </MemoryRouter>
);

export const InstelContainerDefaultStaat = Template.bind({});
InstelContainerDefaultStaat.args = {
    colorPalettes: [{
        id: 1,
        naam: "Standaard palet",
        colorOne: "#F5EEDC",
        colorOneShadow: "#E0D9C8",
        colorTwo: "#27548A",
        colorTwoShadow: "#1C406B",
        colorThree: "#183B4E",
        colorThreeShadow: "#132F3F",
        colorFour: "#DDA853",
        colorFourShadow: "#BA8C43"
    }, {
        id: 2,
        naam: "Kleurenblinden palet",
        colorOne: "#FFBE85",
        colorOneShadow: "#CF9868",
        colorTwo: "#4090C2",
        colorTwoShadow: "#3378A3",
        colorThree: "#265896",
        colorThreeShadow: "#1C4374",
        colorFour: "#A0A1A3",
        colorFourShadow: "#7E8084"
    }],
    languages: [
        { id: 1, naam: 'Nederlands', code: 'NL' },
        { id: 2, naam: 'Engels', code: 'EN' },
    ],
    selectedFont: 'standard',
    selectedPalet: 1,
    selectedLanguageZorgvrager: { id: 1, naam: 'Nederlands', code: 'NL' },
    selectedLanguageZorgverlener: { id: 2, naam: 'Engels', code: 'EN' },
    isAanpasbaar: true,
    disabled: false,
};

export const InstelContainerTestDisabled = Template.bind({});
InstelContainerTestDisabled.args = {
    colorPalettes: [{
        id: 1,
        naam: "Standaard palet",
        colorOne: "#F5EEDC",
        colorOneShadow: "#E0D9C8",
        colorTwo: "#27548A",
        colorTwoShadow: "#1C406B",
        colorThree: "#183B4E",
        colorThreeShadow: "#132F3F",
        colorFour: "#DDA853",
        colorFourShadow: "#BA8C43"
    }, {
        id: 2,
        naam: "Kleurenblinden palet",
        colorOne: "#FFBE85",
        colorOneShadow: "#CF9868",
        colorTwo: "#4090C2",
        colorTwoShadow: "#3378A3",
        colorThree: "#265896",
        colorThreeShadow: "#1C4374",
        colorFour: "#A0A1A3",
        colorFourShadow: "#7E8084"
    }],
    languages: [
        { id: 1, naam: 'Nederlands', code: 'NL' },
        { id: 2, naam: 'Engels', code: 'EN' },
    ],
    selectedFont: 'standard',
    selectedPalet: 1,
    selectedLanguageZorgvrager: { id: 1, naam: 'Nederlands', code: 'NL' },
    selectedLanguageZorgverlener: { id: 2, naam: 'Engels', code: 'EN' },
    isAanpasbaar: false,
    disabled: true,
};

export const InstelContainerTestOpslaanMislukt = Template.bind({});
InstelContainerTestOpslaanMislukt.args = {
    colorPalettes: [{
        id: 1,
        naam: "Standaard palet",
        colorOne: "#F5EEDC",
        colorOneShadow: "#E0D9C8",
        colorTwo: "#27548A",
        colorTwoShadow: "#1C406B",
        colorThree: "#183B4E",
        colorThreeShadow: "#132F3F",
        colorFour: "#DDA853",
        colorFourShadow: "#BA8C43"
    }, {
        id: 2,
        naam: "Kleurenblinden palet",
        colorOne: "#FFBE85",
        colorOneShadow: "#CF9868",
        colorTwo: "#4090C2",
        colorTwoShadow: "#3378A3",
        colorThree: "#265896",
        colorThreeShadow: "#1C4374",
        colorFour: "#A0A1A3",
        colorFourShadow: "#7E8084"
    }],
    languages: [
        { id: 1, naam: 'Nederlands', code: 'NL' },
        { id: 2, naam: 'Engels', code: 'EN' },
    ],
    selectedFont: 'standard',
    selectedPalet: 1,
    selectedLanguageZorgvrager: { id: 1, naam: 'Nederlands', code: 'NL' },
    selectedLanguageZorgverlener: { id: 2, naam: 'Engels', code: 'EN' },
    isAanpasbaar: true,
    disabled: false,
};

InstelContainerTestOpslaanMislukt.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const opslaanButton = canvas.getByRole('button', { name: /opslaan/i });
    await userEvent.click(opslaanButton);

        await canvas.findByText(/Opslaan mislukt. Probeer het opnieuw/i);
}

const selectedLanguageZorgverlenerSpy = fn();
const selectedLanguageZorgvragerSpy = fn();
const geselecteerdPaletSpy = fn();
const selectedFontSpy = fn();


export const InstelContainerTestOpslaanGeslaagd = Template.bind({});
InstelContainerTestOpslaanGeslaagd.args = {
    colorPalettes: [{
        id: 1,
        naam: "Standaard palet",
        colorOne: "#F5EEDC",
        colorOneShadow: "#E0D9C8",
        colorTwo: "#27548A",
        colorTwoShadow: "#1C406B",
        colorThree: "#183B4E",
        colorThreeShadow: "#132F3F",
        colorFour: "#DDA853",
        colorFourShadow: "#BA8C43"
    }, {
        id: 2,
        naam: "Kleurenblinden palet",
        colorOne: "#FFBE85",
        colorOneShadow: "#CF9868",
        colorTwo: "#4090C2",
        colorTwoShadow: "#3378A3",
        colorThree: "#265896",
        colorThreeShadow: "#1C4374",
        colorFour: "#A0A1A3",
        colorFourShadow: "#7E8084"
    }],
    languages: [
        { id: 1, naam: 'Nederlands', code: 'NL' },
        { id: 2, naam: 'Engels', code: 'EN' },
    ],
    selectedFont: 'standard',
    selectedPalet: 1,
    selectedLanguageZorgvrager: { id: 1, naam: 'Nederlands', code: 'NL' },
    selectedLanguageZorgverlener: { id: 2, naam: 'Engels', code: 'EN' },
    setSelectedFont: selectedFontSpy,
    setSelectedPalet: geselecteerdPaletSpy,
    setSelectedLanguageZorgvrager: selectedLanguageZorgvragerSpy,
    setSelectedLanguageZorgverlener: selectedLanguageZorgverlenerSpy,
    isAanpasbaar: true,
    disabled: false,
};

InstelContainerTestOpslaanGeslaagd.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const opslaanButton = canvas.getByRole('button', { name: /opslaan/i });
    await userEvent.click(opslaanButton);

    // Check of de succesmelding zichtbaar is
    await canvas.findByText(/Instellingen zijn succesvol opgeslagen/i);
};


