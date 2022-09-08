import React from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
function Recuriterreg() {
  return (
    <>
      <div className="Recuriterreg_container">
        <Container>
          <h1 className="text-center">Create an Recuriter-Account</h1>

          <div className="Recuriterform_container p-xl-5 p-2 my-5">
            <div className="Labelbadge_container d-flex">
              <div>1</div>
              <h4 className="ps-3 pt-3">Personal Information</h4>
            </div>
            <InputGroup className=" my-xl-3 my-1 ">
              <Form.Control placeholder="First-name" />
              <Form.Control placeholder="Last-name" />
            </InputGroup>
            <InputGroup className="my-xl-3 my-1 ">
              <Form.Control placeholder="Contact-number" />
              <Form.Control placeholder="Email" />
            </InputGroup>
            <InputGroup className="my-xl-3 my-1  ">
              <Form.Control placeholder="Password" />
              <Form.Control placeholder="Confirm-Password" />
            </InputGroup>
            <div className="mt-4  Company_infocontainer">
              <div className="Labelbadge_container d-flex">
                <div>2</div>
                <h4 className="ps-3 pt-2">Company's Information</h4>
              </div>
              <InputGroup className="my-xl-3 my-1 ">
                <Form.Control placeholder="Company's name" />
                <Form.Control placeholder="Company's Location" />
              </InputGroup>
              <InputGroup className="my-xl-3 my-1">
                <Form.Control placeholder="Contact-number" />
                <Form.Control placeholder="Email" />
              </InputGroup>
              <InputGroup className="my-xl-3 my-1 ">
                <Form.Control placeholder="Number of Offices" />
                <Form.Control placeholder="Established in" />
              </InputGroup>
              <Form.Group
                className="mb-3 mt-xl-0 mt-2"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="textarea"  placeholder=' Description' rows={5} />
              </Form.Group>

              <div className="col-12 Create_Accountbtn mt-xl-5 mt-2">
               <Button>Create an account</Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Recuriterreg;
