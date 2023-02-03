import React from "react";
import { Typography, Box } from "@mui/material";

const Tailoring = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" sx={{ fontSize: "26px" }}>
          Moss Bros. & Brooks Bros.
        </Typography>
        <Typography sx={{ fontSize: "20px" }}>Apr 2017 - Oct 2019</Typography>
      </Box>
      <Typography>Outline -</Typography>
      <Typography sx={{ fontWeight: "bold" }}>Key resposibilities:</Typography>
      <Typography>Just</Typography>
      <Typography>Being</Typography>
      <Typography>A</Typography>
      <Typography>Cool</Typography>
      <Typography>Guy</Typography>
    </>
  );
};

export default Tailoring;
