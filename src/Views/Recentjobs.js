import React from "react";
import { Button, Container, Col, Row, Card, Badge, FormControl } from "react-bootstrap";
import searchjobimg from "../Assests/Images/searchjobimg.jpg";
import { MdLocationPin } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
function Recentjobs() {
  return (
    <>
      <div className="Recentjobs_pagemaincontainer mb-5">
        <div className="  Recentjobs_pagecardscontainer">
         <Container>
         <div className="Recentjob_searchbar d-flex mb-5">
          <div className="col-10">
            <FormControl type="text" placeholder="Search for Recent jobs...."/>
          </div>
          <div className="col-2"> 
             <Button>Search jobs</Button>
          </div>
        </div>
         </Container>
          <Container>
            <h4 className=" pb-4 fw-bold">Explore Recent Jobs</h4>
            <Row xs={1} md={3} className="g-4">
              <Col>
                <Card className="Recentjobs_pagecards py-3 border-0">
                  <div>
                    <img src={searchjobimg} className="w-100 " />
                    <Badge pill> Posted a day ago</Badge>
                  </div>

                  <Card.Body>
                    <Card.Title className="fw-bold">Java Developer</Card.Title>
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
                          elit. Donec quis dui quis arcu ultricies malesuada
                          vitae vitae eros. Donec ex ipsum, dapibus ac placerat
                          eget, eleifend vitae elit.
                        </p>
                      </div>
                    </Card.Text>
                  </Card.Body>
                  <div className="SeeDetails_container col-12 px-3 d-flex">
                    <Button>Apply Now</Button>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="Recentjobs_pagecards py-3 border-0">
                  <div>
                    <img src={searchjobimg} className="w-100 " />
                    <Badge pill> Posted a day ago</Badge>
                  </div>

                  <Card.Body>
                    <Card.Title className="fw-bold">Java Developer</Card.Title>
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
                          elit. Donec quis dui quis arcu ultricies malesuada
                          vitae vitae eros. Donec ex ipsum, dapibus ac placerat
                          eget, eleifend vitae elit.
                        </p>
                      </div>
                    </Card.Text>
                  </Card.Body>
                  <div className="SeeDetails_container col-12 px-3 d-flex">
                    <Button>Apply Now</Button>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="Recentjobs_pagecards py-3 border-0">
                  <div>
                    <img src={searchjobimg} className="w-100 " />
                    <Badge pill> Posted a day ago</Badge>
                  </div>

                  <Card.Body>
                    <Card.Title className="fw-bold">Java Developer</Card.Title>
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
                          elit. Donec quis dui quis arcu ultricies malesuada
                          vitae vitae eros. Donec ex ipsum, dapibus ac placerat
                          eget, eleifend vitae elit.
                        </p>
                      </div>
                    </Card.Text>
                  </Card.Body>
                  <div className="SeeDetails_container col-12 px-3 d-flex">
                    <Button>Apply Now</Button>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="Recentjobs_pagecards py-3 border-0">
                  <div>
                    <img src={searchjobimg} className="w-100 " />
                    <Badge pill> Posted a day ago</Badge>
                  </div>

                  <Card.Body>
                    <Card.Title className="fw-bold">Java Developer</Card.Title>
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
                          elit. Donec quis dui quis arcu ultricies malesuada
                          vitae vitae eros. Donec ex ipsum, dapibus ac placerat
                          eget, eleifend vitae elit.
                        </p>
                      </div>
                    </Card.Text>
                  </Card.Body>
                  <div className="SeeDetails_container col-12 px-3 d-flex">
                    <Button>Apply Now</Button>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="Recentjobs_pagecards py-3 border-0">
                  <div>
                    <img src={searchjobimg} className="w-100 " />
                    <Badge pill> Posted a day ago</Badge>
                  </div>

                  <Card.Body>
                    <Card.Title className="fw-bold">Java Developer</Card.Title>
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
                          elit. Donec quis dui quis arcu ultricies malesuada
                          vitae vitae eros. Donec ex ipsum, dapibus ac placerat
                          eget, eleifend vitae elit.
                        </p>
                      </div>
                    </Card.Text>
                  </Card.Body>
                  <div className="SeeDetails_container col-12 px-3 d-flex">
                    <Button>Apply Now</Button>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card className="Recentjobs_pagecards py-3 border-0">
                  <div>
                    <img src={searchjobimg} className="w-100 " />
                    <Badge pill> Posted a day ago</Badge>
                  </div>

                  <Card.Body>
                    <Card.Title className="fw-bold">Java Developer</Card.Title>
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
                          elit. Donec quis dui quis arcu ultricies malesuada
                          vitae vitae eros. Donec ex ipsum, dapibus ac placerat
                          eget, eleifend vitae elit.
                        </p>
                      </div>
                    </Card.Text>
                  </Card.Body>
                  <div className="SeeDetails_container col-12 px-3 d-flex">
                    <Button>Apply Now</Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Recentjobs;
