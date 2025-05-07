import { Link } from "react-router"
import { useState, useEffect } from "react";

function CategorieElement({object, id}){
    const [subCategorie, setSubCategorie] = useState("false");

    // Onderscheid maken tussen wel of geen subcategorie, staat nu nog hardcoded, aanpassen zodra DB beschikbaar is.
        useEffect(() => {
            if(id <= 6 && id != 2){
                setSubCategorie(true);
            } else if (id >= 7 || id == 2){
                setSubCategorie(false);
            }
        }, [id]);

        function handleClick(){
            alert(object.naamTaal1);
        }

        return (
            <>
            {subCategorie ? 
            // Als er een subcategorie is word de button een link naar de volgende pagina, als dat niet zo is wordt er een onclick toegevoegd om de actie te verwerken
            (
                <Link to={"/benodigdheden/" + id}>
                    <button className="mt-10 mx-15">
                        <div className="w-[310px] h-[330px] text-2xl text-center inline-block rounded-[10px] bg-[#F5EEDC] cursor-pointer shadow-[0_20px_#e0d9c8]">
                            <h1>{object.naamTaal1}</h1>
                            <div className="line px-[10px] border-b-[2px] border-black"></div>
                             <h1>{object.naamTaal2}</h1>
                            <img className="pictogram ml-[10%] w-[80%] text-center select-none" src={object.imgSource} alt="image"></img>
                        </div>
                    </button>
                </Link>
                    ) : (
                        <button className="mt-10 mx-15" onClick={handleClick}>
                        <div className="w-[310px] h-[330px] text-2xl text-center inline-block rounded-[10px] bg-[#F5EEDC] cursor-pointer shadow-[0_20px_#e0d9c8]">
                            <h1>{object.naamTaal1}</h1>
                            <div className="line px-[10px] border-b-[2px] border-black"></div>
                             <h1>{object.naamTaal2}</h1>
                            <img className="pictogram ml-[10%] w-[80%] text-center select-none" src={object.imgSource} alt="image"></img>
                        </div>
                    </button>
                    )
            }
            
            
            </>
        )
    }

export default CategorieElement