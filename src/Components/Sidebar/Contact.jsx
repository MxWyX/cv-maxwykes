import { Avatar, Box, Divider } from "@mui/material";
import {
  EmailTwoTone,
  PhoneAndroidTwoTone,
  CottageTwoTone,
} from "@mui/icons-material";
import "./Sidebar.css";
import React from "react";

const Contact = () => {
  return (
    <Box>
      <Box className="Contact">
        <Avatar
          className="icon"
          sx={{
            bgcolor: "primary.light",
            color: "secondary.dark",
            width: 32,
            height: 32,
          }}
        >
          <EmailTwoTone />
        </Avatar>
        <div>
          <p>
            <span>Email:</span>
          </p>
          <p>Max.Wykes@gmail.com</p>
        </div>
      </Box>
      <Box className="Contact">
        <Avatar
          className="icon"
          sx={{
            bgcolor: "primary.light",
            color: "secondary.dark",
            width: 32,
            height: 32,
          }}
        >
          <PhoneAndroidTwoTone />
        </Avatar>
        <div>
          <p>
            <span>Mobile:</span>
          </p>
          <p>+447923225004</p>
        </div>
      </Box>
      <Box className="Contact">
        <Avatar
          className="icon"
          sx={{
            bgcolor: "primary.light",
            color: "secondary.dark",
            width: 32,
            height: 32,
          }}
        >
          <CottageTwoTone />
        </Avatar>
        <div>
          <p>
            <span>Location:</span>
          </p>
          <p>St Ives, Cambridge</p>
        </div>
      </Box>
      <Divider></Divider>
    </Box>
  );
};

export default Contact;
