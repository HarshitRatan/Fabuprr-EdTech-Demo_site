import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";

export default function Header() {
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElMenu, setAnchorElMenu] = React.useState(null);
  const [menuButtonDisplay, setMenuButtonDisplay] = React.useState(false);

  const menuItemsValue = ["Home", "Explore", "Resources"];

  const handleMenuLogin = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseLogin = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElMenu(null);
  };

  useEffect(() => {
    function handleWindowResize() {
      if (window.innerWidth <= 768) setMenuButtonDisplay(true);
      else setMenuButtonDisplay(false);
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "100px" }}>
      <AppBar sx={{ color: "black", background: "#eeeae6" }}>
        <Toolbar>
          <Box sx={{ display: menuButtonDisplay ? "block" : "none" }}>
            <IconButton
              onClick={handleMenu}
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElMenu)}
              onClose={handleClose}
            >
              {menuItemsValue.map((values) => (
                <MenuItem key={values}>{values}</MenuItem>
              ))}
            </Menu>
          </Box>
          <IconButton size="large" color="inherit" sx={{ mr: 2 }}>
            <img
              src="/images/company-Logo.png"
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
              alt="company-logo"
            />
          </IconButton>

          {menuItemsValue.map((values) => (
            <span key={values}>
              <MenuItem sx={{ display: menuButtonDisplay ? "none" : "inline" }}>
                {values}
              </MenuItem>
            </span>
          ))}
          {!auth && (
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
              sx={{ width: "100%" }}
            >
              <Box>
                <Button onClick={() => setAuth(true)} color="inherit">
                  Login
                </Button>
                <Button
                  onClick={() => setAuth(true)}
                  sx={{
                    marginLeft:'10px',
                    color: "white",
                    backgroundColor: "#000000d1",
                    "&:hover": {
                      backgroundColor: "black",
                    }
                  }}
                  variant="contained"
                >
                  Sign up
                </Button>
              </Box>
            </Stack>
          )}
          {auth && (
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
              sx={{ width: "100%" }}
            >
              <IconButton
                size="large"
                onClick={handleMenuLogin}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseLogin}
              >
                <MenuItem onClick={handleCloseLogin}>Go To DashBoard</MenuItem>
                <MenuItem
                  onClick={() => {
                    setAuth(false);
                    setAnchorEl(null);
                  }}
                >
                  Log out
                </MenuItem>
              </Menu>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
