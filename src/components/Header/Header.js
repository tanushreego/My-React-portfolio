import React from 'react';
import './Header.css';
const Header = () => {
    const handleHomeClick = () => {
        // Scroll to the home section and trigger the animation
        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleEducationClick = () => {
        // Scroll to the home section and trigger the animation
        const EducationSection = document.getElementById('education');
        if (EducationSection) {
            EducationSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleSkillsClick = () => {
        // Scroll to the home section and trigger the animation
        const SkillsSection = document.getElementById('technical-skills');
        if (SkillsSection) {
            SkillsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleProjectsClick = () => {
        // Scroll to the home section and trigger the animation
        const ProjectsSection = document.getElementById('projects');
        if (ProjectsSection) {
            ProjectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleExperienceClick = () => {
        // Scroll to the home section and trigger the animation
        const ExperienceSection = document.getElementById('experience');
        if (ExperienceSection) {
            ExperienceSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleCoCurricularClick = () => {
        // Scroll to the home section and trigger the animation
        const CoCurricularSection = document.getElementById('cocurricular');
        if (CoCurricularSection) {
            CoCurricularSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleCertificationsClick = () => {
        // Scroll to the home section and trigger the animation
        const CertificationsSection = document.getElementById('certifications');
        if (CertificationsSection) {
            CertificationsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (

            <div className={"header1"}>
                <nav>
                    <ul>
                        <li><button onClick={handleHomeClick}>Home</button></li>
                        <li><button onClick={handleEducationClick}>Education</button></li>
                        <li><button onClick={handleSkillsClick}>Skills</button></li>
                        <li><button onClick={handleProjectsClick}>Projects</button></li>
                        <li><button onClick={handleExperienceClick}>Experience</button></li>
                        <li><button onClick={handleCoCurricularClick}>Co-Curricular</button></li>
                        <li><button onClick={handleCertificationsClick}>Certifications</button></li>
                    </ul>
                </nav>
            </div>
    );
}

export default Header;
