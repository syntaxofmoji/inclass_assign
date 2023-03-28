import { useState } from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Container, Box, Grid } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Nav />
      <Container sx={{mt:10}}>
        <Grid container direction="row" justifycontent ="center" gap={3}>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={6}> 
            <Content />
          </Grid>
          <Grid item xs={3}>
            <Rightbar />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
