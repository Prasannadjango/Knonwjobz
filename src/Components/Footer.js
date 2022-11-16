import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import googleplaylogo from "../Assests/Images/googleplaylogo.png";
import applestorelogo from "../Assests/Images/appstorelogo.png";
import { MdLocationPin, MdStayCurrentPortrait, MdDrafts } from "react-icons/md";
function Footer() {
  return (
    <>
      <div className="Footer_maincontainer ">
        
        <hr className="m-0 bg-white " />
        <div className="Footer_maincontents pt-5">
          <Container>
            <Row lg={4} md={2} xs={1} className="px-xl-5 px-1 mx-0">
              <Col>
                <h5 className="fw-bold pb-3">Quick-links</h5>
                <ul
                  className="p-0 Quick_linklist"
                  style={{ listStyleType: "none" }}
                >
                  <li>
                    <Link to="/" className="text-decoration-none ">Home</Link>
                    </li>
                  <li>
                    <Link to="/Searchjob" className="text-decoration-none ">jobs</Link>
                    </li>

                  <li>
                  <Link to="/Aboutus" className="text-decoration-none ">About-us</Link>

                  </li>
                  <li>
                  <Link to="/Contact" className="text-decoration-none ">Contact-us</Link>

                  </li>
                  <li>
                  <Link to="/Register" className="text-decoration-none ">Register</Link>
                  </li>
                  <li>
                  <Link to="/SeekerLoginforms" className="text-decoration-none ">Login</Link>
                   
                  </li>
                </ul>
              </Col>
              <Col>
                <h5 className=" fw-bold pb-3">Get the App now</h5>
                <div className="mb-3 ">
                  <img src={googleplaylogo} className='w-50' />
                </div>
                <div>
                  <img src={applestorelogo} className='w-50' />
                </div>
              </Col>
              <Col>
                <h5 className="fw-bold pb-3">Connect with us</h5>
                <div className="Footer-socialmediaicons">
                  <span>
                    <FaFacebookF />
                  </span>
                  <span>
                    <FaGoogle />
                  </span>
                  <span>
                    <FaInstagram />
                  </span>
                </div>
              </Col>
              <Col>
                <h5 className=" fw-bold pb-3">Contact us</h5>
                <div>
                  <div className="d-flex Contact_icons">
                    <MdLocationPin className="mt-1 fs-4 me-2" />
                    <p className="pt-1">Tamilnadu,India</p>
                  </div>
                  <div className="d-flex Contact_icons">
                    <MdStayCurrentPortrait className="mt-1 fs-4 me-2" />
                    <p className="pt-1 ">+91-33433423</p>
                  </div>
                  <div className="d-flex Contact_icons">
                    <MdDrafts className="mt-1 fs-4 me-2" />
                    <p className="pt-1 ">Knownjobz@gmail.com</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
export default Footer;
