import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {
  Button,
  Container,
  Modal,
  Form,
  Tab,
  Tabs,
  InputGroup,
  Card,
  Row,
  Col,
  Badge,
  FormControl,
} from "react-bootstrap";

import personimg from "../Assests/Images/personimage.jpg";
import { BsPencilSquare } from "react-icons/bs";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import searchjobimg from "../Assests/Images/searchjobimg.jpg";
import { MdLocationPin } from "react-icons/md";
import {
  AiTwotoneMail,
  AiFillMobile,
  AiOutlineDelete,
  AiOutlineFileAdd,
} from "react-icons/ai";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const numberRegExp = /^[0-9]*$/
const EmailRegExp =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const PasswordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/
const WebsiteRegExp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
const schema = yup.object({
  Degreename:yup.string().required('Degree name is Required'),
  instituename:yup.string().required('Institue name is required'),
  coursetitle:yup.string().required('Course title is required'), 
  FirstName:yup.string().required('first name is required'),
  middleName:yup.string().required('Middle name is required'),
  lastName:yup.string().required('Last name is required'),
  Name:yup.string().required("name is Required"),
  fatherName:yup.string().required('Father Name is Reqiured'),
  date:yup.string().required("date is required"),
  Nationalid:yup.string().required(" National id is required"),
  companyName: yup.string().required("Companyname is Required"),
  ceoName: yup.string().required("CEO Name is Required"),
  address: yup.string().required("Address is Required"),
  phoneNumber: yup.string().required("phone number is required").matches(phoneRegExp, 'Phone number is not valid').min(10, "Phone number must 10 Digits").max(10, "Phone number must 10 Digits"),
  LandlineNumber:yup.string().required("Landline is required").matches(phoneRegExp, 'Landline is not valid').min(10, "Landline must 10 Digits").max(10, "Landline must 10 Digits"),
  email:yup.string().required('Email is Required').matches(EmailRegExp,'Email is Not Valid'),
  website:yup.string().required("Website is required").matches(WebsiteRegExp,'Website is not valid'),
  password:yup.string().required('Password is required')
  .matches(PasswordRegExp,'Password is Weak , Password must have Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character'),
  confirmpassword:yup.string().required("confirm password is Required") .oneOf([yup.ref("password")], "Passwords do not match"),
  companyname:yup.string().required('Company Name is Required'),
  companylocation:yup.string().required('Company Location is Required'),
  numberoffices:yup.string().required("Number of offices is required").matches(numberRegExp,'Number of Office must be in Number'),
  Establishyear:yup.string().required("Established year is required").matches(numberRegExp,'Established year must be in Number'),
  noemployees:yup.string().required("No of Employeers is required").matches(numberRegExp,'No of Employeers must be in Number'),
  noopenings:yup.string().required('no of openings is required').matches(numberRegExp,'No of Openings must be in Number'),
  fax:yup.string().required("Fax is required").matches(numberRegExp,'Fax must be in Number'),
  Description:yup.string().required('Description is Required'),
  facebook:yup.string().required('Facebook id is Reqiured'),
  google:yup.string().required('Google id is Required'),
  country:yup.string().required('Country is required'),
  state:yup.string().required('state is required'),
  Nationality:yup.string().required('Nationality is required'),
  jobtitle:yup.string().required('job title is required'),
  city:yup.string().required('City is required'),
  salaryfrom:yup.string().required("salary from is required").matches(numberRegExp,'salaryfrom must be in Number'),
  salaryto:yup.string().required("salary to is required").matches(numberRegExp,'salaryto must be in Number'),
  passedin:yup.string().required("Passed-in is required").matches(numberRegExp,'Passed-in must be in Number'),
  passedout:yup.string().required("Passed-out is required").matches(numberRegExp,'Passed-out must be in Number'),
  Experiencelevel:yup.string().required('Please select the Experience Level'),
  Designation:yup.string().required('Designation is required'),
  Address:yup.string().required('Address is reqiured'),
  profilepic:yup.object().shape({
    file: yup.mixed()
          .test("required", "You need to provide a file", (file) => {
            // return file && file.size <-- u can use this if you don't want to allow empty files to be uploaded;
            if (file) return true;
            return false;
          })
          .test("fileSize", "The file is too large", (file) => {
            //if u want to allow only certain file sizes
            return file && file.size <= 2000000;
          })
  }),
  currentsalary:yup.string().required("current salary is required").matches(numberRegExp,'current salary must be in Number'),
  expectedsalary:yup.string().required("expected salary is required").matches(numberRegExp,'expected salary must be in Number'),

}).required();


