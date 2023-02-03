import React from "react";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import { theme } from "./Components/Theme.js";
import { Container, ThemeProvider, CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Container
        sx={{
          display: "flex",
        }}
      >
        <Sidebar />
        <Main />
      </Container>
    </ThemeProvider>
  );
}

export default App;
