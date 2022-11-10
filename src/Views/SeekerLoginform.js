import React from "react";
import { Container, Button, Row, Col, InputGroup, Form } from "react-bootstrap";
import Jobseekerimg from "../Assests/Images/jobseeker.jpg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const EmailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const schema = yup.object({
  email: yup.string().required('Email is Required').matches(EmailRegExp, 'Email is Not Valid'),
  password: yup.string().required('Password is required'),
}).required();
function SeekerLoginform() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.table(data);
  return (

    <>
      <div className="Seeker_maincontainer mb-5">
        <Container>
          <div>
            <Row xl={2}>
              <Col className="p-0">
                <img src={Jobseekerimg} className="w-100 h-100" />
              </Col>
              <Col className="login_formcontainer p-3">
                <div className="Jobseeker_btnscontainer">
                  {/* <Link to='/SeekerLoginforms'></Link> */}
                  <Button>Login as Job-seeker</Button>
                  <Link to="/RecuriterLoginforms">
                    <Button>Login as Job-Recuriter</Button>
                  </Link>
                </div>

                <Form className="Jobseeker_formfields" onSubmit={handleSubmit(onSubmit)}>
                  <h4 className="text-center fw-bold pb-3">Jobseeker-login</h4>
                  <div className="w-100 my-2">
                    <Form.Control placeholder="Email-id " className="mb-2"
                      {...register("email")}
                    />
                    <p className='text-danger'>{errors.email?.message}</p>
                  </div>

                  <div className="w-100 my-2">
                    <Form.Control placeholder="Password" type='password' className="mb-2"
                      {...register("password")}
                    />
                    <p className='text-danger'>{errors.password?.message}</p>
                  </div>

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
