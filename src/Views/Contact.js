import React from "react";
import { Container, InputGroup, Form, Button, Row, Col } from "react-bootstrap";
import { MdLocationPin,MdStayCurrentPortrait,MdDrafts} from "react-icons/md";
function Contact() {
  return (
    <>
      <div className="Contact_maincontainer">
        <div  className="Contact_detailsboxes">
          <Container fluid className="px-xl-5 px-0">
          <div xl={6} xs={12}  className="Job_boxes">
              <div className="me-4">
                <h4 className="fw-bold">Jobseeker Customer help Contact</h4>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam suscipit nibh vel finibus blandit. Ut et lectus
                  fermentum, fringilla enim et, elementum nulla.
                </p>
                <div className="d-flex">
                    <MdStayCurrentPortrait className="mt-1 fs-4 me-2" />
                    <p className="pt-1 ">+91-33433423</p>
                  </div>
                  <div className="d-flex">
                  <MdDrafts className="mt-1 fs-4 me-2" />
                    <p className="pt-1 text-dark-50">Knownjobz@gmail.com</p>
                  </div>
              </div>
              <div >
                <h4 className="fw-bold">Jobrecuriter Customer help Contact</h4>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam suscipit nibh vel finibus blandit. Ut et lectus
                  fermentum, fringilla enim et, elementum nulla.
                </p>
                <div className="d-flex">
                    <MdStayCurrentPortrait className="mt-1 fs-4 me-2" />
                    <p className="pt-1 ">+91-33433423</p>
                  </div>
                  <div className="d-flex">
                  <MdDrafts className="mt-1 fs-4 me-2" />
                    <p className="pt-1 text-dark-50">Knownjobz@gmail.com</p>
                  </div>
              </div>
            </div>
          </Container>
           
          
        </div>
        <Container>
          <div className="Contanct_form my-xl-5 my-3  p-3">
            <h1 className="text-center">
              Fill-up this form we will Contact you soon
            </h1>
            <h5 className="text-center text-secondary pt-3">
              we wil call you or reply to your mail-id within 24hrs
            </h5>
            <Container className="mt-5">
              <div className="Contanctform">
                <InputGroup className="my-3 ">
                  <Form.Control placeholder="Name" />
                  <Form.Control placeholder="Mobile-Number" />
                  <Form.Control placeholder="Email-id" />
                </InputGroup>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control as="textarea" placeholder="Comment" rows={5} />
                </Form.Group>
                <div className="col-12 Create_Accountbtn mt-3">
                  <Button>Send message</Button>
                </div>
              </div>
            </Container>
          </div>
        </Container>
      </div>
    </>
  );
}
export default Contact;
