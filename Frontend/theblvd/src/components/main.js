import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import tail from "./static/tail.png";
import beaut from "./static/beaut.png";
import event from "./static/event.png";
import home from "./static/home.png";
import more from "./static/more.png";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  button: {
    margin: theme.spacing(3),
    height: "8vh",
    marginTop: theme.spacing(3),
    padding: theme.spacing(1),
    textAlign: "center",
    position: "relative",
  },

  new: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: theme.spacing(80),
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: "2px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CenteredGrid() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.new}>
      <ButtonGroup color="primary" aria-label="text primary button group">
        <div>
          <Button
            color="secondary"
            variant="contained"
            className={classes.button}
            aria-controls="customized-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            tailor <img src={tail} alt="{}" />
          </Button>

          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem>
              <ListItemText primary="Sent mail" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemText primary="Drafts" />
            </StyledMenuItem>
            <StyledMenuItem>
              <ListItemText primary="Inbox" />
            </StyledMenuItem>
          </StyledMenu>
        </div>

        <Button
          color="secondary"
          variant="contained"
          className={classes.button}
          aria-controls="customized-menu"
          aria-haspopup="true"
        >
          beauty <img src={beaut} alt="{}" />
        </Button>

        <Button
          color="secondary"
          variant="contained"
          className={classes.button}
        >
          event <img src={event} alt="{}" />
        </Button>

        <Button
          color="secondary"
          variant="contained"
          className={classes.button}
        >
          home-services <img src={home} alt="{}" />
        </Button>

        <Button
          color="secondary"
          variant="contained"
          className={classes.button}
        >
          more <img src={more} alt="{}" />
        </Button>
      </ButtonGroup>
    </div>
  );
}
