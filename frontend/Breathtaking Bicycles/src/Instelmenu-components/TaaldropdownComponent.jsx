
   import { useState, useEffect, useRef } from 'react';

   function LanguageSelection({ label, value, onChange, options}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); //ref voor de dropdown

    const handleOptionClick = (option) => {
        onChange(option);
        setIsOpen(false); //sluit dropdown na selectie
    };

    // Sluit de dropdown bij een klik buiten de component
    useEffect(() => {
        const closeDropdown = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', closeDropdown);
        return () => {
            document.removeEventListener('mousedown', closeDropdown);
        };
    }, []);



        return (
            <div ref={dropdownRef} className="relative inline-block w-80">
                <h2 className="text-3xl font-bold mb-7">{label}</h2>
                <div
                    className="p-4 border border-gray-300 rounded-lg text-xl bg-grey shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {value || 'Selecteer een taal'}
                </div>

                {isOpen && ( //als isOpen true is, dan render de dropdown. als het false is, dan render de dropdown niet
                    <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-md">
                        {options.map((option) => (
                            <li
                                key={option}
                                className="p-4 bg-gray-100 cursor-pointer"
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }

    export default LanguageSelection;