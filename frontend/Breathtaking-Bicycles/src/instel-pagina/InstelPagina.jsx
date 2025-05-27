import { useEffect, useState } from "react";
import InstelContainer from "./InstelContainer";
import InstelPreview from "./preview/InstelPreview";

function InstelPagina({uiSettings, colorPalettes, fonts}) {
    const [geselecteerdPalet, setGeselecteerdPalet] = useState(1);
    const [selectedFont, setSelectedFont] = useState("standard");
    const [previewSettings, setPreviewSettings] = useState({font: "standard",
        colorPalette: colorPalettes[0]
    });
    
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
            <InstelPreview uiSettings={uiSettings}/>
        </>
    )
}

export default InstelPagina;