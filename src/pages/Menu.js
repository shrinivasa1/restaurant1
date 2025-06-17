import React from "react";
import { MenuList } from "../data/data";
import Layout from "../component/Layout/Layout";
import {Box,Button,Card,CardActionArea,CardContent, CardMedia, Typography} from "@mui/material";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
                <Typography variant="h6">Price:{menu.price}</Typography>
              </CardContent>
              <Link to={"/login"}><Button>Order</Button></Link>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;