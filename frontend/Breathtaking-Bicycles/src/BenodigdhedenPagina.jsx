import { Link, Route, Routes, useParams} from 'react-router'
import { useState, useEffect } from 'react';
import CategorieElement from './CategorieElement';
import TerugKnop from './TerugKnop.jsx';

function BenodigdhedenPagina(){
    const [titel, setTitel] = useState("");
    const [benodigdhedenArray, setBenodigdhedenArray] = useState([]);
    const {parentId} = useParams();
    const taal1 = "NL";
    const taal2 = "EN";
    // Haal het ID uit de URL om zo de volgende benodigdheden te genereren. 
    useEffect(() => {
        haalBenodigdhedenOp(parentId, taal1, taal2);
        haalTitelOp(parentId, taal1, taal2);
        }, [parentId, taal1, taal2]
    );

    async function haalBenodigdhedenOp(parentId, taal1, taal2){
        try {
            const response = await fetch("http://localhost:8080/benodigdheden-ophalen", {
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
                setBenodigdhedenArray(data);
            }
        } catch (error){
            console.log(error);
        }
    }

    async function haalTitelOp(parentId, taal1, taal2){
        try {
            const response = await fetch("http://localhost:8080/benodigdheid-titel-ophalen", {
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
                            />
                        </div>
                        <div className=" w-[100%]">
                            <h1 className="text-center text-4xl font-bold mt-8">{titel}</h1>
                        </div>
                    </div>
                );
            }
            return <h1 className="text-center text-4xl font-bold px-10">{titel}</h1>;
        })()}
            

            <div className="grid-rows-3 text-center mx-5">
                {benodigdhedenArray.map(function(object, i) {
                    return <>
                        <CategorieElement key={i} object={object} id={object.id.toString()}/>
                    </>
                })}
            </div>
        </>
    )
}

export default BenodigdhedenPagina;