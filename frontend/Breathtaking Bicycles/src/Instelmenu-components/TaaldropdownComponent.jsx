
   function LanguageSelection({ label, value, onChange, options}) {
        return (
            <div>
                <h2 className="text-4xl font-bold mb-4">{label}</h2>
                <select
                    value={value}
                    onChange={onChange}
                    className="p-7 border border-gray-300 rounded text-2xl"
                >
                    <option value="" disabled>
                        Kies de taal
                    </option>
                    {options.map((option) =>(
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        );
    }

    export default LanguageSelection;