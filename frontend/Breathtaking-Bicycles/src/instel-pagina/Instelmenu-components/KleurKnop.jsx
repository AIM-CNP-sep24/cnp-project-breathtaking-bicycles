function KleurKnop({colorPalette,  geselecteerdPalet, setGeselecteerdPalet, disabled}) {
    return (
        <div className="flex flex-col">
            <button className={`cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    onClick={() => {setGeselecteerdPalet(colorPalette.id)}}
                    disabled={disabled}>
                    <p hidden>Kleurpalet knop</p>
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