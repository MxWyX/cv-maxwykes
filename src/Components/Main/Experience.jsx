import React from "react";
import UW from "./Experiences/UW";
import Trading from "./Experiences/Trading";
import Redgate from "./Experiences/Redgate";
import Tailoring from "./Experiences/Tailoring";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Experience = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontSize: "28px", margin: "0.5rem" }}>
        Experience
      </Typography>
      <Accordion
        sx={{
          bgcolor: "primary.dark",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "black",
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontWeight: "bold",
            }}
          >
            Technical Customer Support
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: "primary.light" }}>
          <Typography>
            <UW />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          bgcolor: "primary.dark",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontWeight: "bold" }}>
            Investment Manager
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: "primary.light" }}>
          <Typography>
            <Trading />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          bgcolor: "primary.dark",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontWeight: "bold" }}>Inside Sales</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: "primary.light" }}>
          <Typography>
            <Redgate />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          bgcolor: "primary.dark",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "black" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontWeight: "bold" }}>Tailoring</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: "primary.light" }}>
          <Typography>
            <Tailoring />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Experience;
