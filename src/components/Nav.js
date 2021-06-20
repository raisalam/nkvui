import React, { memo } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  withStyles,
  Hidden,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import BookIcon from "@material-ui/icons/Book";
import { connect } from "react-redux";

import { logout } from "../actions/auth";

const styles = (theme) => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
  noDecoration: {
    textDecoration: "none !important",
  },
});

function NavBar(props) {
  const {
    classes,
    openRegisterDialog,
    openLoginDialog,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab,
    isAuthUser,
  } = props;
  const menuItems = [
    {
      link: "/",
      name: "Home",
      icon: <HomeIcon className="text-white" />,
    },
    {
      link: "/blog",
      name: "Blog",
      icon: <BookIcon className="text-white" />,
    },
    {
      link: "/resident",
      name: "resident",
      icon: <BookIcon className="text-white" />,
    },
    {
      name: "Register",
      onClick: openRegisterDialog,
      icon: <HowToRegIcon className="text-white" />,
    },
    {
      name: "Login",
      link: "/login",
      icon: <LockOpenIcon className="text-white" />,
    },
  ];
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div>
          <Typography
            variant="h4"
            className={classes.brandText}
            display="inline"
            color="primary"
          >
            Ra
          </Typography>
          <Typography
            variant="h4"
            className={classes.brandText}
            display="inline"
            color="secondary"
          >
            is
          </Typography>
        </div>

        <div>
          <Hidden mdUp>
            <IconButton
              className={classes.menuButton}
              onClick={handleMobileDrawerOpen}
              aria-label="Open Navigation"
            >
              <MenuIcon color="primary" />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            {menuItems.map((element) => {
              if (element.link) {
                return (
                  <Link
                    key={element.name}
                    to={element.link}
                    className={classes.noDecoration}
                    onClick={handleMobileDrawerClose}
                  >
                    <Button
                      color="secondary"
                      size="large"
                      classes={{ text: classes.menuButtonText }}
                    >
                      {element.name}
                    </Button>
                  </Link>
                );
              }
              return (
                <Button
                  color="secondary"
                  size="large"
                  onClick={element.onClick}
                  classes={{ text: classes.menuButtonText }}
                  key={element.name}
                >
                  {element.name}
                </Button>
              );
            })}
          </Hidden>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default withStyles(styles, { withTheme: true })(memo(NavBar));
