import CategorieElement from "./CategorieElement";

const uiSettings = {
    colorPallete: {
        "color-1": "#F5EEDC",
        "color-2": "#27548A",
        "color-3": "#183B4E",
        "color-4": "#DDA853",
    },
    font: {
        "fontName": "standard"
    }
}

const uiSettingsSecondary = {
    colorPallete: {
        "color-1": "#16C47F",
        "color-2": "#FFD65A",
        "color-3": "#FF9D23",
        "color-4": "#F93827",
    },
    font: {
        "fontName": "openDyslexic"
    }
}

function SettingsPreview() {
    return (
        <div className="container p-10 h-220">
            <div className="flex flex-col items-center justify-center h-full rounded-lg bg-[#F5EEDC] pb-10">
                <p className="text-2xl font-bold">Preview</p>
                <div className="pt-6"></div>
                <div className="bg-white px-46 py-28 rounded-lg">
                    <h1 className="font-openDyslexic h-20 text-center text-4xl font-bold">Standaard Benodigdheden</h1>
                    <CategorieElement key={1} 
                    object={{
                        id: 7,
                        naamTaal1: "Pizza",
                        naamTaal2: "Pizza",
                        imgSource: "../src/img/Pizza-Icon.png", 
                        laag: 1
                    }} 
                    id={7}
                    uiSettings={uiSettingsSecondary}/>
                </div>
            </div>
        </div>
    );
}

export default SettingsPreview