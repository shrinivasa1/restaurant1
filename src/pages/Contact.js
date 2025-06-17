import React from "react";
import Layout from "../component/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead,TableRow, Typography} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact My Resturant</Typography> <p>
        The company itself is a very successful company. We bring the matter of the blessed with hatred,  because the fault of the present is 
        great for us, and it is convenient for us, which, corrupted, is to be borne by the inventor of the laborious pursuit of the way,
         which is hindered by error,  blinded by the pains of repudiation </p>
      </Box>
      <Box sx={{  m: 3, width: "600px", ml: 10, "@media (max-width:600px)": {  width: "300px", }, }}>
        <TableContainer component={Paper}>  <Table aria-label="contact table">
            <TableHead>   <TableRow>  <TableCell  sx={{ bgcolor: "black", color: "white" }}  align="center"  > Contact Details </TableCell>
              </TableRow>  </TableHead>
    <TableBody> <TableRow> <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000  (tollfree) </TableCell>
              </TableRow> 
              <TableRow>   <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> sshrinivas840@gmail.com </TableCell> </TableRow>
              <TableRow>  <TableCell>   <CallIcon sx={{ color: "green", pt: 1 }} /> 7338169359 </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;