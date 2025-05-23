import CategorieElement from "../../CategorieElement";

// Gebruik dit element als houvast voor het maken van je eigen elementen!!!!

function InstelPreview({uiSettings}) {
    return (
        <div className="container p-10 h-220">
            <div className="flex flex-col items-center justify-center h-full rounded-lg bg-[#F5EEDC] pb-10">
                <p className="text-2xl font-bold">Preview</p>
                <div className="pt-6"></div>
                <div className="bg-white p-28 rounded-lg flex flex-col items-center justify-center">
                    <h1 className={`${uiSettings.font} text-center text-4xl font-bold`}>Standaard Benodigdheden</h1>
                    <CategorieElement key={1} 
                    benodigdheid={{
                        id: 7,
                        naamTaal1: "Pizza",
                        naamTaal2: "Pizza",
                        imgsrc: "../src/img/Pizza-Icon.png", 
                        laag: 1
                    }}
                    id={7}
                    uiSettings={uiSettings}/>
                </div>
            </div>
        </div>
    );
}

export default InstelPreview;