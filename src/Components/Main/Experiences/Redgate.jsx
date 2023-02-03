import { Typography, Box, Link } from "@mui/material";
import React from "react";

const Redgate = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" sx={{ fontSize: "26px" }}>
          <Link
            href="https://www.red-gate.com/our-company/"
            color="inherit"
            underline="hover"
            target="_blank"
            rel="noreferrer"
          >
            Redgate Software
          </Link>
        </Typography>
        <Typography sx={{ fontSize: "20px" }}>Jan 2020 - Dec 2020</Typography>
      </Box>
      <Typography>
        Handling inbound sales under £5k and generating sales to maintain a
        sales pipeline.
      </Typography>
      <Typography sx={{ fontWeight: "bold" }}>Key resposibilities:</Typography>
      <Typography>
        - Identifying issues that the software could fix in a companies
        development pipeline.
      </Typography>
      <Typography>
        - Upselling sales to push thenm over £5k to be passed onto an account
        manager.
      </Typography>
      <Typography>
        - Maintaining a steady sales pipeline through outbound messaging when
        needed.
      </Typography>
      <Typography>
        - Demoing software to customers to show key value points and prove ROI.
      </Typography>
      <Typography sx={{ fontweight: "bold" }}>
        Secondary responsibilities
      </Typography>
      <Typography>
        - Software demo workshops to help others build their demo skills to
        assist with sales.
      </Typography>
      <Typography>
        - Department tech support provisioning useful technical information to
        my team when needed.
      </Typography>
      <Typography>
        - Taking on the role of “Software Champion” to manage contact between
        development and sales teams through monthly update news letters. Also
        meeting with the developers to pass customer feedback over. This also
        made me the go to employee when a information or a demo of the software
        was needed.
      </Typography>
    </>
  );
};

export default Redgate;
