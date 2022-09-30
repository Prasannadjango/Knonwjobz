import React from "react";
import { Container, Col, Row,FormControl,Button} from "react-bootstrap";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  MdOutlineEngineering,
  MdComputer,
  MdAccountBalance,
} from "react-icons/md";
import { GiCook } from "react-icons/gi";
import { TiChevronRight } from "react-icons/ti";
function Jobscategory() {
  return (
    <>
      <div className="jobcategory_page">
      <Container>
         <div className="Recentjob_searchbar d-flex mb-5">
          <div className="col-xl-10 col-12">
            <FormControl type="text" placeholder="Search for job category...."/>
          </div>
          <div className="col-xl-2 col"> 
             <Button>Search</Button>
          </div>
        </div>
         </Container>
      </div>
      <div className="jobscategories_pagecontainer mb-5 py-2 px-xl-5 px-2">
      <h4 className=" pb-4 fw-bold">Jobs category</h4>
        <Row xs={1} md={3} className="g-4 mx-0">
          <Link to='/Jobcategoryinner' className="text-decoration-none">
          <Col>
            <div className="Jobscatpage_card py-4 ps-3 position-relative">
              <div>
                <MdOutlineEngineering />
              </div>
              <div className="ps-3">
                <h5 className="fw-bold text-dark">Civil Engineers</h5>
                <p className="text-secondary">30+ Openings</p>
                
              </div>
            </div>
          </Col>
          </Link>
       

          <Col>
            <div className="Jobscatpage_card py-4 ps-3 position-relative">
              <div>
                <MdOutlineEngineering />
              </div>
              <div className="ps-3">
                <h5 className="fw-bold">Mechanical Engineers</h5>
                <p className="text-secondary">30+ Openings</p>
                {/* <div>
                 <Button><TiChevronRight/></Button>
                 </div> */}
              </div>
              
            </div>
          </Col>

          <Col>
            <div className="Jobscatpage_card py-4 ps-3 position-relative">
              <div>
                <MdComputer />
              </div>
              <div className="ps-3">
                <h5 className="fw-bold">Software Engineers</h5>
                <p className="text-secondary">30+ Openings</p>
                
              </div>
            </div>
          </Col>

          <Col>
            <div className="Jobscatpage_card py-4 ps-3 position-relative">
              <div>
                <MdAccountBalance />
              </div>
              <div className="ps-3">
                <h5 className="fw-bold">Accountant</h5>
                <p className="text-secondary">30+ Openings</p>
               
              </div>
            </div>
          </Col>

          <Col>
            <div className="Jobscatpage_card py-4 ps-3 position-relative">
              <div>
                <GiCook />
              </div>
              <div className="ps-3">
                <h5 className="fw-bold">Chef</h5>
                <p className="text-secondary">30+ Openings</p>
               
              </div>
            </div>
          </Col>

          <Col>
            <div className="Jobscatpage_card py-4 ps-3 position-relative">
              <div>
                <FaChalkboardTeacher />
              </div>
              <div className="ps-3">
                <h5 className="fw-bold">Teacher</h5>
                <p className="text-secondary">30+ Openings</p>
               
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Jobscategory;
