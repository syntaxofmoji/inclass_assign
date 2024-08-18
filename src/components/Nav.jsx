import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx ={{backgroundColor: "#20232a" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>
          <Grid sx={{display:{xs: "none", md: "block"}}}>
          <Button color="inherit">HOME</Button>
          <Button color="inherit">ABOUT</Button>
          <Button color="inherit">CONTACT</Button>
          </Grid>
          <Grid sx = {{display:{xs: "block", md: "none"}}}>
            <Button color="inherit"><MenuIcon></MenuIcon></Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

//Created: Monday, 27 March BE 2566 15:10
//Modified: Wednesday, 29 March BE 2566 09:53
