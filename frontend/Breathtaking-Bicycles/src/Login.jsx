import { useState } from 'react';

function Login() {
    // State hooks to store the username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Handle form submission
    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="flex flex-col justify-center px-4 bg-white h-200">
            <p className="mx-auto w-full mb-8 text-4xl font-semibold text-center">Inloggen</p>
            <div className="w-full mx-auto flex justify-center p-8">
                <div className="w-96 p-8 m-auto rounded-[10px] bg-[#F5EEDC] shadow-lg">
                    <input
                        type="text"
                        maxLength="50"
                        placeholder="Gebruikersnaam"
                        className="h-12 pl-4 w-full mb-4 rounded-[10px] bg-[#FFFFFF]"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        maxLength="50"
                        placeholder="Wachtwoord"
                        className="h-12 pl-4 w-full mb-4 rounded-[10px] bg-[#FFFFFF]"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <button 
                className="w-50 h-10 mx-auto flex justify-center py-2 bg-[#D18A1D] text-white rounded-[10px] text-lg font-semibold hover:bg-[#B57215] focus:outline-none focus:ring-2 focus:ring-[#D18A1D]"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    );
}

export default Login;
