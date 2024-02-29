// import Navbar from '../Navbar/Navbar';
// import './Profile.css';
// import { useState, useEffect } from 'react';

// const Userdetails = () => {
//   // Retrieve user data from localStorage if available, otherwise use default values
//   const [user, setUser] = useState(() => {
//     const savedUser = localStorage.getItem('user');
//     return savedUser ? JSON.parse(savedUser) : {
//       name: 'Julie',
//       location: 'Red Valley, Kansas City, USA',
//       age: 21,
//       contact: 'julie@gmail.com | (+91) 98949817698',
//     };
//   });

//   const [editedUser, setEditedUser] = useState({ ...user });
//   const [isUserEditing, setIsUserEditing] = useState(false);

//   // Save user data to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('user', JSON.stringify(user));
//   }, [user]);

//   const handleUserEdit = () => {
//     setIsUserEditing(true);
//   };

//   const handleUserSave = () => {
//     setUser({ ...editedUser });
//     setIsUserEditing(false);
//   };

//   const handleUserCancel = () => {
//     setEditedUser({ ...user });
//     setIsUserEditing(false);
//   };

//   return (
//     <div className="profile-container">
//       <div className="profile-header">
//         <h1 className="profile-title">{user.name}&apos;s Profile</h1>
//       </div>
//       <section className="user-details">
//         <b><h2>User Details</h2></b> <br/>
//         {isUserEditing ? (
//           <>
//             <div className="edit-fields">
//               <label>Name: </label>
//               <input
//                 className="input-field"
//                 type="text"
//                 value={editedUser.name}
//                 onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
//               />
//               <br />
//               <label>Location: </label>
//               <input
//                 className="input-field"
//                 type="text"
//                 value={editedUser.location}
//                 onChange={(e) => setEditedUser({ ...editedUser, location: e.target.value })}
//               />
//               <br />
//               <label>Age: </label>
//               <input
//                 className="input-field"
//                 type="number"
//                 value={editedUser.age}
//                 onChange={(e) => setEditedUser({ ...editedUser, age: parseInt(e.target.value, 10) || 0 })}
//               />
//               <br />
//               <label>Contact: </label>
//               <input
//                 className="input-field"
//                 type="text"
//                 value={editedUser.contact}
//                 onChange={(e) => setEditedUser({ ...editedUser, contact: e.target.value })}
//               />
//               <br />
//             </div>
//             <div className="">
//               <center>
//                 <button className="custom-btn mt-4 md:mt-0 mr-4" onClick={handleUserSave}>Save</button>
//                 <button className="custom-btn mt-4 md:mt-0" onClick={handleUserCancel}>Cancel</button>
//               </center>
//             </div>
//           </>
//         ) : (
//           <>
//             <p>Name: {user.name}</p>
//             <p>Location: {user.location}</p>
//             <p>Age: {user.age}</p>
//             <p>Contact: {user.contact}</p>
//             <br />
//             <center><button className="custom-btn mt-4 md:mt-0" onClick={handleUserEdit}>Edit</button></center>
//           </>
//         )}
//       </section>
//     </div>
//   );
// };

// export default Userdetails;

import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Userdetails = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : {
      name: 'Julie',
      location: 'Red Valley, Kansas City, USA',
      age: 21,
      contact: 'julie@gmail.com | (+91) 98949817698',
    };
  });

  const [editedUser, setEditedUser] = useState({ ...user });
  const [isUserEditing, setIsUserEditing] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false); // State to manage sidebar visibility

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const handleUserEdit = () => {
    setIsUserEditing(true);
  };

  const handleUserSave = () => {
    setUser({ ...editedUser });
    setIsUserEditing(false);
  };

  const handleUserCancel = () => {
    setEditedUser({ ...user });
    setIsUserEditing(false);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="profile-container">
      <button className="sidebar-toggle" onClick={toggleSidebar}>
  <FontAwesomeIcon icon={faBars} color="black" />
</button>
      {showSidebar && <Navbar />}
      <div className="profile-header">
        <h1 className="profile-title">{user.name}&apos;s Profile</h1>
      </div>
      <section className="user-details">
        <b><h2>User Details</h2></b> <br/>
        {isUserEditing ? (
          <>
            <div className="edit-fields">
              <label>Name: </label>
              <input
                className="input-field"
                type="text"
                value={editedUser.name}
                onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
              />
              <br />
              <label>Location: </label>
              <input
                className="input-field"
                type="text"
                value={editedUser.location}
                onChange={(e) => setEditedUser({ ...editedUser, location: e.target.value })}
              />
              <br />
              <label>Age: </label>
              <input
                className="input-field"
                type="number"
                value={editedUser.age}
                onChange={(e) => setEditedUser({ ...editedUser, age: parseInt(e.target.value, 10) || 0 })}
              />
              <br />
              <label>Contact: </label>
              <input
                className="input-field"
                type="text"
                value={editedUser.contact}
                onChange={(e) => setEditedUser({ ...editedUser, contact: e.target.value })}
              />
              <br />
            </div>
            <div className="">
              <center>
                <button className="custom-btn mt-4 md:mt-0 mr-4" onClick={handleUserSave}>Save</button>
                <button className="custom-btn mt-4 md:mt-0" onClick={handleUserCancel}>Cancel</button>
              </center>
            </div>
          </>
        ) : (
          <>
            <p>Name: {user.name}</p>
            <p>Location: {user.location}</p>
            <p>Age: {user.age}</p>
            <p>Contact: {user.contact}</p>
            <br />
            <center><button className="custom-btn mt-4 md:mt-0" onClick={handleUserEdit}>Edit</button></center>
          </>
        )}
      </section>
    </div>
  );
};

export default Userdetails;
