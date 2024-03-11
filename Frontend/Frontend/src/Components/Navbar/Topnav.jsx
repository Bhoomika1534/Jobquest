import React from 'react';
import CareerHub from '../../assets/All Images/CareerHub.png'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const TopNav = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    const user= JSON.parse(localStorage.getItem("user1"));
    console.log(user);
    return (
        <div className='m-4'>
            <div className="navbar bg-base-100 p-5 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            <li>
                                <Link to="/" className='default '>
                                    Home
                                </Link>
                            </li>
                            
                            {/* <li>
                                <Link to="/statistic" className='default'>
                                    Statistic
                                </Link>
                            </li> */}
                            <li>
                                <Link to="/appliedjobs" className='default'>
                                    Applied Jobs
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className=''>
                                    Login
                                </Link>
                            </li>
                            {/* <li>
                                <Link to="/blog" className='default'>
                                    Blog
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                    <Link to="/" className='normal-case text-5xl custom-text font-bold'>Job Hunt</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 tracking-wider font-medium">
                        <li>
                            <Link to="/home" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>
                                Home
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="/statistic" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>
                                Statistic
                            </Link>
                        </li> */}
                        <li>
                            <Link to="/appliedjobs" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>
                                Applied Jobs
                            </Link>
                        </li>
                        <li>
                                <Link to="/show" className='default '>
                                    Show Jobs
                                </Link>
                            </li>
                        {/* <li>
                            <Link to="/login" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>
                                Login
                            </Link>
                        </li> */}
                        {/* <li>
                            <Link to="/register" className={({ isActive }) => (isActive ? 'text-blue-600' : 'default')}>
                                Register
                            </Link>
                        </li> */}
                         <li>  <div onClick={toggleDropdown}>
                Profile
            </div>
            {showDropdown && (
                <ul className='bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center '>
                  <Link to="/uprofile"> <li>Edit profile</li></Link>
                  <Link to="/"><li>Logout</li></Link>
                </ul>
            )}
        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="custom-btn">Start Applying</a> */}
                    <Link to='/subscribe' className='custom-btn'>Subscribe</Link>
                </div>
            </div>
        </div>
    );
};

export default TopNav;