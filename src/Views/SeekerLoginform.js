import React from "react";
import { Container, Button, Row, Col, InputGroup, Form } from "react-bootstrap";
import Jobseekerimg from "../Assests/Images/jobseeker.jpg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function SeekerLoginform() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  return (

    <>
      <div className="Seeker_maincontainer mb-5">
        <Container>
          <div>
            <Row xl={2}>
              <Col className="p-0">
                <img src={Jobseekerimg} className="w-100" />
              </Col>
              <Col className="login_formcontainer p-3">
                <div className="Jobseeker_btnscontainer">
                  {/* <Link to='/SeekerLoginforms'></Link> */}
                  <Button>Login as Job-seeker</Button>
                  <Link to="/RecuriterLoginforms">
                    <Button>Login as Job-Recuriter</Button>
                  </Link>
                </div>

                <Form className="Jobseeker_formfields" onSubmit={handleSubmit()}>
                  <h4 className="text-center fw-bold pb-3">Jobseeker-login</h4>
                  <Form.Control placeholder="Email-id " className="mb-4"  {...register("mail", { required: true })}
                    aria-invalid={errors.mail ? "true" : "false"} />
                  {errors.mail?.type === 'required' && <p role="alert" className="text-danger">E-mail is required</p>}
                  <Form.Control placeholder="Password" type='password' className="mb-4" 
                  {...register("password", { required: true })}
                  aria-invalid={errors.password ? "true" : "false"} 
                  />
                   {errors.password?.type === 'required' && <p role="alert" className="text-danger">Password is required</p>}
                 
                  <Button className="col-12" type='submit'>Login</Button>
                
                </Form>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="mt-4 Alreadyacc_container text-center mt-5">
          <h5>Don't have an Account?</h5>
          <Link to="/Register"> Create one</Link>
        </div>
      </div>
    </>
  );
}

export default SeekerLoginform;
