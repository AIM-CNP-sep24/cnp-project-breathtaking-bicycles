import { useState } from 'react';
import LogoutButton from './LogoutButton';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    async function handleLogin () {
        setError('');

        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            if (!response.ok) {
                throw new Error('Gebruikersnaam of wachtwoord incorrect!');
            }

            const data = await response.json();
            const token = data.token;
        
            localStorage.setItem('jwtToken', token);
             window.location.href = '/benodigdheden/0';
            

        } catch (err) {
            setError(err.message);
        }
    }


    return (
        <div className="flex flex-col justify-center px-4 h-200">
            <p className="mx-auto w-full mb-8 text-4xl text-center">Inloggen</p>
            <div className="w-full mx-auto flex justify-center p-8">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin();
                    }}
                    className="w-200 p-8 mx-auto rounded-[10px] bg-[#F5EEDC]"
                >
                    <input
                        type="text"
                        maxLength="50"
                        placeholder="Gebruikersnaam"
                        className="h-12 w-150 pl-4 m-15 rounded-[10px] flex justify-center bg-white"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        maxLength="50"
                        placeholder="Wachtwoord"
                        className="h-12 w-150 pl-4 mt-5 m-15 rounded-[10px] flex justify-center bg-white"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="w-full h-20 flex justify-center">{error}</p>
                    <button
                        type="submit"
                        className="cursor-pointer w-50 h-15 mx-auto flex justify-center py-4 bg-[#DDA853] rounded-[10px] text-2xl focus:outline-none focus:ring-2 focus:ring-[#D18A1D]"
                    >
                        <p className="w-full h-full text-2xl">
                            Login
                        </p>
                    </button>
                    <LougoutButton />
                </form>
            </div>
        </div>
    );
}
export default Login;