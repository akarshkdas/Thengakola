import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../services/api'; // Assume you have an API service for signup
import './Login_Signup.css'

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await signup({ username, password, confirm_password: confirmPassword, email });
            // Redirect to Profile page after successful signup
            navigate('/profile');
        } catch (error) {
            setError('Signup failed. Please check your inputs.');
            console.error(error);
            // Handle error (e.g., display a message)
        }
    };

    return (
        <div className="signup-container">
           
            <form onSubmit={handleSignup}>
                <h1>Sign Up</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <input 
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                 {error && <p className="error">{error}</p>}
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
