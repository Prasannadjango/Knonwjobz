import React from "react";
import { Container, Button, Row, Col, InputGroup, Form } from "react-bootstrap";
import Jobseekerimg from "../Assests/Images/jobseeker.jpg";
import { Link } from "react-router-dom";
function SeekerLoginform() {
  return (
    <>
      <div className="Seeker_maincontainer mb-5">
        <Container>
          <div>
            <Row xl={2}>
              <Col className="p-0">
                <img src={Jobseekerimg} className="w-100" />
              </Col>
              <Col className="login_formcontainer p-3">
                <div className="Jobseeker_btnscontainer">
                {/* <Link to='/SeekerLoginforms'></Link> */}
                  <Button>Login as Job-seeker</Button>
                  <Link to='/RecuriterLoginforms'>
                  <Button>Login as Job-Recuriter</Button>
                  </Link>
                  
                </div>
                
                <div className="Jobseeker_formfields">
                <h4 className="text-center fw-bold pb-3">Jobseeker-login</h4>
                  <Form.Control placeholder="Email-id " className="mb-4" />
                  <Form.Control placeholder="Password" />
                  <Button className="col-12">Login</Button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="mt-4 Alreadyacc_container text-center mt-5">
          <h5>Don't have an Account?</h5>
          <Link to="/Register"> Create one</Link>
           
          
        </div>
      </div>
    </>
  );
}

export default SeekerLoginform;
