import React from "react";
import { Container, InputGroup, Form, Button, Row, Col } from "react-bootstrap";
import { MdLocationPin,MdStayCurrentPortrait,MdDrafts} from "react-icons/md";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const numberRegExp = /^[0-9]*$/
const EmailRegExp =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const schema = yup.object({
  name: yup.string().required("Name is Required"),
  phoneNumber: yup.string().required("phone number is required").matches(phoneRegExp, 'Phone number is not valid').min(10, "Phone number must 10 Digits").max(10, "Phone number must 10 Digits"),
  email:yup.string().required('Email is Required').matches(EmailRegExp,'Email is Not Valid'),
  comment:yup.string().required('Comment is Required'),
  
}).required();
function Contact() {
  const {register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.table(data);
  return (
    <>
      <div className="Contact_maincontainer">
        <div  className="Contact_detailsboxes">
          <Container fluid className="px-xl-5 px-0">
          <div xl={6}  xs={12}  className="Job_boxes">
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
          <Form className="Contanct_form my-xl-5 my-3  p-3"  onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center">
              Fill-up this form we will Contact you soon
            </h1>
            <h5 className="text-center text-secondary pt-3">
              we wil call you or reply to your mail-id within 24hrs
            </h5>
            <Container className="mt-5">
              <div className="Contanctform">
                <InputGroup className="my-3 ">
                  <div className="w-100 my-2">
                  <Form.Control placeholder="Name" 
                  {...register("name")}
                  />
                   <p className='text-danger'>{errors.name?.message}</p>
                  </div>
                 <div className="w-100 my-2">
                 <Form.Control placeholder="Mobile-Number" 
                  {...register("phoneNumber")}
                 />
                   <p className='text-danger'>{errors.phoneNumber?.message}</p>
                 </div>
                 <div className="w-100 my-2">
                 <Form.Control placeholder="Email-id" 
                   {...register("email")}
                   />
                   <p className='text-danger'>{errors.email?.message}</p>
                 </div>
                </InputGroup>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control as="textarea" placeholder="Comment" rows={5} 
                    {...register("comment")}
                  />
                <p className='text-danger pt-2'>{errors.comment?.message}</p>
                   
                </Form.Group>
                <div className="col-12 Create_Accountbtn mt-3">
                  <Button type='submit'>Send message</Button>
                </div>
              </div>
            </Container>
          </Form>
        </Container>
      </div>
    </>
  );
}
export default Contact;
