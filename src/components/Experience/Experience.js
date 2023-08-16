import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="section-top">
                <h2>EXPERIENCE</h2>
            </div>
            <div className="experience-item">
                <div className="experience-heading">
                    <h3>Full Stack Software Engineer Intern</h3>
                    <p>May 2023 - Jul 2023</p>
                </div>
                <hr/>
                <h4>
                    <img
                        src="/images/building.png"
                        alt="Arrow"
                        className="building-icon"
                    />
                    KaizIQ - Remote</h4>
                <p>
                    <ul>
                        <li>Played a pivotal role in their DevOps platform, utilizing React.js to fix frontend and backend bugs.</li>
                        <li>Developed an Analytics feature for users, projects, and organizations that analyzed productivity and efficiency metrics, fostering data-driven decision-making.</li>
                        <li>Actively embraced the agile development cycle and gained valuable experience on GitHub.</li>
                    </ul>
                </p>
            </div>
            <div className="experience-item">
                <div className="experience-heading">
                    <h3>Data Analyst Extern</h3>
                    <p>May 2023 - Jun 2023</p>
                </div>
                <hr/>
                <h4>
                    <img
                        src="/images/building.png"
                        alt="building"
                        className="building-icon"
                    />
                    Smartinternz - Remote</h4>
                <p>
                    <ul>
                        <li>Gained valuable experience working with Tableau, MySQL Workbench, and IBM Cognos.</li>
                        <li>Collaborated on the project "Data-Driven Insights on Olympic Sports Participation and Performance".
                            <a href="https://olympics-analysis-vit.github.io/" target="_blank" rel="noreferrer">
                                <img
                                    src="/images/click.png"
                                    alt="Arrow"
                                    className="click-icon"
                                />
                            </a>
                        </li>
                        <li>Primarily led the Tableau visualizations and also gained a brief idea of Bootstrap and Flask.</li>
                    </ul>
                </p>
            </div>
        </section>
    );
}

export default Experience;
