function TranslateButton({ onClick, uiSettings }) {
    return (
        <button 
            onClick={onClick} 
            className={`w-20 h-20 ml-auto mr-auto cursor-pointer rounded-full bg-[${uiSettings.colorPalette.colorFour}] 
            hover:bg-[${uiSettings.colorPalette.colorFourShadow}] flex items-center justify-center overflow-hidden`}
        > 
            <img 
                className="w-1/2 h-1/2 object-contain" 
                src="/images/vector.png" 
                alt="vertaal" 
            />
        </button>
    );
}

export default TranslateButton;
