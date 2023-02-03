import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
} from "@mui/material";

const Education = () => {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontSize: "28px", margin: "0.5rem" }}>
        Education
      </Typography>
      <Card sx={{ margin: "0.5rem", bgcolor: "primary.light" }}>
        <CardContent>
          <Typography variant="h4" sx={{ fontSize: "22px" }}>
            Secondary Education
          </Typography>
          <Typography sx={{ fontSize: "20px" }}>
            <Link
              href="https://purplebeard.co.uk/individuals/skills-bootcamp/frontend-development/"
              color="inherit"
              underline="hover"
              target="_blank"
              rel="noreferrer"
              sx={{ fontWeight: "bold", fontSize: "20px" }}
            >
              Purple Beard - Front End Web Development
            </Link>
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link
              href="http://diventofinancials.com/academy"
              color="inherit"
              underline="hover"
              target="_blank"
              rel="noreferrer"
              sx={{ fontWeight: "bold", fontSize: "22px" }}
            >
              Divento Financial -
            </Link>
            <Typography sx={{ fontSize: "20px" }}>May 2021</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontSize: "18px" }}>
              Level 3 Diploma in Financial Trading
            </Typography>
            <Typography sx={{ fontSize: "18px" }}>Grade: Pass</Typography>
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ margin: "0.5rem", bgcolor: "primary.light" }}>
        <CardContent>
          <Typography variant="h4" sx={{ fontSize: "22px" }}>
            Formal Education
          </Typography>
          <Typography>
            Long Road Sixthform College - A Level Passes in:
          </Typography>
          <Typography> - Maths, Physics, Computer Science</Typography>
          <Typography>Cottenham Village Academy - GCSE Passes in:</Typography>
          <Typography>
            - Maths, English Literature, English Language, Physics, Chemistry,
            Biology, Computer Science, Geography, Product Design, Religious
            Studies, Art
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Education;
