
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline';
import LanguageSelection from './TaaldropdownComponent';

function TaalInstelmenuComponent({ disabled, selectedLanguageZorgvrager, setSelectedLanguageZorgvrager, selectedLanguageZorgverlener, setSelectedLanguageZorgverlener, languages }) {


    //functie om de talen te switchen
    function switchLanguage () {
        const selectedLanguageZorgvragerCopy = selectedLanguageZorgvrager;
        setSelectedLanguageZorgvrager(selectedLanguageZorgverlener);
        setSelectedLanguageZorgverlener(selectedLanguageZorgvragerCopy);
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
                        options={languages.filter((language) => language.naam !== selectedLanguageZorgvrager?.naam)} // Filter op basis van de naam van de taal
                        disabled={disabled}
                    />
                    <button
                        onClick={switchLanguage}
                        disabled={disabled}
                        aria-label="Talen wisselen"
                    >
                        <ArrowsRightLeftIcon className={` h-20 w-20 text-black ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} />
                    </button>

                    <LanguageSelection
                        label="Zorgvrager"
                        value={selectedLanguageZorgvrager}
                        onChange={(value) => setSelectedLanguageZorgvrager(value)}
                        options={languages.filter((language) => language.naam !== selectedLanguageZorgverlener?.naam)} // Filter op basis van de naam van de taal
                        disabled={disabled}
                    />
                </div>
            </div>
        </div>
    );
}

export default TaalInstelmenuComponent;