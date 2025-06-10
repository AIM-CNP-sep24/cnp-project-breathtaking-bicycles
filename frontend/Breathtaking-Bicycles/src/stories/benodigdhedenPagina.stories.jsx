import React from 'react';
import BenodigdhedenPagina from '../BenodigdhedenPagina';
import { MemoryRouter, Routes, Route } from 'react-router';
import { http, HttpResponse } from 'msw'

export default {
    title: 'BenodigdhedenPagina',
    component: BenodigdhedenPagina,
    parameters: {
        msw: {
            handlers: [
                http.get('http://localhost:8080/benodigdheden-ophalen', () => {
                    return HttpResponse.json([
                            {id: 1, naamTaal1: 'Eten en Drinken', naamTaal2: 'Food And Drinks', laag: 0, rangnr: 1, parentId: 0, imgsrc: "../src/img/Food-Drinks-Icon.png"},
                            {id: 2, naamTaal1: 'Toilet', naamTaal2: 'Toilet', laag: 0, rangnr: 2, parentId: 0, imgsrc: "../src/img/Toilet-Icon.png"},
                            {id: 3, naamTaal1: 'Medicijn', naamTaal2: 'Medicine', laag: 0, rangnr: 3, parentId: 0, imgsrc: "../src/img/Medicijn-Icon.png"},
                            {id: 4, naamTaal1: 'Slapen', naamTaal2: 'Sleeping', laag: 0, rangnr: 4, parentId: 0, imgsrc: "../src/img/Slapen-Icon.png"},
                            {id: 5, naamTaal1: 'Badkamer', naamTaal2: 'Bathroom', laag: 0, rangnr: 5, parentId: 0, imgsrc: "../src/img/Badkamer-Icon.png"},
                            {id: 6, naamTaal1: 'Naar buiten gaan', naamTaal2: 'Going Outside', laag: 0, rangnr: 6, parentId: 0, imgsrc: "../src/img/Buiten-Icon.png"}
                        ])
                }),
                http.get('http://localhost:8080/benodigdheid-titel-ophalen', () => {
                    return HttpResponse.json([
                        {id: 0, taal1: "Standaard Benodigdheden", taal2: "Standard requirements"}
                    ])
                }),
                http.get('http://localhost:8080/benodigdheid-childs-ophalen', () => {
                    return HttpResponse.json(false);
                }),
            ]
        }
    }
};

const Template = ({ url = '/benodigdheden/0', ...args }) => (
    <MemoryRouter initialEntries={[url]}>
        <Routes>
            <Route path="/benodigdheden/:parentId" element={<BenodigdhedenPagina {...args} />} />
        </Routes>
    </MemoryRouter>
);


export const StandaardWeergave = Template.bind({});
StandaardWeergave.args = { 
    url: '/benodigdheden/0',
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
    selectedLanguageZorgverlener: {id: 1, naam: 'Nederlands', code: 'NL'},
    selectedLanguageZorgvrager: {id: 2, naam: 'Engels', code: 'EN'}
 };


