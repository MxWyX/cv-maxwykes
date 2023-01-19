import React from "react";
import UW from "./Experiences/UW";
import Trading from "./Experiences/Trading";
import Redgate from "./Experiences/Redgate";
import Tailoring from "./Experiences/Tailoring";
import { Box } from "@mui/system";

const Experience = () => {
  return (
    <Box>
      <UW />
      <Trading />
      <Redgate />
      <Tailoring />
    </Box>
  );
};

export default Experience;
