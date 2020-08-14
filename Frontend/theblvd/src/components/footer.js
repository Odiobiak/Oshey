import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Grid, Row, Col, Stack } from "react-flexbox-grid";
import { Paper, List } from "@material-ui/core";
import question from "./static/question.png";
import africa from "./static/africa.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "left",
  },

  footer: {
    backgroundColor: "turquoise",
    height: "28vh",

    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "blue",
    minHeight: "calc(100vh - 10rem)",
    background: "blue",
  },

  image: {
    display: "flex",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    paddingTop: "30%",
  },

  photo: {
    height: "300px",
    width: "300px",
  },

  rows: {
    display: "flex",
    backgroundRepeat: "no-repeat",
    background: "red",
    padding: theme.spacing(1),
    marginTop: theme.spacing(7),
    padding: theme.spacing(1),
    textAlign: "center",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "90vh",
    width: "100vh",
  },

  new: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "turquoise",
    marginTop: theme.spacing(3),
    height: "55vh",
    padding: theme.spacing(2),
  },

  country: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: theme.spacing(3),
    height: "45vh",
    padding: theme.spacing(2),
  },

  business: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: theme.spacing(3),
    height: "28vh",
    padding: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(3),
    height: "4vh",
    marginTop: theme.spacing(3),
    padding: theme.spacing(1),
    textAlign: "center",
    background: "slategray",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.country}>
        <Container>
          <Grid item xs={12}>
            <Typography variant={"h2"} align="center" gutterBottom>
              We are coming to...{" "}
            </Typography>
            <Row>
              <Col xs={5} xsOffset={1}>
                <img className={classes.photo} src={africa} alt=""></img>
              </Col>
              <Col xs={5}>
                <List className={classes.root}>
                  <Typography
                    className={"MuiTypography--heading"}
                    variant={"h6"}
                    color="blue"
                    gutterBottom
                  >
                    South-Africa{" "}
                  </Typography>

                  <Typography
                    className={"MuiTypography--heading"}
                    variant={"h6"}
                    gutterBottom
                  >
                    Kenya{" "}
                  </Typography>

                  <Typography
                    className={"MuiTypography--heading"}
                    variant={"h6"}
                    gutterBottom
                  >
                    Angola{" "}
                  </Typography>
                </List>
              </Col>
            </Row>
          </Grid>
        </Container>
      </div>

      <div className={classes.new}>
        <Container>
          <Grid item xs={12}>
            <Typography variant={"h2"} align="center" gutterBottom>
              How Thanks! works{" "}
            </Typography>
            <Row>
              <Col xs={5}>
                <List className={classes.root}>
                  <Typography
                    className={"MuiTypography--heading"}
                    variant={"h6"}
                    color="blue"
                    gutterBottom
                  >
                    1. Tell us what you need{" "}
                  </Typography>
                  <Typography
                    className={"MuiTypography--subheading"}
                    variant={"caption"}
                  >
                    Answer a few questions about what services you’re looking
                    for.
                  </Typography>

                  <Typography
                    className={"MuiTypography--heading"}
                    variant={"h6"}
                    gutterBottom
                  >
                    2. Get free quotes{" "}
                  </Typography>
                  <Typography
                    className={"MuiTypography--subheading"}
                    variant={"caption"}
                  >
                    Within hours, you'll receive up to 5 introductions to
                    vendors based on your specific needs.
                  </Typography>

                  <Typography
                    className={"MuiTypography--heading"}
                    variant={"h6"}
                    gutterBottom
                  >
                    3. Hire the right vendor{" "}
                  </Typography>
                  <Typography
                    className={"MuiTypography--subheading"}
                    variant={"caption"}
                  >
                    When you're ready, compare vendors and their reviews then
                    hire the one that's right for you.
                  </Typography>
                </List>
              </Col>
              <Col xs={5} xsOffset={1}>
                <img src={question} alt="" className={classes.image}></img>
              </Col>
            </Row>
          </Grid>
        </Container>
      </div>

      <div className={classes.business}>
        <Container>
          <Grid item xs={12}>
            <Typography variant={"h4"} align="center" gutterBottom>
              Thousands of professionals are growing their businesses with
              Thanks!{" "}
            </Typography>
            <Typography variant={"h6"} align="center">
              Are you a professional looking for new customers? or do you have
              your own business? Sign up today!
            </Typography>{" "}
            <div className={classes.button}>
              <Button color="inherit">SignUp</Button>
            </div>
          </Grid>
        </Container>
      </div>

      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            what to do{" "}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            how to do shit
            {"Copyright © "}{" "}
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
