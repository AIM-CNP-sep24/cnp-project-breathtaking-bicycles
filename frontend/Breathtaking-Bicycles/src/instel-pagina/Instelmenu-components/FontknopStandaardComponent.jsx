
const FontknopStandaard = ({ onClick, className, setFontKeuze }) => {
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer relative px-4 rounded-xl bg-[#DDA853] w-60 h-20 ${className}`}
        >
            <p className="text-2xl text-center text-white font-bold text-[#27548A]">
                Standaard
            </p>
        </button>
    );
};

export default FontknopStandaard;