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
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElMenu, setAnchorElMenu] = React.useState(null);
  const [menuButtonDisplay, setMenuButtonDisplay] = React.useState(false);
  const [loginLoading, setLoginLoading] = React.useState(false);

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
                <Link to={`/`} key={values} sx={{ textDecoration: "none" }}>
                  <MenuItem sx={{ color: "black" }}>{values}</MenuItem>
                </Link>
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
              <Link to={`/`} key={values} sx={{ textDecoration: "none" }}>
                <MenuItem
                  sx={{
                    display: menuButtonDisplay ? "none" : "inline",
                    color: "black",
                  }}
                >
                  {values}
                </MenuItem>
              </Link>
            </span>
          ))}

          {loginLoading && (
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
              sx={{ width: "100%" }}
            >
              <CircularProgress />
            </Stack>
          )}
          {!loginLoading && !auth && (
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
              sx={{ width: "100%" }}
            >
              <Box>
                <Button
                  onClick={() => {
                    setLoginLoading(true);
                    setTimeout(() => {
                      setAuth(true);
                      setLoginLoading(false);
                      navigate("/dashBoard");
                    }, 1000);
                  }}
                  color="inherit"
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    setLoginLoading(true);
                    setTimeout(() => {
                      setAuth(true);
                      setLoginLoading(false);
                      navigate("/dashBoard");
                    }, 1000);
                  }}
                  sx={{
                    marginLeft: "10px",
                    color: "white",
                    backgroundColor: "#000000d1",
                    "&:hover": {
                      backgroundColor: "black",
                    },
                  }}
                  variant="contained"
                >
                  Sign up
                </Button>
              </Box>
            </Stack>
          )}
          {!loginLoading && auth && (
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
                <MenuItem
                  onClick={() => {
                    navigate("/dashboard");
                    handleCloseLogin();
                  }}
                >
                  Go To DashBoard
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setLoginLoading(true);
                    setTimeout(() => {
                      setAuth(false);
                      setAnchorEl(null);
                      navigate("/");
                      setLoginLoading(false);
                      handleCloseLogin();
                    }, 1000);
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
