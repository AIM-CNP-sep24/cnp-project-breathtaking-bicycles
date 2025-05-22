function KleurknoppenComponent({ kleur, setKleur, palet, disabled }) {
  return (
    <button
      style={{ 
        border: kleur === palet.naam ? '4px solid #27548A' : '2px solid #ccc', // randkleur wordt aangepast op basis van de geselecteerde kleur
        borderRadius: 12, 
        padding: 12, 
        boxShadow: '0 8px 12px 0 rgba(0,0,0,0.18)', // schaduw onder de knop
        transition: 'box-shadow 0.2s, border 0.2s',
      }}
      onClick={setKleur}
      disabled={disabled}
      className="flex flex-col items-center focus:outline-none hover:shadow-lg hover:border-[#DDA853]"
    >
      <img src={palet.img} alt={palet.naam + " palet"} style={{ width: 200, height: 60, marginBottom: 8 }} />
      <div className="text-lg font-semibold text-[#222] drop-shadow-sm">{palet.naam}</div>
    </button>
  );
}

export default KleurknoppenComponent;