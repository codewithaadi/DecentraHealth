import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
import HospitalCard from './HospitalCard';
import FileUpload from './FileUpload';
import FileDownload from './FileDownload';
// import Hospital from '../../../backend/models/hospital';
import DoctorCard from './DoctorCard';


function PaitentPageHospital() {
    const { aadhar } = useParams();
    const { state } = useLocation();

    const doctors = state.values;
    // console.log(state.values)
    // const handleup=(arr)=>{
    //     setdoctors((prev)=>([...prev,...arr]

    //     ));
    // }
    // console.log(doctors)

const myStyle = {
    width: '67rem',
    backgroundColor: 'white'
}

return (
    <>
    <div className="container my-5">
    <div className="card text-left border-dark text-black" style={myStyle}>
    <div className="card-header  border-dark">
        Scheduled Appointments
    </div>
    <div className="card-body">
    <table class="table table-hover border-success">
        <thead>
            <tr>
                <th scope="col">Doctor Id</th>
                <th scope="col">Doctor Name</th>
                <th scope="col" style={{color:'red'}}>Patient Id</th>
                <th scope="col" style={{color:'red'}}>Patient Name</th>
                <th scope="col" style={{color:'red'}}>Age</th>
                <th scope="col" style={{color:'red'}}>Gender</th>
            </tr>
        </thead>
        <tbody>
            {doctors.map((doctor) => {
                return <tr><DoctorCard id={doctor.doctorId} name={doctor.Name} aadhar={aadhar} patientName={state.name} age={state.age} gender={state.gender} /></tr>
            })}
        </tbody>
    </table>
    </div>
    </div>
    </div>
    </>
)}

export default PaitentPageHospital;