import { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        //TODO login handeling

        //Error handeling
        setError('Gebruikersnaam of wachtwoord incorrect!');
    };

    return (
        <div className="flex flex-col justify-center px-4 bg-white h-200">
            <p className="mx-auto w-full mb-8 text-4xl font-semibold text-center">Inloggen</p>
            <div className="w-full mx-auto flex justify-center p-8">
                <div className="w-200 p-8 mx-auto rounded-[10px] bg-[#F5EEDC]">
                    <input
                        type="text"
                        maxLength="50"
                        placeholder="Gebruikersnaam"
                        className="h-12 w-150 pl-4 m-15 rounded-[10px] flex justify-center bg-[#FFFFFF]"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        maxLength="50"
                        placeholder="Wachtwoord"
                        className="h-12 w-150 pl-4 mt-5 m-15 rounded-[10px] flex justify-center bg-[#FFFFFF]"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <p className="w-full h-20 flex justify-center " >{error}</p>
            <button 
                className="cursor-pointer w-50 h-15 mx-auto flex justify-center py-4 bg-[#D18A1D] text-black rounded-[10px] text-2xl hover:bg-[#B57215] focus:outline-none focus:ring-2 focus:ring-[#D18A1D]"
                onClick={handleLogin}
            >
                <p className='w-full h-full text-2xl'>
                    Login
                </p>
            </button>
            
        </div>
    );
}

export default Login;
