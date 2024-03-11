import React from 'react';
import bannerImage from '../../assets/All Images/NowHiring_1.gif'

const Header = () => {
    return (
        <div>
            {/* <div className="w-full flex items-center justify-around bg-white px-2 md:py-6 shadow-2xl rounded-full">
                <input
                    type="text"
                    placeholder="Search for jobs..."
                    // className="w-full p-2 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
            </div> */}
            <div className='md:flex items-center mb-12 px-6'>
                
                <div className="header-details md:w-3/5 tracking-wider ">
                    <h1 className='text-7xl w-auto md:w-5/6'>
                        One Step Closer  To Your <span className='custom-text text-7xl'>Dream Job</span>
                    </h1>
                    <p className='w-auto md:w-5/6 mt-6 leading-relaxed'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='custom-btn mt-4'>Get Started</button>
                </div>
                <div className="image-section md:w-1/2">
                    <img src={bannerImage} alt="" srcset="" />
                </div>
            </div>
            
        </div>
    );
};

export default Header;
