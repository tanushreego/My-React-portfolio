import React from 'react';
import './Education.css';


const Education = () => {
    return (
        <section id="education" className="section">
            <div className="section-top">
                <h2>EDUCATION</h2>
            </div>
            <div className="education-content">
                <div className="slide">
                    <div className="education-slide">
                        <img src="/images/school2.png" alt="School 2" className="school-picture2" />
                        <div className="education-details">
                            <div className="education-title-date">
                                <p className="education-title">DAV Public School</p>
                                <p className="education-date">2018 - 2020</p>
                            </div>
                            <hr />
                            <div className="education-description">
                                <p><b>Location</b> : Ranchi, Jharkhand</p>
                                <p><b>Degree</b> : Higher Secondary Certificate</p>
                                <p><b>Major</b> : Science and Mathematics</p>
                                <p><b>Percentage</b> :  97%</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <div className="education-slide">
                        <img src="/images/school1.png" alt="School 1" className="school-picture" />
                        <div className="education-details">
                            <div className="education-title-date">
                                <p className="education-title">Vellore Institute of Technology</p>
                                <p className="education-date">2020 - 2024</p>
                            </div>
                            <hr />
                            <div className="education-description">
                                <p><b>Location</b> : Chennai, Tamil Nadu</p>
                                <p><b>Degree</b> : Bachelor of Technology</p>
                                <p><b>Major</b> : Computer Science</p>
                                <p><b>CGPA</b> :  8.21</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
