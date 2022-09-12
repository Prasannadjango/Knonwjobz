import React, { useState } from "react";
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
  Card

} from "react-bootstrap";
import {
  BsFillBriefcaseFill,
  BsLayoutTextWindowReverse,
  BsReceipt,
  BsPersonLinesFill,
  BsFillCameraFill,
} from "react-icons/bs";
import {
  HiHome,
  HiOutlineClipboardList,
  HiBriefcase,
  HiChatAlt2,
  HiUserGroup,
} from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import Person from "../Assests/Images/personimage.jpg";
import Companylog from "../Assests/Images/Complogo.jpg";
import { MultiSelect } from "react-multi-select-component";
function Jobrecuiterprofile() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show8, setShow8] = useState(false);
  const handleClose8 = () => setShow8(false);
  const handleShow8 = () => setShow8(true);

  const [selected, setSelected] = useState([]);
  const options = [
    { label: "CSS", value: "CSS" },
    { label: "Java", value: "Java" },
    { label: "Php", value: "Php" },
  ];
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  return (
    <>
      <div className="Jobrecuirter_container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3} className=" py-4 pe-0 bg-white SideBar_container">
              <Nav variant="pills" className="flex-column ">
                <Nav.Item>
                  <Nav.Link eventKey="first" className="d-flex">
                    <HiHome />
                    <p className="pt-1">Home</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" className="d-flex">
                    <HiOutlineClipboardList />
                    <p className="pt-1">Company Profile</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" className="d-flex">
                    <HiBriefcase />
                    <p className="pt-1">Post a Job</p>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="Fifth" className="d-flex">
                    <HiChatAlt2 />
                    <p className="pt-1">Manage Messages</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth" className="d-flex">
                    <HiUserGroup />
                    <p className="pt-1">Manage Followers</p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="seventh" className="d-flex">
                    <BiLogOut />
                    <p className="pt-1">Logout</p>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} className="p-0 ">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="Home-container p-4 ms-4">
                    <div className="Homeboxes_container col-12">
                      <Row>
                        <Col xl={5} className="me-5">
                          <div className=" d-flex Box_header1">
                            <div>
                              <BsFillBriefcaseFill />
                            </div>
                            <div>
                              <h1 className="fw-bold text-end">10</h1>
                              <h5>Job-posted</h5>
                            </div>
                          </div>
                        </Col>
                        <Col xl={5}>
                          <div className=" d-flex Box_header2">
                            <div>
                              <BsLayoutTextWindowReverse />
                            </div>
                            <div>
                              <h1 className="fw-bold text-end">30</h1>
                              <h5>Applications</h5>
                            </div>
                          </div>
                        </Col>
                        <Col xl={5} className="me-5 mt-4">
                          <div className=" d-flex Box_header3">
                            <div>
                              <BsReceipt />
                            </div>
                            <div>
                              <h1 className="fw-bold text-end">20</h1>
                              <h5>Job-Enquires</h5>
                            </div>
                          </div>
                        </Col>
                        <Col xl={5} className="mt-4">
                          <div className=" d-flex Box_header4">
                            <div>
                              <BsPersonLinesFill />
                            </div>
                            <div>
                              <h1 className="fw-bold text-end">10</h1>
                              <h5>Shortlisted-profiles</h5>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>

                    <div className="Homeboxes2_container pt-5">
                      <Row>
                        <Col xl={5} className="me-5">
                          <h3>Notifications</h3>
                          <div className="Notification_container mt-4 position-relative">
                            <Badge pill className="d-flex">
                              <IoNotificationsOutline />
                              <p className="m-0">10</p>
                            </Badge>
                            <div className="Notification_textcontainer ">
                              <div className="d-flex ">
                                <div>
                                  <img src={Person} />
                                </div>
                                <div>
                                  <p>John applied for a Job</p>
                                </div>
                              </div>
                              <div className="d-flex ">
                                <div>
                                  <img src={Person} />
                                </div>
                                <div>
                                  <p>John applied for a Job</p>
                                </div>
                              </div>
                              <div className="d-flex ">
                                <div>
                                  <img src={Person} />
                                </div>
                                <div>
                                  <p>John applied for a Job</p>
                                </div>
                              </div>
                              <div className="d-flex ">
                                <div>
                                  <img src={Person} />
                                </div>
                                <div>
                                  <p>John applied for a Job</p>
                                </div>
                              </div>
                              <div className="d-flex ">
                                <div>
                                  <img src={Person} />
                                </div>
                                <div>
                                  <p>John applied for a Job</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>

                        <Col xl={5}>
                          <h3> My Subscription Plan</h3>
                          <div className="SubscriptionPlan_container p-4 mt-4 position-relative">
                            <h2 className="fw-bold">Silver Plan</h2>
                            <h4 className="text-secondary">$100</h4>
                            
                            <h4 className="text-secondary pt-3">
                              12.3.22 - 13.3.23
                            </h4>
                            <h4 className="text-secondary pt-3">
                              Available Quota:7/10
                            </h4>
                            <div>
                              <Button onClick={handleShow1}>
                                Show Other Plans
                              </Button>
                            </div>
                          </div>
                          <Modal size="lg" show={show1} onHide={handleClose1}>
                            <Modal.Header closeButton>
                              <Modal.Title>Membership plans</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className="py-4 ps-2 pe-4 ">
                              <div className="Planscard_container d-flex mt-3 ">
                                <Col xl={6} className="Plan_card p-3 me-3">
                                <div className="Plan_cardprice">
                                    <h6 className="m-0">$100</h6>
                                  </div>
                                  <div>
                                    <h3 className="fw-bold">Silver plan</h3>
                                    <ol className="ps-3 pt-2 fs-6">
                                      <li>Lorem ipsum dolor sit amet</li>
                                      <li>Lorem ipsum dolor sit amet</li>
                                      <li>Lorem ipsum dolor sit amet</li>
                                      <li>Lorem ipsum dolor sit amet</li>
                                      <li>Lorem ipsum dolor sit amet</li>
                                    </ol>
                                  </div>

                                  <div className="Active_btn w-100 mt-2">
                                    <Button>Activate </Button>
                                  </div>
                                </Col>
                                <Col xl={6} className="Plan_card p-3 ">
                                  <div className="Plan_cardprice">
                                    <h6 className="m-0">$100</h6>
                                  </div>
                                  <div>
                                    <h3 className="fw-bold">Golden plan</h3>
                                    <ol className="ps-3 pt-2 fs-6">
                                      <li>Lorem ipsum dolor sit amet</li>
                                      <li>Lorem ipsum dolor sit amet</li>
                                      <li>Lorem ipsum dolor sit amet</li>
                                      <li>Lorem ipsum dolor sit amet</li>
                                      <li>Lorem ipsum dolor sit amet</li>
                                    </ol>
                                  </div>
                                  <div className="Active_btn w-100 mt-2">
                                    <Button>Activate </Button>
                                  </div>
                                </Col>
                              </div>
                            </Modal.Body>
                          </Modal>
                        </Col>
                      </Row>
                      <div>
                        <h2 className="pt-4">Shortlisted Profile</h2>
                        <div className="Shortlisted_profile mt-4 p-4">
                          <div className="pt-5 ">
                            <Row md={3} xs={1} className="g-2">
                              <Col>
                                <Card className="Shortlisted_card border-0 p-3">
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
                                <Card className="Shortlisted_card border-0 p-3">
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
                                <Card className="Shortlisted_card border-0 p-3">
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
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <div className="Companyprofile_container bg-white p-4 col-11 ms-3 my-4">
                    <div className="Company_img">
                      <div className="Picedit_container">
                        <Button>
                          <BsFillCameraFill />
                        </Button>
                      </div>
                      <img src={Companylog} />
                    </div>

                    <div className="Companyprofile_forms pt-5">
                      <h2 className="fw-bold pb-4">
                        Edit your Company Profile:
                      </h2>
                      <InputGroup className="my-xl-3 my-1">
                        <Form.Control placeholder="Company Name.." />
                        <Form.Control placeholder="CEO Name.." />
                      </InputGroup>
                      <InputGroup className="my-xl-3 my-1">
                        <Form.Select>
                          <option>Industry Type</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                        <Form.Select>
                          <option>Ownership Type</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </InputGroup>
                      <InputGroup className="my-xl-3 my-1">
                        <Form.Control placeholder="Address.." />
                        <Form.Control placeholder="No of Offices.." />
                      </InputGroup>
                      <InputGroup className="my-xl-3 my-1">
                        <Form.Control placeholder="No of Employees.." />
                        <Form.Control placeholder="Established in.." />
                      </InputGroup>
                      <InputGroup className="my-xl-3 my-1">
                        <Form.Control placeholder="Website URL.." />
                        <Form.Control placeholder="Fax.." />
                      </InputGroup>
                      <InputGroup className="my-xl-3 my-1">
                        <Form.Control placeholder="Land-line Number.." />
                        <Form.Control placeholder="Phone Number.." />
                      </InputGroup>
                      <InputGroup className="my-xl-3 my-1">
                        <Form.Control placeholder="Facebook.." />
                        <Form.Control placeholder="Google plus.." />
                      </InputGroup>
                      <InputGroup className="my-xl-3 my-1">
                        <Form.Control placeholder="Country.." />
                        <Form.Control placeholder="State.." />
                      </InputGroup>
                    </div>
                    <div className="col-12 Updateprofile_btn">
                      <Button className="btn text-white text-center">
                        Update & Save Profile
                      </Button>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <div className="PostedJobs_container p-4 col-11 bg-white ms-4 mt-4">
                    <div className="Postjobs_heading">
                      <div>
                        <h2>Showing Your Posted Jobs</h2>
                      </div>

                      <div>
                        <Button onClick={handleShow}>Post a New Job</Button>
                      </div>
                    </div>

                    <div className="Postjob_cardcontainer pt-4">
                      <Row xl={3}>
                        <Col className="position-relative">
                          <Badge pill bg="success" className="p-2">
                            Active
                          </Badge>
                          <Card className="p-2">
                            <Card.Body>
                              <Card.Title className="fw-bold">
                                Senior Ui Developer
                              </Card.Title>
                              <Card.Text>
                                <h6 className=" text-secondary">Free-Lancer</h6>
                                <div className="d-flex">
                                  <h6 className="fw-bold m-0 pb-2">
                                    Posted on :
                                  </h6>
                                  <p className="text-secondary ps-2 m-0">
                                    12/3/22
                                  </p>
                                </div>
                              </Card.Text>
                              <div className="Postbutton_container ">
                                <Button onClick={handleShow8}>Edit</Button>
                                <Button>Delete</Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col className="position-relative">
                          <Badge pill bg="warning" className="p-2">
                            Pending
                          </Badge>
                          <Card className="p-2">
                            <Card.Body>
                              <Card.Title className="fw-bold">
                                Senior Ui Developer
                              </Card.Title>
                              <Card.Text>
                                <h6 className=" text-secondary">Free-Lancer</h6>
                                <div className="d-flex">
                                  <h6 className="fw-bold m-0 pb-2">
                                    Posted on :
                                  </h6>
                                  <p className="text-secondary ps-2 m-0">
                                    12/3/22
                                  </p>
                                </div>
                              </Card.Text>
                              <div className="Postbutton_container ">
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                        <Col className="position-relative">
                          <Badge pill bg="danger" className="p-2">
                            Expired
                          </Badge>
                          <Card className="p-2">
                            <Card.Body>
                              <Card.Title className="fw-bold">
                                Senior Ui Developer
                              </Card.Title>
                              <Card.Text>
                                <h6 className=" text-secondary">Free-Lancer</h6>
                                <div className="d-flex">
                                  <h6 className="fw-bold m-0 pb-2">
                                    Posted on :
                                  </h6>
                                  <p className="text-secondary ps-2 m-0">
                                    12/3/22
                                  </p>
                                </div>
                              </Card.Text>
                              <div className="Postbutton_container ">
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </div>

                    <Modal size="lg" show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Post A New Job</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="Postjob_forms">
                        <InputGroup className=" my-xl-3 my-1 ">
                          <Form.Control placeholder="Job-title" />
                          <Form.Select>
                            <option>Choose the Experience-level</option>
                            <option value="Fresher">Fresher</option>
                            <option value="Mid-senior">Mid-senior</option>
                            <option value="Experienced">Experienced</option>
                          </Form.Select>
                        </InputGroup>
                        <InputGroup className="my-xl-3 my-1 ">
                          <MultiSelect
                            options={options}
                            value={selected}
                            onChange={setSelected}
                            labelledBy="Select Skills"
                            placeholder="hello"
                          />

                          <Form.Control placeholder="Select City" />
                        </InputGroup>
                        <InputGroup className=" my-xl-3 my-1 ">
                          <Form.Control placeholder="Select-state.." />
                          <Form.Control placeholder="Select-Country.." />
                        </InputGroup>
                        <InputGroup className=" my-xl-3 my-1 ">
                          <Form.Control placeholder="Salary Currency.." />
                          <Form.Control placeholder="Salary Period.." />
                        </InputGroup>
                        <InputGroup className=" my-xl-3 my-1 ">
                          <Form.Control
                            type="number"
                            placeholder="Salary from.."
                          />
                          <Form.Control
                            type="number"
                            placeholder="Salary to.."
                          />
                        </InputGroup>
                        <InputGroup className=" my-xl-3 my-1 ">
                          <Form.Select>
                            <option>Job type</option>
                            <option value="Fresher">Full-time</option>
                            <option value="Mid-senior">Part-time</option>
                            <option value="Experienced">Freelance</option>
                          </Form.Select>
                          <Form.Select>
                            <option>Job shift</option>
                            <option value="Fresher">Day</option>
                            <option value="Mid-senior">Night</option>
                            <option value="Experienced">Rotating</option>
                          </Form.Select>
                        </InputGroup>
                        <InputGroup className=" my-xl-3 my-1 ">
                          <Form.Select>
                            <option>Gender</option>
                            <option value="Fresher">male</option>
                            <option value="Mid-senior">Female</option>
                            <option value="Experienced">
                              Rather not to say
                            </option>
                          </Form.Select>
                          <Form.Control placeholder="No of Openings.." />
                        </InputGroup>
                      </Modal.Body>

                      <Modal.Footer>
                        <div className="Postjob_btn col-12">
                          <Button variant="primary" onClick={handleClose}>
                            Post a Job
                          </Button>
                        </div>
                      </Modal.Footer>
                    </Modal>

                    <Modal size="lg" show={show8} onHide={handleClose8}>
                      <Modal.Header closeButton>
                        <Modal.Title>Edit this Job</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="Postjob_forms">
                        <InputGroup className=" my-xl-3 my-1 ">
                          <Form.Control placeholder="Job-title" />
                          <Form.Select>
                            <option>Choose the Experience-level</option>
                            <option value="Fresher">Fresher</option>
                            <option value="Mid-senior">Mid-senior</option>
                            <option value="Experienced">Experienced</option>
                          </Form.Select>
                        </InputGroup>
                        <InputGroup className="my-xl-3 my-1 ">
                          <MultiSelect
                            options={options}
                            value={selected}
                            onChange={setSelected}
                            labelledBy="Select Skills"
                            placeholder="hello"
                          />

                          <Form.Control placeholder="Select City" />
                        </InputGroup>
                        <InputGroup className=" my-xl-3 my-1 ">
                          <Form.Control placeholder="Select-state.." />
                          <Form.Control placeholder="Select-Country.." />
                        </InputGroup>
                        <InputGroup className=" my-xl-3 my-1 ">
                          <Form.Control placeholder="Salary Currency.." />
                          <Form.Control placeholder="Salary Period.." />
                        </InputGroup>
                        <InputGroup className=" my-xl-3 my-1 ">
                          <Form.Control
                            type="number"
                            placeholder="Salary from.."
                          />
                          <Form.Control
                            type="number"
                            placeholder="Salary to.."
                          />
                        </InputGroup>
                        <InputGroup className=" my-xl-3 my-1 ">
                          <Form.Select>
                            <option>Job type</option>
                            <option value="Fresher">Full-time</option>
                            <option value="Mid-senior">Part-time</option>
                            <option value="Experienced">Freelance</option>
                          </Form.Select>
                          <Form.Select>
                            <option>Job shift</option>
                            <option value="Fresher">Day</option>
                            <option value="Mid-senior">Night</option>
                            <option value="Experienced">Rotating</option>
                          </Form.Select>
                        </InputGroup>
                        <InputGroup className=" my-xl-3 my-1 ">
                          <Form.Select>
                            <option>Gender</option>
                            <option value="Fresher">male</option>
                            <option value="Mid-senior">Female</option>
                            <option value="Experienced">
                              Rather not to say
                            </option>
                          </Form.Select>
                          <Form.Control placeholder="No of Openings.." />
                        </InputGroup>
                      </Modal.Body>

                      <Modal.Footer>
                        <div className="Postjob_btn col-12">
                          <Button variant="primary" onClick={handleClose8}>
                            Edit & update job
                          </Button>
                        </div>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="Fifth">
                  <div className="Managemessages_container">
                    <Tab.Container
                      id="left-tabs-example"
                      defaultActiveKey="first"
                    >
                      <Row>
                        <Col sm={3}>
                          <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                              <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col sm={9}>
                          <Tab.Content>
                            <Tab.Pane eventKey="first">
                              <div></div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second"></Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </div>
                </Tab.Pane>

                <Tab.Pane eventKey="sixth">
                  <div className="Managefollowers_container mt-5 p-3 ms-4">
                    <Row md={4} xs={1} className="g-2">
                      <Col>
                        <Card className="Followers_card border-0 p-2">
                          <div className="Follower_image">
                            <img src={Person} />
                          </div>
                          <Card.Body>
                            <Card.Title className="fw-bold">Rambo</Card.Title>
                            <Card.Text>
                              <h6 className=" text-secondary">
                                Senior Web Developer
                              </h6>
                            </Card.Text>
                          </Card.Body>
                          <div className="ViewProfile_btn w-100">
                            <Button>View Profile</Button>
                          </div>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="Followers_card border-0 p-2">
                          <div className="Follower_image">
                            <img src={Person} />
                          </div>
                          <Card.Body>
                            <Card.Title className="fw-bold">Rambo</Card.Title>
                            <Card.Text>
                              <h6 className=" text-secondary">
                                Senior Web Developer
                              </h6>
                            </Card.Text>
                          </Card.Body>
                          <div className="ViewProfile_btn w-100">
                            <Button>View Profile</Button>
                          </div>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="Followers_card border-0 p-2">
                          <div className="Follower_image">
                            <img src={Person} />
                          </div>
                          <Card.Body>
                            <Card.Title className="fw-bold">Rambo</Card.Title>
                            <Card.Text>
                              <h6 className=" text-secondary">
                                Senior Web Developer
                              </h6>
                            </Card.Text>
                          </Card.Body>
                          <div className="ViewProfile_btn w-100">
                            <Button>View Profile</Button>
                          </div>
                        </Card>
                      </Col>
                      <Col>
                        <Card className="Followers_card border-0 p-2">
                          <div className="Follower_image">
                            <img src={Person} />
                          </div>
                          <Card.Body>
                            <Card.Title className="fw-bold">Rambo</Card.Title>
                            <Card.Text>
                              <h6 className=" text-secondary">
                                Senior Web Developer
                              </h6>
                            </Card.Text>
                          </Card.Body>
                          <div className="ViewProfile_btn w-100">
                            <Button>View Profile</Button>
                          </div>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
}

export default Jobrecuiterprofile;
