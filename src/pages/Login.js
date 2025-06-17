import { Avatar, Button, FormControl, Grid, Link, Paper, Input, Typography, InputAdornment } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState } from "react";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoginIcon from '@mui/icons-material/Login';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const history=useNavigate();

  const [useremail,setUseremail]=useState('');
  const [userpassword,setUserpassword]=useState('')

    function  handleSubmit(e) {
    e.preventDefault();


    try{

       axios.post("http://localhost:3000/",{
        email:useremail,password:userpassword
      })

      .then(res=>{
        console.log(res)
        if(res.data==="exist")
        { 
          history("/home",{state:{id:useremail}});
        }
        
        else if(res.data==="not exist")
        {
          alert("user not found")
        }
      })
      .catch(e=>{
        alert("wrong details")
        console.log(e);
    })
  }
    catch(e){

      console.log(e);
    }
  }
  

  
  const [showPassword, setShowPassword] = React.useState(false);


  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  const paperstyle = { padding: 25, height: "70vh", margin: "20px auto", width: 300, backgroundColor: "rgb(245 242 242)" }
  const avtstyle = { backgroundColor: "#4848e3", margin: "10px" }
  const btnstyle = { margin: "8px" }
  const btnsstyle = { margin: "10px" }
  return (
    <div>
      <Grid>
        <Paper elevation={20} style={paperstyle}>
          <Grid align="center">
            <Avatar style={avtstyle}><LockOutlinedIcon /></Avatar>
            <h2>sign in</h2>
          </Grid>

          <form action="login">
          <FormControl  sx={{ m: 1, width: '30ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-Email">Email</InputLabel>
            <Input
              id="standard-adornment-Email"
              value={useremail}
              onChange={(e)=>{
                setUseremail(e.target.value)
              }}
              name="email"

              endAdornment={
                <InputAdornment position="end">

                  <AccountCircleRoundedIcon sx={{ m: 2.5 }} />



                </InputAdornment>
              }
            />
          </FormControl>





          <FormControl sx={{ m: 1, width: '30ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              value={userpassword}
              name="password"
              onChange={(e)=>{
                setUserpassword(e.target.value)
              }}
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword} >
                    {showPassword ? <VisibilityOff sx={{ m: 1.5 }} /> : <Visibility sx={{ m: 1.5 }} />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>


          <Button type="submit" variant="contained" style={btnsstyle} onClick={handleSubmit} fullWidth color="secondary">Sign In<LoginIcon />
          </Button>
          <Typography style={btnstyle}>
            <Link href="#">
              forgot password ?
            </Link>
          </Typography>

          <Typography style={btnstyle}>Do You have a account ?
            <Link href={"/register"}>
              <Button >
                sign up
              </Button></Link>
          </Typography>
          </form>
        </Paper>
      </Grid>

      
      </div>
  )

}

export default Login;