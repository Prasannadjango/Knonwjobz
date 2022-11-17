import React from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
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
  companyname: yup.string().required('Company Name is Required'),
  companylocation: yup.string().required('Company Location is Required'),
  numberoffices: yup.string().required("Number of offices is required").matches(numberRegExp, 'Number of Office must be in Number'),
  Establishyear: yup.string().required("Established year is required").matches(numberRegExp, 'Established year must be in Number'),
  Description: yup.string().required('Description is Required'),
}).required();

function Recuriterreg() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.table(data);

  return (
    <>
      <div className="Recuriterreg_container">
        <Container>
          <h1 className="text-center">Create an Recuriter-Account</h1>

          <Form className="Recuriterform_container p-xl-5 p-2 my-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="Labelbadge_container d-flex py-3">
              <div>1</div>
              <h4 className="ps-3 pt-3">Personal Information</h4>
            </div>
            <div className="d-flex Recuirterform_container">
              <InputGroup className="my-1 ">
                <div className='w-100'>
                <label className='fs-5 fw-normal pb-2 text-dark-50'>First-name:</label>
                <Form.Control placeholder="Enter the First-name...."
                    {...register("firstName")}
                  />
                  <p className='text-danger pt-2 m-0'>{errors.firstName?.message}</p>
                </div>

              </InputGroup>
              <InputGroup className="my-1 ps-4">
              <div className="w-100 ">
              <label className='fs-5 fw-normal pb-2 text-dark-50'>Last-name:</label>

                <Form.Control placeholder="Last-name"
                  {...register("lastName")}
                />
                <p className='text-danger pt-2 m-0'>{errors.lastName?.message}</p>
              </div>
               
              </InputGroup>
            </div>
            <div className="d-flex  Recuirterform_container">
              <InputGroup className="my-1 ">
              <div className=" w-100">
              <label className='fs-5 fw-normal pb-2 text-dark-50'>Phone-number:</label>

                <Form.Control placeholder="Phone-number"
                  {...register("phoneNumber")}
                />
                <p className='text-danger pt-2 m-0'>{errors.phoneNumber?.message}</p>
              </div>
              </InputGroup>
              <InputGroup className="my-1 ps-4">
              <div className=" w-100">
              <label className='fs-5 fw-normal pb-2 text-dark-50'>Email:</label>

                <Form.Control placeholder="Email"
                  {...register("email")}
                />
                <p className='text-danger pt-2 m-0'>{errors.email?.message}</p>
              </div>
              </InputGroup>
            </div>
            <div className="d-flex  Recuirterform_container">
              <InputGroup className="my-1 ">
              <div className='w-100 '>
              <label className='fs-5 fw-normal pb-2 text-dark-50'>Password:</label>

                <Form.Control placeholder="Password"
                  {...register("password")}
                />
                <p className='text-danger pt-2 m-0'>{errors.password?.message}</p>
              </div>
              </InputGroup>
              <InputGroup className="my-1 ps-4">
              <div className="w-100 ">
              <label className='fs-5 fw-normal pb-2 text-dark-50'>Confirm-Password:</label>

                <Form.Control placeholder="Confirm-Password"
                  {...register("confirmpassword")}
                />
                <p className='text-danger pt-2 m-0'>{errors.confirmpassword?.message}</p>
              </div>
              </InputGroup>
            </div>


         
        
            <div className="mt-4  Company_infocontainer">
              <div className="Labelbadge_container d-flex">
                <div>2</div>
                <h4 className="ps-3 pt-2">Company's Information</h4>
              </div>
              <div className="d-flex Recuirterform_container pt-3">
              <InputGroup className="my-1 ">
              <div className='my-3 w-100'>
              <label className='fs-5 fw-normal pb-2 text-dark-50'>Company's-name:</label>

                  <Form.Control placeholder="Company's name"
                    {...register("companyname")}
                  />
                  <p className='text-danger pt-2 m-0'>{errors.companyname?.message}</p>
                </div>
              </InputGroup>
              <InputGroup className="my-1 ps-4">
              <div className="my-3 w-100">
              <label className='fs-5 fw-normal pb-2 text-dark-50'>Company's Location:</label>

                  <Form.Control placeholder="Company's Location"
                    {...register("companylocation")}
                  />
                  <p className='text-danger pt-2 m-0'>{errors.companylocation?.message}</p>
                </div>
              </InputGroup>
              </div>
              <div className="d-flex Recuirterform_container">
              <InputGroup className="my-1 ">
              <div className='w-100 my-3'>
              <label className='fs-5 fw-normal pb-2 text-dark-50'>Phone-number:</label>

                  <Form.Control placeholder="Phone-number"
                    {...register("phoneNumber")}
                  />
                  <p className='text-danger pt-2 m-0'>{errors.phoneNumber?.message}</p>
                </div>
              </InputGroup>
              <InputGroup className="my-1 ps-4">
              <div className="w-100 my-3">
              <label className='fs-5 fw-normal pb-2 text-dark-50'>E-mail:</label>

                  <Form.Control placeholder="Email"
                    {...register("email")}
                  />
                  <p className='text-danger pt-2 m-0'>{errors.email?.message}</p>
                </div>
              </InputGroup>
              </div>
              <div className="d-flex Recuirterform_container">
              <InputGroup className="my-1 ">
              <div className="w-100 my-3">
              <label className='fs-5 fw-normal pb-2 text-dark-50'>Number of offices:</label>

                  <Form.Control placeholder="Number of Offices"
                    {...register("numberoffices")}
                  />
                  <p className='text-danger pt-2 m-0'>{errors.numberoffices?.message}</p>
                </div>
              </InputGroup>
              <InputGroup className="my-1 ps-4">
              <div className="w-100 my-3">
              <label className='fs-5 fw-normal pb-2 text-dark-50'>Established in:</label>

                  <Form.Control placeholder="Established in"
                    {...register("Establishyear")}
                  />
                  <p className='text-danger pt-2 m-0'>{errors.Establishyear?.message}</p>
                </div>
              </InputGroup>
              </div>

            
           
              <Form.Group
                className="mb-3 mt-xl-0 mt-2"
                controlId="exampleForm.ControlTextarea1"
              >
              <label className='fs-5 fw-normal pb-2 text-dark-50'>Description:</label>

                <Form.Control as="textarea" placeholder=' Description' rows={5}
                  {...register("Description")}
                />
                <p className='text-danger pt-2 m-0'>{errors.Description?.message}</p>
              </Form.Group>

              <div className="col-12 Create_Accountbtn mt-xl-3 mt-2">
                <Button type='submit'>Create an account</Button>
              </div>
            </div>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default Recuriterreg;
