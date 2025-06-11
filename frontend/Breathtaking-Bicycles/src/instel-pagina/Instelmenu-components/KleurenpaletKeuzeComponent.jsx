import KleurKnop from './KleurKnop';

function KleurenpaletKeuzeComponent({colorPalettes, selectedPalet, setSelectedPalet, disabled}) {
    return (
        <div className="container p-10 justify-start">
            <div className="flex flex-col h-[100%] rounded-lg bg-white p-6">
                <h1 className="text-4xl font-bold pb-8 text-center">Kleurenpalet Keuze</h1>
                <div className="flex justify-evenly">
                    {colorPalettes.map((colorPalette) => (
                        <KleurKnop key={colorPalette.id} colorPalette={colorPalette} 
                        selectedPalet={selectedPalet}
                        setSelectedPalet={setSelectedPalet}
                        disabled={disabled} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default KleurenpaletKeuzeComponent;