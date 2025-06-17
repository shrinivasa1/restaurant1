import * as React from "react";
import { Avatar, Button, Grid, Paper, FormLabel, FormControlLabel, FormControl, InputAdornment, Input, Checkbox, Typography } from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SmartphoneSharpIcon from '@mui/icons-material/SmartphoneSharp';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const Register = () => {
  
  const history=useNavigate();


  const [showPassword, setShowPassword] = React.useState(false);
  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');
  const [userphone, setUserphone] = useState('');
  const [userpassword, setUserpassword] = useState('');
  const [usergender, setUsergender] = useState('');



  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

   function handleSubmit(e) {
    e.preventDefault();

    try {
      console.log(useremail, userpassword)
       axios.post("http://localhost:3000/register", {
        email:useremail,name:username, password:userpassword,phone:userphone,gender:usergender 
      })
      .then(res=>{
        console.log(res)
        if(res.data==="exist")
        {
          alert("User already exist")

        }
        else if(res.data==="not exist")
        {
           history("/home",{state:{id:username}});
        }
      })
      .catch(e=>{
        alert("wrong details")
        console.log(e);
    })

    }
    catch (e) {

      console.log(e);
    }

  };
  const paperstyle = { padding: 25, height: "auto", margin: "20px auto", width: 400, backgroundColor: "#fff" }
  const avtstyle = { backgroundColor: "#4848e3", margin: "10px", padding: "8px" }





  return (
    <Grid>
      <Paper elevation={10} style={paperstyle}>
        <Grid Align="center">
          <Avatar style={avtstyle}>
          </Avatar>
          Sign up
          <Grid align="center">
            <Typography variant="h6" fontSize="small" color="primary">Please fill this Registration Form</Typography></Grid>
        </Grid>

        {/* Label email */}
        <FormControl sx={{ m: 1, width: '42ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
          <Input
            id="standard-adornment-email"
            placeholder="Enter your Email id"
            value={useremail}
            onChange={(e) => {
              setUseremail(e.target.value)
            }}

            endAdornment={
              <InputAdornment position="end">
                <AccountCircleRoundedIcon sx={{ m: 2.5 }} />



              </InputAdornment>
            }
          />
        </FormControl><br />

        {/* Label name */}
        <FormControl sx={{ m: 1, width: '42ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-Name">Name</InputLabel>
          <Input
            id="standard-adornment-name"
            placeholder="Enter your Name"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            endAdornment={
              <InputAdornment position="end">
                <AccountCircleRoundedIcon sx={{ m: 2.5 }} />



              </InputAdornment>
            }
          />
        </FormControl><br />

        {/*Label for Password*/}
        <FormControl sx={{ m: 1, width: '42ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            placeholder="Enter your password"
            value={userpassword}
            onChange={(e) => {
              setUserpassword(e.target.value)
            }}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff sx={{ m: 1.5 }} /> : <Visibility sx={{ m: 1.5 }} />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl><br />


        { /*Label for confirm Password*/}

        <FormControl sx={{ m: 1, width: '42ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff sx={{ m: 1.5 }} /> : <Visibility sx={{ m: 1.5 }} />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl><br />

        {/*label for Ph no*/}

        <FormControl sx={{ m: 1, width: '42ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-Name">Phone No</InputLabel>
          <Input
            id="standard-adornment-Number"
            placeholder="Enter your Phone number"
            value={userphone}
            onChange={(e) => {
              setUserphone(e.target.value)
            }}
            endAdornment={
              <InputAdornment position="end">
                <SmartphoneSharpIcon sx={{ m: 2.5 }} />



              </InputAdornment>
            }
          />
        </FormControl><br />

        {/*Radio  button*/}

        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={usergender}
            onChange={(e) => {
              setUsergender(e.target.value)
            }}
            style={{ display: "initial" }}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl><br />

        {/*checkbox*/}

        <FormControlLabel
          control={
            <Checkbox
              name="checkdb"
              color="primary"
            />
          }
          label="I Accepted the  terms and Conditions"
        /><br />


        <Button type="submit" variant="contained" color="primary" fullWidth onClick={handleSubmit}>
          Register
        </Button>
        <Typography variant="body1">Already have an account ?<Link to={"/login"}>Sign in</Link></Typography>


      </Paper>


    </Grid>
  )
}

export default Register;