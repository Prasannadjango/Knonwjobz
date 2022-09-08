import React from "react";
import { Container, Col, Badge, Button } from "react-bootstrap";
import profilepic from "../Assests/Images/jobseeker.jpg";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

import { MdLocationPin } from "react-icons/md";
function Applyjobs() {
  return (
    <>
      <div className="Applyjobs_container pb-5">
        <Container>
          <div className="d-flex">
            <Col xs={12} xl={8}>
              <div className="Job_description p-5">
                <div className="Applyjobs_header d-flex">
                  <div>
                    <img src={profilepic} className="w-100" />
                  </div>
                  <div>
                    <h3>Java Developer</h3>
                    <div className="d-flex Location_container">
                      <MdLocationPin className="mt-1 fs-4 me-2" />
                      <p className="pt-1 text-secondary">Mumbai</p>
                    </div>
                    <div className="d-flex Location_container">
                      <HiOutlineCurrencyDollar className="mt-1 fs-4 me-2" />
                      <p className="pt-1 text-secondary">1000/month</p>
                    </div>
                  </div>
                </div>
                <div className="jobinfo_container pt-4">
                  <h4 className="fw-bold">Job Detail</h4>
                  <ul className="p-0 ">
                    <li className="d-flex pt-4">
                      <h5 className="pe-2 fw-bold">Location:</h5>
                      <p>Mumbai</p>
                    </li>
                    <li className="d-flex ">
                      <h5 className="pe-2 fw-bold">Company:</h5>
                      <p>Google</p>
                    </li>
                    <li className="d-flex ">
                      <h5 className="pe-2 fw-bold">Type:</h5>
                      <p>Full-time</p>
                    </li>
                    <li className="d-flex ">
                      <h5 className="pe-2 fw-bold">Shift:</h5>
                      <p>Day</p>
                    </li>
                    <li className="d-flex ">
                      <h5 className="pe-2 fw-bold">Career-level:</h5>
                      <p>Fresher</p>
                    </li>
                    <li className="d-flex ">
                      <h5 className="pe-2 fw-bold">Position-Opening:</h5>
                      <p>11</p>
                    </li>
                    <li className="d-flex ">
                      <h5 className="pe-2 fw-bold">Experience:</h5>
                      <p>Fresher</p>
                    </li>
                    <li className="d-flex ">
                      <h5 className="pe-2 fw-bold"> Degree:</h5>
                      <p>bachelor's in science</p>
                    </li>
                    <li className="d-flex ">
                      <h5 className="pe-2 fw-bold"> last apply date:</h5>
                      <p>12.3.23</p>
                    </li>
                  </ul>

                  <div className="Jobdescription_container">
                    <h4 className="fw-bold">Job Description</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus consequat pulvinar ligula vestibulum pharetra.
                      Maecenas ac ex hendrerit, pharetra nulla pretium, cursus
                      velit. Fusce lacinia fermentum nisl. Pellentesque
                      porttitor blandit orci, eu pulvinar neque pulvinar
                      aliquet. Maecenas fermentum ipsum arcu, ac imperdiet odio
                      malesuada ac.
                    </p>
                  </div>
                  <div className="Skillset_container">
                    <h4 className="fw-bold">Skills Required</h4>
                    <div className="Skillsetbadge_container d-flex pt-3">
                      <Badge pill className="p-3 fw-bold fs-6 me-3">
                        OOps
                      </Badge>
                      <Badge pill className="p-3 fw-bold fs-6 me-3">
                        Database
                      </Badge>
                      <Badge pill className="p-3 fw-bold fs-6 me-3">
                        HTML
                      </Badge>
                      <Badge pill className="p-3 fw-bold fs-6 me-3">
                        Springboot
                      </Badge>
                      <Badge pill className="p-3 fw-bold fs-6 me-3">
                        css
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="Apply_btncontainer mt-5 col-12">
                  <Button>Apply Now</Button>
                  <Button>Add to Favourite Jobs</Button>
                </div>
              </div>
            </Col>
            <Col xs={12} xl={4}>
              <div className="Aboutcompany_container p-5">
                <h4 className="fw-bold"> Company Overview</h4>
                <h6 className="fw-bold ">30 total Openings</h6>
                <p className="pt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus consequat pulvinar ligula vestibulum pharetra.
                  Maecenas ac ex hendrerit, pharetra nulla pretium, cursus
                  velit. Fusce lacinia fermentum nisl. Pellentesque porttitor
                  blandit orci, eu pulvinar neque pulvinar aliquet. Maecenas
                  fermentum ipsum arcu, ac imperdiet odio malesuada ac.
                </p>
                <div className="col-12">
                    <Button>See Other Jobs</Button>
                </div>
              </div>
            </Col>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Applyjobs;
