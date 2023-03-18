import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Button from '@mui/material/Button';
// import { Input, MenuItem } from 'semantic-ui-react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import List from '@mui/joy/List';
// import ListItem from '@mui/joy/ListItem';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import { InputAdornment } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Box, styled } from '@mui/material';

const Component = styled(Box)(({ theme }) => ({
  margin: '80px auto 0 auto',
  width: '90%',
  '&>h4': {
    marginTop: '20px'
  },
  [theme.breakpoints.down('md')]: {
    margin: '60px auto 0 auto',
  }
}))

const LowerComponent = styled(Box)(({ theme }) => ({
  margin: '30px  0',
  [theme.breakpoints.down('md')]: {

  }
}))


function Symptoms() {
  const { state } = useLocation();
  console.log(state);
  // const patient=state.patient;
  const navigate = useNavigate();
  const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    float: 'left'
  };

  const [amount, setamount] = useState("");
  const symptomsoptions = ['itching', 'skin_rash', 'nodal_skin_eruptions', 'continuous_sneezing', 'shivering', 'chills', 'joint_pain',
    'stomach_pain', 'acidity', 'ulcers_on_tongue', 'muscle_wasting', 'vomiting', 'burning_micturition', 'spotting_ urination', 'fatigue',
    'weight_gain', 'anxiety', 'cold_hands_and_feets', 'mood_swings', 'weight_loss', 'restlessness', 'lethargy', 'patches_in_throat',
    'irregular_sugar_level', 'cough', 'high_fever', 'sunken_eyes', 'breathlessness', 'sweating', 'dehydration', 'indigestion',
    'headache', 'yellowish_skin', 'dark_urine', 'nausea', 'loss_of_appetite', 'pain_behind_the_eyes', 'back_pain', 'constipation',
    'abdominal_pain', 'diarrhoea', 'mild_fever', 'yellow_urine', 'yellowing_of_eyes', 'acute_liver_failure', 'fluid_overload',
    'swelling_of_stomach', 'swelled_lymph_nodes', 'malaise', 'blurred_and_distorted_vision', 'phlegm', 'throat_irritation',
    'redness_of_eyes', 'sinus_pressure', 'runny_nose', 'congestion', 'chest_pain', 'weakness_in_limbs', 'fast_heart_rate',
    'pain_during_bowel_movements', 'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus', 'neck_pain', 'dizziness', 'cramps',
    'bruising', 'obesity', 'swollen_legs', 'swollen_blood_vessels', 'puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails',
    'swollen_extremeties', 'excessive_hunger', 'extra_marital_contacts', 'drying_and_tingling_lips', 'slurred_speech', 'knee_pain', 'hip_joint_pain',
    'muscle_weakness', 'stiff_neck', 'swelling_joints', 'movement_stiffness', 'spinning_movements', 'loss_of_balance', 'unsteadiness', 'weakness_of_one_body_side',
    'loss_of_smell', 'bladder_discomfort', 'foul_smell_of urine', 'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching', 'toxic_look_(typhos)',
    'depression', 'irritability', 'muscle_pain', 'altered_sensorium', 'red_spots_over_body', 'belly_pain', 'abnormal_menstruation', 'dischromic_patches',
    'watering_from_eyes', 'increased_appetite', 'polyuria', 'family_history', 'mucoid_sputum', 'rusty_sputum', 'lack_of_concentration', 'visual_disturbances',
    'receiving_blood_transfusion', 'receiving_unsterile_injections', 'coma', 'stomach_bleeding', 'distention_of_abdomen', 'history_of_alcohol_consumption',
    'fluid_overload', 'blood_in_sputum', 'prominent_veins_on_calf', 'palpitations', 'painful_walking', 'pus_filled_pimples', 'blackheads', 'scurring', 'skin_peeling',
    'silver_like_dusting', 'small_dents_in_nails', 'inflammatory_nails', 'blister', 'red_sore_around_nose', 'yellow_crust_ooze'];



  const [symptoms, setsymptoms] = useState([]);
  const [disease, setdisease] = useState("");
  const handleChange = (e) => {
    setsymptoms([...symptoms, e.target.value])
    console.log(symptoms);
    // setCurrency(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(symptoms);
      const diseases = await axios.post('https://decentrahealth-backend.onrender.com/getDisease', { symptoms: symptoms })
      setdisease(diseases.data);
    }
    catch (err) {
      console.log(err);
    }
  }
  //for recommendation page button
  const goToReccom = async (e) => {
    e.preventDefault();
    try {

      navigate(`/RecommendedDocs`, { state: { disease, ...state } });
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Component>
        <Typography variant='h3' textAlign={'center'}>Patient Insight</Typography>
        <Typography variant='h4'>Hello, {state.Name}</Typography>
        <LowerComponent >

          <form onSubmit={handleSubmit}>
            <Box>
            <Typography>Tell your Symptoms</Typography>
              <TextField select label="Select" onChange={handleChange} helperText="Please select your symptom"> 
              {symptomsoptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
              </TextField>
                <Button type="submit" size='large' variant="contained" style={{ marginLeft: 15, marginTop: 5 }}>Submit</Button>
            </Box>
            <Box>
              <List style={flexContainer}>

                {symptoms.map((option) => (
                  <ListItem >
                    <Card padding="0">
                      <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="blue" gutterBottom>
                          {option}
                        </Typography>

                      </CardContent>
                    </Card>

                  </ListItem>
                ))}
              </List>
            </Box>
          </form>
        </LowerComponent>
      </Component>
    </>

  )
}

export default Symptoms;


{/* 
  <form onSubmit={handleSubmit}>

    <div style={{ marginTop: "70px", marginLeft: "40px", marginRight: "40px" }}>

      <h1>Tell Your Symptoms</h1>
      <TextField
        id="outlined-select-currency"
        select
        label="Select"

        onChange={handleChange}
        helperText="Please select your symptom"
      >
        {symptomsoptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <Button type="submit" size='large' variant="contained" style={{ marginLeft: 15, marginTop: 5 }}>Submit</Button>



    </div>
    <div>
      <List style={flexContainer}>

        {symptoms.map((option) => (
          <ListItem >

            <Card padding="0">
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="blue" gutterBottom>
                  {option}
                </Typography>

              </CardContent>
            </Card>

          </ListItem>
        ))}
      </List>
    </div>


  </form>
  <div>
    {disease ? <p>You have {disease}</p> : null}
    {disease ? <Button type="submit" size='large' variant="contained" style={{ marginLeft: 15, marginTop: 5 }} onClick={goToReccom}>Get Recommended Doctors</Button> : null}
  </div>



</div>
*/}




{/* <Box>
              <TextField select label="Select" onChange={handleChange} helperText="Please select your symptom"> {symptomsoptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
              </TextField>
                <Button type="submit" size='large' variant="contained" style={{ marginLeft: 15, marginTop: 5 }}>Submit</Button>
            </Box> */}