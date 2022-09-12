import React from "react";
import {
    Button,
    Col,
    Container,
    FormControl,
    Row,
    Dropdown,
    Card,
    Pagination
  } from "react-bootstrap";
  import { HiOutlineCurrencyDollar } from "react-icons/hi";
  import searchjobimg from "../Assests/Images/searchjobimg.jpg";
  import { MdLocationPin } from "react-icons/md";
function Companyjob() {
  return (
    <>
      <div className="Companyjobs_container pb-5 ps-4">
        <h3>Showing all job openings in IBM Comapany</h3>
        <div className="col-6 pt-4 d-flex Company_searchbar ">
          <FormControl type="text" placeholder="Search bt keywords,names...." />
          <Button>Search</Button>
        </div>

        <div className="mt-5 pe-3 p-1 Recentjobs_cardscontainer">
           
              
              <Row xs={1} md={3} className="g-5">
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
                      </Card.Text>
                    </Card.Body>
                    <div className="SeeDetails_container col-12 px-3 ">
                      <Button className="mb-3">Apply Now</Button>
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
                      </Card.Text>
                    </Card.Body>
                    <div className="SeeDetails_container col-12 px-3 ">
                      <Button className="mb-3">Apply Now</Button>
                      <Button>Add to Favourite jobs</Button>
                    </div>
                  </Card>
                </Col>
              </Row>
           

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
    </>
  );
}

export default Companyjob;
