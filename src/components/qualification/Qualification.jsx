import React from "react";
import "./qualification.css";
import { useState } from "react";

const Qualification = () => {
    
    const [toggleState, setToggleState] = useState(1);
    const toggleTab =(index) =>{
        setToggleState(index);

    }
    
        return(
        <section className="qualification section">
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className= {toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap 
                        qualificaiton__icon"></i> Education
                    </div>

                    <div className={toggleState === 2? "qualification__button qualification__active button--flex":"qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt 
                        qualificaiton__icon" ></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1? "qualification__content qualification__content-active" : "qualification__content"}>
            
            {/*------------Education list element start------------*/}            
                        <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">UX Design Certificate</h3>
                                    <span className="qualification__subtitle">Google</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> May 2022
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
            {/*------------Education list element end------------*/}
                        <div className="qualification__data">
                        <div> </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            
                                <div>
                                    <h3 className="qualification__title">Human-Computer Interaction</h3>
                                    <span className="qualification__subtitle">The Interaction Design Foundation</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> Jan 2022
                                    </div>
                                </div>


                            </div>
                        
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Computer Science and Engineering</h3>
                                <span className="qualification__subtitle">Kalinga Institute of Industrial Technology</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2016 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div> </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">High School</h3>
                                <span className="qualification__subtitle">La Martiniere College</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2014 - 2016
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={toggleState === 2? "qualification__content qualification__content-active" : "qualification__content"}>
            
            {/*------------Experience list element start------------*/}            
                        <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">UI/UX Designer</h3>
                                    <span className="qualification__subtitle">HighRadius</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> Sep 2021 - Dec 2022
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
            {/*------------Experience list element end------------*/}
                        <div className="qualification__data">
                            <div> </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>

                                <div>
                                    <h3 className="qualification__title">Visual Designer</h3>
                                    <span className="qualification__subtitle">HighRadius</span>
                                    <div className="qualification__calendar">
                                        <i className="uil uil-calendar-alt"></i> Aug 2020 - Sep 2021
                                    </div>
                                </div>

                            </div>
                        
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Product Marketing- Intern</h3>
                                <span className="qualification__subtitle">HighRadius</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Aug 2019 - Sep 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>

    );
}
export default Qualification