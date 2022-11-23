import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '../Assests/Images/Knownjobz logo.jpeg'
function Header() {
  return (
    <>
      <Navbar expand="lg">
       
          <Navbar.Brand className="ms-3"  onClick={() => window.location.reload(false)}><img src={Logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link href="#home" className="mt-2 ">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link href="#link" className="mt-2">
                <Link to="/Searchjob">Jobs</Link>
              </Nav.Link>
              <Nav.Link href="#home" className="mt-2">
                <Link to="/Aboutus">Aboutus</Link>
              </Nav.Link>
              <Nav.Link href="#link" className="mt-2">
                <Link to="/Contact">Contact</Link>
              </Nav.Link>
              <Nav.Link  className="mt-2">
                <Link to="/Companies">Companies</Link>
              </Nav.Link>
             
              <Nav.Link  href="#link" className="mt-2">
                <Link to='/Skillassessment'>Skill Assessment</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/SeekerLoginforms">
                  <button className="Register_btn border-0 text-white">
                   Sign-in
                  </button>
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/Register">
                  <button className="Login_btn">Register</button>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
       
      </Navbar>
    </>
  );
}

export default Header;
