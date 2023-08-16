import React from 'react';
import './CoCurricular.css';

const CoCurricular = () => {
    return (
        <section id="cocurricular" className="section">
            <div className="section-top">
                <h2>CO-CURRICULAR AND POR</h2>
            </div>
            <div className="cocurricular-content">
                <div className="cocurricular-row">
                    <div className="cocurricular-item">
                        <div className="head">
                            <a href="https://auth.geeksforgeeks.org/user/tanushreegorai277/practice" target="_blank" rel="noopener noreferrer">
                                <img align="left" src="./images/gfg.jpeg" alt="Project" className="arrow-icon"/>
                            </a>
                            <h3>GEEKS FOR GEEKS</h3>
                        </div>
                        <h4>Contributor</h4>
                        <p>
                            <ul>
                                <li>Contributor, Competitive coder, and learner.</li>
                                <li>Top scores in Data structures and C++ programming.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="cocurricular-item">
                        <div className="head">
                            <a href="https://auth.geeksforgeeks.org/user/tanushreegorai277/practice" target="_blank" rel="noopener noreferrer">
                                <img align="left" src="./images/hacker.png" alt="Project" className="head"/>
                            </a>
                            <h3>HACKER RANK</h3>
                        </div>
                        <h4>Contributor</h4>

                        <p>
                            <ul>
                                <li>Contributor, Competitive coder, and learner.</li>
                                <li>Earned a 5-star and gold Hacker Rank badge in C++ programming, Java Programming, Python, and Problem solving.</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="cocurricular-row">
                    <div className="cocurricular-item">
                        <div className={"head"}>
                            <img align="left" src="./images/music.jpeg" alt="Project" />
                            <h3>MUSIC CLUB VITCC</h3>
                        </div>
                        <h4>Core Member</h4>
                        <p>
                            <ul>
                                <li>Supported top positions in various musical competitions.</li>
                                <li>Developed various Audio projects using GarageBand and FL Studio</li>
                            </ul>
                        </p>
                    </div>
                    <div className="cocurricular-item">
                        <div className={"head"}>
                            <img  align="left" src="./images/under_25.png" alt="Project" />
                            <h3>UNDER25 VIT</h3>
                        </div>
                        <h4>Design Head</h4>
                        <p>
                            <ul>
                                <li>Led several Audio and Visual projects using Figma and GarageBand. </li>
                                <li>Enhanced the outreach and engagement of the Under 25 committee.</li>
                            </ul>
                            </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default CoCurricular;
