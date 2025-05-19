function BenodigdhedenBoomCategorieElement({object, id}){

    function handleClick(){

        alert(object.naamTaal1)
    }
    return(
    <>
        <button className="mt-10 mx-15" onClick={handleClick}>
            <div className="w-[310px] h-[330px] text-2xl text-center inline-block rounded-[10px] bg-[#F5EEDC] cursor-pointer shadow-[0_20px_#E0D9C8]">
                <h1 className="font-bold">{object.naamTaal1}</h1>
                <div className="line px-[10px] border-b-[2px] border-black"></div>
                <h1>{object.naamTaal2}</h1>
                <img className="pictogram ml-[10%] w-[80%] text-center select-none"
                    src={object.imgSource} alt="image">
                    </img>
            </div>
        </button>
    </>
    )
}

export default BenodigdhedenBoomCategorieElement