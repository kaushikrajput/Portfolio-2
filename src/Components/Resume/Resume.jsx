import React from 'react'
import { Link } from 'react-router-dom'
import './Resume.css'


const Resume = () => {
    return (
        <div className='resume-section'>
            <div className='container'>
                <div className='resume-title '>
                    <h2 className='main-heading' >Resumé</h2>
                    <p data-aos="fade-right" data-aos-duration="1200">
                        Reach out to me via my
                        &nbsp;
                        <b><a href="/contact">contact page</a></b>&nbsp;.&nbsp;
                        <b><a href="assets/resume.pdf" target='_blank'>view</a></b>&nbsp;or&nbsp;
                        <b><a href="assets/resume-img.png" target='_blank' download>download</a></b>&nbsp;
                        the resume
                    </p>
                </div>
                {/*<div className="cv-button ">
                <a href="../assets/resume.pdf" className="flat-button" target="_blank">
                    <div>
                        <span className="bg"></span>
                        <span className="base"></span>
                        <span className="text">View</span>
                    </div>
                </a>
            </div>*/}
                <div className='resume-image' >
                    <a href="/resume">
                        <img src="assets/resume-img.png" alt="" className='img-fluid' />
                    </a>
                </div>
                <div className='to-contact-page'>
                    <Link to='/contact'>
                        <p className='mb-5'>Are you convinced to contact me now ?
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
                            </svg>
                        </p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Resume