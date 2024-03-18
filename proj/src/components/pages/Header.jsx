/* import React, { useContext } from 'react';
import StateContext from '../../StateContext';

function Header(props) {
  const appState = useContext(StateContext);

  return (
    <header className="">{appState.loggedIn ? "Logado" : "Não Logado"}</header>
  );
}

export default Header; */

import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import { useLocation } from "react-router-dom";
import HelpIcon from "@mui/icons-material/Help";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { roundedButton, defaultColors } from "../Utils/constants.js";
import appLogo from "../../assets/images/logo_extended.png";


function Header() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  const location = useLocation();

  function showHelpDialog() {
    appDispatch({
      type: "toggleHelpDialog",
      value: true,
    });
    console.log("HELP CLICKED!");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: defaultColors.secondaryColor,
                                color: "white",
                               
                                }}>
        <Toolbar>
          <IconButton
            onClick={() => {
              console.log("Menu Clicked!");
            }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
         <img src={appLogo} alt="Handball is Fun"/>
         
          {(location.pathname === "/") |
          (location.pathname === "/handball") |
          (location.pathname === "/about") ? (
            ""
          ) : (
            <>
              <IconButton
                aria-label="help"
                sx={{ ...roundedButton, marginLeft: "5px" }}
                onClick={showHelpDialog}
              >
                <HelpIcon />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
