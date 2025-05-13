import { useState } from 'react';

function TaalInstelmenuComponent() {
    const [selectLanguage, setSelectLanguage] = useState('Kies een taal');
    const [selectedLanguageZorgvrager, setSelectedLanguageZorgvrager] = useState('');
    const [selectedLanguageZorgverlener, setSelectedLanguageZorgverlener] = useState('');

    return (
        <div className="container p-20 h-100 justify-start">
            <div className="flex flex-col h-full rounded-lg bg-[#ffffff]">
                <h1 className="text-4xl font-bold mb-4 text-center">Taalkeuze</h1>
                    <div className="flex justify-between w-full px-4">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Zorgverlener</h2>
                            <select
                                value={selectLanguage}
                                onChange={(e) => setSelectedLanguageZorgverlener(e.target.value)}
                                className="p-2 border border-gray-300 rounded"
                            >

                                <option value="Nederlands">Nederlands</option>
                                <option value="Engels">Engels</option>
                            </select>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4">Zorgvrager</h2>
                            <select
                                value={selectLanguage}
                                onChange={(e) => setSelectedLanguageZorgvrager(e.target.value)}
                                className="p-2 border border-gray-300 rounded"
                            >
                                <option value="Nederlands">Nederlands</option>
                                <option value="Engels">Engels</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default TaalInstelmenuComponent;