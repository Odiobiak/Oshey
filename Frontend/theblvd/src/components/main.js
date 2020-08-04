import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import set from "./set.jpg";
import til from "./til.png";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  button: {
    margin: theme.spacing(3),
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
          tailor{" "}
        </Button>

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
          tailor{" "}
        </Button>

        <Button
          color="secondary"
          variant="contained"
          className={classes.button}
        >
          tailor{" "}
        </Button>
      </div>
    </div>
  );
}
