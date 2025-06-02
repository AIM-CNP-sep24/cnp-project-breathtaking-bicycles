function KleurKnop({colorPalette,  geselecteerdPalet, setGeselecteerdPalet}) {
    return (
        <div className="flex flex-col">
            <button id={`Font${colorPalette.id}`} className="cursor-pointer" onClick={() => {setGeselecteerdPalet(colorPalette.id)}}>
                    <p hidden>{`Kleurpalet knop ${colorPalette.id}`}</p>
                    <div className={`bg-[${colorPalette.colorOne}] py-10 px-26 rounded-t-lg`}></div>
                    <div className={`bg-[${colorPalette.colorTwo}] py-4 px-26`}></div>
                    <div className={`bg-[${colorPalette.colorThree}] py-4 px-26`}></div>
                    <div className={`bg-[${colorPalette.colorFour}] py-4 px-26 rounded-b-lg`}></div>
            </button>
            {colorPalette.id == geselecteerdPalet ? <p className="text-center text-2xl font-bold">geselecteerd</p> : <></>}
        </div>
    )
}

export default KleurKnop;