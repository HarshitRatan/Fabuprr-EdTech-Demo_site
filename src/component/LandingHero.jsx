import React, { useRef } from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography, Button, Stack, Container } from "@mui/material";

const LandingHero = () => {
  const ref = useRef(null);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Container>
            <Typography
              style={{ color: "#5a683f", fontWeight: "1000" }}
              variant="h2"
            >
              Learning Today
            </Typography>
            <Typography
              style={{ color: "#5a683f", fontWeight: "1000" }}
              variant="h2"
            >
              Leading Tomorrow
            </Typography>
            <Typography variant="h6" sx={{ marginTop: "25px" }}>
              Break into a new field like information technology or data
              science. No prior experience necessary to get started.
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginTop: "25px", color: "#b30000ed", fontWeight: "800" }}
            >
              Please Login To See DashBoard Page.
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              sx={{ marginTop: "50px" }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  width: "250px",
                  height: "50px",
                  color: "white",
                  backgroundColor: "#000000d1",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
                onClick={() => {
                  ref.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Courses
              </Button>
              <Button
                variant="contained"
                size="large"
                color="success"
                sx={{ width: "250px", height: "50px" }}
                onClick={() => {
                  ref.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Start Learning
              </Button>
            </Stack>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            sx={{
              height: "100%",
              width: "100%",
            }}
            alt="Home-Page_banner-img"
            src="/images/Home-Page-Banner-Image.png"
          />
        </Grid>
      </Grid>
      <Box
        ref={ref}
        style={{ position: "relative", zIndex: "25", marginTop: "100px" }}
      ></Box>
    </>
  );
};

export default LandingHero;
