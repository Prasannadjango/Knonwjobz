import React, { useState } from "react";
import {
  Button,
  Container,
  Modal,
  Form,
  Tab,
  Tabs,
  InputGroup,
  Card,
  Row,
  Col,
  Badge
} from "react-bootstrap";
import personimg from "../Assests/Images/personimage.jpg";
import { BsPencilSquare } from "react-icons/bs";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import searchjobimg from "../Assests/Images/searchjobimg.jpg";
import { MdLocationPin } from "react-icons/md";
import {
  AiTwotoneMail,
  AiFillMobile,
  AiOutlineDelete,
  AiOutlineFileAdd,
} from "react-icons/ai";
function Jobprofile() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);
  return (
    <>
      <div className="Jobprofile_maincontainer mb-5">
        <Container>
          <div className="Seekerprofile_header p-4">
            <div>
              <img src={personimg} />
            </div>
            <div>
              <h2 className="fw-bold">Mark Antony</h2>
              <h5 className="pt-2">Senior Front-end Developer</h5>
              <div className="d-flex mail_container">
                <AiTwotoneMail className="mt-1 fs-4 me-2" />
                <p className="pt-1">Mark@gmail.com</p>
              </div>
              <div className="d-flex mail_container">
                <AiFillMobile className="mt-1 fs-4 me-2" />
                <p className="pt-1">234143421</p>
              </div>
              <div className="Edit_btncontainer">
                <Button onClick={handleShow}>
                  <BsPencilSquare />
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">
                      Edit You Profile
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="Edit_popupcontent">
                    <Form.Control type="Text" placeholder="Name.." />
                    <Form.Control type="file" placeholder="Profile Photo.." />
                    <Form.Control type="Text" placeholder="Designation.." />
                    <Form.Control type="mail" placeholder="Email-id.." />
                    <Form.Control
                      type="Number"
                      placeholder="Contanct-number.."
                    />
                  </Modal.Body>
                  <Modal.Footer className="Edit_btncontainer2">
                    <Button onClick={handleClose}>Edit Profile</Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>

          <div className="Jobseekerprofile_content mt-5">
            <Tabs
              defaultActiveKey="ProfileDetails"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="ProfileDetails" title="Profile Details">
                <div className="ProfileDetails_container p-4">
                  <div className="d-flex">
                    <div>1</div>
                    <h2>My Profile Details</h2>
                  </div>

                  <div className="ProfileDetails_forms pt-4">
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="FirstName.."
                        className="me-3"
                      />
                      <Form.Control placeholder="MiddleName.." />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Last Name.."
                        className="me-3"
                      />
                      <Form.Control placeholder="Father Name.." />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Form.Select className="me-3">
                        <option value="default" disabled hidden>
                          Gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                      </Form.Select>
                      <Form.Select>
                        <option value="default" disabled hidden>
                          Martial Status
                        </option>
                        <option value="Male">Single</option>
                        <option value="Female">Married</option>
                        <option value="Others">Rather Not to Say</option>
                      </Form.Select>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Form.Control placeholder="Country.." className="me-3" />
                      <Form.Control placeholder="State.." />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Form.Control placeholder="City.." className="me-3" />
                      <Form.Control placeholder="Nationality.." />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Date Of birth.."
                        className="me-3"
                        type="date"
                      />
                      <Form.Control placeholder="National-id Number.." />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Mobile Number.."
                        className="me-3"
                      />
                      <Form.Control placeholder="Secondary Mobile-Number (Optional).." />
                    </InputGroup>
                    <div>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Address.."
                      />
                    </div>
                  </div>

                  <div className=" Career_details d-flex mt-4">
                    <div>2</div>
                    <h2>Career Information</h2>
                  </div>

                  <div>
                    <InputGroup className="mb-3">
                    
                      <Form.Select>
                        <option value=""  >
                         Job Experience....
                        </option>
                        <option value="Male">Fresher</option>
                        <option value="Female">Experienced</option>
                       
                      </Form.Select>
                      <Form.Select>
                        <option value=""  >
                         Careeer level....
                        </option>
                        <option value="Male">Intern/student</option>
                        <option value="Female">Entry level</option>
                        <option value="Male">Team Lead</option>
                        <option value="Female">Manager</option>
                       
                      </Form.Select>
                    </InputGroup>
                    <InputGroup className="mb-3">
                    
                    <Form.Select>
                      <option value=""  >
                       Job Experience....
                      </option>
                      <option value="Male">Fresher</option>
                      <option value="Female">Experienced</option>
                     
                    </Form.Select>
                    <Form.Select>
                      <option value=""  >
                       Careeer level....
                      </option>
                      <option value="Male">Intern/student</option>
                      <option value="Female">Entry level</option>
                      <option value="Male">Team Lead</option>
                      <option value="Female">Manager</option>
                     
                    </Form.Select>
                  </InputGroup>
                  </div>
                  <div className="Edit_btncontainer2 mt-4">
                    <BsPencilSquare />
                    <Button>Edit Profile Details</Button>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Summary" title="Summary">
                <div className="Sumary_container p-4">
                  <div className="Edit_btn">
                    <Button onClick={handleShow1}>
                      {" "}
                      <BsPencilSquare className="me-2" />
                      Edit
                    </Button>
                  </div>
                  <h2 className="fw-bold">Profile Summary</h2>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec semper id nisi vel placerat. Sed lobortis velit at
                    turpis egestas rhoncus. Curabitur nulla ipsum, malesuada
                    tempor sodales sit amet, consectetur et tellus. Maecenas
                    ultrices, ligula vitae blandit maximus, enim ligula vehicula
                    risus, sit amet finibus tortor ex vitae est. Etiam eu
                    consequat tortor. Proin pharetra ligula ante. Nulla
                    facilisi. Aliquam at ipsum sem. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Donec semper id nisi vel
                    placerat. Sed lobortis velit at turpis egestas rhoncus.
                    Curabitur nulla ipsum, malesuada tempor sodales sit amet,
                    consectetur et tellus. Maecenas ultrices, ligula vitae
                    blandit maximus, enim ligula vehicula risus, sit amet
                    finibus tortor ex vitae est. Etiam eu consequat tortor.
                    Proin pharetra ligula ante. Nulla facilisi. Aliquam at ipsum
                    sem.
                  </p>
                  <Modal show={show1} onHide={handleClose1}>
                    <Modal.Header closeButton>
                      <Modal.Title className="fw-bold">
                        Edit Summary
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="Edit_popupcontent">
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Summary.."
                      />
                    </Modal.Body>
                    <Modal.Footer className="Edit_btncontainer2">
                      <Button onClick={handleClose}>Edit Details</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </Tab>
              <Tab eventKey="MyResume" title="My Resume">
                <div className="Myresume_container p-4">
                  <embed
                    src="sample.pdf"
                    frameborder="0"
                    width="100%"
                    height="400px"
                  ></embed>
                </div>
              </Tab>
              <Tab eventKey="Education Details" title="Education Details">
                <div className="Educationdetails_container p-4">
                  <div className="Edit_btn">
                    <Button onClick={handleShow2}>
                      <AiOutlineFileAdd className="me-2" />
                      Add New Education Details
                    </Button>
                  </div>
                  <h2>My Education Details</h2>
                  <div className="d-flex EducationDetails_container mt-5 ">
                    <Card className="me-5">
                      <div className="Delete_btn">
                        <Button className="p-0">
                          <AiOutlineDelete />
                        </Button>
                      </div>
                      <Card.Body>
                        <Card.Title className="fw-bold">
                          Under Graduate
                        </Card.Title>
                        <Card.Text>
                          <h5>70%</h5>
                          <h6>ABC college</h6>
                          <h6>Bsc Computer</h6>
                          <h6>2014-2017</h6>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card>
                      <div className="Delete_btn">
                        <Button className="p-0">
                          <AiOutlineDelete />
                        </Button>
                      </div>
                      <Card.Body>
                        <Card.Title className="fw-bold">
                          Post Graduate
                        </Card.Title>
                        <Card.Text>
                          <h5>80%</h5>
                          <h6>ABC college</h6>
                          <h6>msc Computer</h6>
                          <h6>2017-2019</h6>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Modal show={show2} onHide={handleClose2}>
                      <Modal.Header closeButton>
                        <Modal.Title className="fw-bold">
                          Add New Education Detail
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="Edit_popupcontent">
                        <Form.Control placeholder="Course Title" />
                        <Form.Control placeholder="Institution Name.." />
                        <Form.Control placeholder="Degree Name.." />
                        <Form.Control placeholder="Passed in year" />
                        <Form.Control placeholder="Passed out year" />
                      </Modal.Body>
                      <Modal.Footer className="Edit_btncontainer2">
                        <Button onClick={handleClose2}>
                          Add New Education
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Work Experience" title="Work Experience">
                <div className="Educationdetails_container p-4">
                  <div className="Edit_btn">
                    <Button onClick={handleShow3}>
                      <AiOutlineFileAdd className="me-2" />
                      Add Work Experience
                    </Button>
                  </div>
                  <h2>My Work Experience</h2>
                  <div className="d-flex EducationDetails_container mt-5 ">
                    <Card className="me-5">
                      <div className="Delete_btn">
                        <Button className="p-0">
                          <AiOutlineDelete />
                        </Button>
                      </div>
                      <Card.Body>
                        <Card.Title className="fw-bold">
                          Front-end Developer
                        </Card.Title>
                        <Card.Text>
                          <h5>Abc Technology</h5>
                          <h5>3 years</h5>
                        </Card.Text>
                      </Card.Body>
                    </Card>

                    <Modal show={show3} onHide={handleClose3}>
                      <Modal.Header closeButton>
                        <Modal.Title className="fw-bold">
                          Add New Work Experience
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="Edit_popupcontent">
                        <Form.Control placeholder="Job Title" />
                        <Form.Control placeholder="Company Name.." />
                        <Form.Control placeholder="Years of Experience.." />
                      </Modal.Body>
                      <Modal.Footer className="Edit_btncontainer2">
                        <Button onClick={handleClose3}>
                          Add New Work Experience
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Skills" title="Skills">
                <div className="Skills_maincontainer p-4">
                  <div className="Edit_btn">
                    <Button onClick={handleShow4}>
                      <AiOutlineFileAdd className="me-2" />
                      Add Skill
                    </Button>
                  </div>
                  <h2>Skill</h2>
                  <div className="Skill_fieldcontainer d-flex mt-4">
                    <div>
                      {/* <div>1</div> */}
                      HTML
                    </div>
                    <div>React js</div>
                    <div>Javascript</div>
                  </div>
                  <Modal show={show4} onHide={handleClose4}>
                    <Modal.Header closeButton>
                      <Modal.Title className="fw-bold">
                        Add New Skills
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="Edit_popupcontent">
                      <Form.Control placeholder="Ex:java,PHP" />
                    </Modal.Body>
                    <Modal.Footer className="Edit_btncontainer2">
                      <Button onClick={handleClose4}>Add New Skills</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </Tab>
              <Tab eventKey="MyfavoriteJobs" title="My favorite Jobs">
                <div className="MyfavoriteJobs_container p-4">
                  <h2>My favorite jobs</h2>
                  <Row xs={1} md={3} className="g-5 mt-1">
                    <Col>
                      <Card className="Searchjobs_card pb-3">
                        <div>
                          <div>
                            <img src={searchjobimg} className="w-100 " />
                          </div>
                        </div>

                        <Card.Body className="pt-5">
                          <Card.Title className="fw-bold">
                            Java Developer
                          </Card.Title>
                          <Card.Text>
                            <div className="d-flex Location_container">
                              <MdLocationPin className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">Mumbai</p>
                            </div>
                            <div className="d-flex Location_container">
                              <HiOutlineCurrencyDollar className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">1000/month</p>
                            </div>
                          </Card.Text>
                        </Card.Body>
                        <div className="SeeDetails_container col-12 px-3 ">
                          <Button className="mb-3">Apply Now</Button>
                        </div>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="Searchjobs_card pb-3">
                        <div>
                          <div>
                            <img src={searchjobimg} className="w-100 " />
                          </div>
                        </div>

                        <Card.Body className="pt-5">
                          <Card.Title className="fw-bold">
                            Java Developer
                          </Card.Title>
                          <Card.Text>
                            <div className="d-flex Location_container">
                              <MdLocationPin className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">Mumbai</p>
                            </div>
                            <div className="d-flex Location_container">
                              <HiOutlineCurrencyDollar className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">1000/month</p>
                            </div>
                          </Card.Text>
                        </Card.Body>
                        <div className="SeeDetails_container col-12 px-3 ">
                          <Button className="mb-3">Apply Now</Button>
                        </div>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="Searchjobs_card pb-3">
                        <div>
                          <div>
                            <img src={searchjobimg} className="w-100 " />
                          </div>
                        </div>

                        <Card.Body className="pt-5">
                          <Card.Title className="fw-bold">
                            Java Developer
                          </Card.Title>
                          <Card.Text>
                            <div className="d-flex Location_container">
                              <MdLocationPin className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">Mumbai</p>
                            </div>
                            <div className="d-flex Location_container">
                              <HiOutlineCurrencyDollar className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">1000/month</p>
                            </div>
                          </Card.Text>
                        </Card.Body>
                        <div className="SeeDetails_container col-12 px-3 ">
                          <Button className="mb-3">Apply Now</Button>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Tab>

              <Tab eventKey="JobAlerts" title="Job Alerts"></Tab>

              <Tab eventKey="Application History" title="Application History">
                <div className="Applicationhistory_container p-4">
                  <h2>Application History</h2>
                  <Row xs={1} md={3} className="g-5 mt-1">
                    <Col>
                      <Card className="Applicationhistory_card pb-3">
                        <Badge pill bg="danger">
                          Rejected
                        </Badge>
                        <div className="Applicationhistory_header">
                          <div>
                            <img src={searchjobimg} className="w-100 " />
                          </div>
                        </div>

                        <Card.Body className="pt-5">
                          <Card.Title className="fw-bold">
                            Java Developer
                          </Card.Title>
                          <Card.Text>
                            <div className="d-flex Location_container">
                              <MdLocationPin className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">Mumbai</p>
                            </div>
                            <div className="d-flex Location_container">
                              <HiOutlineCurrencyDollar className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">1000/month</p>
                            </div>
                          </Card.Text>
                        </Card.Body>
                        <div className="SeeDetails_container col-12 px-3 ">
                          <Button className="mb-3">Apply familiar Jobs</Button>
                        </div>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="Applicationhistory_card pb-3">
                        <Badge pill bg="success">
                          Selected
                        </Badge>
                        <div className="Applicationhistory_header">
                          <div>
                            <img src={searchjobimg} className="w-100 " />
                          </div>
                        </div>

                        <Card.Body className="pt-5">
                          <Card.Title className="fw-bold">
                            Java Developer
                          </Card.Title>
                          <Card.Text>
                            <div className="d-flex Location_container">
                              <MdLocationPin className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">Mumbai</p>
                            </div>
                            <div className="d-flex Location_container">
                              <HiOutlineCurrencyDollar className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">1000/month</p>
                            </div>
                          </Card.Text>
                        </Card.Body>
                        <div className="SeeDetails_container col-12 px-3 ">
                          <Button className="mb-3">Apply familiar Jobs</Button>
                        </div>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="Applicationhistory_card pb-3">
                        <Badge pill bg="warning">
                          Pending
                        </Badge>
                        <div className="Applicationhistory_header">
                          <div>
                            <img src={searchjobimg} className="w-100 " />
                          </div>
                        </div>

                        <Card.Body className="pt-5">
                          <Card.Title className="fw-bold">
                            Java Developer
                          </Card.Title>
                          <Card.Text>
                            <div className="d-flex Location_container">
                              <MdLocationPin className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">Mumbai</p>
                            </div>
                            <div className="d-flex Location_container">
                              <HiOutlineCurrencyDollar className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">1000/month</p>
                            </div>
                          </Card.Text>
                        </Card.Body>
                        <div className="SeeDetails_container col-12 px-3 ">
                          <Button className="mb-3">Apply familiar Jobs</Button>
                        </div>
                      </Card>
                    </Col>
                   
                  </Row>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Jobprofile;
