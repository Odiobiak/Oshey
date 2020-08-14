import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import tail from "./static/tail.png";
import beaut from "./static/beaut.png";
import event from "./static/event.png";
import home from "./static/home.png";
import more from "./static/more.png";
import bcard from "./static/bcard.jpg";
import ecard from "./static/ecard.jpg";
import hcard from "./static/hcard.jpg";
import scard from "./static/scard.jpg";
import tcard from "./static/tcard.jpg";
import barbercard from "./static/barbercard.jpeg";
import nailsalon from "./static/nailsalon.jpg";
import delivery from "./static/delivery.jpg";
import hairsalon from "./static/hairsalon.jpg";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    border: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    backgroundColor: "turquoise",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  title: {
    flexGrow: 1,
    background: "white",
    backgroundColor: theme.palette.background.paper,
  },

  divide: {
    width: "100",
    maxWidth: "360",
  },

  button: {
    margin: theme.spacing(3),
    height: "8vh",
    marginTop: theme.spacing(3),
    padding: theme.spacing(1),
    textAlign: "center",
    background: "slategray",

    position: "relative",
  },
}));

const styles = makeStyles((muiBaseTheme) => ({
  card: {
    maxWidth: 400,
    margin: "auto",

    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  media: {
    paddingTop: "90%",
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3,
  },

  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
}));

export default function Main() {
  const classes = useStyles();
  const cardclass = styles();

  return (
    <div>
      <div className={classes.root}>
        <ButtonGroup>
          <div>
            <Link to="/beauty" style={{ textDecoration: "none" }}>
              <Button
                color="primary"
                variant="contained"
                className={classes.button}
              >
                beauty <img src={beaut} alt="{}" />
              </Button>
            </Link>
          </div>

          <div>
            <Link to="/tailor" style={{ textDecoration: "none" }}>
              <Button
                color="primary"
                variant="contained"
                className={classes.button}
              >
                tailor <img src={tail} alt="{}" />
              </Button>
            </Link>
          </div>

          <div>
            <Link to="/event" style={{ textDecoration: "none" }}>
              <Button
                color="primary"
                variant="contained"
                className={classes.button}
              >
                event <img src={event} alt="{}" />
              </Button>
            </Link>
          </div>

          <div>
            <Link to="/service" style={{ textDecoration: "none" }}>
              <Button
                color="primary"
                variant="contained"
                className={classes.button}
              >
                Home-Service <img src={home} alt="{}" />
              </Button>
            </Link>
          </div>

          <div>
            <Link to="/more" style={{ textDecoration: "none" }}>
              <Button
                color="primary"
                variant="contained"
                className={classes.button}
              >
                more <img src={more} alt="{}" />
              </Button>
            </Link>
          </div>
        </ButtonGroup>
      </div>

      <div className={classes.title}>
        <Typography variant={"h2"} align="center" gutterBottom>
          Types of Services
        </Typography>
      </div>

      <div className={classes.title}>
        <Fragment>
          <Divider variant="fullWidth" />
          <Grid container spacing={3} alignItems="center" justify="center">
            <Grid item md={2}>
              <Card className={cardclass.card}>
                <CardMedia className={cardclass.media} image={bcard} />
                <CardContent className={classes.content}>
                  <Typography
                    className={"MuiTypography--heading"}
                    variant={"h6"}
                    gutterBottom
                  >
                    Beauty
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={2}>
              <Card className={cardclass.card} xs={3}>
                <CardMedia className={cardclass.media} image={ecard} />
                <CardContent className={classes.content}>
                  <Typography
                    className={"MuiTypography--heading"}
                    variant={"h6"}
                    gutterBottom
                  >
                    Events
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={2}>
              <Card className={cardclass.card}>
                <CardMedia className={cardclass.media} image={hcard} />
                <CardContent className={classes.content}>
                  <Typography
                    className={"MuiTypography--heading"}
                    variant={"h6"}
                    gutterBottom
                  >
                    Home services{" "}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={2}>
              <Card className={cardclass.card}>
                <CardMedia className={cardclass.media} image={scard} />
                <CardContent className={classes.content}>
                  <Typography
                    className={"MuiTypography--heading"}
                    variant={"h6"}
                    gutterBottom
                  >
                    Technology services
                  </Typography>
                </CardContent>
              </Card>{" "}
            </Grid>
          </Grid>
        </Fragment>

        <Fragment>
          <Grid container spacing={3} alignItems="center" justify="center">
            <Grid item md={2}>
              <Card className={cardclass.card}>
                <CardMedia className={cardclass.media} image={tcard} />
                <CardContent className={classes.content}>
                  <Typography
                    className={"MuiTypography--heading"}
                    variant={"h6"}
                    gutterBottom
                  >
                    Tailors
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={2}>
              <Card className={cardclass.card} xs={3}>
                <CardMedia className={cardclass.media} image={barbercard} />
                <CardContent className={classes.content}>
                  <Typography
                    className={"MuiTypography--heading"}
                    variant={"h6"}
                    gutterBottom
                  >
                    Barber
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={2}>
              <Card className={cardclass.card}>
                <CardMedia className={cardclass.media} image={nailsalon} />
                <CardContent className={classes.content}>
                  <Typography
                    className={"MuiTypography--heading"}
                    variant={"h6"}
                    gutterBottom
                  >
                    Nail Technician{" "}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item md={2}>
              <Card className={cardclass.card}>
                <CardMedia className={cardclass.media} image={delivery} />
                <CardContent className={classes.content}>
                  <Typography
                    className={"MuiTypography--heading"}
                    variant={"h6"}
                    gutterBottom
                  >
                    delivery
                  </Typography>
                </CardContent>
              </Card>{" "}
            </Grid>
          </Grid>
        </Fragment>
      </div>

      <div>
        <Divider light variant="fullWidth" />
        <Footer></Footer>
      </div>
    </div>
  );
}
