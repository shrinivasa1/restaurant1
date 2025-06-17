import React,{useState} from "react";
import { Avatar, Button, Grid,Paper,FormLabel,FormControlLabel,FormControl,InputAdornment,Input,Checkbox, Typography, TextField} from "@mui/material";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SmartphoneSharpIcon from '@mui/icons-material/SmartphoneSharp';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


const Formwithopt=()=>{
  const [forms, setForms] = useState([]);
  const [formData, setFormData] = useState({});

const [showPassword, setShowPassword] = React.useState(false);

const handleClickShowPassword = () => setShowPassword((show) => !show);

const handleMouseDownPassword = (event) => {
       event.preventDefault();
       };
const paperstyle={padding:30,height:'auto',margin:"50px auto",width:450,backgroundColor:"rgb(207 201 224)"  }
const avtstyle={backgroundColor:"#4848e3" ,margin:"0px", padding:"8px"}
const paperstylee={padding:30,height:"auto",margin:"50px auto",width:400,backgroundColor:"rgb(228 233 205)"  }

const handleChange = (e) => {
  const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
};
   
const handleSubmit = (e) => {
  e.preventDefault();
  setForms((prev) => [...prev, formData]);
  setFormData({});
};



return(<div>
        <Grid>
            <Paper elevation={10} style={paperstyle}>
                <Grid Align="center">
                <Avatar style={avtstyle}>
                </Avatar>
                Sign up
                <Grid align="center">
                <Typography variant="h6" fontSize="small" color="primary">Please fill this Registration Form</Typography></Grid>
                </Grid>

{/* Label name */}
                <FormControl sx={{ m:1,width:450}} variant="standard" required>
          <InputLabel htmlFor="standard-adornment-Name">Name</InputLabel>
          <Input
            id="standard-adornment-name"
            value={formData.name ||''}
            name="name"
            onChange={handleChange}
            
            endAdornment={
              <InputAdornment position="end">
               <AccountCircleRoundedIcon sx={{m:2.5}}/>
                
                  
                
              </InputAdornment>
            }
          />
        </FormControl><br/>

{/*Label for Password*/}
        <FormControl sx={{ m: 1,width:450 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password ||''}
            name="password"
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff sx={{m:1.5}}/> : <Visibility sx={{m:1.5}} />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl><br/>


{ /*Label for confirm Password*/}

        <FormControl sx={{ m:1 ,width:450}} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={formData.cpassword ||''}
            name="cpassword"
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff sx={{m:1.5}}/> : <Visibility sx={{m:1.5}} />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl><br/>

{/*label for Ph no*/}

        <FormControl sx={{ m:1,width:450 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-Name">Phone No</InputLabel>
          <Input
            id="standard-adornment-Number"
            value={formData.phone ||''}
            name="phone"
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
               <SmartphoneSharpIcon sx={{m:1.8}}/>
                
                  
                
              </InputAdornment>
            }
          />
        </FormControl><br/>

{/*Radio  button*/}

<FormControl sx={{m:1,width:450}}>
    <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
    <RadioGroup
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="gender"
      value={formData.gender || ''}
      onChange={handleChange}
      style={{display:"initial"}}
    >
      <FormControlLabel value="Female" control={<Radio/>} label="Female" />
      <FormControlLabel value="Male" control={<Radio />} label="Male" />
    </RadioGroup>
  </FormControl><br/>

{/*checkbox*/}

  <FormControlLabel
                control={
                    <Checkbox
                    name="checkdb"
                    color="primary"
                    />
                }
                    label="I Accepted the terms and Conditions"
                /><br/>

                <Button type="submit" variant="contained" color="primary" onClick={handleSubmit} fullWidth>
                 Register
                    </Button><br/>
       

            </Paper>
            
            
        </Grid>
        
        <div>
          <br/>
          {forms.map((form,index)=>(
           
            <div key={index}> <Grid><Typography variant="h3">Submitted Details:</Typography>
               <Paper elevation={10} style={paperstylee}>
               
              <Typography variant="h4">Name:</Typography>
              <TextField variant="outlined" value={form.name} fullWidth></TextField>

              <Typography variant="h4">Password:</Typography>
              <TextField variant="outlined" value={form.password} fullWidth></TextField>

              <Typography variant="h4">Phone:</Typography>
              <TextField variant="outlined" value={form.phone} fullWidth></TextField>

              <Typography variant="h4">Gender:</Typography>
              <TextField variant="outlined" value={form.gender} fullWidth></TextField>
              
            </Paper></Grid>
            </div>
          ))}
        </div>
        </div>
        )
}
export default Formwithopt;