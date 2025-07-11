import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";

const MuiNavbar = () => {
  return (
    <AppBar sx={{ backgroundColor: "white", color: "black" }}>
      <Toolbar>
        <Typography variant="h5" sx={{flexGrow:1}}>USHANI</Typography>
        <Stack direction='row' spacing={2} sx={{display:{xs:'none', md:'flex'}}}>
          <Button sx={{color:'black'}}>About</Button>
          <Button sx={{color:'black'}}>Features</Button>
          <Button sx={{color:'black'}}>Contact</Button>
          <Button sx={{color:'black'}}>Logout</Button>
        </Stack>
        {/* <Stack direction='column' spacing={2} sx={{display:{xs:'flex', md:'none'}}}>
          <Button>About</Button>
          <Button>Features</Button>
          <Button>Contact</Button>
          <Button>Logout</Button>
        </Stack> */}

      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
