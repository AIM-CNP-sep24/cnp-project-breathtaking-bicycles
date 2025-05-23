import { useEffect, useState } from "react";
import InstelContainer from "./InstelContainer";
import InstelPreview from "./preview/InstelPreview";

function InstelPagina({uiSettings,  colorPalettes}){
    const [geselecteerdPalet, setGeselecteerdPalet] = useState(1);
    const [previewSettings, setPreviewSettings] = useState({font: "standard",
        colorPalette: colorPalettes[0]
    });

    // useEffect(() => {
    //     setPreviewSettings({font: "standard",
    //         colorPalette: colorPalettes[0]
    //     });
    // }, []);
    
    return (
        <>
            <InstelContainer uiSettings={uiSettings}
            colorPalettes={colorPalettes}
            geselecteerdPalet={geselecteerdPalet}
            setGeselecteerdPalet={setGeselecteerdPalet}/>
            <InstelPreview uiSettings={uiSettings}/>
        </>
    )
}

export default InstelPagina;