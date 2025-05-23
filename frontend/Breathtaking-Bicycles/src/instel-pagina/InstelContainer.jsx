
import { useState } from "react";
import TaalInstelmenuComponent from "./Instelmenu-components/TaalInstelmenuComponent.jsx";
import KleurenpaletKeuzeComponent from "./Instelmenu-components/KleurenpaletKeuzeComponent.jsx";

 function InstelContainer({colorPalettes, geselecteerdPalet, setGeselecteerdPalet}) {
import Opslaanknop from "./Instelmenu-components/OpslaanknopComponent.jsx";
import Aanpasknop from "./Instelmenu-components/AanpasknopComponent.jsx";
import FontInstelmenuComponent from "./Instelmenu-components/FontInstelmenuComponent.jsx";

 function InstelContainer({ disabled, setFontKeuze }) {
    const [isAanpasbaar, setIsAanpasbaar] = useState(true); // state om bij te houden of de instellingen aanpasbaar zijn

    const handleOpslaan = () => {
        setIsAanpasbaar(false); // stel in dat de instellingen niet meer aanpasbaar zijn
    }

    const handleAanpassen = () => {
        setIsAanpasbaar(true); // stel in dat de instellingen weer aanpasbaar zijn
    }

    return (
        <div className="container p-10 h-200">
            <div className="flex flex-col items-center h-[100%] rounded-lg bg-[#F5EEDC]">
                <TaalInstelmenuComponent />
                <KleurenpaletKeuzeComponent colorPalettes={colorPalettes} 
                    geselecteerdPalet={geselecteerdPalet}
                    setGeselecteerdPalet={setGeselecteerdPalet}
                />
        <div className="container p-10 h-300">
            <div className="flex flex-col items-center h-[100%] rounded-lg bg-[#F5EEDC] relative w-full">
                <div className="flex justify-end w-full mb-4 px-4 py-4">
                    {isAanpasbaar ? (
                    <Opslaanknop 
                        onClick={handleOpslaan}
                        className="bg-[#DDA853] text-white text-5xl font-bold"
                    />
                    ) : (
                        <Aanpasknop
                            onClick={handleAanpassen}
                            className="bg-[#27548A] text-white text-5xl font-bold rounded px-6 py-2"
                            />
                    )}
                </div>
                <TaalInstelmenuComponent disabled={!isAanpasbaar} />
                <FontInstelmenuComponent setFontKeuze={setFontKeuze} disabled={!isAanpasbaar} />
            </div>
        </div>
    );
}

export default InstelContainer;
