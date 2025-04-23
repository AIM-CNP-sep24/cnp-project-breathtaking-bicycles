// Dit is een temporary component voor google translate code die later op de goede plek word gezet.

function Translate() {
    const textToTranslate = "Hello world"
    const {Translate} = require('@google-cloud/translate').v2;

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
