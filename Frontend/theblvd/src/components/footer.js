import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    border: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",

    background: "ivory",
    marginTop: theme.spacing(15),
    padding: theme.spacing(5),
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={"classes.root"}>
      <Box bg="blue_900" color="blue_100" _hover={{ background: "pink" }}>
        {" "}
        <Container
          maxWidth="sm"
          as={Grid}
          minHeight="calc(100vh - 10rem)"
          alignContent="center"
          alignItems="center"
        >
          <Typography
            component="div"
            style={{
              backgroundColor: "#cfe8fc",
              height: "70vh",
              width: "40vh",
            }}
          >
            {" "}
            Avail fejkfe
          </Typography>
        </Container>
      </Box>
    </div>
  );
}
