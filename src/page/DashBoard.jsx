import React from "react";
import { Container, Grid, Stack, Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";

const DashBoard = () => {
  return (
    <Container sx={{ marginBottom: "100px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ display: "flex", maxWidth: "500px", height: "700px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ marginTop: "30px" }}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  sx={{ width: "100%" }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      borderRadius: "50%",
                      height: "250px",
                      width: "250px",
                    }}
                    image="/images/courseImage/image1.jpg"
                    alt="Profile-Pic"
                  />
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Stack
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}
                      sx={{ width: "100%" }}
                    >
                      <Typography component="div" variant="h5">
                        Name :
                      </Typography>
                      <Typography
                        component="div"
                        variant="h5"
                        style={{ color: "#b30000ed", fontWeight: "800" }}
                      >
                        Harshit Ratan
                      </Typography>
                      <Typography component="div" variant="h5">
                        Phone Number :
                      </Typography>
                      <Typography
                        component="div"
                        variant="h5"
                        style={{ color: "#b30000ed", fontWeight: "800" }}
                      >
                        +91 94150 93948
                      </Typography>
                      <Typography component="div" variant="h5">
                        Email :
                      </Typography>
                      <Typography
                        component="div"
                        variant="h5"
                        style={{ color: "#b30000ed", fontWeight: "800" }}
                      >
                        harshit@gmail.com
                      </Typography>
                    </Stack>
                  </CardContent>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ display: "flex", maxWidth: "500px", height: "700px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ marginTop: "30px" }}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  sx={{ width: "100%" }}
                >
                  <Typography variant="h6">
                    <GolfCourseIcon fontSize="100px" /> Course Enrolled :
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  sx={{ width: "100%", marginTop:'50px' }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/images/courseImage/image16.jpg"
                    sx={{ width: 48, height: 48, marginTop: "10px" }}
                  />
                  <Typography variant="h6" sx={{ marginTop: "10px" }}>
                    Web Development
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  sx={{ width: "100%", marginTop:'50px' }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/images/courseImage/image15.jpg"
                    sx={{ width: 48, height: 48, marginTop: "10px" }}
                  />
                  <Typography variant="h6" sx={{ marginTop: "10px" }}>
                    JavaScripts React
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  sx={{ width: "100%", marginTop:'50px' }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/images/courseImage/image11.jpg"
                    sx={{ width: 48, height: 48, marginTop: "10px" }}
                  />
                  <Typography variant="h6" sx={{ marginTop: "10px" }}>
                  Digital Marketing
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashBoard;
