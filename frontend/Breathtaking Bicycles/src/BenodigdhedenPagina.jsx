import { Link, Route, Routes, useParams} from 'react-router'
import { useState, useEffect } from 'react';
import CategorieElement from './CategorieElement';
import TerugKnop from './TerugKnop';

function BenodigdhedenPagina(){
    const [titel, setTitel] = useState("");
    const [benodigdhedenArray, setBenodigdhedenArray] = useState([]);
    const {parentId} = useParams();
    // Haal het ID uit de URL om zo de volgende benodigdheden te genereren. 
    useEffect(() => {
        setBenodigdhedenArray(haalBenodigdhedenOp(parentId));
        }, [parentId]
    );


    function haalBenodigdhedenOp(parent){
        if (parent == "root"){
            setTitel("Standaard Benodigdheden");
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
        } else if (parent == "1") {
            setTitel("Eten & Drinken");
            const array = [{
                id: 7,
                naamTaal1: "Pizza",
                naamTaal2: "Pizza",
                imgSource: "../src/img/Pizza-Icon.png", 
                laag: 1
            },
            {
                id: 8,
                naamTaal1: "Water",
                naamTaal2: "Water",
                imgSource: "../src/img/Water-Icon.png",
                laag: 1
            },
            {
                id: 9,
                naamTaal1: "Brood",
                naamTaal2: "Bread",
                imgSource: "../src/img/Brood-Icon.png",
                laag: 1
            },
            {
                id: 10,
                naamTaal1: "Thee",
                naamTaal2: "Tea",
                imgSource: "../src/img/Thee-Icon.png",
                laag: 1
            },
            {
                id: 11,
                naamTaal1: "Koffie",
                naamTaal2: "Coffee",
                imgSource: "../src/img/Koffie-Icon.png",
                laag: 1
            },
            {
                id: 12,
                naamTaal1: "Fruit",
                naamTaal2: "Fruit",
                imgSource: "../src/img/Appel-Icon.png",
                laag: 1
            }
        ];
        return array;
        } else if (parent == "2") {
            setTitel("Toilet");
            const array = [{
                id: 1,
                naamTaal1: "Eten",
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
                imgSource: "../src/img/Medicijnen-Icon.png",
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
                naamTaal1: "Bad",
                naamTaal2: "Bathroom",
                imgSource: "../src/img/Badkamer-Icon.png",
                laag: 1
            },
            {
                id: 6,
                naamTaal1: "Naar buiten gaan",
                naamTaal2: "Going outside",
                imgSource: "../src/Buiten-Icon.png",
                laag: 1
            }
        ];
        return array;
        }
    }

    return (
        <>
            {(() => {
            if (parentId !== "root") {
                return (
                    <div className="grid-cols-[1fr,2fr]">
                        <TerugKnop
                            onClick={() => window.history.back()}
                            className="top-4 left-4"
                        />
                        <h1 className="text-center text-4xl font-bold">{titel}</h1>
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