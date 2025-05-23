import { useEffect, useRef, useState } from "react";
import InstelContainer from "./InstelContainer";
import InstelPreview from "./preview/InstelPreview";

function InstelPagina({uiSettings, colorPalettes}){
    const [geselecteerdPalet, setGeselecteerdPalet] = useState(1);
    const [previewSettings, setPreviewSettings] = useState({font: "standard", colorPalette: {}});

    useEffect(() => {
        if (colorPalettes.length > 0) {
            setPreviewSettings({font: "standard",
                colorPalette: colorPalettes[geselecteerdPalet -1]
            });
        }
    }, [colorPalettes, geselecteerdPalet]);
    
    return (
        <>
            <InstelContainer uiSettings={uiSettings}
            colorPalettes={colorPalettes}
            geselecteerdPalet={geselecteerdPalet}
            setGeselecteerdPalet={setGeselecteerdPalet}/>
            <InstelPreview uiSettings={previewSettings}/>
        </>
    )
}

export default InstelPagina;