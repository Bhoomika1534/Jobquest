// JobForm.jsx

import React, { useState } from 'react';

function JobForm({ addJob }) {
  const [formData, setFormData] = useState({
    id: '',
    company_logo: '',
    job_title: '',
    company_name: '',
    remote_or_onsite: '',
    location: '',
    fulltime_or_parttime: '',
    salary: '',
    job_description: '',
    job_responsibility: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(formData);
    setFormData({
      id: '',
      company_logo: '',
      job_title: '',
      company_name: '',
      remote_or_onsite: '',
      location: '',
      fulltime_or_parttime: '',
      salary: '',
      job_description: '',
      job_responsibility: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className='profile-container'>
      <label >
        Job ID:
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" name="id" value={formData.id} onChange={handleChange} />
      </label>
      <label>
        Company Logo:
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" name="company_logo" value={formData.company_logo} onChange={handleChange} />
      </label>
      <label>
        Job Title:
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" name="job_title" value={formData.job_title} onChange={handleChange} />
      </label>
      <label>
        Company Name:
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" name="company_name" value={formData.company_name} onChange={handleChange} />
      </label>
      <label>
        Remote or Onsite:
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" name="remote_or_onsite" value={formData.remote_or_onsite} onChange={handleChange} />
      </label>
      <label>
        Location:
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" name="location" value={formData.location} onChange={handleChange} />
      </label>
      <label>
        Fulltime or Parttime:
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" name="fulltime_or_parttime" value={formData.fulltime_or_parttime} onChange={handleChange} />
      </label>
      <label>
        Salary:
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" name="salary" value={formData.salary} onChange={handleChange} />
      </label>
      <label>
        Job Description:
        <textarea  className="block text-gray-700 text-sm font-bold mb-2" name="job_description" value={formData.job_description} onChange={handleChange} />
      </label>
      <label>
        Job Responsibility:
        <textarea  className="block text-gray-700 text-sm font-bold mb-2" name="job_responsibility" value={formData.job_responsibility} onChange={handleChange} />
      </label>
      <button className='custom-btn mt-4 md:mt-0' type="submit">Add Job</button>
    </form>
  );
}

export default JobForm;
