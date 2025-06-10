
import TaalInstelmenuComponent from "../instel-pagina/Instelmenu-components/TaalInstelmenuComponent.jsx";
import { action } from '@storybook/addon-actions';
import { MemoryRouter, Route, Routes } from 'react-router';
import { http, HttpResponse } from 'msw';
import { fn } from '@storybook/test'

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
TalenSwitch.args = {
    disabled: false,
    languages: [
        { id: 1, naam: 'Nederlands', code: 'NL' },
        { id: 2, naam: 'Engels', code: 'EN' },
    ],
    selectedLanguageZorgvrager: { id: 1, naam: 'Nederlands', code: 'NL' },
    selectedLanguageZorgverlener: { id: 2, naam: 'Engels', code: 'EN' },
    setSelectedLanguageZorgvrager.fn() => action('Zorgvrager taal veranderd naar: '),
};


