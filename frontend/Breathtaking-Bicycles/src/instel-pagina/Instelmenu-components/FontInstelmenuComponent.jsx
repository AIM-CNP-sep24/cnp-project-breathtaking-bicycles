import StandardFontKnop from './StandardFontknop.jsx';
import DyslexicFontKnop from './DyslexicFontknop.jsx';


function FontInstelmenuComponent({ disabled, setSelectedFont, selectedFont }) {
    return (
        <div className="container p-10 h-100 flex flex-col items-center justify-center">
            <div className="flex flex-col h-full w-full rounded-lg bg-[#ffffff] items-center justify-center p-8">
                <h1 className="text-4xl font-bold mb-8 text-center">Font Keuze</h1>
                <div className="flex flex-row gap-16 items-center justify-center">
                            <StandardFontKnop
                                onClick={() => 
                                     setSelectedFont('standard')
                                }
                                disabled={disabled}
                                selected={selectedFont === 'standard'}
                            />
                            <DyslexicFontKnop
                                onClick={() => 
                                    setSelectedFont('font-OpenDyslexic')
                                }
                                disabled={disabled}
                                selected={selectedFont === 'font-OpenDyslexic'}
                            />
                    </div>
            </div>
        </div>
    );
}

export default FontInstelmenuComponent;