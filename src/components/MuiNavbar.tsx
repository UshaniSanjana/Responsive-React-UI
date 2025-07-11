import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";

const MuiNavbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const menuItems = ["About", "Features", "Contact", "logout"];

  return (
    <AppBar sx={{ backgroundColor: "white", color: "black" }}>
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          USHANI
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {menuItems.map((item) => (
            <Button sx={{ color: "black" }} key={item}>
              {item}
            </Button>
          ))}
        </Stack>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton onClick={toggleDrawer(true)}>
            <TiThMenu />
          </IconButton>

          <Drawer anchor='top' open={open} onClose={toggleDrawer(false)}>
            {menuItems.map((item) => (
              <Button sx={{ color: "black" }} key={item}>
                {item}
              </Button>
            ))}
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
