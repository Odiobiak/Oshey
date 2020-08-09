import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import tail from "./static/tail.png";
import beaut from "./static/beaut.png";
import event from "./static/event.png";
import home from "./static/home.png";
import more from "./static/more.png";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Menu from "@material-ui/core/Menu";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    border: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",

    background: "ivory",

    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  button: {
    margin: theme.spacing(3),
    height: "8vh",
    marginTop: theme.spacing(3),
    padding: theme.spacing(1),
    textAlign: "center",
    background: "indianred",

    position: "relative",
  },
}));

const newStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    padding: theme.spacing(1),
    height: "28vh",
    width: "28vh",
  },
}));

export default function Main() {
  const classes = useStyles();
  const newClasses = newStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup color="#841584">
        <div>
          <Link to="/beauty" style={{ textDecoration: "none" }}>
            <Button
              color="secondary"
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
              color="secondary"
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
              color="secondary"
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
              color="secondary"
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
              color="secondary"
              variant="contained"
              className={classes.button}
            >
              more <img src={more} alt="{}" />
            </Button>
          </Link>
        </div>
      </ButtonGroup>

      <div className={newClasses.root}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper className={newClasses.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={newClasses.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={newClasses.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={newClasses.paper}>xs=3</Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
