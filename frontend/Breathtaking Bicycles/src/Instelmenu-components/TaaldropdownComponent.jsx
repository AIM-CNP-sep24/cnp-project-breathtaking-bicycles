
   import { useState, useEffect, useRef } from 'react';

   function LanguageSelection({ label, value, onChange, options}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); //ref voor de dropdown

    const handleOptionClick = (option) => {
        onChange(option);
        setIsOpen(false); //sluit dropdown na selectie
    };

    // Sluit de dropdown bij een klik buiten het component
    useEffect(() => {

        //functie die controleert of de klik binnen of op de dropdown plaatsvindt
        const closeDropdown = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        //voeg een eventlistener toe aan het document dat luistert naar muisklikken
        document.addEventListener('mousedown', closeDropdown);

        //verwijder de eventlistener als het component ontkoppeld wordt
        return () => {
            document.removeEventListener('mousedown', closeDropdown);
        };
    }, []); //Zorgt ervoor dat de eventlistener alleen bij het laden van het component wordt uitgevoerd



        return (
            <div ref={dropdownRef} className="relative inline-block w-80">
                <h2 className="text-3xl font-bold mb-7">{label}</h2>
                <div
                    className="p-4 border border-gray-300 rounded-lg text-xl bg-grey shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {value || 'Selecteer een taal'}
                </div>

                {isOpen && ( //als isOpen true is, dan de dropdown laten renderen. als isOpen false is, dan de dropdown niet renderen
                    <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-md">
                        {options.map((option) => (
                            <li
                                key={option.id}
                                className="p-4 bg-gray-100 cursor-pointer"
                                onClick={() => handleOptionClick(option.naam)}
                            >
                                {option.naam}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }

    export default LanguageSelection;