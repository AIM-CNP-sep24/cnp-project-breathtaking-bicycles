import { useState } from 'react';
import TaalInstelmenuComponent from "./Instelmenu-components/TaalInstelmenuComponent.jsx";
import KleurenpaletKeuzeComponent from "./Instelmenu-components/KleurenpaletKeuzeComponent.jsx";
import MeldingComponent from "./Instelmenu-components/MeldingComponent.jsx";
import Opslaanknop from './Instelmenu-components/Opslaanknop.jsx';
import Aanpasknop from './Instelmenu-components/Aanpasknop.jsx';

function InstelContainer({ colorPalettes, geselecteerdPalet, setGeselecteerdPalet, disabled }) {
    const [isAanpasbaar, setIsAanpasbaar] = useState(true); // state om bij te houden of de instellingen aanpasbaar zijn
    const [melding, setMelding] = useState(null); // state om de melding op te slaan

    const handleAanpassen = () => {
        setIsAanpasbaar(true); // stel in dat de instellingen weer aanpasbaar zijn
    }

    const handleOpslaan = async () => {
        try {
            setIsAanpasbaar(false); // stel in dat de instellingen niet meer aanpasbaar zijn
            //bij succes
            setMelding({ type: 'succes', tekst: 'Instellingen zijn succesvol opgeslagen!' });
        } catch (error) {
            //bij error
            setMelding({ type: 'error', tekst: 'Opslaan mislukt. Probeer het opnieuw.' });
        }
        setTimeout(() => setMelding(null), 3000); // melding verdwijnt na 5 seconden
    };

    return (
        <div className="container p-10 h-200">
            <div className="relative flex-col items-center h-[100%] rounded-lg bg-[#F5EEDC]">
                <div className="flex justify-end w-full mb-4 px-4 py-4">
                    {isAanpasbaar ? (
                        <Opslaanknop
                            onClick={handleOpslaan}
                            className="bg-[#DDA853] text-white text-5xl font-bold"
                            disabled={disabled}
                        />
                    ) : (
                        <Aanpasknop
                            onClick={handleAanpassen}
                            className="bg-[#27548A] text-white text-5xl font-bold rounded px-6 py-2"
                        />
                    )}
                </div>
                <MeldingComponent melding={melding}
                    disabled={!isAanpasbaar} />
                <TaalInstelmenuComponent
                    disabled={!isAanpasbaar} />
                <KleurenpaletKeuzeComponent
                    colorPalettes={colorPalettes}
                    geselecteerdPalet={geselecteerdPalet}
                    setGeselecteerdPalet={setGeselecteerdPalet}
                    disabled={!isAanpasbaar}

                />
            </div>
        </div>
    );
}

export default InstelContainer;
