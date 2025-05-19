import React, { useState } from "react";
import TaalInstelmenuComponent from "./TaalInstelmenuComponent.jsx";
import KleurenpaletKeuzeComponent from "./KleurenpaletKeuzeComponent.jsx";
import Opslaanknop from "./Instelmenu-components/OpslaanknopComponent.jsx";
import Aanpasknop from "./Instelmenu-components/AanpasknopComponent.jsx";

 function InstelContainer({ disabled }) {
    const [isAanpasbaar, setIsAanpasbaar] = useState(true); // state om bij te houden of de instellingen aanpasbaar zijn

    const handleOpslaan = () => {
        setIsAanpasbaar(false); // stel in dat de instellingen niet meer aanpasbaar zijn
    }

    const handleAanpassen = () => {
        setIsAanpasbaar(true); // stel in dat de instellingen weer aanpasbaar zijn
    }

    return (
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
                <KleurenpaletKeuzeComponent disabled={!isAanpasbaar}/>
            </div>
        </div>
    );
}

export default InstelContainer;