import { useState, useEffect } from 'react';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline';
import LanguageSelection from './Instelmenu-components/TaaldropdownComponent';

function TaalInstelmenuComponent() {
    const [selectedLanguageZorgvrager, setSelectedLanguageZorgvrager] = useState('');
    const [selectedLanguageZorgverlener, setSelectedLanguageZorgverlener] = useState('');
    const [languages, setLanguages] = useState([]); // array om de talen op te slaan

     //talen array: data wordt opgehaald van de backend
    useEffect(() => {
        //roep de functie aan om de talen op te halen
        fetchLanguages();
    }, []); // Lege dependency array zorgt ervoor dat de functie alleen bij het laden van het component wordt uitgevoerd

    //functie om de talen te switchen
    function switchLanguage () {
        const selectedLanguageZorgrvragerCopy = selectedLanguageZorgvrager;
        setSelectedLanguageZorgvrager(selectedLanguageZorgverlener);
        setSelectedLanguageZorgverlener(selectedLanguageZorgrvragerCopy);
    };


     //functie om de talen op te halen
        async function fetchLanguages() {
            try {
                const response = await fetch("http://localhost:8080/talen-ophalen"); // URL van de backend
                if (!response.ok) {
                    throw new Error('Fout bij het ophalen van de talen');
                }
                const data = await response.json();
                setLanguages(data);
            } catch (error) {
                console.error('Fout bij ophalen van talen:', error);
            }
        };

    return (
        <div className="container p-20 h-100 justify-start">
            <div className="flex flex-col h-[100%] rounded-lg bg-[#ffffff]">
                <h1 className="text-4xl font-bold mb-4 text-center">Taalkeuze</h1>
                <div className="flex justify-between w-full px-10">
                    <LanguageSelection
                        label="Zorgverlener"
                        value={selectedLanguageZorgverlener}
                        onChange={(value) => setSelectedLanguageZorgverlener(value)}
                        options={languages.filter((lang) => lang.naam !== selectedLanguageZorgvrager)} // Filter op basis van de naam van de taal
                    />
                    <button
                        onClick={switchLanguage}
                    >
                        <ArrowsRightLeftIcon className="h-20 w-20 text-black" />
                    </button>

                    <LanguageSelection
                        label="Zorgvrager"
                        value={selectedLanguageZorgvrager}
                        onChange={(value) => setSelectedLanguageZorgvrager(value)}
                        options={languages.filter((lang) => lang.naam !== selectedLanguageZorgverlener)} // Filter op basis van de naam van de taal
                    />
                </div>
            </div>
        </div>
    );
}

export default TaalInstelmenuComponent;