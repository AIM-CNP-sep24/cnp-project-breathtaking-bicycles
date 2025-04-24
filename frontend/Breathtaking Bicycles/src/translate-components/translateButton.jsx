import React from "react";


function TranslateButton () {
    const handleClick = () => {
        
    };
    return (
        <>
        <button onClick={handleClick} className="w-20 h-20 rounded-full bg-[#DDA853] hover:bg-[#d79833] flex items-center justify-center overflow-hidden"> 
            <img className="w-2/4 h-2/4 object-contain" src="../images/vector.png" alt="vertaal" />
        </button>
        </>
    );
} 

export default TranslateButton;