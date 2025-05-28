import { useEffect, useRef, useState } from "react";
import InstelContainer from "./InstelContainer";
import InstelPreview from "./preview/InstelPreview";

function InstelPagina({uiSettings, colorPalettes, fonts}){
    const [geselecteerdPalet, setGeselecteerdPalet] = useState(1);
    const [previewSettings, setPreviewSettings] = useState({font: "standard", colorPalette: {}});
    const [selectedFont, setSelectedFont] = useState("standard");

    useEffect(() => {
        if (colorPalettes.length > 0) {
            setPreviewSettings({font: selectedFont,
                colorPalette: colorPalettes[geselecteerdPalet -1]
            });
        }
    }, [colorPalettes, geselecteerdPalet, selectedFont]);
    
    return (
        <>
            <InstelContainer
            uiSettings={uiSettings}
            colorPalettes={colorPalettes}
            geselecteerdPalet={geselecteerdPalet}
            setGeselecteerdPalet={setGeselecteerdPalet}
            fonts={fonts}
            selectedFont={selectedFont}
            setSelectedFont={setSelectedFont}/>
            <InstelPreview uiSettings={previewSettings}/>
        </>
    )
}

export default InstelPagina;