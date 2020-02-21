import React from 'react';
import { Add as AddIcon, ArrowBackIos as ArrowBackIosIcon } from '@material-ui/icons';
import { IconButton, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const styles = makeStyles({
  toolbar: {
    justifyContent: 'flex-end',
  },
  toolbarBack: {
    justifyContent: 'flex-start',
  }
});

function Header({ type }) {
  const addin = type === "add" ? <AddIcon /> : type === "back" ? <ArrowBackIosIcon /> : <div />;
  const classes = styles();

  const dest = type === "add" ? "/add" : "/";

  return (
    <AppBar>
      <Toolbar className={type === "add" ? classes.toolbar : classes.toolbarBack}>
        <IconButton id={`testbutton-${type}`} component={Link} to={dest} color="inherit">
          {addin}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
