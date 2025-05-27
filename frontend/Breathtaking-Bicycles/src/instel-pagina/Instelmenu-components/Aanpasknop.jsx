
function Aanpasknop ({ onClick, className }) {
    return (
        <button
            onClick={onClick}
            className={"cursor-pointer px-4 rounded-xl bg-[#DDA853] w-80 h-20"}
        >
            <p className="text-white text-5xl font-bold text-center">Aanpassen</p>
        </button>
    );
};

export default Aanpasknop;