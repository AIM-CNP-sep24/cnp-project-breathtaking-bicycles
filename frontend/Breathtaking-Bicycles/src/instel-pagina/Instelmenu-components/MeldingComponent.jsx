function MeldingComponent({ melding }) {
    if (!melding) {
        return null;
    }
    // Tailwind kleurklassen op basis van melding.type
    const bgClass = melding.type === 'error' ? 'bg-red-500' : 'bg-[#DDA853]';

    return (
        <div className="fixed top-30 left-1/2 transform -translate-x-1/2 z-50 w-[90vw] max-w-xl">
            <div className={`block p-4 mb-4 rounded-lg shadow-md ${bgClass}`}>
                <p className="text-2xl font-bold text-white mb-4 text-center">{melding.tekst}</p>
            </div>
        </div>
    );
}

export default MeldingComponent;
// Dit is een component dat een melding weergeeft. Het ontvangt een melding object als prop en toont de meldingType, meldingTekst en meldingDatum.
