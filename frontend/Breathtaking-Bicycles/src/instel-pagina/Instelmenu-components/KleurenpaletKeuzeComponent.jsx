import KleurKnop from './KleurKnop';

function KleurenpaletKeuzeComponent({colorPalettes, geselecteerdPalet, setGeselecteerdPalet, disabled}) {
    return (
        <div className="container p-15 justify-start"> 
            <div className="flex flex-col h-[100%] rounded-lg bg-white p-6">
                <h1 className="text-4xl font-bold pb-8 text-center">Kleurenpalet Keuze</h1>
                <div className="flex justify-evenly">
                    {colorPalettes.map((colorPalette) => (
                        <KleurKnop colorPalette={colorPalette} 
                        geselecteerdPalet={geselecteerdPalet}
                        setGeselecteerdPalet={setGeselecteerdPalet}
                        disabled={disabled} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default KleurenpaletKeuzeComponent;