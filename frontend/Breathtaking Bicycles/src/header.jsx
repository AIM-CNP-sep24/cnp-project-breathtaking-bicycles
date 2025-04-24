import React from 'react';
import { Bars3Icon, ExclamationTriangleIcon } from '@heroicons/react/24/solid'


const Header = ({ onClick }) => {
    return (
       <header className="bg-[#27548A] p-3">
        <div className="container mx-auto flex justify-between items-center">
            <button className="text-white">
                <Bars3Icon className="h-20 w-17"/>
            </button>

            <button
                onClick={onClick}
                className="bg-red-600 text-white flex items-center gap-2 font-bold py-2 px-4">
                <ExclamationTriangleIcon className="h-14 w-14 text-white"/>
            </button>
            </div>
       </header>
    );
};

export default Header;