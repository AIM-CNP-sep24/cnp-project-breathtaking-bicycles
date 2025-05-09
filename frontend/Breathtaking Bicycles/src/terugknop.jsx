import React from 'react';

const TerugKnop = ({ onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`absolute px-4 rounded-xl pb-2 w-60 h-20 ${className}`}
            style={{ backgroundColor: '#DDA853'}}
        >
            <p className="text-white text-5xl font-bold text-center">Terug</p>
        </button>
    );
};

export default TerugKnop;