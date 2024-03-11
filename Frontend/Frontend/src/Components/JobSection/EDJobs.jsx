import React, { useState } from 'react';
import Jobs from './Jobs'; 
import './Jobd.css';

const ParentComponent = () => {
  const [jobs, setJobs] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editImage, setEditImage] = useState(null); // State for image upload

  const token=localStorage.getItem('token');
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
      <h2 className="profile-title">Add/Edit Jobs</h2>
      <Jobs onAddJob={handleAddJob} />
      {editIndex !== null && (
        <div>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={editTitle}
            onChange={handleChange}
          />
          <textarea
            className="block text-gray-700 text-sm font-bold mb-2"
            value={editDescription}
            onChange={handleChange}
          />
          {/* Image upload input */}
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
          {/* Display the uploaded image */}
          {editImage && <img src={editImage} alt="Job Image" />}
          <button className="custom-btn mt-4 md:mt-0 mr-4" onClick={handleUpdateJob}>Update</button>
        </div>
      )}
      <hr />
      <br/>
      <h2 className="profile-title">List of Jobs</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td>{job.title}</td>
              <td>{job.description}</td>
              <td><img src={job.image} alt="Job" /></td>
              <td>
                <button className='custom-btn mt-4 md:mt-0' onClick={() => handleEdit(index)}>Edit</button>
                <button className='custom-btn mt-4 md:mt-0' onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParentComponent;
