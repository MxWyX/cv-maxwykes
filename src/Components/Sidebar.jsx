import React from "react";
import Header from "./Sidebar/Header";
import Contact from "./Sidebar/Contact";
import { Container } from "@mui/system";

const Sidebar = () => {
  return (
    <Container>
      <Header />
      <Contact />
    </Container>
  );
};

export default Sidebar;
