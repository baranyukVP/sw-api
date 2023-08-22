import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

export const Header_TestId = 'Header_TestId';

export const Header = () => (
  <AppBar position="sticky" data-testid={Header_TestId}>
    <Toolbar>
      <Link to="/">
        <Typography variant="h4">Star Wars</Typography>
      </Link>
    </Toolbar>
  </AppBar>
);
