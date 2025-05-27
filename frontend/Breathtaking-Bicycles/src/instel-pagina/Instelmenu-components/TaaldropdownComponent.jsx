
import { useState, useRef } from 'react';

function LanguageSelection({ label, value, onChange, options, disabled }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); //ref voor de dropdown

    const handleOptionClick = (option) => {
        if (disabled) return; //als disabled true is, dan geen actie uitvoeren
        onChange(option);
        setIsOpen(false); //sluit dropdown na selectie
    };

    return (
        <div ref={dropdownRef}
            className="relative inline-block w-80"
            tabIndex={0}
            onBlur={() => setIsOpen(false)}
        >
            <h2 className="text-3xl font-bold mb-7">{label}</h2>
            <div
                className={`p-4 border border-gray-300 rounded-lg text-xl bg-grey shadow-md focus:outline-none focus:ring-2 focus:ring-black ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {value || 'Selecteer een taal'}
            </div>

            {isOpen && !disabled && ( //als isOpen true is, dan de dropdown laten renderen. als isOpen false is, dan de dropdown niet renderen
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