import { XCircleIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

function SelectieMenu({setToggleForeGround, alleBenodigdheden, huidigeBenodigdheden, setGeselecteerdeCategorieenArray, geselecteerdeCategorieenArray, geklikteCategorie, zoekTekst, setZoekTekst, vulMetLeegElement}){
    useEffect(() => {
        setGeselecteerdeCategorieenArray(huidigeBenodigdheden);
    }, [])
    return(
        <>
        <div className="bg-white h-[900px] w-[40%] text-3xl mt-20 rounded-t-lg">
            <input type="text" className="w-[100%] px-5 py-5 bg-[#FFF] rounded-t-lg outline-0 border-b-1" placeholder="Zoek..." value={zoekTekst} onChange={(e) => setZoekTekst(e.target.value)} onClick={(e) => e.stopPropagation()}></input>
            <ul className="opacity-100 overflow-auto h-[800px]">
                <li key={0} className="cursor-pointer">
                    <button className="p-3 w-[100%]" onClick={() => {
                        const tempArray = geselecteerdeCategorieenArray;
                        tempArray[geklikteCategorie] = vulMetLeegElement();
                        tempArray[geklikteCategorie].rangnr = geklikteCategorie;
                        setGeselecteerdeCategorieenArray(tempArray);
                        setToggleForeGround(false);
                    }}>
                        <div className="flex flex-row align-items">
                            <XCircleIcon className="w-[25%] fill-[#27548A]"></XCircleIcon>
                            <h1 className="w-[75%] content-center">Verwijderen</h1>
                        </div>
                    </button>
                </li>
                {
                    alleBenodigdheden.filter((benodigdheid) => 
                    benodigdheid.naamTaal1.toUpperCase().includes(zoekTekst.toUpperCase())).map((benodigdheid)=>(
                        
                        <li key={benodigdheid.id} className="cursor-pointer">
                            <button className="p-3 cursor-pointer w-[100%]" onClick={
                            () => {
                                    const tempArray = geselecteerdeCategorieenArray;
                                    tempArray[geklikteCategorie] = benodigdheid;
                                    tempArray[geklikteCategorie].rangnr = geklikteCategorie;
                                    setGeselecteerdeCategorieenArray(tempArray)
                                    setToggleForeGround(false);
                                }
                            }>
                                <div className="flex flex-row align-items">
                                    <img className="w-[25%]" src={benodigdheid.imgsrc} alt={benodigdheid.naamTaal1 + "-image"}></img>
                                    <h1 className="w-[75%] content-center">{benodigdheid.naamTaal1}</h1>
                                </div>
                            </button>
                        </li>
                    ))}
            </ul>
            <button onClick={() => {setToggleForeGround(false)}} className="w-[100%] p-4 rounded-b-lg border-t-1 bg-[#FFF] cursor-pointer">Annuleren</button>

            </div>
        </>
    )
}

export default SelectieMenu;