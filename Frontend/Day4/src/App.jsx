
import './App.css'
// import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <div>
        {/* <Router>
          <Routes>
            <Route path="/login" exact element={<Login/>} />
          </Routes>
        </Router> */}
      <Navbar/>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default App;