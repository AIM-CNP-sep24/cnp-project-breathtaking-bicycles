function TranslateButton({ onClick }) {
    return (
        <button 
            onClick={onClick} 
            className="w-20 h-20 ml-auto mr-auto cursor-pointer rounded-full bg-[#DDA853] hover:bg-[#d79833] flex items-center justify-center overflow-hidden"
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
