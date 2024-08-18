import { useState } from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Container, Box, Grid } from "@mui/material";

function App() {

  return (
    <Box>
      <Nav />
      <Container>
      <Grid container spacing={3} paddingTop={3}>
          <Grid item md={3}>
            <Sidebar />
          </Grid>
          <Grid item md={6}> 
            <Content />
          </Grid>
          <Grid item md={3}>
            <Rightbar />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;

//Created: Monday, 27 March BE 2566 15:09
//Modified: Wednesday, 29 March BE 2566 23:22
