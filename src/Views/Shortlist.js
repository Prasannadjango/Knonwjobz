import React from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Row,
  Nav,
  Tab,
  Badge,
  Button,
  InputGroup,
  Form,
  Modal,
  Card,
  Navbar,
  FormControl
} from "react-bootstrap";
import Person from "../Assests/Images/personimage.jpg";
function Shortlist() {

  return (
    <>
    <div className="Shortlist_profilecontainer">
    <h2 className="pt-4 ps-5">Showing Shortlisted Profiles for Senior Ui Developer</h2>
      <div className="">
         <div className="Shortlistsearch col-6 m-5">
            <Form className='d-flex'>
                <FormControl className='py-3' placeholder="Search fro profiles..."/>
                <Button type='sumbit'>Search</Button>
            </Form>
         </div>
        <div className="Shortlisted_profile d-flex  mt-4 p-4">
          <div className="pt-5 ">
            <Row md={4} xs={1} className="g-2">
              <Col>
                <Card className="Shortlisted_card border-0 p-3 my-5">
                  <div className="Shortlisted_image">
                    <img src={Person} />
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold">
                      Rambo
                    </Card.Title>
                    <Card.Text>
                      <h6 className=" text-secondary">
                        Senior Web Developer
                      </h6>
                      <h6 className="fw-bold pt-2">
                        Keyskills:
                      </h6>
                      <div className="d-flex keysills_container">
                        <div>Java</div>
                        <div>Python</div>
                        <div>c++</div>
                      </div>
                    </Card.Text>
                  </Card.Body>
                  <div className="ViewProfile_btn w-100">
                    <Button>View Profile</Button>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="Shortlisted_card border-0 p-3 my-5">
                  <div className="Shortlisted_image">
                    <img src={Person} />
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold">
                      Rambo
                    </Card.Title>
                    <Card.Text>
                      <h6 className=" text-secondary">
                        Senior Web Developer
                      </h6>
                      <h6 className="fw-bold pt-2">
                        Keyskills:
                      </h6>
                      <div className="d-flex keysills_container">
                        <div>Java</div>
                        <div>Python</div>
                        <div>c++</div>
                      </div>
                    </Card.Text>
                  </Card.Body>
                  <div className="ViewProfile_btn w-100">
                    <Button>View Profile</Button>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="Shortlisted_card border-0 p-3 my-5">
                  <div className="Shortlisted_image">
                    <img src={Person} />
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold">
                      Rambo
                    </Card.Title>
                    <Card.Text>
                      <h6 className=" text-secondary">
                        Senior Web Developer
                      </h6>
                      <h6 className="fw-bold pt-2">
                        Keyskills:
                      </h6>
                      <div className="d-flex keysills_container">
                        <div>Java</div>
                        <div>Python</div>
                        <div>c++</div>
                      </div>
                    </Card.Text>
                  </Card.Body>
                  <div className="ViewProfile_btn w-100">
                    <Button>View Profile</Button>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="Shortlisted_card border-0 p-3 my-5">
                  <div className="Shortlisted_image">
                    <img src={Person} />
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold">
                      Rambo
                    </Card.Title>
                    <Card.Text>
                      <h6 className=" text-secondary">
                        Senior Web Developer
                      </h6>
                      <h6 className="fw-bold pt-2">
                        Keyskills:
                      </h6>
                      <div className="d-flex keysills_container">
                        <div>Java</div>
                        <div>Python</div>
                        <div>c++</div>
                      </div>
                    </Card.Text>
                  </Card.Body>
                  <div className="ViewProfile_btn w-100">
                    <Button>View Profile</Button>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="Shortlisted_card border-0 p-3 my-5">
                  <div className="Shortlisted_image">
                    <img src={Person} />
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold">
                      Rambo
                    </Card.Title>
                    <Card.Text>
                      <h6 className=" text-secondary">
                        Senior Web Developer
                      </h6>
                      <h6 className="fw-bold pt-2">
                        Keyskills:
                      </h6>
                      <div className="d-flex keysills_container">
                        <div>Java</div>
                        <div>Python</div>
                        <div>c++</div>
                      </div>
                    </Card.Text>
                  </Card.Body>
                  <div className="ViewProfile_btn w-100">
                    <Button>View Profile</Button>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="Shortlisted_card border-0 p-3 my-5
                ">
                  <div className="Shortlisted_image">
                    <img src={Person} />
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold">
                      Rambo
                    </Card.Title>
                    <Card.Text>
                      <h6 className=" text-secondary">
                        Senior Web Developer
                      </h6>
                      <h6 className="fw-bold pt-2">
                        Keyskills:
                      </h6>
                      <div className="d-flex keysills_container">
                        <div>Java</div>
                        <div>Python</div>
                        <div>c++</div>
                      </div>
                    </Card.Text>
                  </Card.Body>
                  <div className="ViewProfile_btn w-100">
                    <Button>View Profile</Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
}

export default Shortlist;
