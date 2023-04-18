import logo from './logo.svg';
import React from 'react';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Custom from './Custom';

function App() {
  return (
    
  <React.Fragment>
    <Router>
      <div>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/Home" element={<Home/>}></Route>
        <Route exact path="/Login" element={<Login/>}></Route>
        <Route exact path="/Logout" element={<Home/>}></Route>
        <Route exact path="/Custom" element={<Custom/>}></Route>

        

      </Routes>
      </div>
    </Router>
    </React.Fragment>
  );
}


export default App;
