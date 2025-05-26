
const DyslexicFontKnop = ({ onClick, className, selected }) => {
    return (
        <button
            onClick={onClick}
            className={`cursor-pointer relative px-4 rounded-xl bg-[#DDA853] w-60 h-20
            ${selected ? 'border-4 border-[#27548A]' : 'border border-transparent'}
            ${className}`}
            selected={('OpenDyslexic')}
        >
            <p className="text-2xl text-center text-white font-OpenDyslexic text-[#27548A]">
                Dyslectie  
            </p>
        </button>
    );
};

export default DyslexicFontKnop;


