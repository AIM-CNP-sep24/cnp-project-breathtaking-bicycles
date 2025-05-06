import { Link } from "react-router"

function CategorieElement({object, link}){
        return (
            <Link to={"/benodigdheden/" + link}>
            <button className="mt-10 mx-15">
                <div className="w-[310px] h-[330px] text-2xl text-center inline-block rounded-[10px] bg-[#F5EEDC] cursor-pointer shadow-[0_20px_#e0d9c8]">
                    <h1>{object.naamTaal1}</h1>
                    <div className="line px-[10px] border-b-[2px] border-black"></div>
                    <h1>{object.naamTaal2}</h1>
                    <img className="pictogram ml-[10%] w-[80%] text-center select-none" src={object.imgSource}></img>
                </div>
                </button>
            </Link>
        )
    }

export default CategorieElement