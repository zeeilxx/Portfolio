import React from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import About from './pages/about';
import Experience from './pages/experience';
import Home from './pages/home';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Organizational from './pages/organizational';

function App() {
  useEffect(() => {
    function disablePreloader() {
      const loader = document.getElementsByClassName('preloader')[0];
      loader.style.display = 'none';
    }
    setTimeout(() => {
      disablePreloader();
    }, 3000);
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home></Home>
              <Experience></Experience>
              <Organizational></Organizational>
              <Projects></Projects>
              <Skills></Skills>
              <About></About>
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
