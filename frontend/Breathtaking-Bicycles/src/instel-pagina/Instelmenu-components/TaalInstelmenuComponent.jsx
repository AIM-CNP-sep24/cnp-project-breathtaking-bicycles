import { useState, useEffect } from 'react';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline';
import LanguageSelection from './TaaldropdownComponent';
import { fetchLanguages } from '../taalService.js'; // Importeer de fetchLanguages functie

/* voorstel Fritz

- functie fetchLanguages() ergens anders neerzetten. 
bijv. in een nieuwe file genaamd taalService.js
- deze functie exporteren en importeren in dit component.
- dan de functie monkey patchen in InstelContainer.stories.jsx
  - met monkeypatchen kun je een functie nabootsen in runtime
  - de monkey patch zou je met vi.fn() kiunnen bewerkstellinigen en dan een Promise returnen die dan de array met talen meegeeft.
- dan kun je de talen ophalen zonder dat je de backend nodig hebt.

*/

function TaalInstelmenuComponent({ disabled }) {
    const [selectedLanguageZorgvrager, setSelectedLanguageZorgvrager] = useState('');
    const [selectedLanguageZorgverlener, setSelectedLanguageZorgverlener] = useState('');
    const [languages, setLanguages] = useState([]);

    //talen array: data wordt opgehaald van de backend
    useEffect(() => {
        async function loadLanguages() {
            const data = await fetchLanguages();
            setLanguages(data);
        }
        loadLanguages();

    }, []); // Lege dependency array zorgt ervoor dat de functie alleen bij het laden van het component wordt uitgevoerd

    //functie om de talen te switchen
    function switchLanguage() {
        const selectedLanguageZorgrvragerCopy = selectedLanguageZorgvrager;
        setSelectedLanguageZorgvrager(selectedLanguageZorgverlener);
        setSelectedLanguageZorgverlener(selectedLanguageZorgrvragerCopy);
    };


    return (
        <div className="container p-10 h-100 justify-start">
            <div className="flex flex-col h-[100%] rounded-lg bg-[#ffffff]">
                <h1 className="text-4xl font-bold mb-4 text-center">Taalkeuze</h1>
                <div className="flex justify-between w-full px-10">
                    <LanguageSelection
                        label="Zorgverlener"
                        value={selectedLanguageZorgverlener}
                        onChange={(value) => setSelectedLanguageZorgverlener(value)}
                        options={languages.filter((lang) => lang.naam !== selectedLanguageZorgvrager)} // Filter op basis van de naam van de taal
                        disabled={disabled}
                    />
                    <button
                        onClick={switchLanguage}
                        disabled={disabled}
                    >
                        <ArrowsRightLeftIcon className={` h-20 w-20 text-black ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} />
                    </button>

                    <LanguageSelection
                        label="Zorgvrager"
                        value={selectedLanguageZorgvrager}
                        onChange={(value) => setSelectedLanguageZorgvrager(value)}
                        options={languages.filter((lang) => lang.naam !== selectedLanguageZorgverlener)} // Filter op basis van de naam van de taal
                        disabled={disabled}
                    />
                </div>
            </div>
        </div>
    );
}

export default TaalInstelmenuComponent;