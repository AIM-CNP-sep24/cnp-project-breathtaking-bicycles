import TaalInstelmenuComponent from "./Instelmenu-components/TaalInstelmenuComponent.jsx";
import KleurenpaletKeuzeComponent from "./Instelmenu-components/KleurenpaletKeuzeComponent.jsx";
import FontInstelmenuComponent from "./Instelmenu-components/FontInstelmenuComponent.jsx";

 function InstelContainer({colorPalettes, geselecteerdPalet, setGeselecteerdPalet, fonts, setSelectedFont, selectedFont}) {

    return (
        <div className="container p-10 h-300">
            <div className="flex flex-col items-center h-[100%] rounded-lg bg-[#F5EEDC]">
                <TaalInstelmenuComponent />
                <KleurenpaletKeuzeComponent
                    colorPalettes={colorPalettes} 
                    geselecteerdPalet={geselecteerdPalet}
                    setGeselecteerdPalet={setGeselecteerdPalet}
                />
                <FontInstelmenuComponent
                    fonts={fonts}
                    setSelectedFont={setSelectedFont}
                    selectedFont={selectedFont} />
            </div>
        </div>
    );
}

export default InstelContainer;
