import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import {
    Button,
    Table, Col,
    Row,
    Card,
    FormControl
} from "react-bootstrap";

import searchjobimg from "../Assests/Images/searchjobimg.jpg";

import {
    MdLocationPin,

} from "react-icons/md";

import { HiOutlineCurrencyDollar } from "react-icons/hi";

import personimg from "../Assests/Images/personimage.jpg";
import {

    BsGeoAltFill,
    BsPinMapFill,
    BsPhoneFill,

    BsHandbagFill
} from "react-icons/bs";
import {

    HiMail

} from "react-icons/hi";
import {
    MdMarkEmailRead,
    MdPeopleAlt
} from "react-icons/md";
import { FaGlobeAfrica, FaBuilding, FaHeart, FaEnvelopeOpen } from "react-icons/fa";


function Companiesinner() {
    return (
        <>
            <div className="Companiesinner_container">
                <div className="UserProfile_heading d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <div className="Profilepic_container">
                            <img src={personimg} className='w-100 h-100' />
                        </div>
                        <div className="ps-3">
                            <h1>Ayc Technology</h1>
                            <h5 className='pt-2'>Infromation Technology</h5>
                            <div className="d-flex align-items-center pt-2">
                                <BsGeoAltFill className="fs-4 me-2" />
                                Madurai
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <Button className="me-3">
                            <FaHeart /> Add to Favourite </Button>
                        <Button>
                            <FaEnvelopeOpen /> Send Message </Button>
                    </div>
                </div>
                <div className="UserProfile_profileinfo">
                    <h3 >Company  Information</h3>
                    <Table striped hover className="my-4">

                        <tbody className="UserProfile_table">

                            <tr>
                                <td className="col-xl-4"><HiMail className="fs-2 me-2" />Mail</td>
                                <td className="col-xl-8">ABCinfo@gmail.com</td>
                            </tr>
                            <tr>
                                <td className="col-xl-4"><FaGlobeAfrica className="fs-2 me-2" />Website</td>
                                <td className="col-xl-8">www.ABCinfo.com</td>
                            </tr>
                            <tr>
                                <td className="col-xl-4"><BsPhoneFill className="fs-2 me-2" />Phone-number</td>
                                <td className="col-xl-8">34232312312</td>
                            </tr>
                            <tr>
                                <td className="col-xl-4"><BsPinMapFill className="fs-2 me-2" />Address</td>
                                <td className="col-xl-8">34 South Carolina Avenue, Fenwick madurai</td>
                            </tr>
                            <tr>
                                <td className="col-xl-4"><FaBuilding className="fs-2 me-2" />Established in</td>
                                <td className="col-xl-8">2019</td>
                            </tr>
                            <tr>
                                <td className="col-xl-4"><MdPeopleAlt className="fs-2 me-2" />Number of Employees</td>
                                <td className="col-xl-8">80</td>
                            </tr>
                            <tr>
                                <td className="col-xl-4"><MdMarkEmailRead className="fs-2 me-2" />E-Mail verified</td>
                                <td className="col-xl-8">Yes</td>
                            </tr>
                            <tr>
                                <td className="col-xl-4"><BsHandbagFill className="fs-2 me-2" />Current Jobs Openings</td>
                                <td className="col-xl-8">10</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="UserProfile_profileinfo">
                    <h3 >About the company</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper id nisi vel placerat. Sed lobortis velit at turpis egestas rhoncus. Curabitur nulla ipsum, malesuada tempor sodales sit amet, consectetur et tellus. Maecenas ultrices, ligula vitae blandit maximus, enim ligula vehicula risus, sit amet finibus tortor ex vitae est. Etiam eu consequat tortor. Proin pharetra ligula ante. Nulla facilisi. Aliquam at ipsum sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper id nisi vel placerat. Sed lobortis velit at turpis egestas rhoncus. Curabitur nulla ipsum, malesuada tempor sodales sit amet, consectetur et tellus. Maecenas ultrices, ligula vitae blandit maximus, enim ligula vehicula risus, sit amet finibus tortor ex vitae est. Etiam eu consequat tortor. Proin pharetra ligula ante. Nulla facilisi. Aliquam at ipsum sem.
                    </p>
                </div>
                <div className="UserProfile_profileinfo">
                    <h3 >Current Job Openings </h3>
                    <div className=" col-xl-6 col-12 d-flex my-5 ">
                        <FormControl
                            placeholder="Search by job title..."
                            className="me-2 py-3"
                        />
                        <Button className='companyinner_searchbtn'>Search </Button>
                    </div>
                    <Row xs={1} sm={1} md={2} xl={4} lg={4} className="g-4 my-3">
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
                </div>
            </div>
        </>
    );
}

export default Companiesinner;
