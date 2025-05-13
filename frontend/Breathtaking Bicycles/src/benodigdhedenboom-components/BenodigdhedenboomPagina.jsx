import { useEffect, useState } from "react";
import { useParams } from "react-router";
import BenodigdhedenBoomCategorieElement from "./BenodigdhedenBoomCategorieElement";
import { PhotoIcon } from "@heroicons/react/24/solid";

function BenodigdhedenboomPagina(){
    let title = "Boomstructuur Beheer";
    const [benodigdhedenArray, setBenodigdhedenArray] = useState([]);
    const {parentId} = useParams();
    useEffect(() => {
        setBenodigdhedenArray(haalBenodigdhedenOp(parentId))
    }, [parentId])

    function haalBenodigdhedenOp(parent){
        const array = [
            {
                id: 1,
                naamTaal1: "Eten & Drinken",
                naamTaal2: "Food & Drinks",
                imgSource: "../src/img/Food-Drinks-Icon.png", 
                laag: 1
            },
            {
                id: 2,
                naamTaal1: "Toilet",
                naamTaal2: "Toilet",
                imgSource: "../src/img/Toilet-Icon.png",
                laag: 1
            },
            {
                id: 3,
                naamTaal1: "Medicijnen",
                naamTaal2: "Medicine",
                imgSource: "../src/img/Medicijn-Icon.png",
                laag: 1
            },
            {
                id: 4,
                naamTaal1: "Slapen",
                naamTaal2: "Sleeping",
                imgSource: "../src/img/Slapen-Icon.png",
                laag: 1
            },
            {
                id: 5,
                naamTaal1: "Badkamer",
                naamTaal2: "Bathroom",
                imgSource: "../src/img/Badkamer-Icon.png",
                laag: 1
            },
            {
                id: 6,
                naamTaal1: "Naar buiten gaan",
                naamTaal2: "Going outside",
                imgSource: "../src/img/Buiten-Icon.png",
                laag: 1
            }
        ];
        return array
    }
    return(
    <>
        <h1 className="text-center text-4xl font-bold px-10">{title}</h1>
        <div className="grid-rows-3 text-center mx-5">
            {benodigdhedenArray.map(function(object, i) {
                return<>
                <BenodigdhedenBoomCategorieElement key={i} object={object} id={object.id.toString()}/>
                
                </>
            })}
        </div>
        <h2 className="mt-24 font-bold text-center text-3xl">Benodigdheid toevoegen</h2>
        <form className="text-center mb-0">
            <div className="grid grid-cols-2 mt-5">
                <div className="mx-[15%] w-[70%]">
                    <div classname="grid-rows-2 w-[50%]">
                        <label for="image">Pictogram</label>
                        <input className="px-3 py-1 block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" id="image" type="file"></input>
                        
                    </div> 
                </div>
                <div className="mx-[15%] w-[70%] grid grid-rows-2">
                    <label for="name">Naam:</label>
                    <input type="text" className="h-[34px] border-1 border-[#BABABA] rounded-[10px]"></input>
                </div>
                <div className="col-span-2 text-center">
                <input type="submit" value="Toevoegen" className="border-[#036400] border-2 bg-[#AAFFAA] text-[#036400] px-3 py-1 rounded-[10px] text-xl"></input>
                </div>
            </div>
         </form>
        <div className="text-center mb-10 grid grid-rows-3 w-[50%] mx-[25%]">
         <h2 className="mt-10 font-bold text-3xl">Benodigdheid verwijderen</h2>
         <form id="benodigdheden-verwijderen-form">
            <select className="w-50 border-1 rounded-[10px] py-2 px-4 mt-2">
                <option value="Pizza">Pizza</option>
                <option value="Eten en Drinken">Eten en Drinken</option>
            </select>
            <br />
            <input type="submit" value="Verwijderen" className="mt-5 border-[#FF0000] border-2 bg-[#FFAAAA] text-[#FF0000] px-3 py-1 rounded-[10px] text-xl"></input>
        </form>
         </div>
         </>
    )
}

export default BenodigdhedenboomPagina