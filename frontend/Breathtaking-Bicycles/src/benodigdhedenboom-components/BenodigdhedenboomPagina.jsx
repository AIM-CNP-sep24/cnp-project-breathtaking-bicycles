import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import BenodigdhedenBoomCategorieElement from "./BenodigdhedenBoomCategorieElement";
import SelectieMenu from "./SelectieMenu";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";


function BenodigdhedenboomPagina(){
    const [geselecteerdeCategorieenArray, setGeselecteerdeCategorieenArray] = useState([null, null, null, null, null, null]);
    const [benodigdhedenArray, setBenodigdhedenArray] = useState([]);
    const [alleBenodigdhedenArray, setAlleBenodigdhedenArray] = useState([]);
    const [parentBenodigdheid, setParentBenodigdheid] = useState([]);
    const [geklikteCategorie, setGeklikteCategorie] = useState(0);
    const [laagNr, setLaagNr] = useState(0);
    const [terugKnopId, setTerugKnopId] = useState(0);
    const [zoekTekst, setZoekTekst] = useState("");
    const [title, setTitle] = useState("");
    const [toggleForeground, setToggleForeGround] = useState(false);
    const [toggleTerugKnop, setToggleTerugKnop] = useState(false);
    const {parentId} = useParams();
    const taal1 = "NL";
    const taal2 = "EN";

    useEffect(() => {
        haalHuidigeBenodigdhedenOp(parentId, taal1, taal2);
        haalAlleBenodigdhedenOp(taal1, taal2);
        haalParentBenodigdheidOp(parentId);
    }, [parentId, laagNr])

    async function haalParentBenodigdheidOp(id){
        const url = "http://localhost:8080/parent-benodigdheid-ophalen";
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "id": id,
                    "taal1": taal1,
                    "taal2": taal2
                }
            });
            if (response.ok){
                const data = await response.json();
                setParentBenodigdheid(data);
                setLaagNr(data[0].laagnr);
                setTerugKnopId(data[0].id);
                toggleTerugKnopFunction(data);
            }
        } catch (error) {

        }
    }

    async function haalAlleBenodigdhedenOp(taal1, taal2){
        const url = "http://localhost:8080/alle-benodigdheden-ophalen"
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "taal1": taal1,
                    "taal2": taal2
                }
            });
            if (response.ok){
                const data = await response.json();
                setAlleBenodigdhedenArray(data);
                for (let index = 0; index < data.length; index++){
                    if (data[index].id == parentId){
                        setTitle(data[index].naamTaal1);
                    } else if (parentId == 0){
                        setTitle("Standaard Benodigdheden");
                    }
                }
            }
        } catch (error){
            console.log(error);
        }
    }

    async function haalHuidigeBenodigdhedenOp(parentId, taal1, taal2){
        const url = "http://localhost:8080/benodigdheden-ophalen";
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "parentId": parentId,
                    "taal1": taal1,
                    "taal2": taal2
                }},
            );

            if(response.ok){
                const data = await response.json();
                if (data.length === 0){
                    const tempArray = [];
                    for (let index = 0; index < 6; index++){
                        tempArray[index] = VulMetLeegElement();
                    }
                    setBenodigdhedenArray(tempArray);
                } else if (data.length < 6){
                    const tempArray = ["null", "null", "null", "null", "null", "null"];
                    setBenodigdhedenArray(data);
                    data.map((benodigdheid, i) => {
                        tempArray[i] = benodigdheid;
                    })
                    
                    
                    for (let index = 0; index < 6; index++){
                        if (tempArray[index] == "null"){
                            tempArray[index] = VulMetLeegElement();
                        }
                    }
                    setBenodigdhedenArray(tempArray);
                } else {
                    setBenodigdhedenArray(data);
                }
            }
        } catch (error){
            console.log(error);
        }
    }

    async function stuurBenodigdhedenWijziging(benodigdheid){    
                const url = "http://localhost:8080/boomstructuur-wijzigen";
                try {    
                const response = await fetch (url, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify({"parentId": parentId, "laag": laagNr, "rangnr": benodigdheid.rangnr, "id": benodigdheid.id})
                });
                if (response.ok){
                    console.log("Succes");
                }
            } catch (error) {

            }
    // }
    }

    function VulMetLeegElement(){
                const emptyData = {
                    "id": "null",
                    "naamTaal1": "Selecteer een Benodigdheid",
                    "imgsrc": "../src/img/Empty-Data-Icon.png"
                }
                return emptyData;
    }

    function opslaanClick(){
        benodigdhedenArray.map((benodigdheid) => {
            stuurBenodigdhedenWijziging(benodigdheid);
        })
    }
    
    function toggleTerugKnopFunction(parentBenodigdheid){
        if (parentId === 0){
            setToggleTerugKnop(false);
        } else {
            if (parentBenodigdheid.id != -1){
                setToggleTerugKnop(true);
            } else {
                setToggleTerugKnop(false);
            }
        }
    }
    return(
    <>

        {toggleForeground ? (<>
            <div className="fixed inset:0 bg-black/50 flex justify-center z-50 w-[100%] h-[100%]" >
                <SelectieMenu geklikteCategorie={geklikteCategorie} setToggleForeGround={setToggleForeGround} alleBenodigdheden={alleBenodigdhedenArray} huidigeBenodigdheden={benodigdhedenArray} setBenodigdheden={setBenodigdhedenArray} setGeselecteerdeCategorieenArray={setGeselecteerdeCategorieenArray} geselecteerdeCategorieenArray={geselecteerdeCategorieenArray} zoekTekst={zoekTekst} setZoekTekst={setZoekTekst} vulMetLeegElement={VulMetLeegElement}/>
            </div>
        </>) : (<></>)}

        {toggleTerugKnop ? ( 
            <>
                <div className="flex flex-row">
                    <div className="w-1/4">
                        <Link to={"/boomstructuurbeheer/" + terugKnopId}>
                            <button className="w-25 ml-3 mt-3 rounded-lg bg-[#DDA853] p-3"><ArrowUturnLeftIcon></ArrowUturnLeftIcon></button>
                        </Link>
                    </div>
                    <h1 className=" w-1/2 text-center text-4xl font-bold px-10 mt-5">{title}</h1>
                </div>
            </>
        ) : (
            <h1 className="text-center text-4xl font-bold px-10 mt-5 h-25">{title}</h1>
            )
        }
        <div className="grid grid-cols-2 text-center mx-5">
            {benodigdhedenArray.map((benodigdheid, i) => {
                return<>
                <BenodigdhedenBoomCategorieElement index={i} benodigdheid={benodigdheid} benodigdheden={alleBenodigdhedenArray} setToggleForeGround={setToggleForeGround} setGeklikteCategorie={setGeklikteCategorie} laag={laagNr}/>
                </>
            })}
        </div>
        <div>
            <button className="bg-[#DDA853] cursor-pointer p-3 my-10 text-center w-[20%] rounded-lg mx-[40%]" onClick={opslaanClick}>Opslaan</button>
        </div>
        {/* <h2 className="mt-24 font-bold text-center text-3xl">Benodigdheid toevoegen</h2>
        <form className="text-center mb-0">
            <div className="grid grid-cols-2 mt-5">
                <div className="mx-[15%] w-[70%]">
                    <div className="grid-rows-2 w-[50%]">
                        <label htmlFor="image">Pictogram</label>
                        <input className="px-3 py-1 block w-full text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" id="image" type="file"></input>
                        
                    </div> 
                </div>
                <div className="mx-[15%] w-[70%] grid grid-rows-2">
                    <label htmlFor="name">Naam:</label>
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
        </form> */}
         {/* </div> */}
         </>
    )
}

export default BenodigdhedenboomPagina