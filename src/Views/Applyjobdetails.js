import React from "react";

import Companylogo from "../Assests/Images/Complogo.jpg";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { BsBuilding,BsBriefcaseFill,BsClockHistory,BsAwardFill,BsBookHalf,BsFillCalendarCheckFill,BsPeopleFill} from "react-icons/bs";
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

        <div className="Job_Details pt-5">
          <h4 className="fw-bold">Job Details</h4>
          <div className="d-flex jd_data align-items-center py-4 ">
            <div className="d-flex align-items-center col-xl-4 ps-4">
              <BsBuilding />
              <h6 className="m-0 ps-2">Company Name:</h6>
            </div>
            <div className="col-xl-8 col-6">
            <span className="fw-bold">IM Technology</span>
            </div>
          </div>
          <div className="d-flex jd_data align-items-center py-4 ">
            <div className="d-flex align-items-center col-xl-4 ps-4">
              <BsBriefcaseFill/>
              <h6 className="m-0 ps-2">Type:</h6>
            </div>
            <div className="col-xl-8 col-6">
            <span className="fw-bold">Part-time</span>
            </div>
          </div>
          <div className="d-flex jd_data align-items-center py-4 ">
            <div className="d-flex align-items-center col-xl-4 ps-4">
              <BsClockHistory/>
              <h6 className="m-0 ps-2">Shift:</h6>
            </div>
            <div className="col-xl-8 col-6">
            <span className="fw-bold">day</span>
            </div>
          </div>
          <div className="d-flex jd_data align-items-center py-4 ">
            <div className="d-flex align-items-center col-xl-4 ps-4">
              <BsAwardFill/>
              <h6 className="m-0 ps-2">Career-level:</h6>
            </div>
            <div className="col-xl-8 col-6">
            <span className="fw-bold">mid-senior</span>
            </div>
          </div>
          <div className="d-flex jd_data align-items-center py-4 ">
            <div className="d-flex align-items-center col-xl-4 ps-4">
              <BsBookHalf/>
              <h6 className="m-0 ps-2">Education-level:</h6>
            </div>
            <div className="col-xl-8 col-6">
            <span className="fw-bold">Graduate</span>
            </div>
          </div>
          <div className="d-flex jd_data align-items-center py-4 ">
            <div className="d-flex align-items-center col-xl-4 ps-4">
              <BsPeopleFill/>
              <h6 className="m-0 ps-2">Gender:</h6>
            </div>
            <div className="col-xl-8 col-6">
            <span className="fw-bold">All</span>
            </div>
          </div>
          <div className="d-flex jd_data align-items-center py-4 ">
            <div className="d-flex align-items-center col-xl-4 ps-4">
              <BsFillCalendarCheckFill/>
              <h6 className="m-0 ps-2">Last Date to Apply:</h6>
            </div>
            <div className="col-xl-8 col-6">
            <span className="fw-bold">12.2.22</span>
            </div>
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
          <h4 className="fw-bold">About the Job</h4>
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
