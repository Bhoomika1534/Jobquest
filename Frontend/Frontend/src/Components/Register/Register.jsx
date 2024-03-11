import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
    qualification:"",
    roles:"USER"
  });

  const navigate= useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post('http://localhost:8080/jobs/new', formData);
      navigate("/login");

    //   if (response.data.success) {
    //     console.log('Registration Successful:', response.data);
    //     const token= response.data.token;
    //     localStorage.setItem("token",token);
    //     navigate('/Home');
    //   } else {
    //     console.error('Invalid credentials');
    //   }
     } 
    catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Register Error:', error.response.data.message);

      } else {
        console.error('Register Error:', error.message);
      }
    }
  };
  
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-4 pt-1 pb-2 mb-4 max-w-md w-full border border-gray-300">
      <h1 className='text-3xl md:text-3xl text-center bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent p-2 mb-4'>Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
              
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2">
                Username:
              </label>
              <input
                type="text"
                required
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:border-slate-700"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                required
                id="email"
                value={formData.email}
                name="email"
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:border-slate-700"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password:
              </label>
              <input
                type="password"
                required
                value={formData.password}
                id="password"
                name="password"
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:border-slate-700"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="qualification"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Qualification:
              </label>
              <input
                type="text"
                required
                id="qualification"
                value={formData.qualification}
                name="qualification"
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:border-slate-700"
              />
              
            </div>
            <center>
                <div className="flex justify-center space-x-4"> {/* flex container with space between children */}
                 <button type="submit" className='custom-btn mt-4 md:mt-0'>
                    Register
    </button>
  </div>
</center><br/>

<center><p>Don't have an account<u> <a href='/login'>Sign up</a></u></p></center> 

          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;