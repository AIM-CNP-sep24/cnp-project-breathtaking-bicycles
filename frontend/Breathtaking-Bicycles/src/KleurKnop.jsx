function KleurKnop({colorPalette}) {
    console.log(colorPalette)
    return (
        <button>
            <div className="rounded-lg">
                <p hidden>Kleurpalet knop</p>
                <div className={`bg-[${colorPalette.colorOne}] py-10 px-26 rounded-t-lg`}></div>
                <div className={`bg-[${colorPalette.colorTwo}] py-4 px-26`}></div>
                <div className={`bg-[${colorPalette.colorThree}] py-4 px-26`}></div>
                <div className={`bg-[${colorPalette.colorFour}] py-4 px-26 rounded-b-lg`}></div>
            </div>
        </button>
    )
}

export default KleurKnop;