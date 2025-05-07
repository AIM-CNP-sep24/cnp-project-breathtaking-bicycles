function BenodigdhedenPagina(){

    function CategorieElement({imgsrc, titelInTaal1, titelInTaal2, imageSize}){
        return (
            <button className="mt-10 mx-15">
                <div className="w-[310px] h-[330px] text-2xl text-center inline-block rounded-[10px] bg-[#F5EEDC] cursor-pointer shadow-[0_20px_#e0d9c8]">
                    <h1>{titelInTaal1}</h1>
                    <div className="line px-[10px] border-b-[2px] border-black"></div>
                    <h1>{titelInTaal2}</h1>
                    <img className="pictogram ml-[10%] w-[80%] text-center select-none" src={imgsrc}></img>
                </div>
                </button>
        )
    }

    return (
        <>
           <div className="grid-rows-3 text-center mx-5">
                <CategorieElement imgsrc="../src/img/Food-Drinks-Icon.png" titelInTaal1="Eten & Drinken" titelInTaal2="Food & Drinks" imageSize="289"/>
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