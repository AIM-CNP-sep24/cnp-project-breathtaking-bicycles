import { useParams} from 'react-router'
import { useState, useEffect } from 'react';
import CategorieElement from './CategorieElement';
import TerugKnop from './TerugKnop';

function BenodigdhedenPagina({uiSettings, selectedLanguageZorgverlener, selectedLanguageZorgvrager}){
    const [titel, setTitel] = useState("");
    const [benodigdhedenArray, setBenodigdhedenArray] = useState([]);
    const {parentId} = useParams();

    // Haal het ID uit de URL om zo de volgende benodigdheden te genereren. 
    useEffect(() => {
        console.log(selectedLanguageZorgverlener);
        haalBenodigdhedenOp(parentId, selectedLanguageZorgvrager, selectedLanguageZorgverlener);
        haalTitelOp(parentId, selectedLanguageZorgvrager, selectedLanguageZorgverlener);
        }, [parentId]
    );

    async function haalBenodigdhedenOp(parentId, selectedLanguageZorgvrager, selectedLanguageZorgverlener){
        try {
            const response = await fetch("http://localhost:8080/benodigdheden-ophalen", {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "parentId": parentId,
                    "taal1": selectedLanguageZorgvrager.code,
                    "taal2": selectedLanguageZorgverlener.code
                }},
            );

            if(response.ok){
                const data = await response.json();
                setBenodigdhedenArray(data);
            }
        } catch (error){
            console.log(error);
        }
    }

    async function haalTitelOp(parentId, selectedLanguageZorgvrager, selectedLanguageZorgverlener){
        try {
            const response = await fetch("http://localhost:8080/benodigdheid-titel-ophalen", {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "parentId": parentId,
                    "taal1": selectedLanguageZorgvrager.code,
                    "taal2": selectedLanguageZorgverlener.code
                }}, 
            );

            if(response.ok){
                const data = await response.json();
                data.map((r) => {
                    setTitel(r.taal1);
                })
            }
        } catch (error){
            console.log(error);
        }
    }

    return (
        <>
            {(() => {
            if (parentId != 0) {
                return (
                    <div className="grid grid-cols-3 w-[100%]">
                        <div className="w-[100%] mt-2">
                            <TerugKnop
                                onClick={() => window.history.back()}
                                className="left-4"
                                uiSettings={uiSettings}
                            />
                        </div>
                        <div className=" w-[100%]">
                            <h1 className={`${uiSettings.font} w-full text-center text-4xl font-bold mt-8`}>{titel}</h1>
                        </div>
                    </div>
                );
            }
            return <h1 className={`${uiSettings.font} w-full text-center text-4xl font-bold px-10`}>{titel}</h1>;
        })()}
            
            <div className="grid-rows-3 text-center mx-5">
                {benodigdhedenArray.map((benodigdheid, i) => {
                    return (<CategorieElement key={i} benodigdheid={benodigdheid} id={benodigdheid.id.toString()} uiSettings={uiSettings}/>)
                })}
            </div>
        </>
    )
}

export default BenodigdhedenPagina;