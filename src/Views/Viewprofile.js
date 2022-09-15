import React from "react";
import { Button, Table } from "react-bootstrap";
import person from "../Assests/Images/personimage.jpg";
function Viewprofile() {
  return (
    <>
      <div className="viewprofile_container px-xl-5 px-1">
        <div className="mb-5">
          <div className="d-flex">
            <div className="viewprofile_pic">
              <img src={person} className="w-100 h-100" />
            </div>

            <div className="viewprofile_info pt-3 ps-3">
              <h3 className="fw-bold">John Henry</h3>
              <h5>Senoir Ui Developer</h5>
              <h6 className="text-secondary">Applied 5 months ago</h6>
            </div>
          </div>
          <div className="d-flex mt-4 Viewprofile_btns">
            <Button className="me-3">Short-list candidate</Button>
            <Button>call for interview</Button>
          </div>
        </div>

        <div className="Viewprofile_details">
          <div>
            <h3 className="fw-bold">About me</h3>
            <Table striped bordered hover size="lg" className="viewprofile_table mt-4">
              <tbody>
                <tr >
                  <td>Age</td>
                  <td>27</td>
                </tr>
                <tr>
                  <td>Email-verfied</td>
                  <td>yes</td>
                </tr>
                <tr>
                  <td>Immediate available</td>
                  <td>yes</td>
                </tr>
                <tr>
                  <td>Marital status</td>
                  <td>Single</td>
                </tr>
                <tr>
                  <td>Career-level</td>
                  <td>Experienced</td>
                </tr>
                <tr>
                  <td>Current-Salary</td>
                  <td>300000</td>
                </tr>
                <tr>
                  <td>Expected-Salary</td>
                  <td>320000</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Viewprofile;
