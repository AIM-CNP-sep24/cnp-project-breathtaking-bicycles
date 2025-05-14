import { useState } from 'react';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline';
import LanguageSelection from './Instelmenu-components/TaaldropdownComponent';

function TaalInstelmenuComponent() {
    const [selectedLanguageZorgvrager, setSelectedLanguageZorgvrager] = useState('');
    const [selectedLanguageZorgverlener, setSelectedLanguageZorgverlener] = useState('');

    //functie om de talen te switchen
    const switchLanguage = () => {
        const selectedLanguageZorgrvragerCopy = selectedLanguageZorgvrager;
        setSelectedLanguageZorgvrager(selectedLanguageZorgverlener);
        setSelectedLanguageZorgverlener(selectedLanguageZorgrvragerCopy);
    };

    //talen array: later data opgehaald uit de database
    const languages = [
        'Nederlands',
        'Engels',
    ];

    return (
        <div className="container p-20 h-100 justify-start">
            <div className="flex flex-col h-[100%] rounded-lg bg-[#ffffff]">
                <h1 className="text-4xl font-bold mb-4 text-center">Taalkeuze</h1>
                    <div className="flex justify-between w-full px-4">
                       <LanguageSelection
                            label="Zorgverlener"
                            value={selectedLanguageZorgverlener}
                            onChange={(value) => setSelectedLanguageZorgverlener(value)}
                            options={languages.filter((lang) => lang !== selectedLanguageZorgvrager)} // geselcteerde taal van zorgvrager filteren
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
                            options={languages.filter((lang) => lang !== selectedLanguageZorgverlener)} // geselcteerde taal van zorgverlener filteren
                        />
                    </div>
                </div>
            </div>
    );
}

export default TaalInstelmenuComponent;