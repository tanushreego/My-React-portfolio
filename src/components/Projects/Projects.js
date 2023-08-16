import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="section projects">
            <div className="section-top">
                <h2>PROJECT</h2>
            </div>
            <div className="projects-content">
                <div className="slide">
                    <div className="project-slide">
                        <div className="project-image">
                            <img src="./images/olympic.jpeg" alt="Project" />
                        </div>
                        <div className="project-details">
                            <div className="project-title-date">
                                <p className="project-title">Olympic Games - Analytics and Prediction Model for Results
                                    <a href="https://github.com/tanushreego/Olympic-medal-prediction-visualization-model" target="_blank" rel="noopener noreferrer">
                                        <img
                                            src="./images/git.png"
                                            alt="Arrow"
                                            className="arrow-icon"
                                        />
                                    </a>
                                </p>
                                <p className="project-date">Nov 2022</p>
                            </div>
                            <hr/>
                            <div className="project-description">
                                <div className="project-description-inner">
                                    <div className="project-tools">
                                        <p><b>Tools</b>: R Studio</p>
                                    </div>
                                    <p>Using Linear Regression Model, Linear transform to log transformed value, Poisson Regression, Negative Binomial Regression.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <div className="project-slide">
                        <div className="project-image">
                            <img src="./images/flock_market.jpg" alt="Project" />
                        </div>
                        <div className="project-details">
                                <div className="project-title-date">
                                    <p className="project-title">Flock Market - A Store for Local Grocery Shops
                                        <a href="https://github.com/tanushreego/A-store-for-local-grocery-shops--Flock-Market" target="_blank" rel="noopener noreferrer">
                                            <img
                                                src="./images/git.png"
                                                alt="Arrow"
                                                className="arrow-icon"
                                            />
                                        </a>
                                    </p>

                                    <p className="project-date">Nov 2022</p>
                                </div>
                            <hr/>
                            <div className="project-description">
                                <div className="project-description-inner">
                                    <div className="project-tools">
                                        <p><b>Tools</b>: HTML, CSS, Javascript</p>
                                    </div>
                                    <p>Assist neighbourhood shops and general stores in competing with other major retailers for customers' business, recognition, and profit in form of a website.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <div className="project-slide">
                        <div className="project-image">
                            <img src="./images/hate_recognition.pbm" alt="Project" />
                        </div>
                        <div className="project-details">
                            <div className="project-title-date">
                                <p className="project-title">Social Media Hate Recognition System
                                    <a href="https://github.com/tanushreego/Using-twitter-dataset-Social-Media-Hate-Recognition-system" target="_blank" rel="noopener noreferrer">
                                        <img
                                            src="./images/git.png"
                                            alt="Arrow"
                                            className="arrow-icon"
                                        />
                                    </a>
                                </p>
                                <p className="project-date">Mar 2023</p>
                            </div>
                            <hr/>
                            <div className="project-description">
                                <div className="project-description-inner">
                                    <div className="project-tools">
                                        <p><b>Tools</b>: Python, Google Colab</p>
                                    </div>
                                    <p>Initiative to identify hate speech on social media using various machine learning algorithm and natural language processing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <div className="project-slide">
                        <div className="project-image">
                            <img src="./images/music_player.jpeg" alt="Project" />
                        </div>
                        <div className="project-details">
                            <div className="project-title-date">
                                <p className="project-title">Gesture-Controlled Music Player
                                    <a href="https://github.com/tanushreego/Gesture-Controlled-Music-Player" target="_blank" rel="noopener noreferrer">
                                        <img
                                            src="./images/git.png"
                                            alt="Arrow"
                                            className="arrow-icon"
                                        />
                                    </a>
                                </p>
                                <p className="project-date">May 2022</p>
                            </div>
                            <hr/>
                            <div className="project-description">
                                <div className="project-description-inner">
                                    <div className="project-tools">
                                        <p><b>Tools</b>: Arduino & Python IDE, IR sensors, Arduino Uno</p>
                                    </div>
                                    <p>Gesture enabled music player which played certain tracks and built the functionality of moving forward and backwards, pausing and playing a track by certain gestures.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
