import React from "react";
import "./App.css";
import "../src/Assests/Styles/Main.css";
import "../src/Assests/Styles/Responsive.css";
import "../src/Assests/Styles/Boostrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Registerpage from "./Pages/Registerpage";
import RecuriterRegister from "./Pages/RecuriterRegister";
import JobseekerRegister from "./Pages/JobseekerRegister";
import Searchjobs from "./Pages/Searchjobs";
import Aboutuspage from "./Pages/Aboutuspage";
import Contactpage from "./Pages/Contactpage";
import SeekerLoginformpage from "./Pages/SeekerLoginformpage";
import RecuriterLoginpage from "./Pages/RecuriterLoginpage";
import Recentjobpage from "./Pages/Recentjobpage";
import Jobscategorypage from "./Pages/Jobcategorypage";
import Applyjobspage from "./Pages/Applyjobspage";
import Jobprofilepage from "./Pages/Jobprofilepage";
import Jobrecuriterpage from "./Pages/Jobrecuriterpage";
import Skillassessmentpage from "./Pages/SkillAssessmentpage";
import Skillquizpage from "./Pages/Skillquizpage";
import Applyjobsdetailspage from "./Pages/Applyjobdetailspage";
import Companyjobpage from "./Pages/Companyjobspage";
import Applidecandidatepage from "./Pages/Appliedcandidatepage";
import Viewprofilepage from "./Pages/Viewprofilepage";
import Jobcategoryinnerpage from "./Pages/Jobcategoryinnerpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/Register" element={<Registerpage />} />
          <Route
            path="/RecuriterRegisteration"
            element={<RecuriterRegister />}
          />
          <Route
            path="/JobseekerRegisteration"
            element={<JobseekerRegister />}
          />
          <Route path="/Searchjob" element={<Searchjobs />} />
          <Route path="/Aboutus" element={<Aboutuspage />} />
          <Route path="/Contact" element={<Contactpage />} />
          <Route path="/SeekerLoginforms" element={<SeekerLoginformpage />} />
          <Route path="/RecuriterLoginforms" element={<RecuriterLoginpage />} />
          <Route path="/Recentjobs" element={<Recentjobpage />} />
          <Route path="/jobcategory" element={<Jobscategorypage />} />
          <Route path="/Applyjobs" element={<Applyjobspage />} />
          <Route path="/Jobseekerprofile" element={<Jobprofilepage />} />
          <Route path="/Jobrecuriterprofile" element={<Jobrecuriterpage />} />
          <Route path="/Skillassessment" element={<Skillassessmentpage />} />
          <Route path="/SkillQuiz" element={<Skillquizpage />} />
          <Route path="/Applyjobdetails" element={<Applyjobsdetailspage />} />
          <Route path='/companyjobs' element={<Companyjobpage/>}/>
          <Route path="/Appliedcandidate" element={<Applidecandidatepage/>}/>
          <Route path="/Candidateprofile" element={<Viewprofilepage/>}/>
          <Route path="/Jobcategoryinner" element={<Jobcategoryinnerpage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
