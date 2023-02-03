import React from "react";
import { Typography, Box } from "@mui/material";

const Trading = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" sx={{ fontSize: "26px" }}>
          Self Employed
        </Typography>
        <Typography sx={{ fontSize: "20px" }}>Jan 2021 - Oct 2022</Typography>
      </Box>
      <Typography>Managing my own personal investment portfolio.</Typography>
      <Typography sx={{ fontWeight: "bold" }}>Key resposibilities:</Typography>
      <Typography>
        - Keeping a close eye on market trends to spot patterns that can be
        safely traded.
      </Typography>
      <Typography>
        - Watching news sources to keep well up to date with things that may
        effect markets.
      </Typography>
      <Typography>
        - Learning new methods of tracking trends and gaining insight with
        different tools.
      </Typography>
      <Typography>
        - Using methods of interpreting graph patterns to predict market action.
      </Typography>
      <Typography>
        - Collating data on companies and stocks to make longer term
        predictions.
      </Typography>
    </>
  );
};

export default Trading;
