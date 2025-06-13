import { useEffect, useState } from "react";
import InstelContainer from "./InstelContainer";
import InstelPreview from "./preview/InstelPreview";

function InstelPagina({selectedFont, 
    setSelectedFont, 
    selectedPalet, 
    setSelectedPalet, 
    uiSettings, 
    setUiSettings, 
    colorPalettes,
    languages,
    fonts,
    selectedLanguageZorgverlener,
    setSelectedLanguageZorgverlener,
    selectedLanguageZorgvrager,
    setSelectedLanguageZorgvrager}){
    const [previewSettings, setPreviewSettings] = useState({font: "standard", colorPalette: {}});
    const [isAanpasbaar, setIsAanpasbaar] = useState(true); // state om bij te houden of de instellingen aanpasbaar zijn

    useEffect(() => {
        if (colorPalettes.length > 0) {
            setPreviewSettings({font: selectedFont,
                colorPalette: colorPalettes[selectedPalet -1]
            });
        }
    }, [colorPalettes, selectedPalet, selectedFont]);

    useEffect(() => {
        if(!isAanpasbaar) {
            setUiSettings({colorPalette: colorPalettes[selectedPalet -1],
                font: selectedFont
            })
        }
    }, [isAanpasbaar])
    
    return (
        <>
            <InstelContainer
            isAanpasbaar={isAanpasbaar}
            setIsAanpasbaar={setIsAanpasbaar}
            uiSettings={uiSettings}
            setUiSettings={setUiSettings}
            colorPalettes={colorPalettes}
            selectedPalet={selectedPalet}
            setSelectedPalet={setSelectedPalet}
            languages={languages}
            fonts={fonts}
            selectedFont={selectedFont}
            setSelectedFont={setSelectedFont}
            selectedLanguageZorgvrager={selectedLanguageZorgvrager}
            setSelectedLanguageZorgvrager={setSelectedLanguageZorgvrager}
            selectedLanguageZorgverlener={selectedLanguageZorgverlener}
            setSelectedLanguageZorgverlener={setSelectedLanguageZorgverlener}
            disabled={disabled}/>
            <InstelPreview uiSettings={previewSettings}/>
        </>
    )
}

export default InstelPagina;