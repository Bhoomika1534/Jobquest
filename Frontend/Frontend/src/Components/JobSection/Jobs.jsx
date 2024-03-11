import React, { useState } from 'react';
import axios from 'axios';

const Jobs = ({ onAddJob }) => {
  const token = localStorage.getItem("token");
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobImage, setJobImage] = useState(null); // State for image upload

  const handleSubmit = async(event) => {
    event.preventDefault();
    const newJob = {
      title: jobTitle,
      description: jobDescription,
      image: jobImage // Include the image in the job object
    };
    try {
      // Make an API call for sending the contact form data
      const response = await axios.post('http://localhost:8080/addjob', newJob,{
      headers: {
          'Authorization': `Bearer ${token}`
        }});
      console.log(response);
  } catch (error) {
      console.error('Contact Error:', error.message);
  }
    onAddJob(newJob);
    setJobTitle('');
    setJobDescription('');
    setJobImage(null); // Reset image state after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Job Title:
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          required
        />
      </label>
      <br />
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Job Description:
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          required
        />
      </label>
      <br />
      {/* Input field for image upload */}
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Upload Image or Icon:
        <br/><br/>
        <input
          type="file"
          accept="image/*" // Restrict to image files only
          onChange={(e) => setJobImage(URL.createObjectURL(e.target.files[0]))} // Set the image URL
        />
      </label>
      {/* Display the uploaded image */}
      {jobImage && <img src={jobImage} alt="Job" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
      <br />
      <button className="custom-btn mt-4 md:mt-0 mr-4" type="submit">Add Job</button>
    </form>
  );
};

export default Jobs;
