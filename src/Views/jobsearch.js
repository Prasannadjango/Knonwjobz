import { React, useState } from "react";
import Select from "react-select";

import {
  Button,
  Col,
  Container,
  FormControl,
  Row,
  Dropdown,
  Card,
  Pagination,
} from "react-bootstrap";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import searchjobimg from "../Assests/Images/searchjobimg.jpg";
import { MdLocationPin } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
function Jobsearch() {
  const options = [
    { value: "Fresher", label: "Fresher" },
    { value: "0-1", label: "0-1" },
    { value: "1-2", label: "1-2" },
    { value: "2-3", label: "3-4" },
    { value: "4-5", label: "4-5" },
    { value: "more than 5 years", label: "more than 5 years" },
  ];
  const jobtypeoptions = [
    { value: "full -time", label: "Full-time" },
    { value: "part-time", label: "Part-time" },
    { value: "Free-Lance", label: "Free-lance" },
    { value: "Internship Training", label: "Intership Training" },
  ];
  const careerleveloptions = [
    { value: "Student/Entry-level", label: "Student/Entry-level" },
    { value: "Experienced/Professional", label: "Experienced/Professional" },
    { value: " Manager/TL/GM/CEO", label: "Manager/TL/GM/CEO" },
  ];
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [selectedOptions, setSelectedOptions] = useState();
  const [jobselectedOptions, setJobselectedOptions] = useState();
  const [careerlevelOptions, setCareerOptions] = useState();
  function handleSelect(options) {
    setSelectedOptions(options);
  }
  function handleJobselect(jobtypeoptions) {
    setJobselectedOptions(jobtypeoptions);
  }
  function handlecareerlevel(careerleveloptions) {
    setCareerOptions(careerleveloptions);
  }

  return (
    <>
      <div className="Jobsearch-maincotainer">
        <div className="d-flex">
          <div className="Searchbar-container">
            <Row lg={4} className='m-0'>
              <Col className="pe-2">
                <FormControl
                  placeholder="Search by Job title,Name"
                  className="search-field  border-0"
                />
              </Col>
              <Col className="pe-2">
                <FormControl
                  placeholder="Location"
                  className="Location-field  border-0"
                />
              </Col>
              <Col className="pe-2 border-0">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="white"
                    id="dropdown-basic"
                    className="functional_area"
                  >
                    Select functional area
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
              </Col>
              <Col>
                <Button class='col-2'>Search-now</Button>
              </Col>
            </Row>
          </div>

        </div>
        <hr className="container mt-xl-5 mt-4" />
        <div className="mt-4 px-xl-4 px-0">
          <Container>
            <h5 className="text-black">
              Use Filters to find out the Exact job:{" "}
            </h5>
            <Row className="mt-4">
              <Col lg={3} md={4} xs={12}>
                <Select
                  placeholder="Experience Level"
                  options={options}
                  value={selectedOptions}
                  onChange={handleSelect}
                  isSearchable={true}
                  className="Experience_selector "
                />
              </Col>

              <Col lg={3} md={4} xs={12} className="p-0">
                <div>
                  <Select
                    placeholder="Job type"
                    options={jobtypeoptions}
                    value={jobselectedOptions}
                    onChange={handleJobselect}
                    isSearchable={true}
                    className="Experience_selector "
                  />
                </div>
              </Col>
              <Col lg={3} md={4} xs={12}>
                <div>
                  <Select
                    placeholder="Career-level"
                    options={careerleveloptions}
                    value={careerlevelOptions}
                    onChange={handlecareerlevel}
                    isSearchable={true}
                    className="Experience_selector "
                  />
                </div>
              </Col>
              <Col lg={3} md={4} xs={12} className='Datepicker_container'>
                <DatePicker
                  placeholderText="Select-Date"
                  selectsRange={true}
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(update) => {
                    setDateRange(update);
                  }}
                  isClearable={true}
                  className="Datepicker_box ps-3"
                />
              </Col>
              {/* <button onClick={() =>
              {setSelectedOptions(null); 
              setJobselectedOptions(null);
              setCareerOptions(null);
             
              }}>reset</button> */}
            </Row>
          </Container>
        </div>
        <div>
          <div className="mt-5 p-xl-5 p-1 Recentjobs_cardscontainer">
          <Container>
              <h4 className="pb-3 fw-bold">Showing Recent job Openings:</h4>
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
            </Container>

            <Container className="pt-5">
              <h4 className="pb-3 fw-bold">Showing All Job Openings:</h4>
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
            </Container>

            <div className="pagination_container">
              <Pagination>
                <Pagination.First />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Last />
              </Pagination>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobsearch;
