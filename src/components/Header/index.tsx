import {
  AppBar,
  Badge,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  More as MoreIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  AccountCircle,
} from "@material-ui/icons";
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import React, {useEffect, useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // search Bar
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
    // search icon
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    // input field
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
    // Flex grow
    grow: {
      flexGrow: 1,
    },
  })
);
type Props={
  movies:any
  setMovies:any
}
const Header: React.FC<Props> = (props) => {
  const styles = useStyles();
const [inputVal, setInputVal] = useState<string>('')

// function takes in a string and filters the movie array with it
const updateMovies = (search: string)=>{
  setInputVal(search )
  props.setMovies(props.movies.filter((movie:any) => movie.title.toLowerCase().includes(search)))
}


  return (
    <div className={styles.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Our Movie Store
          </Typography>
          <div className={styles.search} onSubmit={e=>e.preventDefault()}>
            <div className={styles.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              classes={{
                root: styles.inputRoot,
                input: styles.inputInput,
              }}
              onChange={(e) =>updateMovies(e.target.value)}
              value={inputVal}
            />
          </div>
          <div className={styles.grow} />
          <div>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div>
            <IconButton
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
