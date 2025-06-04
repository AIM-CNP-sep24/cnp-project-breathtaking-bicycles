import InstelContainer from "../instel-pagina/InstelContainer.jsx";
import { MemoryRouter, Routes, Route } from "react-router";
import { action } from '@storybook/addon-actions';
import { within, userEvent, waitFor, fn, expect} from '@storybook/test';

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
            <Route path="/instelmenu" element={ <InstelContainer {...args} /> } />
        </Routes>
    </MemoryRouter>
);

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

const selectedFontSpy = fn();
const selectedLanguageZorgverlenerSpy = fn();
const selectedLanguageZorgvragerSpy = fn();
const geselecteerdPaletSpy = fn();

export const InstelContainerKnoppenTest = {
    args: {
        selectedFont: fonts[0],
        setSelectedFont: selectedFontSpy,
        selectedLanguageZorgverlener: talen[0],
        setSelectedLanguageZorgverlener: selectedLanguageZorgverlenerSpy,
        selectedLanguageZorgvrager: talen[1],
        setSelectedLanguageZorgvrager: selectedLanguageZorgvragerSpy,
        colorPalettes: colorPalettes,
        geselecteerdPalet: colorPalettes[0],
        setGeselecteerdPalet: geselecteerdPaletSpy,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await userEvent.click(canvas.getByText('Dyslexie'));
        await userEvent.click(canvas.getByText(/opslaan/i));
        //await expect(selectedFontSpy).toHaveBeenCalledWith();
        await waitFor(async () => {
            expect(selectedFontSpy).toHaveBeenCalledTimes(1);
           await expect(canvas.getByText(/Instellingen zijn succsevol opgeslagen!/i)).toBeInTheDocument();
        });
    }
};