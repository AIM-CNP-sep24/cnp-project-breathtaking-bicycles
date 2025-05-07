import { Link } from 'react-router';
import { Bars3Icon, CurrencyRupeeIcon, ExclamationTriangleIcon, LanguageIcon, Squares2X2Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';

function Header ({ onClickBurger, onClickNoodknop}) {
    const [vertaalPagina, setVertaalPagina] = useState(false);
    function handleClick(){
        setVertaalPagina(!vertaalPagina);
    }

    return (
       <header className="bg-[#27548A] p-3">
        <div className="container mx-auto flex justify-between items-center">
            <button 
            onClick={onClickBurger}
            className="text-white cursor-pointer">
                <Bars3Icon className="h-20 w-17"/>
            </button>
            {vertaalPagina ? (
                <Link to="/benodigdheden/root">
                    <button className="bg-[#DDA853] rounded-[10px] cursor-pointer shadow-[0_10px_#BA8C43]" onClick={handleClick}>
                        <Squares2X2Icon className="h-20 w-40"/>
                    </button>
                </Link>
            ) : (
                <Link to="/vertalen">
                    <button className="bg-[#DDA853] rounded-[10px] cursor-pointer shadow-[0_10px_#BA8C43]" onClick={handleClick}>
                        <LanguageIcon className="h-20 w-40"/>
                    </button>
                </Link>
            )}
            <button
                onClick={onClickNoodknop}
                className="bg-red-600 text-white flex items-center gap-2 font-bold py-2 px-4 rounded-[10px] cursor-pointer">
                <ExclamationTriangleIcon className="h-14 w-14 text-white"/>
            </button>
            </div>
       </header>
    )
}

export default Header;

