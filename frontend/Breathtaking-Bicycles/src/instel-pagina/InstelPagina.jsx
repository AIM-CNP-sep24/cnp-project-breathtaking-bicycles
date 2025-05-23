import { useState } from "react";
import InstelContainer from "./InstelContainer";
import InstelPreview from "./preview/InstelPreview";
import { useState } from "react";


function InstelPagina({uiSettings,  colorPalettes}){
    const [geselecteerdPalet, setGeselecteerdPalet] = useState(1);
    
function InstelPagina({uiSettings}){
    const [fontkeuze, setFontKeuze] = useState("standard");

    return (
        <>
            <InstelContainer uiSettings={uiSettings}
            colorPalettes={colorPalettes}
            geselecteerdPalet={geselecteerdPalet}
            setGeselecteerdPalet={setGeselecteerdPalet}/>
            <InstelContainer setFontKeuze={setFontKeuze} />
            <InstelPreview uiSettings={uiSettings}/>
        </>
    )
}

export default InstelPagina;