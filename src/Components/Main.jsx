import React from "react";
import Experience from "./Main/Experience";
import Education from "./Main/Education";
import Skills from "./Main/Skills";
import { Container } from "@mui/system";

const Main = () => {
  return (
    <Container>
      <Experience />
      <Education />
      <Skills />
    </Container>
  );
};

export default Main;
