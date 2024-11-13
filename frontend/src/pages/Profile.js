import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';
import Login from '../components/Login';

const Profile = () => {
    const [userData, setUserData] = useState({ username: '', email: '' });
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                if (token) {
                    const response = await axios.get('http://localhost:8000/api/profile/', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setUserData(response.data);
                }
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, [token]);

    const Logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };

    return (
        <div className="profile">
            {token ? (
                <>
                    <h1>Profile</h1>
                    <div className="profile-card">
                    <p><strong>Username:</strong> {userData.username}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <button onClick={Logout}>Logout</button>
                    </div>
                </>
            ) : (   <div className="profile">
                    <Login/>
                    </div>
            )}
        </div>
    );
};

export default Profile;
