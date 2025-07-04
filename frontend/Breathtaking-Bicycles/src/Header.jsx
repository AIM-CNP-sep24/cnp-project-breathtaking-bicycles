import { Link } from 'react-router';
import { Bars3Icon, ExclamationTriangleIcon} from '@heroicons/react/24/solid'
import { ChatBubbleLeftRightIcon, Squares2X2Icon  } from '@heroicons/react/24/outline';
import { useState, useRef } from 'react';

function Header({ onClickNoodknop, uiSettings }) {
    const [vertaalPagina, setVertaalPagina] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const dropdownHamburgerRef = useRef(null); //ref voor de dropdown van hamburgermenu

    function handleClick() {
        setVertaalPagina(!vertaalPagina);
    }

    return (
        //Backdrop wordt buiten header gerenderd, zodat dse header niet onder de backdrop valt
        <>
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-30" //Backdrop als hamburgermenu wordt geopend
                    onClick={() => setMenuOpen(false)} 
                /> 
            )}
            <header ref={dropdownHamburgerRef}
                className={`bg-[${uiSettings.colorPalette.colorThree}] p-3 w-full relative z-50`}
            >
                <div className="w-full flex justify-between items-center px-4">
                    <div className="relative">
                        <button
                            aria-label="menu dropdown"
                            onClick={() => {setMenuOpen((open) => !open)}}
                            className={`cursor-pointer transition-colors duration-200 p-2
                                ${menuOpen ? 'bg-white border-white' : `bg-[${uiSettings.colorPalette.colorThree}]`}
    `                       }
                        >
                            <Bars3Icon className={`h-20 w-17 transition-colors duration-200 ${menuOpen ? `text-[${uiSettings.colorPalette.colorThree}]` : 'text-white'}`}
                             />
                        </button>
                    </div>

                    {menuOpen && (
                        <div className={`absolute left-0 top-full w-full bg-[${uiSettings.colorPalette.colorThree}] rounded-b-lg shadow-lg z-40`}>
                            <div className="flex flex-row justify-center gap-20 py-4">
                                <Link to="/boomstructuurbeheer/0">
                                    <button
                                        className={`block px-8 py-4 text-2xl w-full text-center font-bold text-white bg-[${uiSettings.colorPalette.colorThree}] rounded-lg shadow-md`}
                                        onClick={() => {
                                            setMenuOpen(false);
                                        }}
                                    >
                                        Boomstructuur
                                    </button>
                                </Link>

                                <Link to="/instelmenu">
                                    <button
                                        className={`block px-8 py-4 text-2xl w-full text-center font-bold text-white bg-[${uiSettings}] rounded-lg shadow-md`}
                                        onClick={() => {
                                            setMenuOpen(false);
                                        }}
                                    >
                                        Instelmenu
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}

                    <div className="flex-1 flex justify-center">
                        {vertaalPagina ? (
                            <Link to="/benodigdheden/0">
                                <button
                                    className={`bg-[${uiSettings.colorPalette.colorFour}] rounded-[10px] cursor-pointer shadow-[0_10px_${uiSettings.colorPalette.colorFourShadow}]`}
                                    onClick={handleClick}
                                >
                                    <Squares2X2Icon className="h-20 w-40" />
                                </button>
                            </Link>

                        ) : (
                            <Link to="/vertalen">
                                <button
                                    className={`bg-[${uiSettings.colorPalette.colorFour}] rounded-[10px] cursor-pointer shadow-[0_10px_${uiSettings.colorPalette.colorFourShadow}]`}
                                    onClick={handleClick}
                                >
                                    <ChatBubbleLeftRightIcon className={`h-20 w-40 text-[${uiSettings.colorPalette.colorThree}]`} />
                                </button>
                            </Link>
                        )}
                    </div>

                    <div className="flex-none">
                        <button
                            onClick={onClickNoodknop}
                            className="bg-red-600 text-white flex items-center gap-2 font-bold py-2 px-4 rounded-[10px] cursor-pointer">
                            <ExclamationTriangleIcon className="h-14 w-14 text-white" />
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
