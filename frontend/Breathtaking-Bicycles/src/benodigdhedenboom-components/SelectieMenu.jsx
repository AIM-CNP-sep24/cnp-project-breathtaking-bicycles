import { useEffect } from "react";

function SelectieMenu({setToggleForeGround, alleBenodigdheden, setAlleBenodigdheden, huidigeBenodigdheden, setGeselecteerdeCategorieenArray, geselecteerdeCategorieenArray, geklikteCategorie}){
    useEffect(() => {
        setGeselecteerdeCategorieenArray(huidigeBenodigdheden);
    }, [])
    console.log(alleBenodigdheden);
    return(
        <div className="bg-white h-[60%] w-[40%] text-3xl mt-20 rounded-[20px] overflow:scroll">
            <ul className="opacity-100">
                {alleBenodigdheden.map(function(object, index) {
                    return <>
                        <li className="cursor-pointer"><button className="border-1 p-3 cursor-pointer w-[100%]" onClick={
                            () => {
                                    const tempArray = geselecteerdeCategorieenArray;

                                    tempArray[geklikteCategorie] = object;
                                    tempArray[geklikteCategorie].rangnr = geklikteCategorie;
                                    setGeselecteerdeCategorieenArray(tempArray)
                                    console.log(geselecteerdeCategorieenArray);
                                    setToggleForeGround(false);
                                }
                            }>{object.naamTaal1}</button></li>
                    </>
})}
            </ul>
        </div>
    )
}

export default SelectieMenu;