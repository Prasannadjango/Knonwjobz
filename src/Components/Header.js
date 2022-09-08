import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from '../Assests/Images/Knownjobz logo.jpeg'
function Header() {
  return (
    <>
      <Navbar expand="lg">
       
          <Navbar.Brand className="ms-3"><img src={Logo}/></Navbar.Brand>
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
              <Nav.Link  href="#link" className="mt-2">
                <Link to='/Skillassessment'>Skill Assessment</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Register">
                  <button className="Register_btn border-0 text-white">
                    Register
                  </button>
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                <Link to="/SeekerLoginforms">
                  <button className="Login_btn">Login</button>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
       
      </Navbar>
    </>
  );
}

export default Header;
