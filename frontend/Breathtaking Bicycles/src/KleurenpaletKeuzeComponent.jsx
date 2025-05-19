import { useState } from 'react';
import KleurknoppenComponent from './Instelmenu-components/KleurknoppenComponent';

const kleurPaletten = [
  { naam: "standaard", img: "/images/kleurenpalet-standaard.png"},
  { naam: "kleurenblinden", img: "/images/kleurenpalet-kleurenblindheid.png"}
];

// TODOO Hele applicatie verandert van kleurenpalet
function KleurenpaletKeuzeComponent({ disabled }) {
  const [geselecteerdPalet, setGeselecteerdPalet] = useState(''); //state om het geselecteerde kleurenpalet op te slaan

  return (
    <div className="container p-20 h-100 justify-start">
      <div className="flex flex-col h-[100%] rounded-lg bg-[#ffffff]">
        <h1 className="text-4xl font-bold mb-4 text-center">Kleurenpalet Keuze</h1>
        <div className="flex justify-between w-full px-20 gap-8">
          {kleurPaletten.map((palet) => (
            <KleurknoppenComponent
              key={palet.naam}
              kleur={geselecteerdPalet}
              setKleur={() => setGeselecteerdPalet(palet.naam)}
              palet={palet}
              disabled={disabled}
            />
          ))}
        </div>
        {/* Voeg hier de logica toe voor het kiezen van een kleurenpalet */}
      </div>
    </div>
  );
}

export default KleurenpaletKeuzeComponent;