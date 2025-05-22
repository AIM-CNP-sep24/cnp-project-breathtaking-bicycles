import InstelContainer from "./InstelContainer";
import InstelPreview from "./preview/InstelPreview";
import { useState } from "react";


function InstelPagina({uiSettings}){
    const [fontkeuze, setFontKeuze] = useState("standard");

    return (
        <>
            <InstelContainer setFontKeuze={setFontKeuze} />
            <InstelPreview uiSettings={uiSettings}/>
        </>
    )
}

export default InstelPagina;