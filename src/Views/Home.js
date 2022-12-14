import React from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Dropdown,
  Button,
  Container,
  Col,
  Row,
  Card,
} from "react-bootstrap";
import { FaUserTie, FaBuilding, FaChalkboardTeacher } from "react-icons/fa";
import searchjobimg from "../Assests/Images/searchjobimg.jpg";
import businessvideo from "../Assests/Images/Businessvideo.mp4";
import {
  MdLocationPin,
  MdOutlineEngineering,
  MdComputer,
  MdAccountBalance,
} from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { GiCook } from "react-icons/gi";
import { TiArrowRightThick } from "react-icons/ti";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const EmailRegExp =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const schema = yup.object({
name: yup.string().required("name is Required"),
email:yup.string().required('Email is Required').matches(EmailRegExp,'Email is Not Valid'),
}).required();
function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.table(data);
  return (
    <>
      <div className="Homepage_maincontainer">
        <div className="Homepage_image ">
          <div className=" p-4">
            <h1 className="fw-bold"> Thousands of success job stories.</h1>
            <h1 className="fw-bold">Start Your Journey Now..</h1>
            <Form className="pt-3">
              <Form.Group className="mb-xl-3 mb-0" controlId="formBasicEmail">
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the Job title..."
                  className='Landingpage_input'
                />
              </Form.Group>
              <div className="d-flex pt-xl-3 pt-0  form_dropdownbtn">
                <div className="col-xl-6 py-xl-0 py-3 me-xl-2 me-0">
                  <Dropdown>
                    <label className="pb-2"> Select your Country</label>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="border Country_dropdown text-start"
                    >
                      Select your Country
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="col-xl-6 ">
                  <Dropdown>
                    <label className="pb-2"> Select your Location</label>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="border Country_dropdown text-start"
                    >
                      Select your Location
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="mt-4 w-100">
                <Button type="submit" className="Homebanner_btn w-100 fs-5">
                  Search Job
                </Button>
              </div>
            </Form>
          </div>
        </div>

        <div className="whywithus_maincontainer mb-5">
          <div className="Whywithus_heading">
            <h1 className="text-center fw-bold   pt-xl-5 pt-0">
              Finding the job is made Easy
            </h1>
          </div>

          <Container className="p-0">
            <div className="d-flex whywithusBoxes  my-xl-5 my-3 ">
              <div className="col-xl-3  col-12">
                <span>
                  <ImProfile />
                </span>
                <h4 className="text-center fw-bold">Create Profile</h4>
              </div>

              <span className="Icon_container">
                <TiArrowRightThick className="Arrow-icon" />
              </span>

              <div className="col-xl-3  col-12 ms-0">
                <span>
                  <IoDocumentTextOutline />
                </span>
                <h4 className="text-center fw-bold">Upload Resume</h4>
              </div>
              <span className="Icon_container">
                <TiArrowRightThick className="Arrow-icon" />
              </span>

              <div className="col-xl-3  col-12">
                <span>
                  <FaBuilding />
                </span>
                <h4 className="text-center fw-bold">Schedule Interview</h4>
              </div>
              <span className="Icon_container">
                <TiArrowRightThick className="Arrow-icon" />
              </span>

              <div className="col-xl-3  col-12 ">
                <span>
                  <FaUserTie />
                </span>
                <h4 className="text-center fw-bold">Get hired</h4>
              </div>
            </div>
          </Container>
        </div>

        <div className="Searchjobs_maincontainer mb-5">
          <div className="Whywithus_heading">
            <h1 className="text-center fw-bold">Search for Dream Job Now</h1>
          </div>

          <Container className="mt-5">
            <div className="d-flex ">
              <Col xl={6} md={6} xs={12}>
                <img src={searchjobimg} className="w-100" />
              </Col>
              <Col xl={6} md={6} xs={12}>
                <h3 className="fw-bold">Search for Jobs</h3>
                <p className="m-0 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse massa turpis, fringilla sit amet aliquam a,
                  euismod vel nisi. Aliquam a auctor nisi. Donec a ex commodo
                  orci tincidunt malesuada Aliquam a auctor nisi. Donec a ex commodo
                  orci tincidunt malesuada

                </p>

                <div className="pt-2 Explore-jobsbtn">
                  <Button className="text-white">Explore Jobs</Button>
                </div>
              </Col>
            </div>
          </Container>
        </div>

        <div className="Recentjobs_maincontainer mb-5">
          <div className="Whywithus_heading">
            <h1 className="text-center fw-bold">Explore Recent Jobs</h1>
          </div>
          <div className="mt-5 p-xl-5 p-0 Recentjobs_cardscontainer">
            <Container>
            <Row xs={1} sm={1} md={2} xl={3} lg={3} className="g-4">
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
                        <p className="m-0 ">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                          quis dui quis arcu ultricies malesuada vitae vitae eros. Donec
                          ex ipsum, dapibus ac placerat eget, eleifend vitae elit
                        </p>
                      </Card.Text>
                    </Card.Body>
                    <div className="SeeDetails_container col-12 px-3 ">
                      <Link to='/Applyjobdetails'>
                        <Button className="mb-3">Apply Now</Button>
                      </Link>
                      <Button>Add to Favourite jobs</Button>
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
                        <p className="m-0 ">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                          quis dui quis arcu ultricies malesuada vitae vitae eros. Donec
                          ex ipsum, dapibus ac placerat eget, eleifend vitae elit
                        </p>
                      </Card.Text>
                    </Card.Body>
                    <div className="SeeDetails_container col-12 px-3 ">
                      <Link to='/Applyjobdetails'>
                        <Button className="mb-3">Apply Now</Button>
                      </Link>
                      <Button>Add to Favourite jobs</Button>
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
                        <p className="m-0 ">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                          quis dui quis arcu ultricies malesuada vitae vitae eros. Donec
                          ex ipsum, dapibus ac placerat eget, eleifend vitae elit
                        </p>
                      </Card.Text>
                    </Card.Body>
                    <div className="SeeDetails_container col-12 px-3 ">
                      <Link to='/Applyjobdetails'>
                        <Button className="mb-3">Apply Now</Button>
                      </Link>
                      <Button>Add to Favourite jobs</Button>
                    </div>
                  </Card>
                </Col>
              </Row>

              <div className="viewall_link pt-xl-5  text-center">
                <Link to="/Searchjob">view all Recent jobs and Other jobs</Link>
              </div>
            </Container>
          </div>
        </div>

        <div className="Successstory_maincontainer mb-5">
          <div className="Whywithus_heading">
            <h1 className="text-center fw-bold">Success Stories from us</h1>
          </div>

          <Container className="mt-5">
            <div className="d-flex ">
              <Col xl={6} xs={12}>
                <p className="m-0 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  quis dui quis arcu ultricies malesuada vitae vitae eros. Donec
                  ex ipsum, dapibus ac placerat eget, eleifend vitae elit
                </p>

                <div className="pt-2 Successjobs_btn">
                  <Button className="text-white">Find your Success Job</Button>
                </div>
              </Col>
              <Col xl={6} xs={12}>
                <video
                  autoPlay
                  loop
                  muted
                  src={businessvideo}
                  className="w-100"
                ></video>
              </Col>
            </div>
          </Container>
        </div>

        <div className="Newsletter_maincontainer py-5 mb-5">
          <div>
          <h1 className="fw-bold text-white text-center">
            Subscribe our Newsletter & get regular Updates
          </h1>
          <p className="m-0 text-white text-center">
              Get in touch with us for Regular job updates , we are here to find your Dream job 
          </p>
          <Form className="d-flex justify-content-center pt-4" onSubmit={handleSubmit(onSubmit)}>
           
            <div className="col-xl-5 col-md-6 col-12">
              <Form.Control type="mail" placeholder="Email" 
               {...register("email")}/>
                  <p className='text-white pt-2'>{errors.email?.message}</p>
            </div>
            <div className="col-xl-2 col-md-3 col-12">
              <Button type='submit'>Subscribe-now</Button>
            </div>
          </Form>
          </div>
        </div>

        <div>
          <div className="Whywithus_heading">
            <h1 className="text-center fw-bold">Find jobs by category</h1>
          </div>
        </div>
        <div className="jobscategories_container mb-5 py-xl-5 py-3 px-xl-5 px-3">
          <Row xs={1} md={2} xl={3} className="g-4">
            <Col>
              <div className="Jobscat_card py-4 ps-3">
                <div>
                  <MdOutlineEngineering />
                </div>
                <div className="ps-3">
                  <h5 className="fw-bold">Civil Engineers</h5>
                  <p className="text-secondary">30+ Openings</p>
                </div>
              </div>
            </Col>

            <Col>
              <div className="Jobscat_card py-4 ps-3">
                <div>
                  <MdOutlineEngineering />
                </div>
                <div className="ps-3">
                  <h5 className="fw-bold">Mechanical Engineers</h5>
                  <p className="text-secondary">30+ Openings</p>
                </div>
              </div>
            </Col>

            <Col>
              <div className="Jobscat_card py-4 ps-3">
                <div>
                  <MdComputer />
                </div>
                <div className="ps-3">
                  <h5 className="fw-bold">Software Engineers</h5>
                  <p className="text-secondary">30+ Openings</p>
                </div>
              </div>
            </Col>

            <Col>
              <div className="Jobscat_card py-4 ps-3">
                <div>
                  <MdAccountBalance />
                </div>
                <div className="ps-3">
                  <h5 className="fw-bold">Accountant</h5>
                  <p className="text-secondary">30+ Openings</p>
                </div>
              </div>
            </Col>

            <Col>
              <div className="Jobscat_card py-4 ps-3">
                <div>
                  <GiCook />
                </div>
                <div className="ps-3">
                  <h5 className="fw-bold">Chef</h5>
                  <p className="text-secondary">30+ Openings</p>
                </div>
              </div>
            </Col>

            <Col>
              <div className="Jobscat_card py-4 ps-3">
                <div>
                  <FaChalkboardTeacher />
                </div>
                <div className="ps-3">
                  <h5 className="fw-bold">Teacher</h5>
                  <p className="text-secondary">30+ Openings</p>
                </div>
              </div>
            </Col>
          </Row>
          <div className="viewall_link pt-xl-5 pt-3 text-center">
            <Link to="/jobcategory">View all job category</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
