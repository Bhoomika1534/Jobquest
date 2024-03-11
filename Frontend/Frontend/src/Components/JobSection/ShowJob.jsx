import React, { useState } from 'react';
import Jobs from './Jobs'; 
import './Jobd.css';
import { useEffect } from 'react';
import axios from 'axios';

const ShowJob = () => {
  const [jobs, setJobs] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editImage, setEditImage] = useState(null); // State for image upload

  const token = localStorage.getItem('token'); // Assuming you store the token in localStorage

  console.log(token);
  useEffect(() => {
    // Fetch data using Axios

    axios.get('http://localhost:8080/getjob', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      // Set the fetched data to the profiles state
      setJobs(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []); 

  const handleAddJob = (newJob) => {
    setJobs([...jobs, newJob]);
  };


  const handleEdit = (index) => {
    setEditIndex(index);
    setEditTitle(jobs[index].title);
    setEditDescription(jobs[index].description);
    setEditImage(jobs[index].image); // Set the image URL when editing
  };

  const handleUpdateJob = () => {
    const updatedJobs = [...jobs];
    updatedJobs[editIndex] = { title: editTitle, description: editDescription, image: editImage };
    setJobs(updatedJobs);
    setEditIndex(null);
    setEditTitle('');
    setEditDescription('');
    setEditImage(null); // Clear image URL after update
  };

  const handleDelete = (index) => {
    const updatedJobs = jobs.filter((job, i) => i !== index);
    setJobs(updatedJobs);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.jobs]: e.target.value,
    });
  };

  return (
    <div className='profile-container'>
      <h2 className="profile-title">List of Jobs</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            {/* <th>Image</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td>{job.title}</td>
              <td>{job.description}</td>
              {/* <td><img src={job.image} alt="Job" /></td> */}
              <td>
                {/* <button className='custom-btn mt-4 md:mt-0' onClick={() => handleEdit(index)}>Edit</button> */}
                <button className='custom-btn mt-4 md:mt-0' onClick={() => handleDelete(index)}>Apply Now</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowJob;
