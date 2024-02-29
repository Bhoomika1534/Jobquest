import React, { useState } from 'react';
import Header from '../Header/Header';
import JobSection from '../JobSection/JobSection';
import JobCategory from '../JobCategory/JobCategory';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import Search from '../Search/Search';
import Navbar from '../Navbar/Navbar';
import { FaBars } from 'react-icons/fa'; // Import FaBars icon from react-icons/fa
import TopNav from '../Navbar/Topnav';

const Home = () => {
    const category = useLoaderData();
    useTitle('Home');
    const [showSidebar, setShowSidebar] = useState(false); // State to manage sidebar visibility
    
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    
    return (
        <div className='pt-10 px-10'>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {/* <FaBars /> FaBars icon for toggling sidebar */}
            </button>
            <div className="home-content">
            <TopNav/>
 
                <Search />
                <Header />
                <JobCategory category={category} />
                <JobSection />
                <Footer />
            </div>
            {showSidebar && <Navbar />} {/* Render Navbar component based on sidebar visibility */}
        </div>
    );
};

export default Home;
