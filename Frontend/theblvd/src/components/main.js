import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import set from "./static/set.jpg";
import til from "./static/til.png";
import Button from "@material-ui/core/Button";
import tailor from "./static/tailor.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  button: {
    margin: theme.spacing(5),
    height: "8vh",
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    textAlign: "center",
    position: "relative",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: theme.spacing(80),
  },

  image: {
    backgroundImage: `url(${set})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.image}>
        <Grid item xs={12}></Grid>
      </Grid>

      <div>
        <Button
          color="secondary"
          variant="contained"
          className={classes.button}
        >
          tailor{" "}
        </Button>

        <Button
          color="secondary"
          variant="contained"
          className={classes.button}
        >
          Designer{" "}
        </Button>

        <Button
          color="secondary"
          variant="contained"
          className={classes.button}
        >
          Hair-Extention{" "}
        </Button>

        <Button
          color="secondary"
          variant="contained"
          className={classes.button}
        >
          Make-up Artist{" "}
        </Button>

        <Button
          color="secondary"
          variant="contained"
          className={classes.button}
        >
          and More...{" "}
        </Button>
      </div>
    </div>
  );
}
