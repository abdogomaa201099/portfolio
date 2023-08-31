import React, { useState } from 'react';
import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import ProjectPage from './ProjectPage';
import { Nav, Navbar } from 'react-bootstrap';

const Navb = () => {
    return (
        <BrowserRouter>
            <Navbar className='container-fluid d-flex justify-content-center fs-5' style={{ backgroundColor: "#392A46", fontFamily: "math" }}>
                <Nav>
                    <NavLink className='m-2' style={{ textDecoration: "none", color: "#8A34FA", fontSize: 22 }} exact to="/">Home</NavLink>
                    <NavLink className='m-2' style={{ textDecoration: "none", color: "#8A34FA", fontSize: 22 }} to="/experience">Experience</NavLink>
                    <NavLink className='m-2' style={{ textDecoration: "none", color: "#8A34FA", fontSize: 22 }} to="/projects">Projects</NavLink>
                </Nav>
            </Navbar>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route exact path="/projects/:id" element={<ProjectPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Navb;
