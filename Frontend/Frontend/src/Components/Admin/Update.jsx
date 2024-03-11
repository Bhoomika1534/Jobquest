// import  { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Update = () => {
//   const initialUsers = [
//     { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', address: '123 Main St' },
//     // Add more initial user details as needed
//   ];

//   const [users, setUsers] = useState(initialUsers);
//   const [displayTable, setDisplayTable] = useState(true);
//   const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '' });
//   const [selectedUserId, setSelectedUserId] = useState(null);

//   const handleAddUser = () => {
//     setDisplayTable(false);
//     setSelectedUserId(null);
//   };

//   const handleUpdateUser = (userId) => {
//     setDisplayTable(false);
//     const selectedUser = users.find((user) => user.id === userId);
//     setFormData({ ...selectedUser });
//     setSelectedUserId(userId);
//   };

//   const handleDeleteUser = (userId) => {
//     const updatedUsers = users.filter((user) => user.id !== userId);
//     setUsers(updatedUsers);
//   };

//   const handleCancel = () => {
//     setDisplayTable(true);
//     setFormData({ name: '', email: '', phone: '', address: '' });
//     setSelectedUserId(null);
//   };

//   const handleFormSubmit = () => {
//     // Validate form data before adding or updating
//     if (formData.name && formData.email && formData.phone && formData.address) {
//       if (selectedUserId) {
//         // Update existing user
//         const updatedUsers = users.map((user) =>
//           user.id === selectedUserId ? { id: user.id, ...formData } : user
//         );
//         setUsers(updatedUsers);
//       } else {
//         // Add new user
//         setUsers([...users, { id: users.length + 1, ...formData }]);
//       }
//       setFormData({ name: '', email: '', phone: '', address: '' });
//       setDisplayTable(true);
//       setSelectedUserId(null);
//     } else {
//       alert('Please fill in all fields');
//     }
//   };

//   return (

//   <center><br/><br/>  <div className='profile-container'>
//       {displayTable ? (
//         <div>
//           <h2 className="profile-title">User Details</h2>
//           <table className="profile-title">
//             <thead>
//               <tr>
//                 <th >Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th >Address</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user.id}>
//                   <td >{user.name}</td>
//                   <td>{user.email}</td>
//                   <td >{user.phone}</td>
//                   <td>{user.address}</td>
//                   <td>
//                     <button className='custom-btn mt-4 md:mt-0' onClick={() => handleUpdateUser(user.id)}>Update</button>
//                     &nbsp;&nbsp;
//                     <button className='custom-btn mt-4 md:mt-4' onClick={() => handleDeleteUser(user.id)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table> 
//           <br/> 
//           <button className="custom-btn mt-4 md:mt-0"  onClick={handleAddUser}>Add User</button>
//         <br/><br/> 
//           <button className="custom-btn mt-4 md:mt-0">< Link to="/">Go Back</Link></button>
//         </div>
//       ) : (
//         <div>
//           <h1 className='user-tab-title'>{selectedUserId ? 'Update User' : 'Add User'}</h1>
//           <div className='form11'>
//           <form>
//             <label className='label11'>
//               Name:
//               <input className='input11' type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
//             </label>
//             <br/>
//             <label className='label11'>
//               Email:
//               <input className='input11' type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
//             </label>
//             <br/>
//             <label className='label11'>
//               Phone:
//               <input className='input11' type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
//             </label>
//             <br/>
//             <label className='label11'>
//               Address:
//               <input className='input11' type="text" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
//             </label>
//             <br/>
//             <button className="custom-btn mt-4 md:mt-0" type="button" onClick={handleFormSubmit}>
//               {selectedUserId ? 'Update' : 'Add'}
//             </button>
//             &nbsp;&nbsp;&nbsp;&nbsp;
//             <button className="custom-btn mt-4 md:mt-0" type="button" onClick={handleCancel}>
//               Cancel
//             </button>
//           </form>
//           </div>
//         </div>
//       )}
//     </div></center>
//   );
// };

// export default Update;

import React, { useState , useEffect} from 'react';
import axios from 'axios';
// import './Profile.css'; // Assuming you have a CSS file for styling


const Update = () => {
  const token = localStorage.getItem('token'); // Assuming you store the token in localStorage

  useEffect(() => {
    // Fetch data using Axios

    axios.get('http://localhost:8080/jobs/getuser', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      // Set the fetched data to the profiles state
      setProfiles(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []); 

  const [profiles, setProfiles] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');

  const handleAddProfile = () => {
    const newProfile = { name: editName, email: editEmail };
    setProfiles([...profiles, newProfile]);
    setEditName('');
    setEditEmail('');
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(profiles[index].name);
    setEditEmail(profiles[index].email);
  };

  const handleUpdateProfile = () => {
    const updatedProfiles = [...profiles];
    updatedProfiles[editIndex] = { name: editName, email: editEmail };
    setProfiles(updatedProfiles);
    setEditIndex(null);
    setEditName('');
    setEditEmail('');
  };

  const handleDelete = async (index,profile) => {
   await axios.delete(`http://localhost:8080/jobs/delete/${profile.id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
    const updatedProfiles = [...profiles];
    updatedProfiles.splice(index, 1);
    setProfiles(updatedProfiles);
  };

  return (
    <div className='profile-container'>
      <h2 className="profile-title">Add/Edit Profiles</h2>
      <div>
        <input
          type="text"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={editEmail}
          onChange={(e) => setEditEmail(e.target.value)}
          placeholder="Email"
        />
        <button className="custom-btn mt-4 md:mt-0" onClick={editIndex !== null ? handleUpdateProfile : handleAddProfile}>
          {editIndex !== null ? 'Update' : 'Add'}
        </button>
      </div>
      <hr />
      <br/>
      <h2 className="profile-title">List of Profiles</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile, index) => (
            <tr key={index}>
              <td>{profile.name}</td>
              <td>{profile.email}</td>
              <td>
                <button className='custom-btn' onClick={() => handleEdit(index,profile)}>Edit</button> &nbsp;
                <button className='custom-btn' onClick={() => handleDelete(index,profile)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Update;