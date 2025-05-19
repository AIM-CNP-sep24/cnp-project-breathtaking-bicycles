import React from 'react';

const Opslaanknop = ({ onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer relative px-4 rounded-xl w-60 h-20 ${className}`}
            style={{ backgroundColor: '#DDA853'}}
        >
            <p className="text-white text-5xl font-bold text-center">Opslaan</p>
        </button>
    );
};

export default Opslaanknop;