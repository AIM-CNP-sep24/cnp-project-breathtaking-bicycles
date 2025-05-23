

function KleurknoppenComponent({ kleur, setKleur, palet }) {
  const isSelected = kleur === palet.naam;
  return (
    <button>
      <div
        className={`flex flex-col items-center justify-center bg-white hover:bg-[#DDA853] border rounded-lg shadow-md p-4 cursor-pointer focus:outline-none shadow-lg 
        ${isSelected ? 'border-4 border-[#7a827c]' : 'border border-gray-300'}`}
        onClick={setKleur}
      >
        <img
          className={`w-50 h-20 rounded-lg ${isSelected ? 'border-4 border-[#7a827c]' : 'border border-gray-300'}`}
          src={palet.img}
          alt={palet.naam + " palet"} />
        {isSelected ? 'Geselecteerd' : 'Selecteer'}
        <p className="text-lg font-semibold text-[#222] drop-shadow-sm">
          {palet.naam}
        </p>
      </div>
    </button>
  );
}

export default KleurknoppenComponent;