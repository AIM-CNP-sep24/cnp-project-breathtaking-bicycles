import React from 'react';
import BenodigdhedenboomPagina from '../benodigdhedenboom-components/BenodigdhedenboomPagina';
import { MemoryRouter, Routes, Route } from 'react-router';
import { http, HttpResponse} from 'msw'

export default {
    title: 'BoomStructuurBeheerPagina',
    component: BenodigdhedenboomPagina,
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
                http.get('http://localhost:8080/alle-benodigdheden-ophalen', () => {
                    const body = [
                        {
                            "id": 1,
                            "naamTaal1": "Eten & Drinken",
                            "naamTaal2": "Food & Drinks",
                            "parentId": 0,
                            "laag": 0,
                            "rangnr": 1,
                            "imgsrc": "../src/img/Food-Drinks-Icon.png",
                        },
                        {
                            "id": 2,
                            "naamTaal1": "Toilet",
                            "naamTaal2": "Toilet",
                            "parentId": 0,
                            "laag": 0,
                            "rangnr": 2,
                            "imgsrc": "../src/img/Toilet-Icon.png",
                        },
                        {
                            "id": 3,
                            "naamTaal1": "Medicijnen",
                            "naamTaal2": "Medicine",
                            "parentId": 0,
                            "laag": 0,
                            "rangnr": 3,
                            "imgsrc": "../src/img/Medicijn-Icon.png",
                        },
                        {
                            "id": 4,
                            "naamTaal1": "Slapen",
                            "naamTaal2": "Sleeping",
                            "parentId": 0,
                            "laag": 0,
                            "rangnr": 4,
                            "imgsrc": "../src/img/Slapen-Icon.png",
                        },
                        {
                            "id": 5,
                            "naamTaal1": "Badkamer",
                            "naamTaal2": "Bathroom",
                            "parentId": 0,
                            "laag": 0,
                            "rangnr": 5,
                            "imgsrc": "../src/img/Badkamer-Icon.png",
                        },
                        {
                            "id": 6,
                            "naamTaal1": "Naar buiten gaan",
                            "naamTaal2": "Going outside",
                            "parentId": 0,
                            "laag": 0,
                            "rangnr": 6,
                            "imgsrc": "../src/img/Buiten-Icon.png",
                        },
                        {
                            "id": 7,
                            "naamTaal1": "Pizza",
                            "naamTaal2": "Pizza",
                            "parentId": 1,
                            "laag": 1,
                            "rangnr": 1,
                            "imgsrc": "../src/img/Pizza-Icon.png",
                        },
                        {
                            "id": 8,
                            "naamTaal1": "Water",
                            "naamTaal2": "Water",
                            "parentId": 1,
                            "laag": 1,
                            "rangnr": 2,
                            "imgsrc": "../src/img/Water-Icon.png",
                        },
                        {
                            "id": 9,
                            "naamTaal1": "Brood",
                            "naamTaal2": "Bread",
                            "parentId": 1,
                            "laag": 1,
                            "rangnr": 3,
                            "imgsrc": "../src/img/Brood-Icon.png",
                        },
                        {
                            "id": 10,
                            "naamTaal1": "Thee",
                            "naamTaal2": "Tea",
                            "parentId": 1,
                            "laag": 1,
                            "rangnr": 4,
                            "imgsrc": "../src/img/Thee-Icon.png",
                        },
                        {
                            "id": 11,
                            "naamTaal1": "Koffie",
                            "naamTaal2": "Coffee",
                            "parentId": 1,
                            "laag": 1,
                            "rangnr": 5,
                            "imgsrc": "../src/img/Koffie-Icon.png",
                        },
                        {
                            "id": 12,
                            "naamTaal1": "Fruit",
                            "naamTaal2": "Fruit",
                            "parentId": 1,
                            "laag": 1,
                            "rangnr": 6,
                            "imgsrc": "../src/img/Appel-Icon.png",
                        }]
                    return new window.Response(
                        JSON.stringify(body),
                        {status: 200, headers: { 'Content-Type': 'application/json' }}
                    )
                }),
                http.get('http://localhost:8080/parent-benodigdheid-ophalen', () => {
                    return({
                        "id": 1,
                        "naamTaal1": "Eten & Drinken",
                        "naamTaal2": "Food & Drinks",
                        "parentId": 0,
                        "laag": 0,
                        "rangnr": 1,
                        "imgsrc": "../src/img/Food-Drinks-Icon.png"
                    });
                })
            ]
        }
    }
}

const Template = ({ url = '/boomstructuurbeheer/0', ...args}) => (
    <MemoryRouter initialEntries={[url]}>
        <Routes>
            <Route path="/boomstructuurbeheer/:parentId" element={<BenodigdhedenboomPagina {...args} />} />
        </Routes>
    </MemoryRouter>
);

export const StandaardWeergave = Template.bind({});
StandaardWeergave.args = {
    url: '/boomstructuurbeheer/0',
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
}