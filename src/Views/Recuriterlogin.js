import React from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Button, Row, Col, Form } from "react-bootstrap";
import Jobseekerimg from "../Assests/Images/Jobrecuriter.jpg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const EmailRegExp =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const schema = yup.object({
  email:yup.string().required('Email is Required').matches(EmailRegExp,'Email is Not Valid'),
  password:yup.string().required('Password is required'),
 }).required();
function Recuriterlogin() {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.table(data);
  const navigate = useNavigate();
  const RecuriterProfile = () => {
    navigate('/Jobrecuriterprofile');
  };
  return (

    <>
      <div className="Seeker_maincontainer2 mb-5">
        <Container>
          <div>
            <Row xl={2}>
              <Col className="login_formcontainer2 p-3">
                <div className="Jobseeker_btnscontainer2">
                  <Link to="/SeekerLoginforms">
                    <Button>Login as Job-seeker</Button>
                  </Link>
                  <Button>Login as Job-Recuriter</Button>
                </div>

                <Form className="JobRecuriter_formfields" onSubmit={handleSubmit(onSubmit)}>
                  <h4 className="text-center fw-bold pb-3">
                    JobRecuriter-login
                  </h4>
                  <div className="w-100 my-2">
                  <Form.Control placeholder="Email-id " className="mb-2"
                     {...register("email")}
                 />
                  <p className='text-danger'>{errors.email?.message}</p>
                  </div>
                 
                 <div className="w-100 my-2">
                 <Form.Control placeholder="Password"
                    type='password' className="mb-2"
                    {...register("password")}
                  />
                  <p className='text-danger'>{errors.password?.message}</p>
                 </div>
                  
                   
                  <Button className="col-12" type='submit' onClick={RecuriterProfile}>Login</Button>

                </Form>
              </Col>
              <Col className="p-0">
                <img src={Jobseekerimg} className="w-100 h-100" />
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

export default Recuriterlogin;
