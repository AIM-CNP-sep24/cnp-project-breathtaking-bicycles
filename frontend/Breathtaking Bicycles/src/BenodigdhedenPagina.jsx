import { Link } from 'react-router'
import CategorieElement from './CategorieElement';

function BenodigdhedenPagina({parent}){
    var link;
    if (parent == "root"){
        link = "/"
        const benodigdhedenArray = haalBenodigdhedenOp(parent);
    } else {
        link = parent;
    }

    function haalBenodigdhedenOp(parent){
        if (parent == "root"){
            const array = [
                {
                    id: 1,
                    naamTaal1: "Eten & Drinken",
                    naamTaal2: "Food & Drinks",
                    imgSource: "../src/img/Food-Drinks-Icon.png" 
                },
                {
                    id: 2,
                    naamTaal1: "Toilet",
                    naamTaal2: "Toilet",
                    imgSource: "../src/img/Toilet-Icon.png"
                },
                {
                    id: 3,
                    naamTaal1: "Medicijnen",
                    naamTaal2: "Medicine",
                    imgSource: "../src/img/Medicijnen-Icon.png"
                },
                {
                    id: 4,
                    naamTaal1: "Slapen",
                    naamTaal2: "Sleeping",
                    imgSource: "../src/img/Slapen-Icon.png"
                },
                {
                    id: 5,
                    naamTaal1: "Badkamer",
                    naamTaal2: "Bathroom",
                    imgSource: "../src/img/Badkamer-Icon.png"
                },
                {
                    id: 6,
                    naamTaal1: "Naar buiten gaan",
                    naamTaal2: "Going outside",
                    imgSource: "../src/Buiten-Icon.png"
                }
            ]
            return array
        }
    }


    return (
        <>
           <div className="grid-rows-3 text-center mx-5">
            <Link to={link}><CategorieElement imgsrc="../src/img/Food-Drinks-Icon.png" titelInTaal1="Eten & Drinken" titelInTaal2="Food & Drinks" imageSize="289"/></Link>
                <CategorieElement imgsrc="../src/img/Food-Drinks-Icon.png" titelInTaal1="Badkamer" titelInTaal2="Bathroom"/>
                <CategorieElement imgsrc="../src/img/Food-Drinks-Icon.png" titelInTaal1="WC" titelInTaal2="Toilet"/>
                <CategorieElement imgsrc="../src/img/Food-Drinks-Icon.png" titelInTaal1="Naar buiten gaan" titelInTaal2="Going outside"/>
                <CategorieElement imgsrc="../src/img/Food-Drinks-Icon.png" titelInTaal1="Medicijnen" titelInTaal2="Medicine"/>
                <CategorieElement imgsrc="../src/img/Food-Drinks-Icon.png" titelInTaal1="Gaan Slapen" titelInTaal2="Going to sleep"/>
            </div>
        </>
    )
}

export default BenodigdhedenPagina;