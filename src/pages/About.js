import React from "react";
import Layout from "../component/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box sx={{ my: 15, textAlign: "center", p: 2, "& h4": { fontWeight: "bold", my: 2, fontSize: "2rem",},
          "& p": { textAlign: "justify",},
          "@media (max-width:600px)": {  mt: 0,  "& h4 ": {  fontSize: "1.5rem",},},}}>
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          The company itself is a very successful company. We bring the matter of the blessed with hatred, because the fault of the present is
           great for us, and it is convenient for us, which, corrupted, is to be borne by the inventor of the laborious pursuit of the way, which 
           is hindered by error, blinded by the pains of repudiation 11111
        </p>
        <br />
        <p>
        The company itself is a very successful company. comfortable,
          they leave the free one to criticize when they are fleeing and at different times
          to do will happen to be blinded we lead of these wants most or who
          with pleasures that are often corrupted by hatred, indeed the pleasure of pains
          at the time? To be a wise man is less trouble, for no one blames him for his pains
          whatever he wants to prevent, we never lead the body worthy
          the inventor of the elders. For therefore our sorrows and sorrows
          some, that the pleasures should be wisely discerned by the pains of the labors
          so that unless there is a distinction nothing will come of flattery
          they don't know! Our pleasures will turn out to be repulsed or our duties will be softened
          at the time of the pleasures to be endured and those times further?
          But he is blessed with gentleness!
        </p>
      </Box>
    </Layout>
  );
};
export default About;