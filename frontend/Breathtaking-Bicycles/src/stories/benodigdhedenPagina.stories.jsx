import React from 'react';
import BenodigdhedenPagina from '../BenodigdhedenPagina';
import { MemoryRouter, Routes, Route } from 'react-router';

export default {
    title: 'BenodigdhedenPagina',
    component: BenodigdhedenPagina,
};

const Template = ({ url = '/benodigdheden/root', ...args }) => (
    <MemoryRouter initialEntries={[url]}>
        <Routes>
            <Route path="/benodigdheden/:parentId" element={<BenodigdhedenPagina {...args} />} />
        </Routes>
    </MemoryRouter>
);

export const StandaardWeergave = Template.bind({});
StandaardWeergave.args = { url: '/benodigdheden/root' };

export const EtenEnDrinkenWeergave = Template.bind({});
EtenEnDrinkenWeergave.args = { url: '/benodigdheden/1' };

