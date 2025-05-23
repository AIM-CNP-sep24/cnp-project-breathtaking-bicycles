import { Link } from "react-router"
import { useState, useEffect } from "react";

function CategorieElement({benodigdheid, id, uiSettings}){
    const [subCategorie, setSubCategorie] = useState("false");
console.log(benodigdheid);

        useEffect(() => {
            
            haalChildsOp(id);
        }, [id]);

        async function haalChildsOp(id){
            try {
                const response = await fetch("http://localhost:8080/benodigdheid-childs-ophalen", {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                        "parentId": id
                    }}
                    ,);

                    if(response.ok){
                        const data = await response.json();
                        setSubCategorie(data);
                    }
                } catch (error) {
                    console.log(error);
                }           

        }

        function handleClick(){
            alert(benodigdheid.naamTaal1);
        }

        return (
            <>
            {subCategorie ? 
            // Als er een subcategorie is word de button een link naar de volgende pagina, als dat niet zo is wordt er een onclick toegevoegd om de actie te verwerken
            (
                    <Link to={"/benodigdheden/" + id}>
                        <button className={`${uiSettings.font} mt-10 mx-15`}>
                            <div className={`w-[310px] h-[330px] text-2xl text-center inline-block rounded-[10px] bg-[${uiSettings.colorPalette.colorOne}] cursor-pointer shadow-[0_20px_${uiSettings.colorPalette.colorOneShadow}]`}>
                                <h1 className="font-bold">{benodigdheid.naamTaal1}</h1>
                                <div className="line px-[10px] border-b-[2px] border-black"></div>
                                <h1>{benodigdheid.naamTaal2}</h1>
                                <img
                                    className="pictogram ml-[10%] w-[80%] text-center select-none" 
                                    src={benodigdheid.imgsrc} alt={benodigdheid.naamTaal1}>
                                </img>
                            </div>
                        </button>
                    </Link>
                    ) : (
                    <button className={`${uiSettings.font} mt-10 mx-15`} onClick={handleClick}>
                        <div className={`w-[310px] h-[330px] text-2xl text-center inline-block rounded-[10px] bg-[${uiSettings.colorPalette.colorOne}] cursor-pointer shadow-[0_20px_${uiSettings.colorPalette.colorOneShadow}]`}>
                            <h1 className="font-bold">{benodigdheid.naamTaal1}</h1>
                            <div className="line px-[10px] border-b-[2px] border-black"></div>
                            <h1>{benodigdheid.naamTaal2}</h1>
                            <img 
                                className="pictogram ml-[10%] w-[80%] text-center select-none" 
                                src={benodigdheid.imgsrc} alt="image">
                            </img>
                        </div>
                    </button>
                    )
            } 
            </>
        )
    }

export default CategorieElement