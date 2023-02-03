import React from "react";
import Header from "./Sidebar/Header";
import Contact from "./Sidebar/Contact";
import { Container } from "@mui/system";

const Sidebar = () => {
  return (
    <Container
      sx={{
        backgroundColor: "primary.dark",
        width: "20vw",
      }}
    >
      <Header />
      <Contact />
    </Container>
  );
};

export default Sidebar;
