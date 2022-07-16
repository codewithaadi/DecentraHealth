import Home from "./components/Home";
import DoctorLogin from "./components/DoctorLogin";
import HospitalSignupPage from "./components/HospitalSignupPage";
import HospitalLogin from "./components/HospitalLogin";
import Admin from "./components/Admin";
import PatientLogin from "./components/PatientLogin";
import Patient from "./components/Patient";
import PatientPage from "./components/PatientPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import FileUpload from "./components/FileUpload";
import FileDownload from "./components/FileDownload";
import PatientPageHospital from "./components/PatientPageHospital"
import PatientPageDoctor from "./components/PatientPageDoctor";
import Doctor from "./components/Doctor";
import Appbar from "./components/appbar";
import ViewReports from "./components/ViewReports";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Appbar/>
    <Routes>
      <Route path="/home" element={<Home />} /> 
      <Route path="/DoctorLogin" element={<DoctorLogin />} /> 
      <Route path="/HospitalSignupPage" element={<HospitalSignupPage />} /> 
      <Route path="/HospitalLogin" element={<HospitalLogin />} /> 
      <Route path="/Admin/:id" element={<Admin />} />
      <Route path="/PatientLogin" element={<PatientLogin />} />
      <Route path="/Patient/:phone" element={<Patient />} />
      <Route path="/PatientPage/:id" element={<PatientPage />} />
      <Route path="/fileUpload/:aadhar" element={<FileUpload />} />
      <Route path="/FileDownload" element={<FileDownload />} />
      <Route path="/PatientPageDoctor/:aadhar" element={<PatientPageDoctor />} />
      <Route path="/PatientPageHospital/:aadhar" element={<PatientPageHospital />} />
      <Route path="/Doctor" element={<Doctor />} />
      <Route path="/ViewReports" element={<ViewReports />} />
      <Route path="/" element={<Navigate replace to="/home" />} />    
    </Routes>
  </BrowserRouter>
    
  </div>
  );
}

export default App;
