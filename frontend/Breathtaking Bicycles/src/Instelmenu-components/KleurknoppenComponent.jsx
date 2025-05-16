

function KleurknoppenComponent({ kleur, setKleur }) {
  const kleurPaletten = [
    { naam: "standaard", hex: "#FF0000" },
    { naam: "kleurenblinden", hex: "#00FF00" }
  ];

  return (
    <div className="kleurknoppen">
      {kleurPaletten.map((kleurOptie) => (
        <button
          key={kleurOptie.naam}
          style={{ backgroundColor: kleurOptie.hex }}
          onClick={() => setKleur(kleurOptie.naam)}
        >
          {kleurOptie.naam}
        </button>
      ))}
    </div>
  );
}

export default KleurknoppenComponent;