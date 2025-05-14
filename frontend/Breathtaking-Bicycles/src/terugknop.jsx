import React from 'react';

const TerugKnop = ({ onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer relative px-4 rounded-xl w-50 h-20 ${className}`}
            style={{ backgroundColor: '#DDA853'}}
        >
            <p className="text-white text-5xl font-bold text-center">Terug</p>
        </button>
    );
};

export default TerugKnop;