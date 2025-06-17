import Layout from "../component/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpeg";
import HomeStyles from "../styles/HomeStyles.css"
import { Grid} from "@mui/material";

const Home = () => { 
  return (
    <Layout>
      <Grid>

       <div className="home" style={{ backgroundImage: `url(${Banner})` }}>

        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>

        </div>
       </div> 
       
      </Grid>
    </Layout>
  );
};

export default Home;
