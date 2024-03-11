import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const token= localStorage.getItem("token");
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make an API call for sending the contact form data
            const response = await axios.post('http://localhost:8080/addcontact', formData,{
            headers: {
                'Authorization': `Bearer ${token}`
              }});
            console.log(response);
            setSuccessMessage('Your message has been sent successfully!');
            setFormData({
                name: "",
                email: "",
                message: ""
            });
        } catch (error) {
            console.error('Contact Error:', error.message);
            setError('There was an error sending your message. Please try again later.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white shadow-md rounded px-5 pt-3 pb-2 mb-14 max-w-md w-full border border-gray-300">
                <h1 className='text-3xl md:text-3xl text-center bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent p-2 mb-4'>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
                    <div className="flex items-center justify-center">
                        <button className='custom-btn mt-4 md:mt-0' type="submit">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
