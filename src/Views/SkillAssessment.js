import React from "react";
import { Button, Container, FormControl,Row,Col } from "react-bootstrap";
import skillimg from '../Assests/Images/Skillimg.jpg';
function Skillassessment() {
    return (
      <>
       <div className="Skillassessment_container">
       <Container>
       <div className="Skill_image">
        <img src={skillimg} className='w-100 h-100'/>
       </div>
       </Container>
         <div className="Skill_quote py-5 ">
          <h3 >
          “Skill is the unified force of experience, intellect and passion in their operation.”
          </h3>
         </div>

         <div className="SkillQuiz_container px-4">
              <div className="d-flex">
              <div>
                <h4 className="fw-bold">Take a Skill assessment Now</h4>
              </div>
              <div className="col-3 d-flex">
                <FormControl placeholder="Search by Skill-Name..." className="me-2"/>
                <Button>Search </Button>
              </div>
              </div>

              <div  className="SkillQuiz_boxcontainer py-5">
                <Row>
                  <Col lg={3} className='Skill_box'>
                    <h4 className="fw-bold text-start">HTML</h4>
                    <ul className="p-0 list-style-none">
                    <li>Total Quiz : 10</li>
                    <li>Total marks : 20</li>
                   </ul>
                   <div className="Trynow_btn d-flex">
                      <Button>Try now</Button>
                   </div>
                  </Col>
                  <Col lg={3} className='Skill_box'>
                    <h4 className="fw-bold text-start">React-js</h4>
                    <ul className="p-0 list-style-none">
                    <li>Total Quiz : 10</li>
                    <li>Total marks : 20</li>
                   </ul>
                   <div className="Trynow_btn d-flex">
                      <Button>Try now</Button>
                   </div>
                  </Col>
                  <Col lg={3} className='Skill_box'>
                    <h4 className="fw-bold text-start">Boostrap</h4>
                    <ul className="p-0 list-style-none">
                    <li>Total Quiz : 10</li>
                    <li>Total marks : 20</li>
                   </ul>
                   <div className="Trynow_btn d-flex">
                      <Button>Try now</Button>
                   </div>
                  </Col>
                  <Col lg={3} className='Skill_box'>
                    <h4 className="fw-bold text-start">Figma</h4>
                    <ul className="p-0 list-style-none">
                    <li>Total Quiz : 10</li>
                    <li>Total marks : 20</li>
                   </ul>
                   <div className="Trynow_btn d-flex">
                      <Button>Try now</Button>
                   </div>
                  </Col>
                  
                  
                  
                </Row>
              </div>
         </div>
       </div>

      </>
    );
  }
  
  export default Skillassessment;
  