import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                <div className="toggle-bar"></div>
                <div className="toggle-bar"></div>
                <div className="toggle-bar"></div>
            </button>
            <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
                <div className="sidebar-header">
                    <br/>
                    <h1 className="sidebar-title">Job Hunt</h1>
                    <button className="close-btn" onClick={toggleSidebar}>
                        &times;
                    </button>
                </div>
                <ul className="sidebar-menu">
                    <li>
                        <Link to="/" className="sidebar-link" onClick={toggleSidebar}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/appliedjobs" className="sidebar-link" onClick={toggleSidebar}>
                            Applied Jobs
                        </Link>
                    </li>
                    <li>
                        <Link to="/update" className="sidebar-link" onClick={toggleSidebar}>
                            Add Jobs
                        </Link>
                    </li>
                    <li>
                        <Link to="/up" className="sidebar-link" onClick={toggleSidebar}>
                            Add User
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="/login" className="sidebar-link" onClick={toggleSidebar}>
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link to="/register" className="sidebar-link" onClick={toggleSidebar}>
                            Register
                        </Link>
                    </li> */}
                    <li>
                        <Link to="/profile" className="sidebar-link" onClick={toggleSidebar}>
                            Profile
                        </Link>
                    </li>
                </ul>
                {/* <div className="sidebar-footer">
                    <Link to='/subscribe' className='custom-btn' onClick={toggleSidebar}>Subscribe</Link>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;
