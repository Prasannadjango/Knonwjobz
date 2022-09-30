import React from "react";
import { Button, Col, Container, Row, Card , FormControl} from "react-bootstrap";
import searchjobimg from "../Assests/Images/searchjobimg.jpg";
import { Link } from "react-router-dom";
import {
    MdLocationPin,

} from "react-icons/md";

import { HiOutlineCurrencyDollar } from "react-icons/hi";
function Jobcategoryinner() {
    return (
        <>
            <div className=" Applidecandidate_container">
            <Container>
         <div className="Recentjob_searchbar d-flex mb-5">
          <div className="col-xl-10 col-12">
            <FormControl type="text" placeholder="Search for job category...."/>
          </div>
          <div className="col-xl-2 col"> 
             <Button>Search</Button>
          </div>
        </div>
         </Container>
                <Container className="mb-4">
                    <h2 className="pb-3">Show all job openings on Engineering role</h2>
                    <Row xs={1} sm={1} md={2} xl={4} lg={4} className="g-4">
                        <Col>
                            <Card className=" Recentjobs_cards2 py-3 border-0">
                                <div>
                                    <img src={searchjobimg} className="w-100 " />
                                </div>
                                <Card.Body>
                                    <Card.Title className="fw-bold">
                                        Civil Engineer
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
                                        <div>
                                            <p className="text-secondary">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit.
                                            </p>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                                <div className="SeeDetails_container col-12 px-3 d-flex">
                                    <Link to="/Applyjobdetails" className="w-100">
                                        <Button>Apply Now</Button>
                                    </Link>
                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <Card className=" Recentjobs_cards2 py-3 border-0">
                                <div>
                                    <img src={searchjobimg} className="w-100 " />
                                </div>
                                <Card.Body>
                                    <Card.Title className="fw-bold">
                                        Civil Engineer
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
                                        <div>
                                            <p className="text-secondary">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit.
                                            </p>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                                <div className="SeeDetails_container col-12 px-3 d-flex">
                                    <Link to="/Applyjobdetails" className="w-100">
                                        <Button>Apply Now</Button>
                                    </Link>
                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <Card className=" Recentjobs_cards2 py-3 border-0">
                                <div>
                                    <img src={searchjobimg} className="w-100 " />
                                </div>
                                <Card.Body>
                                    <Card.Title className="fw-bold">
                                        Civil Engineer
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
                                        <div>
                                            <p className="text-secondary">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit.
                                            </p>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                                <div className="SeeDetails_container col-12 px-3 d-flex">
                                    <Link to="/Applyjobdetails" className="w-100">
                                        <Button>Apply Now</Button>
                                    </Link>
                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <Card className=" Recentjobs_cards2 py-3 border-0">
                                <div>
                                    <img src={searchjobimg} className="w-100 " />
                                </div>
                                <Card.Body>
                                    <Card.Title className="fw-bold">
                                        Civil Engineer
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
                                        <div>
                                            <p className="text-secondary">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit.
                                            </p>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                                <div className="SeeDetails_container col-12 px-3 d-flex">
                                    <Link to="/Applyjobdetails" className="w-100">
                                        <Button>Apply Now</Button>
                                    </Link>
                                </div>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Jobcategoryinner;
