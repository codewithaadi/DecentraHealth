const express = require('express');
const doctorController = require('../controllers/doctor');
const hospitalController = require('../controllers/hospital');
const patientController = require('../controllers/patient');
const router = express.Router();

router.post('/doctorLogin', doctorController.findDoctor);
router.post('/hospitalSignup', hospitalController.addHospital);
router.post('/hospitalLogin',hospitalController.findHospital);
router.post('/getDoctors', hospitalController.getDoctors);
router.post('/addDoctors', doctorController.addDoctor);
router.post('/addPatients', patientController.addPatients);
router.get('/getHospitals', hospitalController.getHospitals);
router.post('/addPatientHospital', patientController.addPatientHospital);
router.post('/getPatientsHospital', patientController.getPatientsHospital);
router.post('/fileUpload', patientController.fileUpload);
router.post('/getPatients', patientController.getPatients);
router.post('/viewFiles', patientController.viewFiles);
router.get('/fileDownload/:aadhar/:fileName', patientController.fileDownload);
router.post('/addPatientDoctor', doctorController.addPatientDoctor);
router.post('/findDoctor', doctorController.findDoctor);
router.post('/getDisease', patientController.getDisease);
router.post('/getDoctorsRecommend', patientController.getDoctors);
router.post('/grantAccess', patientController.grantAccess);
router.post('/requestPatient', doctorController.requestPatient);
router.post('/reqDoctors', doctorController.reqDoctors);

module.exports=router;