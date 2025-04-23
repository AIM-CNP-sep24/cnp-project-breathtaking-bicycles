import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

const TerugKnop = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="px-4 rounded-xl pb-2 w-60 h-20"
            style={{ backgroundColor: '#DDA853'}}

        >
            <p className="text-white text-5xl font-bold text-center">Terug</p>
            
        </button>
    );
};


export default TerugKnop;