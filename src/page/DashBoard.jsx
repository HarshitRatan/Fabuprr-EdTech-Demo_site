import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const DashBoard = () => {
  return (
    <>
      <h1>This is DashBoard Page</h1>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>
    </>
  );
};

export default DashBoard;
