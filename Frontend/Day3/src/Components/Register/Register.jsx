import { useState } from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [qualification, setQualification] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the login logic, such as calling an API.
        console.log('Name:',name,'Email:', email, 'Password:', password,'Qualification:',qualification);
        // Redirect to applied jobs page or elsewhere upon successful login
    };

    return (
        <div className="login-container">
            <h1 className='text-5xl text-center bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent p-2 mb-4'>Register</h1>
            <form onSubmit={handleSubmit} className="w-3/4 mx-auto">
            <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-70 text-sm font-bold mb-2">
                        Name
                    </label>
                    <input 
                        type="name" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        required 
                    />
                </div>
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
                <div className="mb-6">
    <label htmlFor="qualification" className="block text-gray-700 text-sm font-bold mb-2">
        Qualification
    </label>
    <select
        id="qualification"
        value={qualification}
        onChange={(e) => setQualification(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        required
    >
        <option value="">Select Qualification</option>
        <option value="High School">High School</option>
        <option value="Bachelor's Degree">Bachelor's Degree</option>
        <option value="Master's Degree">Master's Degree</option>
        <option value="PhD">PhD</option>
        {/* Add more options as needed */}
    </select>
</div>

                <div className="flex items-center justify-between">
                    <button className="custom-btn mt-4" type="submit">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
