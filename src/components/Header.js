import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AccountBalanceWalletRoundedIcon from "@material-ui/icons/AccountBalanceWalletRounded";
import ContactsRoundedIcon from "@material-ui/icons/ContactsRounded";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";
import "../styles/navbar.css"
// import React, { useState } from "react";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#EE9A4D",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "3.73rem",
  },
  goDown: {
    color: "#EE9A4D",
    fontSize: "4rem",
  },
  HomeIcon: {
    margin: "4px",
    color: "#fff",
    fontSize: "2rem",
  },
  tourPackIcon: {
    margin: "4px",
    color: "#fff",
    fontSize: "2rem",
  },
  contactIcon: {
    margin: "4px",
    color: "#fff",
    fontSize: "2rem",
  },
 
}));
export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            ARC<span className={classes.colorText}>Tourism.</span>
          </h1>
          <button className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
          <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }>
      <ul>
          <li><a><IconButton>
            <HomeRoundedIcon className={classes.HomeIcon}></HomeRoundedIcon>
          </IconButton></a></li>
          <li><a> <IconButton>
            <AccountBalanceWalletRoundedIcon
              className={classes.tourPackIcon}
            ></AccountBalanceWalletRoundedIcon>
          </IconButton></a></li>
          <li><a><IconButton>
            <ContactsRoundedIcon
              className={classes.contactIcon}
            ></ContactsRoundedIcon>
          </IconButton></a></li>
         <li><a><IconButton>
            <SortIcon className={classes.icon}></SortIcon>
          </IconButton></a></li>
          </ul>
          </div>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            ARC<span className={classes.colorText}>Tourism.</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