function Jobprofile() {
  const { register, trigger, handleSubmit, formState:{ errors } } = useForm({
    mode:"onchange",
    resolver: yupResolver(schema)
  });
  const navigate = useNavigate();
const navigateToApplyjob = () => {
 navigate('/Applyjobdetails');
};
  const onSubmit = data => console.table(data);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);
  return (
    <>
      <div className="Jobprofile_maincontainer mb-5">
        <Container>
          <div className="Seekerprofile_header p-4">
            <div>
              <img src={personimg} />
            </div>
            <div>
              <h2 className="fw-bold">Mark Antony</h2>
              <h5 className="pt-2">Senior Front-end Developer</h5>
              <div className="d-flex mail_container">
                <AiTwotoneMail className="mt-1 fs-4 me-2" />
                <p className="pt-1">Mark@gmail.com</p>
              </div>
              <div className="d-flex mail_container">
                <AiFillMobile className="mt-1 fs-4 me-2" />
                <p className="pt-1">234143421</p>
              </div>
              <div className="Edit_btncontainer">
                <Button onClick={handleShow}>
                  <BsPencilSquare />
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">
                      Edit You Profile
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="Edit_popupcontent">
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className='w-100'>
                    <Form.Control type="Text" placeholder="Name.." 
                   {...register("Name")} />
                   <p className='text-danger pt-2 m-0'>{errors.Name?.message}</p>
                    </div>
                    <div className='w-100'>
                    <Form.Control type="file" placeholder="Profile Photo.." 
                    {...register("profilepic")} />
                    <p className='text-danger pt-2 m-0'>{errors.profilepic?.message}</p>
                    </div>
                    <div className='w-100'>
                    <Form.Control type="Text" placeholder="Designation.." 
                       {...register("Designation")}  />
                        <p className='text-danger pt-2 m-0'>{errors.Designation?.message}</p>
                    </div>
                   <div>
                   <Form.Control type="mail" placeholder="Email-id.." 
                   {...register("email")} />
                   <p className='text-danger pt-2 m-0'>{errors.email?.message}</p>
                   </div>
                    <div>
                    <Form.Control
                      type="Number"
                      placeholder="Phone-number.."
                      {...register("phoneNumber")}
                    />
                    <p className='text-danger pt-2 m-0'>{errors.phoneNumber?.message}</p>
                    </div>
                    <div >
                    <Button className="Edit_btncontainer2" type='submit'>Edit Profile</Button>
                    </div>
                  </Form>
                  </Modal.Body>
                 
                </Modal>
              </div>
            </div>
          </div>

          <div className="Jobseekerprofile_content mt-5">
            <Tabs
              defaultActiveKey="ProfileDetails"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="ProfileDetails" title="Profile Details">
                <div className="ProfileDetails_container p-4">
                  <div className="d-flex">
                    <div>1</div>
                    <h2>My Profile Details</h2>
                  </div>

                  <Form className="ProfileDetails_forms pt-4" onSubmit={handleSubmit(onSubmit)}>
                    <InputGroup className="mb-3">
                      <div className='w-100'>
                      <Form.Control
                        placeholder="FirstName.."
                        className="mb-2"
                        {...register("FirstName")}
                      />
                      <p className='text-danger py-2 m-0'>{errors.FirstName?.message}</p>
                      </div>
                      <div className='w-100'>
                      <Form.Control placeholder="MiddleName.." 
                      {...register("middleName")}/>
                      <p className='text-danger py-2 m-0'>{errors.middleName?.message}</p>
                      </div>
                    </InputGroup>
                    <InputGroup className="mb-3">
                       <div className='w-100'>
                       <Form.Control
                        placeholder="Last Name.."
                        className="mb-2"
                        {...register("lastName")}
                      />
                      <p className='text-danger py-2 m-0'>{errors.lastName?.message}</p>
                      </div>
                     <div className='w-100'>
                     <Form.Control placeholder="Father Name.." 
                      {...register("fatherName")} />
                      <p className='text-danger py-2 m-0'>{errors.fatherName?.message}</p>
                     </div>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Form.Select className="me-3">
                        <option value="default" disabled hidden>
                          Gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                      </Form.Select>
                      <Form.Select>
                        <option value="default" disabled hidden>
                          Martial Status
                        </option>
                        <option value="Male">Single</option>
                        <option value="Female">Married</option>
                        <option value="Others">Rather Not to Say</option>
                      </Form.Select>
                    </InputGroup>
                    <InputGroup className="mb-3">
                       <div className='w-100'>
                       <Form.Control placeholder="Country.." className="mb-2" 
                       {...register("country")} />
                      <p className='text-danger py-2 m-0'>{errors.country?.message}</p>

                       </div>
                      <div className='w-100'>
                      <Form.Control placeholder="State.." {...register("state")}/>
                      <p className='text-danger py-2 m-0'>{errors.state?.message}</p>
                      </div>
                    </InputGroup>
                    <InputGroup className="mb-3">
                     <div className='w-100'>
                     <Form.Control placeholder="City.." className="mb-3"  {...register("city")}/>
                     <p className='text-danger py-2 m-0'>{errors.city?.message}</p>

                     </div>
                    <div className='w-100'>
                    <Form.Control placeholder="Nationality.." {...register("Nationality")}/>
                    <p className='text-danger py-2 m-0'>{errors.Nationality?.message}</p>
                    
                    </div>
                    </InputGroup>
                    <InputGroup className="mb-3">
                     <div className='w-100'>
                     <Form.Control
                        placeholder="Date Of birth.."
                        className="mb-3"
                        type="date"
                        {...register("date")}
                      />
                    <p className='text-danger py-2 m-0'>{errors.date?.message}</p>

                     </div>
                      <div className='w-100'>
                      <Form.Control placeholder="National-id Number.." {...register("Nationalid")}/>
                    <p className='text-danger py-2 m-0'>{errors.Nationalid?.message}</p>

                      </div>
                    </InputGroup>
                    <InputGroup className="mb-3">
                     <div className='w-100'>
                     <Form.Control
                        placeholder="Mobile Number.."
                        className="mb-3"
                        {...register("phoneNumber")}
                      />
                       <p className='text-danger py-2 m-0'>{errors.phoneNumber?.message}</p>
                     </div>
                    <div className='w-100'>
                    <Form.Control placeholder="Secondary Mobile-Number (Optional).." />
                    </div>
                    </InputGroup>
                    <div>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Address.."
                        {...register("Address")}
                      />
                       <p className='text-danger py-2 m-0'>{errors.Address?.message}</p>

                    </div>
                    <div className=" Career_details d-flex mt-4">
                    <div>2</div>
                    <h2>Career Information</h2>
                  </div>

                  <div className="Career_detailsform mt-3">
                  <InputGroup className="mb-3">
                      <div className='w-100'>
                      <Form.Select className="mb-xl-3">
                        <option value="">Job Experience....</option>
                        <option value="Male">Fresher</option>
                        <option value="Female">Experienced</option>
                      </Form.Select>
                      </div>
                     <div className='w-100'>
                     <Form.Select>
                        <option value="">Careeer level....</option>
                        <option value="Male">Intern/student</option>
                        <option value="Female">Entry level</option>
                        <option value="Male">Team Lead</option>
                        <option value="Female">Manager</option>
                      </Form.Select>
                     </div>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <div className='w-100'>
                      <Form.Select className="mb-xl-3">
                        <option value="">Select Industry....</option>
                        <option value="Male">Fresher</option>
                        <option value="Female">Experienced</option>
                      </Form.Select>
                      </div>
                      <div className='w-100'>
                      <Form.Select>
                        <option value="">Functioanl area....</option>
                        <option value="Male">Intern/student</option>
                        <option value="Female">Entry level</option>
                        <option value="Male">Team Lead</option>
                        <option value="Female">Manager</option>
                      </Form.Select>
                      </div>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <div className='w-100'>
                      <Form.Control placeholder='Current Salary' className="mb-xl-3"
                           {...register("currentsalary")}/>
                       <p className='text-danger py-2 m-0'>{errors.currentsalary?.message}</p>

                      </div>
                     <div className='w-100'>
                     <Form.Control placeholder='Expected Salary' className="mb-xl-3"
                      {...register("expectedsalary")}/>
                       <p className='text-danger py-2 m-0'>{errors.expectedsalary?.message}</p>
                     </div>
                  
                    </InputGroup>
                    <InputGroup className="mb-3">
                    
                     <div className='w-100'>
                     <Form.Control placeholder='Salary currency' className="mb-xl-3"/>
                      
                     </div>
                  
                    </InputGroup>
                  </div>
                  <div >
                   <Button className="Edit_btncontainer2 mt-4" type='submit'>Edit Profile Details</Button>
                  </div>
                  </Form>

            
                  
                </div>
              </Tab>
              <Tab eventKey="Summary" title="Summary">
                <div className="Sumary_container p-4">
                  <div className="Edit_btn">
                    <Button onClick={handleShow1}>
                      {" "}
                      <BsPencilSquare className="me-2" />
                      Edit
                    </Button>
                  </div>
                  <h2 className="fw-bold pt-xl-0 pt-4">Profile Summary</h2>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec semper id nisi vel placerat. Sed lobortis velit at
                    turpis egestas rhoncus. Curabitur nulla ipsum, malesuada
                    tempor sodales sit amet, consectetur et tellus. Maecenas
                    ultrices, ligula vitae blandit maximus, enim ligula vehicula
                    risus, sit amet finibus tortor ex vitae est. Etiam eu
                    consequat tortor. Proin pharetra ligula ante. Nulla
                    facilisi. Aliquam at ipsum sem. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Donec semper id nisi vel
                    placerat. Sed lobortis velit at turpis egestas rhoncus.
                    Curabitur nulla ipsum, malesuada tempor sodales sit amet,
                    consectetur et tellus. Maecenas ultrices, ligula vitae
                    blandit maximus, enim ligula vehicula risus, sit amet
                    finibus tortor ex vitae est. Etiam eu consequat tortor.
                    Proin pharetra ligula ante. Nulla facilisi. Aliquam at ipsum
                    sem.
                  </p>
                  <Modal show={show1} onHide={handleClose1}>
                    <Modal.Header closeButton>
                      <Modal.Title className="fw-bold">
                        Edit Summary
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="Edit_popupcontent">
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Summary.."
                      />
                    </Modal.Body>
                    <Modal.Footer className="Edit_btncontainer2">
                      <Button onClick={handleClose}>Edit Details</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </Tab>
              <Tab eventKey="MyResume" title="My Resume">
                <div className="Myresume_container d-flex justify-content-center p-4">
                <div>
                <FormControl type='file' />
                </div>
                </div>
              </Tab>
              <Tab eventKey="Education Details" title="Education Details">
                <div className="Educationdetails_container p-4">
                  <div className="Edit_btn">
                    <Button onClick={handleShow2}>
                      <AiOutlineFileAdd className="me-2" />
                      Add New Education Details
                    </Button>
                  </div>
                  <h2 className="pt-xl-0 pt-4">My Education Details</h2>
                  <div className="d-flex EducationDetails_container mt-5 ">
                    <Card className="me-xl-5 me-md-5 me-0 mb-xl-0 mb-md-0 mb-4">
                      <div className="Delete_btn">
                        <Button className="p-0">
                          <AiOutlineDelete />
                        </Button>
                      </div>
                      <Card.Body>
                        <Card.Title className="fw-bold">
                          Under Graduate
                        </Card.Title>
                        <Card.Text>
                          <h5>70%</h5>
                          <h6>ABC college</h6>
                          <h6>Bsc Computer</h6>
                          <h6>2014-2017</h6>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card>
                      <div className="Delete_btn">
                        <Button className="p-0">
                          <AiOutlineDelete />
                        </Button>
                      </div>
                      <Card.Body>
                        <Card.Title className="fw-bold">
                          Post Graduate
                        </Card.Title>
                        <Card.Text>
                          <h5>80%</h5>
                          <h6>ABC college</h6>
                          <h6>msc Computer</h6>
                          <h6>2017-2019</h6>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Modal show={show2} onHide={handleClose2}>
                      <Modal.Header closeButton>
                        <Modal.Title className="fw-bold">
                          Add New Education Detail
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="Edit_popupcontent">
                        <Form onSubmit={handleSubmit(onSubmit)} >
                        <div>
                        <Form.Control placeholder="Course Title" 
                         {...register("coursetitle")} />
                          <p className='text-danger  m-0'>{errors.coursetitle?.message}</p>
                        </div>
                         <div>
                         <Form.Control placeholder="Institution Name.." 
                         {...register("instituename")} />
                            <p className='text-danger  m-0'>{errors.instituename?.message}</p>
                         </div>
                        <div>
                        <Form.Control placeholder="Degree Name.." 
                         {...register("Degreename")} />
                         <p className='text-danger  m-0'>{errors.Degreename?.message}</p>
                        </div>
                        <div>
                        <Form.Control placeholder="state" 
                         {...register("state")} />
                          <p className='text-danger  m-0'>{errors.state?.message}</p>
                        </div>
                         <div>
                         <Form.Control placeholder="city.." 
                         {...register("instituename")} />
                            <p className='text-danger  m-0'>{errors.city?.message}</p>
                         </div>
                        <div>
                        <Form.Control placeholder="result(in %).." />
                        
                        </div>

                      <div>
                      <Form.Control placeholder="Passed in year" 
                       {...register("passedin")}/>
                       <p className='text-danger  m-0'>{errors.passedin?.message}</p>
                      </div>
                       <div>
                       <Form.Control placeholder="Passed out year" 
                        {...register("passedout")} />
                         <p className='text-danger  m-0'>{errors.passedout?.message}</p>
                       </div>
                    
                     
                        <Button className="Edit_btncontainer2" type='submit'>
                          Add New Education
                        </Button>
                      
                        </Form>
                        </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Work Experience" title="Work Experience">
                <div className="Educationdetails_container p-4">
                  <div className="Edit_btn">
                    <Button onClick={handleShow3}>
                      <AiOutlineFileAdd className="me-2" />
                      Add Work Experience
                    </Button>
                  </div>
                  <h2 className="pt-xl-0 pt-4">My Work Experience</h2>
                  <div className="d-flex EducationDetails_container mt-5 ">
                    <Card className="me-xl-5 me-0">
                      <div className="Delete_btn">
                        <Button className="p-0">
                          <AiOutlineDelete />
                        </Button>
                      </div>
                      <Card.Body>
                        <Card.Title className="fw-bold">
                          Front-end Developer
                        </Card.Title>
                        <Card.Text>
                          <h5>Abc Technology</h5>
                          <h5>3 years</h5>
                          <h6>2014-2017</h6>
                        </Card.Text>
                      </Card.Body>
                    </Card>

                    <Modal show={show3} onHide={handleClose3}>
                      <Modal.Header closeButton>
                        <Modal.Title className="fw-bold">
                          Add New Work Experience
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="Edit_popupcontent">
                        <Form>
                        <div>
                        <Form.Control placeholder="Job Title" />
                        </div>
                        <div>
                        <Form.Control placeholder="Company Name.." />
                        </div>
                        <div>
                        <Form.Control type='date'
                        placeholder="Start-date.." />
                        </div>
                        <div>
                        <Form.Control type='date'
                        placeholder="End-date.." />
                        </div>
                        <div>
                          <Form.Control placeholder="Years of Experience.." />
                        </div>
                        <div>
                          <Form.Control placeholder="About the Job.." />
                        </div>
                        <Button className="Edit_btncontainer2" type='submit'>
                          Add New Work Experience
                        </Button>
                        </Form>
                      </Modal.Body>
                      
                       
                     
                    </Modal>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="Skills" title="Skills">
                <div className="Skills_maincontainer p-4">
                  <div className="Edit_btn">
                    <Button onClick={handleShow4}>
                      <AiOutlineFileAdd className="me-2" />
                      Add Skill
                    </Button>
                  </div>
                  <h2 className="pt-xl-0 pt-4">Skill</h2>
                  <div className="Skill_fieldcontainer d-flex mt-4">
                    <div>
                      
                      HTML
                    </div>
                    <div>React js</div>
                    <div>Javascript</div>
                  </div>
                  <Modal show={show4} onHide={handleClose4}>
                    <Modal.Header closeButton>
                      <Modal.Title className="fw-bold">
                        Add New Skills
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="Edit_popupcontent">
                      <Form>
                      <Form.Control placeholder="Ex:java,PHP" />
                      <Form.Select aria-label="Default select example">
      <option>Select Experience in this Skill</option>
      <option value="Fresher">Fresher</option>
      <option value="Experienced">Experienced</option>
    
    </Form.Select>
                      <Button className="Edit_btncontainer2 mt-2">Add New Skills</Button>
                      </Form>
                    </Modal.Body>
                   
                     
                 
                  </Modal>
                </div>
              </Tab>
              <Tab eventKey="MyfavoriteJobs" title="My favorite Jobs">
                <div className="MyfavoriteJobs_container p-4">
                  <h2>My favorite jobs</h2>
                  <Row xs={1} lg={3} md={2} className="g-5 mt-1">
                    <Col>
                      <Card className="Searchjobs_card pb-3">
                        <div>
                          <div>
                            <img src={searchjobimg} className="w-100 " />
                          </div>
                        </div>

                        <Card.Body className="pt-5">
                          <Card.Title className="fw-bold">
                            Java Developer
                          </Card.Title>
                          <Card.Text>
                            <div className="d-flex Location_container">
                              <MdLocationPin className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">Mumbai</p>
                            </div>
                            <div className="d-flex Location_container">
                              <HiOutlineCurrencyDollar className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">1000/month</p>
                            </div>
                          </Card.Text>
                        </Card.Body>
                        <div className="SeeDetails_container col-12 px-3 ">
                          <Button className="mb-3" onClick={navigateToApplyjob}>Apply Now</Button>
                        </div>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="Searchjobs_card pb-3">
                        <div>
                          <div>
                            <img src={searchjobimg} className="w-100 " />
                          </div>
                        </div>

                        <Card.Body className="pt-5">
                          <Card.Title className="fw-bold">
                            Java Developer
                          </Card.Title>
                          <Card.Text>
                            <div className="d-flex Location_container">
                              <MdLocationPin className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">Mumbai</p>
                            </div>
                            <div className="d-flex Location_container">
                              <HiOutlineCurrencyDollar className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">1000/month</p>
                            </div>
                          </Card.Text>
                        </Card.Body>
                        <div className="SeeDetails_container col-12 px-3 ">
                          <Button className="mb-3" onClick={navigateToApplyjob}>Apply Now</Button>
                        </div>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="Searchjobs_card pb-3">
                        <div>
                          <div>
                            <img src={searchjobimg} className="w-100 " />
                          </div>
                        </div>

                        <Card.Body className="pt-5">
                          <Card.Title className="fw-bold">
                            Java Developer
                          </Card.Title>
                          <Card.Text>
                            <div className="d-flex Location_container">
                              <MdLocationPin className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">Mumbai</p>
                            </div>
                            <div className="d-flex Location_container">
                              <HiOutlineCurrencyDollar className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">1000/month</p>
                            </div>
                          </Card.Text>
                        </Card.Body>
                        <div className="SeeDetails_container col-12 px-3 ">
                          <Button className="mb-3"  onClick={navigateToApplyjob}>Apply Now</Button>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Tab>

              <Tab eventKey="JobAlerts" title="Job Alerts">
            
                    <Form></Form>
              </Tab>

              <Tab eventKey="Application History" title="Application History">
                <div className="Applicationhistory_container p-4">
                  <h2>Application History</h2>
                  <Row xs={1} xl={3} md={2} className="g-5 mt-1">
                    <Col>
                      <Card className="Applicationhistory_card pb-3">
                        <Badge pill bg="danger">
                          Rejected
                        </Badge>
                        <div className="Applicationhistory_header">
                          <div>
                            <img src={searchjobimg} className="w-100 " />
                          </div>
                        </div>

                        <Card.Body className="pt-5">
                          <Card.Title className="fw-bold">
                            Java Developer
                          </Card.Title>
                          <Card.Text>
                            <div className="d-flex Location_container">
                              <MdLocationPin className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">Mumbai</p>
                            </div>
                            <div className="d-flex Location_container">
                              <HiOutlineCurrencyDollar className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">1000/month</p>
                            </div>
                          </Card.Text>
                        </Card.Body>
                        <div className="SeeDetails_container col-12 px-3 ">
                          <Button className="mb-3">Apply familiar Jobs</Button>
                        </div>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="Applicationhistory_card pb-3">
                        <Badge pill bg="success">
                          Selected
                        </Badge>
                        <div className="Applicationhistory_header">
                          <div>
                            <img src={searchjobimg} className="w-100 " />
                          </div>
                        </div>

                        <Card.Body className="pt-5">
                          <Card.Title className="fw-bold">
                            Java Developer
                          </Card.Title>
                          <Card.Text>
                            <div className="d-flex Location_container">
                              <MdLocationPin className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">Mumbai</p>
                            </div>
                            <div className="d-flex Location_container">
                              <HiOutlineCurrencyDollar className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">1000/month</p>
                            </div>
                          </Card.Text>
                        </Card.Body>
                        <div className="SeeDetails_container col-12 px-3 ">
                          <Button className="mb-3">Apply familiar Jobs</Button>
                        </div>
                      </Card>
                    </Col>
                    <Col>
                      <Card className="Applicationhistory_card pb-3">
                        <Badge pill bg="warning">
                          Pending
                        </Badge>
                        <div className="Applicationhistory_header">
                          <div>
                            <img src={searchjobimg} className="w-100 " />
                          </div>
                        </div>

                        <Card.Body className="pt-5">
                          <Card.Title className="fw-bold">
                            Java Developer
                          </Card.Title>
                          <Card.Text>
                            <div className="d-flex Location_container">
                              <MdLocationPin className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">Mumbai</p>
                            </div>
                            <div className="d-flex Location_container">
                              <HiOutlineCurrencyDollar className="mt-1 fs-4 me-2" />
                              <p className="pt-1 text-secondary">1000/month</p>
                            </div>
                          </Card.Text>
                        </Card.Body>
                        <div className="SeeDetails_container col-12 px-3 ">
                          <Button className="mb-3">Apply familiar Jobs</Button>
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Jobprofile;
