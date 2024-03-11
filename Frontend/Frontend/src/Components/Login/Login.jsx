import React, { useState } from 'react';
import useTitle from '../hooks/useTitle';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Login = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('user'); // Default to regular user login
    const [error, setError] = useState('');
    // useTitle('Login');
    const[formData,setFormData]=useState({
        username:"",
        password:""
})
const handleChange = (e) => {
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform authentication logic here...
        console.log(formData);

        try {
          // Make an API call for login
          const response = await axios.post('http://localhost:8080/jobs/authenticate', formData);
          const token= response.data.token;
          const user=response.data.user;
          localStorage.setItem("token",token);
          localStorage.setItem("user1",JSON.stringify(user));
          navigate("/home");
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Register Error:', error.response.data.message);
  
        } else {
          console.error('Register Error:', error.message);
        }
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
                    formData={formData}
                    setFormData={setFormData}
                    // setEmail={setEmail}
                    // password={password}
                    // setPassword={setPassword}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    error={error}
                />
            ) : (
                <AdminDashboard handleLogout={handleLogout} />
            )}
        </div>
    );
};

const LoginForm = ({ handleSubmit, error,handleChange,formData,setFormData }) => (
    <div className="bg-white shadow-md rounded px-5 pt-3 pb-2 mb-14 max-w-md w-full border border-gray-300">
        <h1 className='text-3xl md:text-3xl text-center bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent p-2 mb-4'>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2" >
                    Username
                </label>
                <input 
                    type="text" 
                    id="username" 
                    name="username"
                    value={formData.username} 
                    onChange={handleChange}
                    // onChange={(e)=>{setFormData({...formData,[e.target.]})}}
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
                    name="password"
                    value={formData.password} 
                    onChange={handleChange}
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
            <br/>
            <center><p>Have you already got an account<u> <a href='/register'>Sign in</a></u></p></center> 
        </form>
    </div>
);

const AdminDashboard = ({ handleLogout }) => (
    <div>
        <center>
            <h1 className='text-7xl w-auto md:w-5/6'>Welcome Admin!</h1>
            {/* Admin dashboard UI */}<br/>
            <button onClick={handleLogout}>Logout</button>
        </center> 
    </div>
);

export default Login;
