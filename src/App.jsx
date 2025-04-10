import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import DinoScene from './DinoScene';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Profile from './profile';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Contact from './contact';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? 'rgb(41, 41, 63)' : '#f8f9fa';
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode(prev => !prev);
  };

  const navbarClass = darkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light';
  const pageStyle = {
    backgroundColor: darkMode ? 'rgb(41, 41, 63)' : '#f8f9fa',
    color: darkMode ? 'white' : 'black',
    minHeight: '100vh',
    paddingTop: '80px'
  };

  return (
    <div style={pageStyle}>
      <nav className={`navbar navbar-expand-lg ${navbarClass} fixed-top`} style={{ zIndex: 1000 }}>
        <div className="container-fluid">

          {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
  <img src="/logo.png" alt="Logo" width="30" height="30" className="d-inline-block align-top me-2"/>
  Erick Gonzalez
</Link>
{/* inician botones */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active fw-bold" : "")} to="/">Home</NavLink>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Projects
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Project 1</a></li>
              <li><a className="dropdown-item" href="#">Project 2</a></li>
              <li><a className="dropdown-item" href="#">Project 3</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active fw-bold" : "")} to="/profile">Profile</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active fw-bold" : "")} to="/contact">Contact</NavLink>
          </li>
        </ul>
    </div>
  </div>
        {/* ... navbar ... */}
</nav>
  
      <div className="container">
        <p className="position-absolute top-0 start-0 mt-5 ms-3" style={{zIndex: 10}}>{darkMode ? 'Dark Mode' : 'Light Mode'}</p>
        
        <button 
          className={`btn btn-outline-secondary position-absolute ${darkMode ? 'move-btn' : ''}`} 
          onClick={toggleMode}
          style={{
            top: '70px',
            left: '1.3rem',
          }}
        >
          <img
            src={darkMode ? "/luna.png" : "/sol.png"}
            alt={darkMode ? "Luna" : "Sol"}
            style={{ width: '40px', height: '24px' }}
          />
        </button>
      </div>
  
  <Routes>
  <Route path="/contact" element={<Contact />} />
    <Route path="/" element={
      <div className="container mt-5" style={{marginTop: '100px'}}>
        <div className="d-flex">
          <div style={{ flex: '2', height: '400px' }}>
            <DinoScene />
         </div>
          <div style={{ flex: '4', paddingLeft: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'justify' }}>
           <h2>Welcome to my portfolio</h2>
           <p>This is where you'll find my projects as a Full Stack developer.</p>
         </div>
       </div>
     </div>
  } />
  <Route path="/profile" element={<Profile />} />
</Routes>

                                                  {/* Footer */}

      <footer className={`container-fluid py-3 mt-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} fixed-bottom`}>
  <div className="container d-flex justify-content-between align-items-center flex-wrap">
    <div className="d-flex flex-column flex-sm-row gap-4">
      <a href="https://www.linkedin.com/in/erick-gonzalez-dev/" className={`text-decoration-none ${darkMode ? 'text-light' : 'text-dark'}`} target="_blank" rel="noopener noreferrer">
        Linkedin
      </a>
      <a href="https://github.com/ErickGonzalezV" className={`text-decoration-none ${darkMode ? 'text-light' : 'text-dark'}`} target="_blank" rel="noopener noreferrer">
        Github
      </a>
    </div>
    <div className="mt-3 mt-sm-0">
      <span>© {new Date().getFullYear()} All rights reserved</span>
    </div>
  </div>
</footer>

    </div>
  ); 
}



export default App;
