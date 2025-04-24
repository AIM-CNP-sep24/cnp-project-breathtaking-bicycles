// Dit is een temporary component voor google translate code die later op de goede plek word gezet.

function Translate() {
    const apiKey = "AIzaSyDDnFCP5O3dI8dr0cTe5yQ9nGEcNFl9JSY";
    const textToTranslate = "Hello world!"

    async function detectLanguage(detectionText) {
        const url = "https://translation.googleapis.com/language/translate/v2/detect?q=" 
        + detectionText +
        "&key=" + apiKey;

        try {
            const response = await fetch(url, {method: "post"});
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
        
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.error(error.message);
        }
    }      

    detectLanguage(textToTranslate);

    return (
        <>
            <p class="mt-4">Text to translate:</p>
            <p>{textToTranslate}</p>
            <p class="mt-4">Detected language:</p>
            <p class="mt-4">Translated text:</p>
        </>
    )
}

export default Translate
