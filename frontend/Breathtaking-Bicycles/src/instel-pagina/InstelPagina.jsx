import InstelContainer from "./InstelContainer";
import InstelPreview from "./preview/InstelPreview";

function InstelPagina({uiSettings}){
    return (
        <>
            <InstelContainer />
            <InstelPreview uiSettings={uiSettings}/>
        </>
    )
}

export default InstelPagina;