
   import { useState } from 'react';

   function LanguageSelection({ label, value, onChange, options}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        onChange(option);
        setIsOpen(false); //sluit dropdown na selectie
        };

        return (
            <div className="relative inline-block w-full">
                <h2 className="text-4xl font-bold mb-4">{label}</h2>
                <div
                    className="p-4 border border-gray-300 rounded-lg text-xl bg-white shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-black"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {value || 'Selecteer een taal'}
                </div>

                {isOpen && (
                    <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-md">
                        {options.map((option) => (
                            <li
                                key={option}
                                className="p-4 hover:bg-gray-100 cursor-pointer"
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