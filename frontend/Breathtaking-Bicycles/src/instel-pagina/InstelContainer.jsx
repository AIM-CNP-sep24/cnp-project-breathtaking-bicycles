import TaalInstelmenuComponent from "./Instelmenu-components/TaalInstelmenuComponent.jsx";
import KleurenpaletKeuzeComponent from "./Instelmenu-components/KleurenpaletKeuzeComponent.jsx";
import FontInstelmenuComponent from "./Instelmenu-components/FontInstelmenuComponent.jsx";
import Opslaanknop from "./Instelmenu-components/Opslaanknop.jsx";
import Aanpasknop from "./Instelmenu-components/Aanpasknop.jsx";
import MeldingComponent from "./Instelmenu-components/Meldingcomponent.jsx";
import { useState } from 'react';

 function InstelContainer({isAanpasbaar, 
    setIsAanpasbaar, 
    colorPalettes, 
    selectedLanguageZorgvrager, setSelectedLanguageZorgvrager, 
    selectedLanguageZorgverlener, setSelectedLanguageZorgverlener,
    selectedPalet, setSelectedPalet, 
    fonts, 
    setSelectedFont, selectedFont, 
    disabled}) {
     const [melding, setMelding] = useState(null); // state om de melding op te slaan

     function handleAanpassen () {
        setIsAanpasbaar(true); // stel in dat de instellingen weer aanpasbaar zijn
    }

    async function handleOpslaan() {
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
        <div className="container p-10 h-300">
            <div className="flex flex-col items-center h-[100%] rounded-lg bg-[#F5EEDC]">
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
                            className="bg-[#27549A] text-white text-5xl font-bold rounded px-6 py-2"
                        />
                    )}
                </div>
                <MeldingComponent 
                    melding={melding}
                    disabled={!isAanpasbaar} />
                <TaalInstelmenuComponent 
                    selectedLanguageZorgvrager={selectedLanguageZorgvrager}
                    setSelectedLanguageZorgvrager={setSelectedLanguageZorgvrager}
                    selectedLanguageZorgverlener={selectedLanguageZorgverlener}
                    setSelectedLanguageZorgverlener={setSelectedLanguageZorgverlener}
                    disabled={!isAanpasbaar} />
                <KleurenpaletKeuzeComponent
                    colorPalettes={colorPalettes} 
                    selectedPalet={selectedPalet}
                    setSelectedPalet={setSelectedPalet}
                    disabled={!isAanpasbaar}
                />
                <FontInstelmenuComponent
                    fonts={fonts}
                    setSelectedFont={setSelectedFont}
                    selectedFont={selectedFont} 
                    disabled={!isAanpasbaar}/>
            </div>
        </div>
    );
}

export default InstelContainer;
