
import TaalInstelmenuComponent from "../instel-pagina/Instelmenu-components/TaalInstelmenuComponent.jsx";
import { MemoryRouter, Route, Routes } from 'react-router';
import { http, HttpResponse } from 'msw';
import { fn, within, userEvent, expect } from '@storybook/test'


export default {
    title: 'stories/TaalInstelmenuComponent',
    component: TaalInstelmenuComponent,
    paramenters: {
        msw: {
            handlers: [
                http.get("http://localhost:8080/talen-ophalen", () => {
                    return HttpResponse.json([
                        { id: 1, naam: 'Nederlands', code: 'NL' },
                        { id: 2, naam: 'Engels', code: 'EN' },
                    ])
                }),
            ]
        }
    }
};

const Template = ({ url = '/instelmenu', ...args }) => (
    <MemoryRouter initialEntries={[url]}>
        <Routes>
            <Route path="/instelmenu" element={<TaalInstelmenuComponent {...args} />} />
        </Routes>
    </MemoryRouter>
);


export const DefaultGeselecteerdeTalen = Template.bind({});

    DefaultGeselecteerdeTalen.args = {
        disabled: false,
        languages: [
            { id: 1, naam: 'Nederlands', code: 'NL' },
            { id: 2, naam: 'Engels', code: 'EN' },
        ],
        selectedLanguageZorgvrager: { id: 1, naam: 'Nederlands', code: 'NL' },
        selectedLanguageZorgverlener: { id: 2, naam: 'Engels', code: 'EN' },
    };

export const DisabledTaalInstelmenu = Template.bind({});
DisabledTaalInstelmenu.args = {
    disabled: true,
    languages: [
        { id: 1, naam: 'Nederlands', code: 'NL' },
        { id: 2, naam: 'Engels', code: 'EN' },
    ],
    selectedLanguageZorgvrager: { id: 1, naam: 'Nederlands', code: 'NL' },
    selectedLanguageZorgverlener: { id: 2, naam: 'Engels', code: 'EN' },
};

export const TalenSwitch = Template.bind({});

const setZorgvragerSpy  = fn();
const setZorgverlenerSpy  = fn();
const switchTaal = fn();

TalenSwitch.args = {
    disabled: false,
    languages: [
        { id: 1, naam: 'Nederlands', code: 'NL' },
        { id: 2, naam: 'Engels', code: 'EN' },
    ],
    selectedLanguageZorgvrager: { id: 2, naam: 'Engels', code: 'EN' },
    selectedLanguageZorgverlener: { id: 1, naam: 'Nederlands', code: 'NL' },
    setSelectedLanguageZorgvrager: setZorgvragerSpy,
    setSelectedLanguageZorgverlener: setZorgverlenerSpy,
    switchLanguage: switchTaal,
};

TalenSwitch.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button', { name: /talen wisselen/i });

    await new Promise((resolve) => setTimeout(resolve, 1000));
    await userEvent.click(button);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    expect(setZorgvragerSpy).toHaveBeenCalledWith({ id: 1, naam: 'Nederlands', code: 'NL' });
    expect(setZorgverlenerSpy).toHaveBeenCalledWith({ id: 2, naam: 'Engels', code: 'EN' });
}


