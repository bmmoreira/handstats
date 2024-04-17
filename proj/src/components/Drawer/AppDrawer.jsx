import React, { useContext } from "react";
import StateContext from "../../StateContext";
import DispatchContext from "../../DispatchContext";
import { useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import MailIcon from "@mui/icons-material/Mail";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import BookIcon from "@mui/icons-material/Book";
import HistoryIcon from "@mui/icons-material/History";
import DownloadIcon from "@mui/icons-material/Download";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import HomeIcon from "@mui/icons-material/Home";
import MapIcon from "@mui/icons-material/Map";
import InfoIcon from "@mui/icons-material/Info";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { defaultColors } from "../Utils/constants";

export default function TemporaryDrawer() {
  const { t } = useTranslation();
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [state, setState] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    appDispatch({
      type: "toggleDrawer",
      value: !appState.drawer,
    });

    setState((prevState) => !prevState);
  };

  function handleLogout() {
    appDispatch({ type: "logout" });
    appDispatch({
      type: "flashMessages",
      value: t("succefully_logout"),
    });
  }

  function showSelectDialog() {
    appDispatch({
      type: "toggleSelectDialog",
      value: true,
    });
    console.log("Select CLICKED!");
  }

  function showHelpDialog() {
    appDispatch({
      type: "toggleHelpDialog",
      value: true,
    });
    console.log("HELP CLICKED!");
  }

  function showSettingsDialog() {
    appDispatch({
      type: "toggleSettingsDialog",
      value: true,
    });
    console.log("Settings CLICKED!");
  }

  const itemsListMap = [
    {
      text: t("home"),
      icon: <HomeIcon />,
      onClick: () => navigate("/"),
      disabled: false,
      route: "all",
    },
    {
      text: t("Handball Game"),
      icon: <MapIcon />,
      onClick: () => navigate("/handball"),
      disabled: false,
      route: "all",
    },
    {
      text: t("Reset Timer"),
      icon: <AccessTimeIcon />,
      onClick: () => {
        setTime(0);
        localStorage.setItem("timer", "0");
      },
      disabled: false,
      route: "all",
    },
    {
      text: t("Timeline"),
      icon: <MapIcon />,
      onClick: () => {

        navigate("/game-timeline");
      }
      ,
      disabled: false,
      route: "all",
    },
    {
      text: t("Statistics"),
      icon: <MapIcon />,
      onClick: () => navigate("/game-statistics"),
      disabled: false,
      route: "all",
    },
    {
      text: t("about"),
      icon: <InfoIcon />,
      onClick: () => navigate("/about"),
      disabled: false,
      route: "all",
    },

    {
      text: t("logout"),
      icon: <LogoutIcon />,
      onClick: () => handleLogout(),
      disabled: false,
      route: "map",
    },
    {
      text: t("help"),
      icon: <HelpIcon />,
      onClick: () => showHelpDialog(),
      disabled: false,
      route: "map",
    },
    {
      text: t("settings"),
      icon: <SettingsIcon />,
      onClick: () => showSettingsDialog(),
      disabled: false,
      route: "map",
    },
  ];

  const itemsList = [
    {
      text: t("home"),
      icon: <HomeIcon />,
      onClick: () => navigate("/"),
      route: "all",
    },
    {
      text: t("Handball Game"),
      icon: <MapIcon />,
      onClick: () => navigate("/handball"),
      route: "all",
    },
    {
      text: t("about"),
      icon: <InfoIcon />,
      onClick: () => navigate("/about"),
      route: "all",
    },

    {
      text: t("logout"),
      icon: <LogoutIcon />,
      onClick: () => handleLogout(),
      route: "map",
    },
  ];

  const list = (anchor) => (
    <>
      <List>
        <ListItem key={"Logout"} disablePadding>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={"Logout"} onClick={handleLogout} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Starred"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Starred"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Help"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary={"Help"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Settings"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={"Settings"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key={"Projects"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary={"Projects"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Timeline"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary={"Timeline"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Download"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <DownloadIcon />
            </ListItemIcon>
            <ListItemText primary={"Download"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key={"Select"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AddLocationAltIcon />
            </ListItemIcon>
            <ListItemText primary={"Select"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Filters"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FilterAltIcon />
            </ListItemIcon>
            <ListItemText primary={"Filters"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"Results"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AutoAwesomeMotionIcon />
            </ListItemIcon>
            <ListItemText primary={"Results"} />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );

  return (
   
      <Drawer
        anchor={"left"}
        open={appState.drawer}
        onClose={toggleDrawer("left", false)}
        
        PaperProps={{
          sx: {
            backgroundColor: defaultColors.terciary,
            color: defaultColors.quaternary,
            
          },
        }}
      >
        <Box
          sx={{ width: 250, backgroundColor: defaultColors.terciary }}
          role="presentation"
          onClick={toggleDrawer("left", false)}
          onKeyDown={toggleDrawer("left", false)}
        >
          {(location.pathname === "/handball" || location.pathname === "/game-timeline" || location.pathname === "/game-statistics") ? (
            <List>
              {itemsListMap.map((item, index) => {
                const { text, icon, onClick, disabled } = item;

                return (
                  <ListItem
                    button
                    key={text}
                    onClick={onClick}
                    disabled={disabled}
                  >
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <List>
              {itemsList.map((item, index) => {
                const { text, icon, onClick } = item;

                return (
                  <ListItem button key={text} onClick={onClick}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                  </ListItem>
                );
              })}
            </List>
          )}
        </Box>
      </Drawer>
    
  );
}
