import React from "react";
import { Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const Footer = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={2}
      sx={{
        width: "100%",
        height: "100px",
        color: "black",
        backgroundColor: "#c7c0b8;",
      }}
    >
      <Typography variant="body1">© 2022 . All rights reserved.</Typography>

      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <FacebookIcon />
        <EmailIcon />
        <LinkedInIcon />
        <InstagramIcon />
        <AddIcCallIcon/>
      </Stack>
    </Stack>
  );
};
export default Footer;
