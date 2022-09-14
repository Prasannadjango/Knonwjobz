import React from "react";
import { Container,Button} from "react-bootstrap";

import { Link } from "react-router-dom";
function Register() {
    return (
       <> 
        <div className="Regsiter_maincontainer">
          <h1 className="text-center">
            We're happy that you are here  with us
          </h1>
           <Container>
          

           <div className="my-xl-5  my-2">
            <div className="Register_boxes">
           
                <div className="jobrecuriter_container me-xl-5 me-md-5 me-lg-5 me-0">
                   <h5 className="text-center ">i am looking for a</h5>
                   <h1 className="text-center fw-bold">Job</h1>
                   <div>
                   <Link to='/JobseekerRegisteration'>
                   <Button>Create an Account </Button>
                   </Link>
                  
                   </div>
                </div>
             

            
                <div className=" jobseeker_container ">
                   <h5 className="text-center">i am looking to</h5>
                   <h1 className="text-center fw-bold">Hire</h1>
                   <div>
                   <Link to='/RecuriterRegisteration'>
                   <Button>Create an Account </Button>
                   </Link>
                  </div>
                </div>
             
            </div>
           </div>
        </Container>
        <div className="my-5 Alreadyacc_container text-center">
          <h5>Already have an Account?</h5>
           <Link to='/SeekerLoginforms'>Login</Link>
        </div>
        </div>
  
       </>
    );
  }
  
  export default Register;