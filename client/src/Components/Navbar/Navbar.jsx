import { React, useState } from 'react'
import './Navbar.css'
import { Sling as Hamburger } from 'hamburger-react'
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navbar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false)
        setOpen(false)
    };

    const handleShow = () => setShow(true);

    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <header className="header ">
                <nav className="nav-style">
                    <div className='container d-flex justify-content-between'>
                        <div className="navbar-brand" >
                            <Link to="/" className='logo'>
                                <img src="assets/logo.png" alt='' className='img-fluid' ></img>
                            </Link>
                        </div>
                        <div className="nav-items">
                            <ul className="nav-list ml-auto">
                                <li className='nav-item'>
                                    <Link to="/about" className='nav-link' >About</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/work" className='nav-link'>Projects</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/resume" className='nav-link'>Resume</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to="/contact" className='nav-link'>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='menu-style'>
                        <div className='hamburger-menu' onClick={handleShow}>
                            <Hamburger toggled={isOpen} toggle={setOpen} direction='right' color='#545454' />
                        </div>
                    </div>
                </nav>
            </header>

            <Offcanvas show={show} onHide={handleClose} scroll='true'>
                <Offcanvas.Header >
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='navbar-collapse'>
                        <button className='close-nav' onClick={handleClose}>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                                <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"></path>
                            </svg>
                        </button>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item hover-bottom' onClick={handleClose}>
                                <Link to='/' className='nav-links is-active'>Home</Link>
                            </li>
                            <li className='nav-item hover-bottom' onClick={handleClose}>
                                <Link to='/about' className='nav-link '>About</Link>
                            </li>
                            <li className='nav-item hover-bottom' onClick={handleClose}>
                                <Link to='/work' className='nav-link '>Project</Link>
                            </li>
                            <li className='nav-item hover-bottom' onClick={handleClose}>
                                <Link to='/resume' className='nav-link '>Resume</Link>
                            </li>
                            <li className='nav-item hover-bottom' onClick={handleClose}>
                                <Link to='/contact' className='nav-link '>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Navbar