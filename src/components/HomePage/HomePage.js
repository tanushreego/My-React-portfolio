import React from 'react';
import './HomePage.css';

const Home = () => {
    return (
        <section id="home" className="home-section">
            <div className="home-content" align="center">
                <div className="profile-picture" align="center">
                    <img src="/images/profile.jpeg" alt="Profile" />
                </div>
                <div className="intro">
                    <h1>TANUSHREE GORAI .</h1>
                    <p>Passionate about computer science and exploring the world of coding and algorithms. </p>
                    <p> A dedicated learner striving to make a positive impact through technology.</p>
                    <div className="contact-details" >
                        <a href="mailto:tanushree.gorai277@gmail.com">
                            <img
                                src="/images/contact/mail.webp"
                                alt="Arrow"
                                className="contact-icon"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/tanushree-gorai-1b437a1b7/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/images/contact/linkedin.png"
                                alt="Arrow"
                                className="contact-icon"
                            />
                        </a>
                        <a href="https://github.com/tanushreego" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/images/git.png"
                                alt="Arrow"
                                className="contact-icon"
                            />
                        </a>
                        <a href="https://www.youtube.com/c/TanushreeGorai" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/images/contact/youtube.avif"
                                alt="Arrow"
                                className="contact-icon"
                            />
                        </a>
                        <a href="https://www.instagram.com/goraitanushree_/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/images/contact/instagram.png"
                                alt="Arrow"
                                className="contact-icon"
                            />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Home;


