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
  Card,
  Navbar
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
  HiChatAlt,
} from "react-icons/hi";
import {
  MdLocationPin,
 
} from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";
import Person from "../Assests/Images/personimage.jpg";
import Companylog from "../Assests/Images/Complogo.jpg";
import { MultiSelect } from "react-multi-select-component";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const numberRegExp = /^[0-9]*$/
const EmailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const PasswordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/
const WebsiteRegExp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
const schema = yup.object({
  companyName: yup.string().required("Companyname is Required"),
  ceoName: yup.string().required("CEO Name is Required"),
  address: yup.string().required("Address is Required"),
  phoneNumber: yup.string().required("phone number is required").matches(phoneRegExp, 'Phone number is not valid').min(10, "Phone number must 10 Digits").max(10, "Phone number must 10 Digits"),
  LandlineNumber: yup.string().required("Landline is required").matches(phoneRegExp, 'Landline is not valid').min(10, "Landline must 10 Digits").max(10, "Landline must 10 Digits"),
  email: yup.string().required('Email is Required').matches(EmailRegExp, 'Email is Not Valid'),
  website: yup.string().required("Website is required").matches(WebsiteRegExp, 'Website is not valid'),
  password: yup.string().required('Password is required')
    .matches(PasswordRegExp, 'Password is Weak , Password must have Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character'),
  confirmpassword: yup.string().required("confirm password is Required").oneOf([yup.ref("password")], "Passwords do not match"),
  companyname: yup.string().required('Company Name is Required'),
  companylocation: yup.string().required('Company Location is Required'),
  numberoffices: yup.string().required("Number of offices is required").matches(numberRegExp, 'Number of Office must be in Number'),
  Establishyear: yup.string().required("Established year is required").matches(numberRegExp, 'Established year must be in Number'),
  noemployees: yup.string().required("No of Employeers is required").matches(numberRegExp, 'No of Employeers must be in Number'),
  noopenings: yup.string().required('no of openings is required').matches(numberRegExp, 'No of Openings must be in Number'),
  fax: yup.string().required("Fax is required").matches(numberRegExp, 'Fax must be in Number'),
  Description: yup.string().required('Description is Required'),
  facebook: yup.string().required('Facebook id is Reqiured'),
  google: yup.string().required('Google id is Required'),
  country: yup.string().required('Country is required'),
  state: yup.string().required('state is required'),
  jobtitle: yup.string().required('job title is required'),
  city: yup.string().required('City is required'),
  salaryfrom: yup.string().required("salary from is required").matches(numberRegExp, 'salaryfrom must be in Number'),
  salaryto: yup.string().required("salary to is required").matches(numberRegExp, 'salaryto must be in Number'),
  Experiencelevel: yup.string().required('Please select the Experience Level'),
}).required();




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

  const { register, trigger, handleSubmit, formState: { errors } } = useForm({
    mode: "onchange",
    resolver: yupResolver(schema)
  });
  const doSomething = async (value) => {
    // do something with my select value onChange
    await trigger(['select']) // Trigger validation on select
  };
  const onSubmit = data => console.table(data);

  return (
    <>
      <div className="Jobrecuirter_container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col xl={3} xs={12} className=" py-4 pe-0 bg-white SideBar_container">


              <Nav variant="pills" className="Sidebar_links">
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
            <Col xl={9} xs={12} className="p-0 mt-xl-0 mt-3">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="Home-container p-xl-4 p-0 px-xl-0 px-5 ms-xl-4 ms-0">
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
                        <Col xl={5} className='mt-xl-0 mt-4'>
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
                              <HiChatAlt />
                            </div>
                            <div>
                              <h1 className="fw-bold text-end">20</h1>
                              <h5>Messages</h5>
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

                    <Form className="Companyprofile_forms pt-5" onSubmit={handleSubmit(onSubmit)}>
                      <h2 className="fw-bold pb-4">
                        Edit your Company Profile:
                      </h2>
                      <InputGroup className="my-xl-3 my-1">
                        <div className='my-2 w-100'>
                          <Form.Control placeholder="Company Name.."
                            {...register("companyName")}
                          />
                          <p className='text-danger pt-2 m-0'>{errors.companyName?.message}</p>
                        </div>

                        <div className="my-2 w-100 ">
                          <Form.Control placeholder="CEO Name.."
                            {...register("ceoName")}
                          />
                          <p className='text-danger pt-2 m-0'>{errors.ceoName?.message}</p>
                        </div>
                      </InputGroup>
                      <InputGroup className="my-xl-3 my-1">
                        <div className='my-2 w-100'>
                          <Form.Control placeholder="Email.."
                            {...register("companyName")}
                          />
                          <p className='text-danger pt-2 m-0'>{errors.companyName?.message}</p>
                        </div>

                        <div className="my-2 w-100 ">
                          <Form.Control placeholder="Password.."
                            {...register("ceoName")}
                          />
                          <p className='text-danger pt-2 m-0'>{errors.ceoName?.message}</p>
                        </div>
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
                        <div className='my-2 w-100'>
                          <Form.Control placeholder="Address.."
                            {...register("address")} />
                          <p className='text-danger pt-2 m-0'>{errors.address?.message}</p>
                        </div>
                        <div className='w-100 my-2'>
                          <Form.Control placeholder="No of Offices.."
                            {...register("numberoffices")}
                          />
                          <p className='text-danger pt-2 m-0'>{errors.numberoffices?.message}</p>
                        </div>
                      </InputGroup>
                      <InputGroup className="my-xl-3 my-1">
                        <div className="w-100 my-2">
                          <Form.Control placeholder="No of Employees.."
                            {...register("noemployees")} />
                          <p className='text-danger pt-2 m-0'>{errors.noemployees?.message}</p>
                        </div>
                        <div className="w-100 my-0">
                          <Form.Control placeholder="Established in.."
                            {...register("Establishyear")} />
                          <p className='text-danger pt-2 m-0'>{errors.Establishyear?.message}</p>
                        </div>
                      </InputGroup>
                      <InputGroup className="my-xl-3 my-1">
                        <div className="w-100 my-2">
                          <Form.Control placeholder="Website URL.."
                            {...register("website")} />
                          <p className='text-danger pt-2 m-0'>{errors.website?.message}</p>
                        </div>
                        <div className="w-100 my-2">
                          <Form.Control placeholder="Fax.."
                            {...register("fax")} />
                          <p className='text-danger pt-2 m-0'>{errors.fax?.message}</p>

                        </div>
                      </InputGroup>
                      <InputGroup className="my-xl-3 my-1">
                        <div className="w-100 my-2">
                          <Form.Control placeholder="Phone number.."
                            {...register("phoneNumber")} />
                          <p className='text-danger pt-2 m-0'>{errors.phoneNumber?.message}</p>
                        </div>
                        <div className='w-100 my-2'>
                          <Form.Control placeholder="Land-line Number.."
                            {...register("LandlineNumber")} />
                          <p className='text-danger pt-2 m-0'>{errors.LandlineNumber?.message}</p>
                        </div>
                      </InputGroup>
                      <InputGroup className="my-xl-3 my-1">
                        <div className="my-2 w-100">
                          <Form.Control placeholder="Facebook.."
                            {...register("facebook")} />
                          <p className='text-danger pt-2 m-0'>{errors.facebook?.message}</p>
                        </div>
                        <div className="w-100 my-2">
                          <Form.Control placeholder="Google.."
                            {...register("google")}
                          />
                          <p className='text-danger pt-2 m-0'>{errors.google?.message}</p>
                        </div>
                      </InputGroup>
                      <InputGroup className="my-xl-3 my-1">

                        <div className="w-100 my-2">
                          <Form.Control placeholder="Linked-in.."
                            {...register("google")}
                          />
                          <p className='text-danger pt-2 m-0'>{errors.google?.message}</p>
                        </div>
                        <div className="my-2 w-100">
                          <Form.Control placeholder="Country.."
                            {...register("country")} />
                          <p className='text-danger pt-2 m-0'>{errors.country?.message}</p>
                        </div>
                      </InputGroup>
                      <InputGroup className="">
                        <div className="w-100">
                          <Form.Control placeholder="State.."
                            {...register("state")} />
                          <p className='text-danger pt-2 m-0'>{errors.state?.message}</p>
                        </div>
                        <div className="w-100">
                          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                            <Form.Control as="textarea" rows={4} placeholder='About the company' />
                          </Form.Group>
                        </div>
                      </InputGroup>
                      <div className="col-12 Updateprofile_btn">
                        <Button className="btn text-white text-center" type='submit'>
                          Update & Save Profile
                        </Button>
                      </div>
                    </Form>

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
                      <Row xl={3} xs={1}>
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
                              <div className="d-flex Location_container">
                          <MdLocationPin className="mt-1 fs-4 me-2" />
                          <p className="pt-1 text-secondary ">Mumbai</p>
                        </div>
                                <h6 className=" text-secondary">Free-Lancer</h6>
                               
                                <div className="d-flex">
                                  <h6 className="fw-bold m-0 pb-2">
                                    Posted on :
                                  </h6>
                                  <p className="text-secondary ps-2 m-0">
                                    12/3/22
                                  </p>
                                </div>
                                <Button className="Shortlist_button">Shortlisted-candidates<Badge >9</Badge></Button>
                                <Button className="Shortlist_button">Applied-candidates<Badge >5</Badge></Button>
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
                              <div className="d-flex Location_container">
                          <MdLocationPin className="mt-1 fs-4 me-2" />
                          <p className="pt-1 text-secondary ">Mumbai</p>
                        </div>
                                <h6 className=" text-secondary">Free-Lancer</h6>
                                <div className="d-flex">
                                  <h6 className="fw-bold m-0 pb-2">
                                    Posted on :
                                  </h6>
                                  <p className="text-secondary ps-2 m-0">
                                    12/3/22
                                  </p>
                                </div>
                                <Button className="Shortlist_button">Shortlisted-candidates<Badge >9</Badge></Button>
                                <Button className="Shortlist_button">Applied-candidates<Badge >5</Badge></Button>
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
                              <div className="d-flex Location_container">
                          <MdLocationPin className="mt-1 fs-4 me-2" />
                          <p className="pt-1 text-secondary ">Mumbai</p>
                        </div>
                                <h6 className=" text-secondary">Free-Lancer</h6>
                                <div className="d-flex">
                                  <h6 className="fw-bold m-0 pb-2">
                                    Posted on :
                                  </h6>
                                  <p className="text-secondary ps-2 m-0">
                                    12/3/22
                                  </p>
                                </div>
                                <Button className="Shortlist_button">Shortlisted-candidates<Badge >9</Badge></Button>
                                <Button className="Shortlist_button">Applied-candidates<Badge >5</Badge></Button>
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
                      <Modal.Body >
                        <Form onSubmit={handleSubmit(onSubmit)} className="Postjob_forms">
                          <InputGroup className=" my-xl-3 my-1 ">
                            <div className="my-2 w-100">
                              <Form.Control placeholder="Job-title"
                                {...register("jobtitle")} />
                              <p className='text-danger pt-2 m-0'>{errors.jobtitle?.message}</p>
                            </div>
                            <div className="w-100 my-2">
                              <Form.Select
                                {...register("Experiencelevel")}
                                onChange={(e) => doSomething(e.target.value)}>
                                <option>Choose the Experience-level</option>
                                <option value="Fresher">Fresher</option>
                                <option value="Mid-senior">Mid-senior</option>
                                <option value="Experienced">Experienced</option>
                              </Form.Select>
                              <p className='text-danger pt-2 m-0'>{errors.Experiencelevel?.message}</p>
                            </div>

                          </InputGroup>
                          <InputGroup className=" my-xl-3 my-1 ">
                            <div className="my-2 w-100">
                              <Form.Control placeholder="Functional area..."
                                {...register("jobtitle")} />
                              <p className='text-danger pt-2 m-0'>{errors.jobtitle?.message}</p>
                            </div>
                            <div className="w-100 my-2">
                              <Form.Select
                                {...register("Experiencelevel")}
                                onChange={(e) => doSomething(e.target.value)}>
                                <option>Choose the Degree-level</option>
                                <option value="Fresher">Fresher</option>
                                <option value="Mid-senior">Mid-senior</option>
                                <option value="Experienced">Experienced</option>
                              </Form.Select>
                              <p className='text-danger pt-2 m-0'>{errors.Experiencelevel?.message}</p>
                            </div>

                          </InputGroup>
                          <InputGroup className=" my-xl-3 my-1 ">
                         
                            <div className="w-100 my-2">
                              <Form.Select
                                {...register("Experiencelevel")}
                                onChange={(e) => doSomething(e.target.value)}>
                                <option>career-level</option>
                                <option value="Fresher">Fresher</option>
                                <option value="Mid-senior">Mid-senior</option>
                                <option value="Experienced">Experienced</option>
                              </Form.Select>
                              <p className='text-danger pt-2 m-0'>{errors.Experiencelevel?.message}</p>
                            </div>

                          </InputGroup>
                          <InputGroup className="my-xl-3 my-1 ">
                            <div className="my-2 w-100">
                              <MultiSelect
                                options={options}
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select Skills"
                                placeholder="hello"
                                className='w-100'
                              />
                            </div>

                            <div className='w-100 my-2 '>
                              <Form.Control placeholder="Select City"
                                {...register("city")} />
                              <p className='text-danger pt-2 m-0'>{errors.city?.message}</p>
                            </div>
                          </InputGroup>
                          <InputGroup className=" my-xl-3 my-1 ">
                            <div className='w-100 my-2'>
                              <Form.Control placeholder="Select-state.."
                                {...register("state")} />
                              <p className='text-danger pt-2 m-0'>{errors.state?.message}</p>
                            </div>
                            <div className='w-100 my-2'>
                              <Form.Control placeholder="Select-Country.."
                                {...register("country")} />
                              <p className='text-danger pt-2 m-0'>{errors.country?.message}</p>

                            </div>
                          </InputGroup>

                          <InputGroup className=" my-xl-3 my-1 ">
                            <div className="my-2 w-100">
                              <Form.Control

                                placeholder="Salary from.."
                                {...register("salaryfrom")}
                              />
                              <p className='text-danger pt-2 m-0'>{errors.salaryfrom?.message}</p>

                            </div>
                            <div className="my-2 w-100">
                              <Form.Control
                                {...register("salaryto")}
                                placeholder="Salary to.."
                              />
                              <p className='text-danger pt-2 m-0'>{errors.salaryto?.message}</p>
                            </div>
                          </InputGroup>
                          <InputGroup className=" my-xl-3 my-1 ">
                            <div className="w-100 my-2">
                              <Form.Select>
                                <option>Job type</option>
                                <option value="Fresher">Full-time</option>
                                <option value="Mid-senior">Part-time</option>
                                <option value="Experienced">Freelance</option>
                              </Form.Select>
                            </div>
                            <div className="my-2 w-100">
                              <Form.Select>
                                <option>Job shift</option>
                                <option value="Fresher">Day</option>
                                <option value="Mid-senior">Night</option>
                                <option value="Experienced">Rotating</option>
                              </Form.Select>
                            </div>
                          </InputGroup>
                          <InputGroup className=" my-xl-3 my-1 ">
                            <div className="w-100 my-2">
                              <Form.Select>
                                <option>Gender</option>
                                <option value="Fresher">male</option>
                                <option value="Mid-senior">Female</option>
                                <option value="Experienced">
                                  Rather not to say
                                </option>
                              </Form.Select>
                            </div>
                            <div className="w-100 my-2">
                              <Form.Control placeholder="No of Openings.."
                                {...register("noopenings")} />
                              <p className='text-danger pt-2 m-0'>{errors.noopenings?.message}</p>
                            </div>
                          </InputGroup>
                          
                          <div className="Postjob_btn col-12">
                            <Button variant="primary" type='submit'>
                              Post a Job
                            </Button>
                          </div>
                        </Form>
                      </Modal.Body>


                    </Modal>
                    <Modal size="lg" show={show8} onHide={handleClose8}>
                      <Modal.Header closeButton>
                        <Modal.Title>Edit  a Job</Modal.Title>
                      </Modal.Header>
                      <Modal.Body >
                        <Form onSubmit={handleSubmit(onSubmit)} className="Postjob_forms">
                        <InputGroup className=" my-xl-3 my-1 ">
                            <div className="my-2 w-100">
                              <Form.Control placeholder="Job-title"
                                {...register("jobtitle")} />
                              <p className='text-danger pt-2 m-0'>{errors.jobtitle?.message}</p>
                            </div>
                            <div className="w-100 my-2">
                              <Form.Select
                                {...register("Experiencelevel")}
                                onChange={(e) => doSomething(e.target.value)}>
                                <option>Choose the Experience-level</option>
                                <option value="Fresher">Fresher</option>
                                <option value="Mid-senior">Mid-senior</option>
                                <option value="Experienced">Experienced</option>
                              </Form.Select>
                              <p className='text-danger pt-2 m-0'>{errors.Experiencelevel?.message}</p>
                            </div>

                          </InputGroup>
                          <InputGroup className=" my-xl-3 my-1 ">
                            <div className="my-2 w-100">
                              <Form.Control placeholder="Functional area..."
                                {...register("jobtitle")} />
                              <p className='text-danger pt-2 m-0'>{errors.jobtitle?.message}</p>
                            </div>
                            <div className="w-100 my-2">
                              <Form.Select
                                {...register("Experiencelevel")}
                                onChange={(e) => doSomething(e.target.value)}>
                                <option>Choose the Degree-level</option>
                                <option value="Fresher">Fresher</option>
                                <option value="Mid-senior">Mid-senior</option>
                                <option value="Experienced">Experienced</option>
                              </Form.Select>
                              <p className='text-danger pt-2 m-0'>{errors.Experiencelevel?.message}</p>
                            </div>

                          </InputGroup>
                          <InputGroup className=" my-xl-3 my-1 ">
                         
                            <div className="w-100 my-2">
                              <Form.Select
                                {...register("Experiencelevel")}
                                onChange={(e) => doSomething(e.target.value)}>
                                <option>career-level</option>
                                <option value="Fresher">Fresher</option>
                                <option value="Mid-senior">Mid-senior</option>
                                <option value="Experienced">Experienced</option>
                              </Form.Select>
                              <p className='text-danger pt-2 m-0'>{errors.Experiencelevel?.message}</p>
                            </div>

                          </InputGroup>
                          <InputGroup className="my-xl-3 my-1 ">
                            <div className="my-2 w-100">
                              <MultiSelect
                                options={options}
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Select Skills"
                                placeholder="hello"
                                className='w-100'
                              />
                            </div>

                            <div className='w-100 my-2 '>
                              <Form.Control placeholder="Select City"
                                {...register("city")} />
                              <p className='text-danger pt-2 m-0'>{errors.city?.message}</p>
                            </div>
                          </InputGroup>
                          <InputGroup className=" my-xl-3 my-1 ">
                            <div className='w-100 my-2'>
                              <Form.Control placeholder="Select-state.."
                                {...register("state")} />
                              <p className='text-danger pt-2 m-0'>{errors.state?.message}</p>
                            </div>
                            <div className='w-100 my-2'>
                              <Form.Control placeholder="Select-Country.."
                                {...register("country")} />
                              <p className='text-danger pt-2 m-0'>{errors.country?.message}</p>

                            </div>
                          </InputGroup>

                          <InputGroup className=" my-xl-3 my-1 ">
                            <div className="my-2 w-100">
                              <Form.Control

                                placeholder="Salary from.."
                                {...register("salaryfrom")}
                              />
                              <p className='text-danger pt-2 m-0'>{errors.salaryfrom?.message}</p>

                            </div>
                            <div className="my-2 w-100">
                              <Form.Control
                                {...register("salaryto")}
                                placeholder="Salary to.."
                              />
                              <p className='text-danger pt-2 m-0'>{errors.salaryto?.message}</p>
                            </div>
                          </InputGroup>
                          <InputGroup className=" my-xl-3 my-1 ">
                            <div className="w-100 my-2">
                              <Form.Select>
                                <option>Job type</option>
                                <option value="Fresher">Full-time</option>
                                <option value="Mid-senior">Part-time</option>
                                <option value="Experienced">Freelance</option>
                              </Form.Select>
                            </div>
                            <div className="my-2 w-100">
                              <Form.Select>
                                <option>Job shift</option>
                                <option value="Fresher">Day</option>
                                <option value="Mid-senior">Night</option>
                                <option value="Experienced">Rotating</option>
                              </Form.Select>
                            </div>
                          </InputGroup>
                          <InputGroup className=" my-xl-3 my-1 ">
                            <div className="w-100 my-2">
                              <Form.Select>
                                <option>Gender</option>
                                <option value="Fresher">male</option>
                                <option value="Mid-senior">Female</option>
                                <option value="Experienced">
                                  Rather not to say
                                </option>
                              </Form.Select>
                            </div>
                            <div className="w-100 my-2">
                              <Form.Control placeholder="No of Openings.."
                                {...register("noopenings")} />
                              <p className='text-danger pt-2 m-0'>{errors.noopenings?.message}</p>
                            </div>
                          </InputGroup>
                          <div className="Postjob_btn col-12">
                            <Button variant="primary" type='submit'>
                              Post a Job
                            </Button>
                          </div>
                        </Form>
                      </Modal.Body>


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
                  <div className="Managefollowers_container mt-5 p-3 ms-xl-4 ms-0">
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
