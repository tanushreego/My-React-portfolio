import React from 'react';
import './TechnicalSkills.css';

const TechnicalSkills = () => {
    return (
        <section id="technical-skills" className="section technical-skills">
            <div className="section-top">
                <h2>TECHNICAL SKILLS</h2>
            </div>
            <div className="skills-table">
                <table>
                    <thead>
                    <tr>
                        <th>Skills</th>
                        <th>Advance</th>
                        <th>Intermediate</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>Programming Languages</th>
                        <td>
                            <img src="./images/skills/cpp.png" alt="cpp" className="logo"/>
                        </td>
                        <td>
                            <img src="./images/skills/c.png" alt="c" className="logo"/>
                            <img src="./images/skills/python.png" alt="python" className="logo"/>
                            <img src="./images/skills/java.png" alt="java" className="logo"/>
                            <img src="./images/skills/r.webp" alt="r" className="small"/>
                        </td>
                    </tr>
                    <tr>
                        <th>Database and Development Tools</th>
                        <td>
                            <img src="./images/skills/sql.png" alt="sql" className="logo"/>
                            <img src="./images/skills/html.png" alt="html" className="small"/>
                            <img src="./images/skills/css.png" alt="css" className="small"/>
                        </td>
                        <td>
                            <img src="./images/skills/php.png" alt="php" className="small"/>
                            <img src="./images/skills/js.png" alt="js" className="small"/>
                            <img src="./images/skills/react.webp" alt="react" className="logo"/>
                        </td>
                    </tr>
                    <tr>
                        <th>Experienced in Software</th>
                        <td>
                            <img src="./images/skills/tableau.png" alt="tableau" className="logo"/>
                            <img src="./images/skills/git.png" alt="git" className="logo"/>
                            <img src="./images/skills/figma.png" alt="figma" className="small"/>
                            <img src="./images/skills/rstudio.png" alt="rstudio" className="small"/>
                            <img src="./images/skills/gb.png" alt="gb" className="small"/>
                            <img src="./images/skills/fl.png" alt="fl" className="small"/>
                        </td>
                        <td>
                            <img src="./images/skills/docker.webp" alt="docker" className="small"/>
                            <img src="./images/skills/ana.png" alt="ana" className="logo"/>
                            <img src="./images/skills/aws.png" alt="aws" className="small"/>
                        </td>
                    </tr>
                    <tr className="others">
                        <th>Others</th>
                        <td className="others"><b>Data Structures and Algorithms, Machine Learning, Software Engineering, Data Analytics, DevOps</b></td>
                        <td className="others"><b>Cloud computing, Web Mining, Natural language processing</b> </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default TechnicalSkills;
