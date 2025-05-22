import React from 'react';

const Aanpasknop = ({ onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer relative px-4 rounded-xl w-80 h-20 ${className}`}
            style={{ backgroundColor: '#DDA853'}}
        >
            <p className="text-white text-5xl font-bold text-center">Aanpassen</p>
        </button>
    );
};

export default Aanpasknop;