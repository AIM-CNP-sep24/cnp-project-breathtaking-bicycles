//functie om de talen op te halen
async function fetchLanguages() { // array om de talen op te slaan

    try {
        const response = await fetch("http://localhost:8080/talen-ophalen"); // URL van de backend
        if (!response.ok) {
            throw new Error('Fout bij het ophalen van de talen');
        }
        const data = await response.json();
        return data; // Retourneer de opgehaalde talen
    } catch (error) {
        console.error('Fout bij ophalen van talen:', error);
    }
};

export { fetchLanguages };