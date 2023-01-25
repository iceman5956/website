import React from "react";
import { useState } from "react";
import "./services.css"

const Services= () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab =(index) =>{
        setToggleState(index);
    }
    return(
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What can I do for you</span>
            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Product <br /> Designer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>View More 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Product Designer</h3>
                            <p className="services__modal-description">I have 1+ years of experience, providing quality work to clients and companies.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Conduct research and analyze how a new product ties in with market needs and consumer preferences.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Set design requirements based on briefs from internal teams and external partners.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Produce prototypes and test functionality.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Develop web pages.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Improve the design of existing products.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">UI/UX <br /> Designer</h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className="services__button">View More 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => {toggleTab(0)}}></i>

                            <h3 className="services__modal-title">UI/UX Designer</h3>
                            <p className="services__modal-description">I have 2+ years of experience. Some of the things I've worked on include landing pages, mobile apps and small interactive games.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Understand the problem- empathize with the user.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Conduct User interviews and market research.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Create meaningful user journeys.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Build high fidelity prototypes.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Create custom animations and micro-interactions.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                
                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Visual <br /> Designer</h3>
                    </div>

                    <span className="services__button" onClick={() => {toggleTab(3)}}>View More 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={() => {toggleTab(0)}}></i>

                            <h3 className="services__modal-title">Visual Designer</h3>
                            <p className="services__modal-description">I have 3+ years of experience, Some of the things I've worked on include logo design, graphics, videos and assets for end-to-end marketing campaigns.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    I develop illustrations, logos and other designs.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Combine various colors, shapes and typography fonts to improve user experience.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Conceptualize visuals based on requirements.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Design and mockups of products for companies.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                    Ensure final graphics and layouts are visually appealing and on-brand.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
export default Services