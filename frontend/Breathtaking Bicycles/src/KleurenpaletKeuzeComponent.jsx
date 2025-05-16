import KleurknoppenComponent from './Instelmenu-components/KleurknoppenComponent';

function kleurenpaletKeuzeComponent() {
  return (
    <div className="container p-20 h-100 justify-start">
      <div className="flex flex-col h-[100%] rounded-lg bg-[#ffffff]">
        <h1 className="text-4xl font-bold mb-4 text-center">Kleurenpalet Keuze</h1>
        <div className="flex justify-between w-full px-10">
          <KleurknoppenComponent />
        </div>
        {/* Voeg hier de logica toe voor het kiezen van een kleurenpalet */}
      </div>
    </div>
  );
}

export default kleurenpaletKeuzeComponent;