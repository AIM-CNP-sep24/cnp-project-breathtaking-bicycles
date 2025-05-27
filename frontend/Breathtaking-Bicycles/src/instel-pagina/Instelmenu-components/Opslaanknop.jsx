import React from 'react';

function Opslaanknop ({ onClick, className }){
    return (
        <button
            onClick={onClick}
            className={"cursor-pointer px-4 rounded-xl bg-[#DDA853] w-60 h-20"}
        >
            <p className="text-white text-5xl font-bold text-center">Opslaan</p>
        </button>
    );
};

export default Opslaanknop;

