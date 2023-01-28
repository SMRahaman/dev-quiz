import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Dev Quiz</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto ">
                        <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/topics' className='text-decoration-none me-3 text-white'>Topics</NavLink>
                        <NavLink to='/statics' className='text-decoration-none me-3 text-white'>Statics</NavLink>
                        <NavLink to='/blog' className='text-decoration-none text-white'>Blog</NavLink>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;