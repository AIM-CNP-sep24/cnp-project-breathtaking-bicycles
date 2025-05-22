import { useState } from 'react';
import TaalInstelmenuComponent from "./TaalInstelmenuComponent.jsx";
import KleurenpaletKeuzeComponent from "./KleurenpaletKeuzeComponent.jsx";
import MeldingComponent from "./Instelmenu-components/MeldingComponent.jsx";

function InstelContainer() {
    const [melding, setMelding] = useState(null); // state om de melding op te slaan

    const handleOpslaan = async () => {
        try {
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
            <div className="flex flex-col items-center h-[100%] rounded-lg bg-[#F5EEDC]">
                <MeldingComponent melding={melding} />
                <TaalInstelmenuComponent />
                <KleurenpaletKeuzeComponent />
                <button onClick={handleOpslaan}>Opslaan</button>
            </div>
        </div>
    );
}

export default InstelContainer;