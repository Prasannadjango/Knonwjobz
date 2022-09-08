import React from "react";
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import Jobseekerimg from "../Assests/Images/Jobrecuriter.jpg";
import { Link } from "react-router-dom";
function Recuriterlogin() {
  return (
    <>
      <div className="Seeker_maincontainer2 mb-5">
        <Container>
          <div>
            <Row xl={2}>
              <Col className="login_formcontainer2 p-3">
                <div className="Jobseeker_btnscontainer2">
                  <Link to="/SeekerLoginforms">
                    <Button>Login as Job-seeker</Button>
                  </Link>
                  <Button>Login as Job-Recuriter</Button>
                </div>

                <div className="JobRecuriter_formfields">
                  <h4 className="text-center fw-bold pb-3">
                    JobRecuriter-login
                  </h4>
                  <Form.Control placeholder="Email-id " className="mb-4" />
                  <Form.Control placeholder="Password" />
                  <Link to='/Jobrecuriterprofile'>
                  <Button className="col-12">Login</Button>
                  </Link>
                  
                </div>
              </Col>
              <Col className="p-0">
                <img src={Jobseekerimg} className="w-100" />
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

export default Recuriterlogin;
