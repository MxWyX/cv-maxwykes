import React from "react";
import Experience from "./Main/Experience";
import Education from "./Main/Education";
import Skills from "./Main/Skills";
import "./Main/Main.css";
import { Container } from "@mui/material";

const Main = () => {
  return (
    <Container sx={{ backgroundColor: "primary.main" }}>
      <Experience />
      <Education />
      {/* <Skills /> */}
    </Container>
  );
};

export default Main;
