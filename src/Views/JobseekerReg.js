import React from "react";
import { Container,InputGroup,Form,Button } from "react-bootstrap";

function JobseekerReg() {
    return (
       <>
         <div className="Jobseekermain_container">
            <Container>
                <h1 className="text-center">Create an Jobseeker-Account</h1>
                <div className="Recuriterform_container p-xl-5 p-2 my-5">
                <InputGroup className="my-xl-3 my-1">
              <Form.Control placeholder="First-name" />
              <Form.Control placeholder="Middle-name" />
            </InputGroup>
            <InputGroup className="my-xl-3 my-1">
              <Form.Control placeholder="Last-name" />
              <Form.Control placeholder="Email" />
            </InputGroup>
            <InputGroup className="my-xl-3 my-1 ">
              <Form.Control placeholder="Phone-number" />
              <Form.Control placeholder="Current Salary" />
            </InputGroup>
            <InputGroup className="my-xl-3 my-1">
              <Form.Control placeholder="Expected Salary" />
              <Form.Control placeholder=" Salary's Currency" />
            </InputGroup>
            <InputGroup className="my-xl-3 my-1 ">
              <Form.Control placeholder="Password" />
              <Form.Control placeholder="Confirm-Password" />
            </InputGroup>
            <div className="col-12 Create_Accountbtn mt-xl-5 mt-2">
               <Button>Create an account</Button>
              </div>
                </div>
                
            </Container>
         </div>
       </>
    );
  } 
  
  export default JobseekerReg;