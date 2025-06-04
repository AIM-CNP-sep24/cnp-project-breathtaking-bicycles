import InstelPreview from '../instel-pagina/preview/InstelPreview';
import { MemoryRouter, Routes, Route } from 'react-router';

export default {
    title: 'instel-pagina/preview/InstelPreview',
    component: InstelPreview,
    parameters: {
        layout: 'centered',
    },
};

const Template = ({ url = '/instelmenu', ...args }) => (
    <MemoryRouter initialEntries={[url]}>
        <Routes>
            <Route path="/instelmenu" element={ <div style={{width: '1000px'}}><InstelPreview {...args} /></div> } />
        </Routes>
    </MemoryRouter>
);

export const Default = Template.bind({});
    Default.args = { uiSettings: {
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
    }
};

export const PreviewOpenDyslexic = Template.bind({});
    PreviewOpenDyslexic.args = { uiSettings: {
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
        font: "font-OpenDyslexic"
    }
};

export const PreviewKleurenBlindPalet = Template.bind({});
    PreviewKleurenBlindPalet.args = { uiSettings: {
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
    }
};

export const PreviewKleurenBlindPaletDyslexischFont = Template.bind({});
    PreviewKleurenBlindPaletDyslexischFont.args = { uiSettings: {
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
        font: "font-OpenDyslexic"
    }
};
