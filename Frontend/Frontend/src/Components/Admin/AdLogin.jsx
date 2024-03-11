import React, { useState } from 'react';
import useTitle from '../hooks/useTitle';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Adlogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('user'); // Default to regular user login
    const [error, setError] = useState('');
    useTitle('Login');

    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform authentication logic here...
        if (email === 'admin@example.com' && password === 'admin') {
            setUserType('admin');
            // Redirect admin to '/new' page using navigate function
            navigate('/profile');
        } else {
            // Handle regular user login
            setError('Invalid email or password. Please try again.');
            navigate('/');
        }
    };

    const handleLogout = () => {
        // Perform logout logic here...
        setUserType('user');
    };

    return (
        <div className="flex justify-center items-center h-screen">
            {userType === 'user' ? (
                <LoginForm 
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                    error={error}
                />
            ) : (
                <AdminDashboard handleLogout={handleLogout} />
            )}
        </div>
    );
};

const LoginForm = ({ email, setEmail, password, setPassword, handleSubmit, error }) => (
    <div className="bg-white shadow-md rounded px-5 pt-3 pb-2 mb-14 max-w-md w-full border border-gray-300">
        <h1 className='text-3xl md:text-3xl text-center bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent p-2 mb-4'>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2" >
                    Email
                </label>
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    required 
                />
            </div>
            <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                </label>
                <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    required 
                />
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="flex items-center justify-center">
                <button className='custom-btn mt-4 md:mt-0' type="submit" >
                    Sign In
                </button>
                
            </div>
         
        </form>
    </div>
);


export default Adlogin;
