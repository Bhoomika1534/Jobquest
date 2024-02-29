import React from 'react';
import './App.css'
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
        
        {/* <Router>
          <Routes>
            <Route path="/login" exact element={<Login/>} />
          </Routes>
        </Router> */}
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default App;