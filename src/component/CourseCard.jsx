import { Stack, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CourseCard = (props) => {
  return (
    <div>
      <Card
        sx={{
          backgroundColor: "#EEEEEE",
          margin: "auto",
          position: "relative",
          maxWidth: 350,
          maxHeight: 400,
          borderRadius: "10px",
          transition: "1s",
          boxShadow:
            "-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)",
          ":hover .child": {
            display: "block",
          },
        }}
      >
        <div style={{ position: "relative" }}>
          <CardMedia
            style={{ height: "250px", width: "100%" }}
            component="img"
            image={props.imageURL}
            alt="Image"
          />
          <div
            style={{
              position: "absolute",
              color: "white",
              bottom: 0,
              left: "50%",
              width: "100%",
              transform: "translateX(-50%)",
            }}
          >
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="flex-end"
              sx={{ width: "100%" }}
            >
              <Button
                className="child"
                variant="contained"
                size="large"
                color="success"
                sx={{ display: "none", width: "100%" }}
              >
                Start Learning
              </Button>
            </Stack>
          </div>
        </div>
        <CardContent sx={{ textAlign: "left", padding: "2px", margin: "10px" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            spacing={0}
          >
            <Typography
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              variant="subtitle1"
              gutterBottom
            >
              {props.courseName}
            </Typography>
            <Typography
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                color: "primary.main",
              }}
              variant="subtitle1"
            >
              {props.author}
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            spacing={0}
          >
            <Typography sx={{ color: "#7C7C7C" }} variant="subtitle2">
              {"Rs "+props.prize+" only"}
            </Typography>
            <Button>
              {"Category " + props.catg.charAt(9)}
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseCard;
