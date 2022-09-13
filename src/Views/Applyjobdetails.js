import React from "react";

import Companylogo from "../Assests/Images/Complogo.jpg";
import { HiOutlineCurrencyDollar } from "react-icons/hi";

import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function Applyjobsdetails() {
  return (
    <>
      <div className="Applyjobsdetails_container pb-5 px-4 ">
        <div className="d-flex ">
          <div className="d-flex">
            <img src={Companylogo} />
          </div>
          <div className="ps-4">
            <h2>Senior Web Developer</h2>
            <div className="d-flex Location_container">
              <MdLocationPin className="mt-1 fs-4 me-2" />
              <p className="pt-1 text-secondary">Mumbai</p>
            </div>
            <div className="d-flex Location_container">
              <HiOutlineCurrencyDollar className="mt-1 fs-4 me-2" />
              <p className="pt-1 text-secondary">1000/month</p>
            </div>
            <h6 className="fw-bold">No.of Positions: 5</h6>
            
            <Link to="/companyjobs">See other openings</Link>
          </div>
          
        </div>

        <div className="keyskills_container pt-5">
          <h4 className="fw-bold">Key skills</h4>
          <div className="d-flex">
            <div>HTML</div>
            <div>CSS</div>
            <div>Javascript</div>
            <div>Ajax</div>
          </div>
        </div>

        <div className="Jobdescription_container pt-4">
          <h4 className="fw-bold">Job-Description</h4>
          <ul className="ps-3 pt-3">
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              vulputate facilisis lobortis. Vivamus ut eleifend mi. Curabitur
              pretium vestibulum justo, eu dapibus nunc pharetra nec. Integer
              eget interdum ipsum. Maecenas feugiat accumsan ex ac vestibulum.
              Nunc at ipsum a ipsum auctor commodo eu iaculis dolor.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              vulputate facilisis lobortis. Vivamus ut eleifend mi. Curabitur
              pretium vestibulum justo, eu dapibus nunc pharetra nec. Integer
              eget interdum ipsum. Maecenas feugiat accumsan ex ac vestibulum.
              Nunc at ipsum a ipsum auctor commodo eu iaculis dolor.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              vulputate facilisis lobortis. Vivamus ut eleifend mi. Curabitur
              pretium vestibulum justo, eu dapibus nunc pharetra nec. Integer
              eget interdum ipsum. Maecenas feugiat accumsan ex ac vestibulum.
              Nunc at ipsum a ipsum auctor commodo eu iaculis dolor.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              vulputate facilisis lobortis. Vivamus ut eleifend mi. Curabitur
              pretium vestibulum justo, eu dapibus nunc pharetra nec. Integer
              eget interdum ipsum. Maecenas feugiat accumsan ex ac vestibulum.
              Nunc at ipsum a ipsum auctor commodo eu iaculis dolor.
            </li>
          </ul>
        </div>

        <div className="Applynow-container ">
         <Button>Apply-Now</Button>

        </div>
      </div>
    </>
  );
}

export default Applyjobsdetails;
