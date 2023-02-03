import { Typography, Box, Link } from "@mui/material";
import React from "react";

const UW = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" sx={{ fontSize: "26px" }}>
          <Link
            href="https://uw.co.uk/about-us"
            color="inherit"
            underline="hover"
            target="_blank"
            rel="noreferrer"
          >
            Utility Warehouse
          </Link>
        </Typography>
        <Typography sx={{ fontSize: "20px" }}>Sept 2022 - Current</Typography>
      </Box>
      <Typography>
        Taking inbound calls to advise on broadband, wifi and landline issues.
      </Typography>
      <Typography sx={{ fontWeight: "bold" }}>Key resposibilities:</Typography>
      <Typography>
        - Following logical steps to troubleshoot issues to narrow down what the
        problem.
      </Typography>
      <Typography>
        - Running line tests and strategically eliminating parts of the system
        to discover where faults lie.
      </Typography>
      <Typography>
        - When no faults are discovered following procedure to raise tickets for
        further investigation.
      </Typography>
      <Typography>
        - Assiting in the setup of routers and wifi mesh devices.
      </Typography>
      <Typography>
        - Helping customers who have been hacked regain access to their email
        accounts.
      </Typography>
    </>
  );
};

export default UW;
