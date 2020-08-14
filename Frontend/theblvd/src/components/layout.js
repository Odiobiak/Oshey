import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TypoGraphy from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import set from "./static/set.jpg";
import Main from "./main";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Beauty from "../pages/beauty";
import { ButtonGroup } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "slategray",
    backgroundColor: "turquoise",
  },

  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
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
    height: "90vh",
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  grow: {
    alignItems: "right",
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      {/**Using materia-ui to create the header! */}
      <AppBar className={classes.root} position="relative">
        <Toolbar>
          <TypoGraphy variant="h6" className={classes.title}>
            <Button color="inherit" edge="start">
              <h1>Thanks!</h1>
            </Button>
          </TypoGraphy>

          <ButtonGroup variant="text" aria-label="text primary button group">
            <Button color="inherit">Business Owners</Button>
            <Button color="inherit">Login</Button>
            <Button color="inherit">SignUp</Button>
          </ButtonGroup>

          {/**Search button! */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>

      <div>
        <Grid className={classes.image}>
          <Grid item xs={12}></Grid>
        </Grid>
      </div>

      <div>
        <Main></Main>
      </div>
    </div>
  );
}
