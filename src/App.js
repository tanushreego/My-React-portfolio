import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Certifications from './components/Certifications/Certifications';
import TechnicalSkills from './components/TechnicalSkills/TechnicalSkills';
import CoCurricular from "./components/CoCurricular/CoCurricular";

function App() {
    return (
        <div className="App">
            <Header />
            <HomePage />
            <Education />
            <TechnicalSkills />
            <Projects />
            <Experience />
            <CoCurricular />
            <Certifications />

        </div>
    );
}

export default App;
