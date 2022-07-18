import React from 'react'
import axios from 'axios';
import {useState} from 'react'
import { useNavigate } from "react-router";


const DoctorLogin=()=>{

    const navigate = useNavigate();
    const [values, setValues] = useState({
        doctorId: "",
        doctorPass: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const handlesubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        axios.post("https://decentrahealth-server.herokuapp.com/findDoctor", {email: values.doctorId, password: values.doctorPass})
        .then((response) => {
            if(response.status === 200){
                navigate(`/Doctor`, {state: {patients: response.data.patients}});
            }
        });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    };

return(
    <>
    <div className="card-body text-black">
        <div className="row justify-content-center my-5">
          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 mt-5">
            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-5">Doctor Login</p>
            <form className="mx-1 mx-md-5">

              <div className="d-flex flex-row align-items-center mb-2 mt-6 mx-5">
                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label">Doctor Id</label>
                  <input onChange={handleChange} value={values.doctorId} id="doctorId" class="form-control" type="text" name="doctorId" />
                  {submitted && !values.doctorId ? <span id="first-name-error">Please enter correct Id</span> : null}
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-2 mt-5 mx-5">
                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label">Password</label>
                  <input onChange={handleChange} value={values.doctorPass} id="doctorPass" class="form-control" type="text" name="doctorPass" />
                  {submitted && !values.doctorPass ? <span id="doctorPass-error">Please enter correct password</span> : null}
                </div>
              </div>

              <div className="d-flex justify-content-center mx-4 mb-3 mt-lg-5">
                <button type="submit" className="btn btn-primary btn-lg" style={{ backgroundColor: "white", color: "blue" }} onClick={handlesubmit}>Login</button>
              </div>
            </form>
          </div>
          <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
            <img src="/doctorlogin.png"
              className=' mx-56 my-10' alt="Sample image" />
          </div>
        </div>
      </div>

</>
    )
}

export default DoctorLogin;