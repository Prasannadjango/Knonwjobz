import React from "react";
import { Container, InputGroup, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const numberRegExp = /^[0-9]*$/
const EmailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const PasswordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/
const schema = yup.object({
  firstName: yup.string().required("Firstname is Required"),
  middleName: yup.string().required("Middlename is Required"),
  lastName: yup.string().required("Lastname is Required"),
  phoneNumber: yup.string().required("phone number is required").matches(phoneRegExp, 'Phone number is not valid').min(10, "Phone number must 10 Digits").max(10, "Phone number must 10 Digits"),
  email: yup.string().required('Email is Required').matches(EmailRegExp, 'Email is Not Valid'),
  currentsalary: yup.string().required("Current Salary is required").matches(numberRegExp, 'Current salary must be in Number'),
  expectedsalary: yup.string().required("Expected Salary is required").matches(numberRegExp, 'Expected Salary must be in Number'),
  password: yup.string().required('Password is required')
    .matches(PasswordRegExp, 'Password is Weak , Password must have Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character'),
  confirmpassword: yup.string().required("confirm password is Required").oneOf([yup.ref("password")], "Passwords do not match"),
}).required();


function JobseekerReg() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.table(data);

  return (
    <>
      <Form className="Jobseekermain_container" onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <h1 className="text-center">Create an Jobseeker-Account</h1>
          <div className="Recuriterform_container p-xl-3  p-3 my-5">
            <div className='Recuriterform_section'>
              <div className="d-flex ">
                <InputGroup className="my-1 ">
                  <div >
                    <Form.Control placeholder="First-name"
                      {...register("firstName")}
                    />
                    <p className='text-danger'>{errors.firstName?.message}</p>

                  </div>

                </InputGroup>
                <InputGroup className="my-1 ">

                  <div className="  ">
                    <Form.Control placeholder="Middle-name"
                      {...register("middleName")}
                    />
                    <p className='text-danger'>{errors.middleName?.message}</p>
                  </div>
                </InputGroup>
              </div>
              <div className="d-flex">
                <InputGroup className="my-1 ">
                  <div className="">
                    <Form.Control placeholder="Last-name"
                      {...register("lastName")}

                    />
                    <p className='text-danger'>{errors.lastName?.message}</p>
                  </div>

                 

                </InputGroup>
                <InputGroup className="my-1 ">


                  <div className="">
                    <Form.Control placeholder="Email"
                      {...register("email")}
                    />
                    <p className='text-danger'>{errors.email?.message}</p>
                  </div>

                </InputGroup>


              </div>
              <div className="d-flex">
                <InputGroup className=" my-1 ">
                  <div>
                    <Form.Control placeholder="Phone-number"
                      {...register("phoneNumber")}
                    />
                    <p className='text-danger'>{errors.phoneNumber?.message}</p>

                  </div>



                </InputGroup>
                <InputGroup className=" my-1 ">


                  <div >
                    <Form.Control placeholder="Current Salary"
                      {...register("currentsalary")}
                    />
                    <p className='text-danger'>{errors.currentsalary?.message}</p>
                  </div>

                </InputGroup>
              </div>
              <div className="d-flex">
                <InputGroup className=" my-1 ">
                  <div >
                    <Form.Control placeholder="Expected Salary"
                      {...register("expectedsalary")}
                    />
                    <p className='text-danger'>{errors.expectedsalary?.message}</p>

                  </div>


                </InputGroup>
                <InputGroup className=" my-1 ">

                  <div >
                    <Form.Control placeholder=" Salary's Currency"

                    />


                  </div>

                </InputGroup>
              </div>
              <div className="d-flex">
                <InputGroup className=" my-1 ">
                  <div>
                    <Form.Control placeholder="Password"
                      type='password'
                      {...register("password")}

                    />
                    <p className='text-danger'>{errors.password?.message}</p>
                  </div>


                </InputGroup>
                <InputGroup>
                  <div>
                    <Form.Control placeholder="Confirm-Password"
                      type='password'
                      {...register("confirmpassword")}
                    />
                    <p className='text-danger'>{errors.confirmpassword?.message}</p>

                  </div>
                </InputGroup>

              </div>
              <div className="col-12 Create_Accountbtn mt-2 ">
                <Button type='submit'>Create an account</Button>
              </div>
            </div>
          </div>

        </Container>
      </Form>
    </>
  );
}

export default JobseekerReg;