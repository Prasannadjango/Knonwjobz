import React from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Col, Row, FormControl, Button } from "react-bootstrap";
import { FaChalkboardTeacher, FaBriefcase } from "react-icons/fa";

import {
    MdLocationPin,
 
} from "react-icons/md";
import searchjobimg from "../Assests/Images/searchjobimg.jpg";

function Companies() {
    const navigate = useNavigate();
    const Companiesinner = () => {
      navigate('/Companiesinner');
    };
    return (
        <>
            <div className='Companies_container'>
                <Container>
                    <div className='Companies_searchbar d-flex'>
                        <div className="col-xl-10 col-12">
                            <FormControl type="text" placeholder="Search for Companies...." />
                        </div>
                        <div className="col-xl-2 col">
                            <Button>Search</Button>
                        </div>
                    </div>

                    <div className="py-5">
                        <h3 className="py-1">Showing all Companies</h3>
                        <Row xs={1} md={3} className="g-5 mx-0 my-2">

                            <Col onClick={Companiesinner}>
                                <div className="Jobscatpage_card py-4 ps-3 position-relative">
                                    <div>
                                        <img src={searchjobimg} className='w-100 ' />
                                    </div>
                                    <div className="ps-3">
                                        <h5 className="fw-bold text-dark">IBM Technology</h5>
                                        <div className="d-flex Location_container ">
                                            <MdLocationPin className="mt-1 fs-4 me-2" />
                                            <p className="pt-1 text-dark">Mumbai</p>
                                        </div>
                                        <div className="d-flex Location_container ">
                                            <FaBriefcase className="mt-1 fs-4 me-2" />
                                            <p className="pt-1 text-secondary">30 Openings</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col onClick={Companiesinner}>
                                <div className="Jobscatpage_card py-4 ps-3 position-relative">
                                    <div>
                                        <img src={searchjobimg} className='w-100 ' />
                                    </div>
                                    <div className="ps-3">
                                        <h5 className="fw-bold text-dark">Google Technology</h5>
                                        <div className="d-flex Location_container ">
                                            <MdLocationPin className="mt-1 fs-4 me-2" />
                                            <p className="pt-1 text-dark">Mumbai</p>
                                        </div>
                                        <div className="d-flex Location_container ">
                                            <FaBriefcase className="mt-1 fs-4 me-2" />
                                            <p className="pt-1 text-secondary">30 Openings</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col onClick={Companiesinner}>
                                <div className="Jobscatpage_card py-4 ps-3 position-relative">
                                    <div>
                                        <img src={searchjobimg} className='w-100 ' />
                                    </div>
                                    <div className="ps-3">
                                        <h5 className="fw-bold text-dark">Bhive Technology</h5>
                                        <div className="d-flex Location_container ">
                                            <MdLocationPin className="mt-1 fs-4 me-2" />
                                            <p className="pt-1 text-dark">Mumbai</p>
                                        </div>
                                        <div className="d-flex Location_container ">
                                            <FaBriefcase className="mt-1 fs-4 me-2" />
                                            <p className="pt-1 text-secondary">30 Openings</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="Jobscatpage_card py-4 ps-3 position-relative">
                                    <div>
                                        <img src={searchjobimg} className='w-100 ' />
                                    </div>
                                    <div className="ps-3">
                                        <h5 className="fw-bold text-dark">IBM Technology</h5>
                                        <div className="d-flex Location_container ">
                                            <MdLocationPin className="mt-1 fs-4 me-2" />
                                            <p className="pt-1 text-dark">Mumbai</p>
                                        </div>
                                        <div className="d-flex Location_container ">
                                            <FaBriefcase className="mt-1 fs-4 me-2" />
                                            <p className="pt-1 text-secondary">30 Openings</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="Jobscatpage_card py-4 ps-3 position-relative">
                                    <div>
                                        <img src={searchjobimg} className='w-100 ' />
                                    </div>
                                    <div className="ps-3">
                                        <h5 className="fw-bold text-dark">Google Technology</h5>
                                        <div className="d-flex Location_container ">
                                            <MdLocationPin className="mt-1 fs-4 me-2" />
                                            <p className="pt-1 text-dark">Mumbai</p>
                                        </div>
                                        <div className="d-flex Location_container ">
                                            <FaBriefcase className="mt-1 fs-4 me-2" />
                                            <p className="pt-1 text-secondary">30 Openings</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="Jobscatpage_card py-4 ps-3 position-relative">
                                    <div>
                                        <img src={searchjobimg} className='w-100 ' />
                                    </div>
                                    <div className="ps-3">
                                        <h5 className="fw-bold text-dark">Bhive Technology</h5>
                                        <div className="d-flex Location_container ">
                                            <MdLocationPin className="mt-1 fs-4 me-2" />
                                            <p className="pt-1 text-dark">Mumbai</p>
                                        </div>
                                        <div className="d-flex Location_container ">
                                            <FaBriefcase className="mt-1 fs-4 me-2" />
                                            <p className="pt-1 text-secondary">30 Openings</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
 
 




                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Companies;
