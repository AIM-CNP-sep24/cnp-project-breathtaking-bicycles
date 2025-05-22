import FontknopStandaard from './FontknopStandaardComponent.jsx'; 
import FontknopDyslectComponent from './FontknopDyslectComponent.jsx'; 


function FontInstelmenuComponent({ disabled, setFontKeuze }) {
    const fonts = [
        { key: 'standard', label: 'Standaard' },
        { key: 'font-OpenDyslexic', label: 'OpenDyslexic' }
    ];

    // Je hebt nu één generieke knopcomponent nodig, bijvoorbeeld FontknopComponent
    // Zorg dat deze bestaat en props onClick en disabled accepteert

    return (
        <div className="container p-20 h-100 flex flex-col items-center justify-center">
            <div className="flex flex-col h-full w-full rounded-lg bg-[#ffffff] items-center justify-center p-8">
                <h1 className="text-4xl font-bold mb-8 text-center">Font Keuze</h1>
                <div className="flex flex-row gap-16 items-center justify-center">
                    {fonts.map(font => (
                        <div key={font.key} className="flex flex-col items-center">
                            {/* Vervang hieronder FontknopComponent door jouw knopcomponent */}
                            {font.key === 'standard' ? (
                                <FontknopStandaard
                                    onClick={() => setFontKeuze(font.key)}
                                    disabled={disabled}
                                />
                            ) : (
                                <FontknopDyslectComponent
                                    onClick={() => setFontKeuze(font.key)}
                                    disabled={disabled}
                                />
                            )}

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FontInstelmenuComponent;