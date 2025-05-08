import React from 'react';
import { MemoryRouter } from 'react-router';
import BenodigdhedenPagina from '../BenodigdhedenPagina.jsx';
import Terugknop from '../Terugknop.jsx';

export default {
    title: 'Components/BenodigdhedenPagina',
    component: BenodigdhedenPagina,
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={['/benodigdheden/root']}>
                <Story />
            </MemoryRouter>
        ),
    ],
};

const Template = (args) => <BenodigdhedenPagina {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Mock de parentId en andere props als nodig
};

export const TerugknopTest = () => {
    const mockOnClick = () => alert('Terugknop geklikt!');

    return (
        <div className="relative h-screen">
            <Terugknop onClick={mockOnClick} className="top-4 left-4" />
        </div>
    );
};