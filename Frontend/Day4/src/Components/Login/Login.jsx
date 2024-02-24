// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Login.css'

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     // Here, you can implement your login logic.
//     // For simplicity, I'm just checking if both fields are filled.
//     if (username && password) {
//       setIsLoggedIn(true);
//     } else {
//       alert('Please enter username and password');
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUsername('');
//     setPassword('');
//   };

//   return (
//     <div className='md:flex px-16 gap-6'>
//       {isLoggedIn ? (
//         <div>
//           <h1>Welcome, {username}!</h1>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <h1>Login Page</h1>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <br />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <br />
//           <button onClick={handleLogin}>Login</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Login;

import { useState } from 'react';
//import './LoginPage.css'; // Ensure you create a corresponding CSS file

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the login logic, such as calling an API.
        console.log('Email:', email, 'Password:', password);
        // Redirect to applied jobs page or elsewhere upon successful login
    };

    return (
        <div className="login-container">
            <h1 className='text-5xl text-center bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent p-2 mb-4'>Login</h1>
            <form onSubmit={handleSubmit} className="w-3/4 mx-auto">
                <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
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
                <div className="flex items-center justify-between">
                    <button className="custom-btn mt-4" type="submit">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
