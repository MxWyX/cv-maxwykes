import { Avatar, Box, Divider } from "@mui/material";
import photo from "../Imgs/ProfilePhoto.jpg";
import "./Sidebar.css";
import React from "react";

const Header = () => {
  return (
    <Box className="Intro">
      <Avatar
        sx={{
          width: 88,
          height: 88,
          bgcolor: "primary.light",
          color: "secondary.dark",
          fontWeight: "bold",
          marginTop: "16px",
        }}
        src={photo}
      >
        MW
      </Avatar>
      <h1>Max Wykes</h1>
      <h2>Front End Developer</h2>
      <Divider></Divider>
    </Box>
  );
};

export default Header;
