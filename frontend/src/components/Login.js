import React, { useState } from 'react';
import { login } from '../services/api';
import { useNavigate, Link } from 'react-router-dom'; // For navigation after login
import './Login_Signup.css'; // Include any necessary CSS

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State to handle errors
    const navigate = useNavigate(); // Hook for navigation

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Reset error message
        try {
            await login(username, password); // Call the login function
            navigate('/');// Navigate to the profile page on successful login
        } catch (error) {
            setError('Login failed. Please check your credentials.'); // Set error message
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                
                {error && <p className="error">{error}</p>} {/* Display error message */}
                <button type="submit">Login</button>
            </form>
            <br/>
            <Link to="/signup">Don't have an account? Sign Up.</Link>
        </div>
    );
};

export default Login;
