import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header'; // Import the Header component
import bannerTwo from '../../assets/All Images/OG.gif';

function Switch() {
  return (
   
    <center>
         <br/><br/><br/><br/><br/><br/>
      <div>
           
            <div className='md:flex items-center mb-12 px-6'>
                
                <div className="header-details md:w-3/5 tracking-wider ">
                    <h1 className='text-7xl w-auto md:w-5/6'>
                        One Step Closer  To Your <span className='custom-text text-7xl'>Dream Job</span>
                    </h1>
                </div>
                <div className="image-section md:w-1/2">
                    <img src={bannerTwo} alt="" srcset="" />

            <br />
          <p><b>Who you are?</b></p>
            <div className="hero-content">
              <Link to={'/adlogin'}><button className='custom-btn mt-4 md:mt-0'>Admin</button></Link>
              <a href='/login'><button className='custom-btn mt-4 md:mt-0'>User</button></a>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </center>
  );
}

export default Switch;
