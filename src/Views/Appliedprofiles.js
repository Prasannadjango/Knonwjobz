import React from "react";
import { Button, Table, Card } from "react-bootstrap";
import { BsFillCloudDownloadFill, BsFillFilePersonFill, BsTelephoneForwardFill,BsFillPersonCheckFill, BsPeopleFill, BsGlobe, BsGeoAltFill, BsPinMapFill, BsGeoFill, BsPhoneFill } from "react-icons/bs";
import personimg from "../Assests/Images/personimage.jpg";
function Appliedprofilesinner() {
    return (
        <>
            <div className="Userprofile_container">
                <div className="UserProfile_heading d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <div className="Profilepic_container">
                            <img src={personimg} className='w-100 h-100' />
                        </div>
                        <div className="ps-3">
                            <h1>Rambo</h1>
                            <h5>Senior Web Developer</h5>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                    <Button className="me-3"><BsTelephoneForwardFill className="me-3 fs-4" />
                           Call for Interview </Button>
                            

                        <Button className="me-3"><BsFillPersonCheckFill className="me-3 fs-4" />
                            Approve profile </Button>

                        <Button><BsFillCloudDownloadFill className="me-3 fs-4" />
                            Download Resume </Button>

                    </div>
                </div>
                <div className="UserProfile_profileinfo">
                    <h3 >Personal Information</h3>
                    <Table striped hover className="my-4">

                        <tbody className="UserProfile_table">
                            <tr>
                                <td className="col-xl-4"><BsFillFilePersonFill className="fs-2 me-2" />Gender</td>
                                <td className="col-xl-8">Male</td>
                            </tr>
                            <tr>
                                <td className="col-xl-4"><BsPeopleFill className="fs-2 me-2" />Martial Status</td>
                                <td className="col-xl-8">Single</td>
                            </tr>
                            <tr>
                                <td className="col-xl-4"><BsGlobe className="fs-2 me-2" />Country</td>
                                <td className="col-xl-8">India</td>
                            </tr>
                            <tr>
                                <td className="col-xl-4"><BsGeoFill className="fs-2 me-2" />State</td>
                                <td className="col-xl-8">Tamil Nadu</td>
                            </tr>
                            <tr>
                                <td className="col-xl-4"><BsGeoAltFill className="fs-2 me-2" />City</td>
                                <td className="col-xl-8">Madurai</td>
                            </tr>
                            <tr>
                                <td className="col-xl-4"><BsPhoneFill className="fs-2 me-2" />Phone-number</td>
                                <td className="col-xl-8">34232312312</td>
                            </tr>
                            <tr>
                                <td className="col-xl-4"><BsPinMapFill className="fs-2 me-2" />Address</td>
                                <td className="col-xl-8">34 South Carolina Avenue, Fenwick madurai</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="UserProfile_profileinfo">
                    <h3 >About me</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper id nisi vel placerat. Sed lobortis velit at turpis egestas rhoncus. Curabitur nulla ipsum, malesuada tempor sodales sit amet, consectetur et tellus. Maecenas ultrices, ligula vitae blandit maximus, enim ligula vehicula risus, sit amet finibus tortor ex vitae est. Etiam eu consequat tortor. Proin pharetra ligula ante. Nulla facilisi. Aliquam at ipsum sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper id nisi vel placerat. Sed lobortis velit at turpis egestas rhoncus. Curabitur nulla ipsum, malesuada tempor sodales sit amet, consectetur et tellus. Maecenas ultrices, ligula vitae blandit maximus, enim ligula vehicula risus, sit amet finibus tortor ex vitae est. Etiam eu consequat tortor. Proin pharetra ligula ante. Nulla facilisi. Aliquam at ipsum sem.
                    </p>
                </div>
                <div className="UserProfile_profileinfo">
                    <h3 >Education Details</h3>
                    <div className="d-flex EducationDetails_container mt-5 ">
                        <Card className="me-xl-5 me-md-5 me-0 mb-xl-0 mb-md-0 mb-4">

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

                    </div>
                </div>
                <div className="UserProfile_profileinfo">
                    <h3 >Previous Work Experience</h3>
                    <div className="d-flex EducationDetails_container mt-4 ">
                        <Card className="me-xl-5 me-0">

                            <Card.Body>
                                <Card.Title className="fw-bold">
                                    Front-end Developer
                                </Card.Title>
                                <Card.Text>
                                    <h5>Abc Technology</h5>
                                    <h5>3 years</h5>
                                    <h6>2014-2017</h6>
                                </Card.Text>
                            </Card.Body>
                        </Card>


                    </div>
                </div>
                <div className="UserProfile_profileinfo">
                    <h3 >Skills</h3>
                    <div className="d-flex myskills_container mt-4 ">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Figma</span>
                        <span>Javascript</span>
                        <span>Core php</span>
                        <span>React js</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Appliedprofilesinner;
