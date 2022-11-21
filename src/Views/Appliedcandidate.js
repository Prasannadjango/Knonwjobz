import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row, Card, Badge } from "react-bootstrap";
import searchjobimg from "../Assests/Images/searchjobimg.jpg";
function Applidecandidate() {
  return (
    <>
      <div className=" Applidecandidate_container">
       
        <Container className="mb-4">
        <h2 className="pb-3">Show all Applied profiles</h2>
          <Row xs={1} sm={1} md={2} xl={4} lg={4} className="g-4">
            <Col>
              <Card className="Searchjobs_card pb-3">
                <div>
                  <div>
                    <img src={searchjobimg} className="w-100 " />
                  </div>
                  <Badge pill bg="secondary" className="Apply_badge">
                    Applied on 2 days ago
                  </Badge>
                </div>

                <Card.Body className="pt-5">
                  <Card.Title className="fw-bold">James</Card.Title>
                  <Card.Text>Java Developer</Card.Text>
                </Card.Body>
                <div className="SeeDetails_container col-12 px-3 ">
                  <Link to='/Appliedprofilesinfo'>
                  <Button>View Profile</Button>
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

export default Applidecandidate;
