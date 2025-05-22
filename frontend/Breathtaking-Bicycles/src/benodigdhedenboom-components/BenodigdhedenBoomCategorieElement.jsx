import { useState, useEffect } from "react";
import { Link } from "react-router"

function BenodigdhedenBoomCategorieElement({index, object, setToggleForeGround, setGeklikteCategorie, laagNr}){
    const [toggleSubcategorieKnop, setToggleSubcategorieKnop] = useState(false);
    useEffect(() => {
        console.log(laagNr);
        toggleSubcategorieKnopFunction(object);
    }, [object]);

    function toggleSubcategorieKnopFunction(object){
        if (laagNr == 2){
            setToggleSubcategorieKnop(false);
        } else {
            if (object.id == "null"){
                setToggleSubcategorieKnop(false);
            } else {
                setToggleSubcategorieKnop(true);
            }
        }

        
    }
    return(
    <>
        <div className="flex flex-col basis-1/2 pb-4">
            <button className="mt-10 mx-15 z-2" onClick={
                () => (
                        setToggleForeGround(true),
                        setGeklikteCategorie(index)
                    )}>
                <div className="w-[310px] h-[330px] text-2xl text-center inline-block rounded-[10px] bg-[#F5EEDC] cursor-pointer shadow-[0_20px_#E0D9C8]">
                    <h1 className="font-bold">{object.naamTaal1}</h1>
                    <div className="line px-[10px] border-b-[2px] border-black"></div>
                    <h1>{object.naamTaal2}</h1>
                    <img className="pictogram ml-[10%] w-[80%] text-center select-none"
                        src={object.imgsrc} alt="image">
                        </img>
                </div>
            </button>
                {toggleSubcategorieKnop ? (<div className="mt-10">
                <Link className="w-[50%] p-3 align-items space-around rounded-lg bg-[#F5EEDC] shadow-[0_10px_#E0D9C8] " to={"/boomstructuurbeheer/" + object.id}>
                    <button>Naar Subcategorie</button>
                </Link>
            </div>) : (<></>)}
        </div>
    </>
    )
}

export default BenodigdhedenBoomCategorieElement