import React from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { theme } from "./theme";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Rainbow from "./components/Rainbow";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box position='relative'>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Rainbow />
      </Box>
    </ThemeProvider>
  );
};

export default App;
