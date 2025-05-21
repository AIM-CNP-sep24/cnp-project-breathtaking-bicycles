import { useState } from 'react';
import KleurknoppenComponent from './Instelmenu-components/KleurknoppenComponent';

const kleurPaletten = [
  { id: "1", color1: "#F5EEDC", color1Shadow: "#e0d9c8", color2: "#27548A", color2Shadow: "", color3: "#183B4E", color3Shadow: "", color4: "#DDA853", color4Shadow: "#BA8C43", img: "/images/kleurenpalet-standaard.png"},
  { id: "2", color1: "", color1Shadow: "", color2: "", color2Shadow: "", color3: "", color3Shadow: "", color4: "", color4Shadow: "", img: "/images/kleurenpalet-kleurenblindheid.png"}
];

// TODOO Hele applicatie verandert van kleurenpalet
function KleurenpaletKeuzeComponent() {
  const [geselecteerdPalet, setGeselecteerdPalet] = useState(''); //state om het geselecteerde kleurenpalet op te slaan

  return (
    <div className="container p-15 h-100 justify-start">
      <div className="flex flex-col h-[100%] rounded-lg bg-[#ffffff]">
        <h1 className="text-4xl font-bold mb-4 text-center">Kleurenpalet Keuze</h1>
        <div className="flex justify-between w-full px-20 gap-8">
          {kleurPaletten.map((palet) => (
            <KleurknoppenComponent
              key={palet.naam}
              kleur={geselecteerdPalet}
              setKleur={() => setGeselecteerdPalet(palet.naam)}
              palet={palet}
            />
          ))}
        </div>
        {/* Voeg hier de logica toe voor het kiezen van een kleurenpalet */}
      </div>
    </div>
  );
}

export default KleurenpaletKeuzeComponent;