
const StandardFontknop = ({ onClick, selected, disabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`cursor-pointer relative px-4 rounded-xl bg-[#DDA853] w-60 h-20
            ${selected ? 'border-4 border-[#27548A]' : 'border border-transparent'} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            selected={('standard')}
        >
            <p className="text-2xl text-center text-white font-bold text-[#27548A]">
                Standaard
            </p>
        </button>
    );
};

export default StandardFontknop;

