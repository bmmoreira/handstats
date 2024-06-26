import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import IconButton from "@mui/material/IconButton";
import SportsIcon from '@mui/icons-material/Sports';
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import LoopIcon from '@mui/icons-material/Loop';
import SimCardAlertIcon from "@mui/icons-material/SimCardAlert";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import { ThemeProvider } from "@mui/material/styles";
import { actionButtons } from "../Utils/Themes";

const DefenseButtons = [
  { id: 1, name: "Sanctions", icon: <SimCardAlertIcon /> },
  { id: 2, name: "Defense", icon: <SportsKabaddiIcon /> },
  { id: 3, name: "Attack", icon: <SportsHandballIcon /> },
];

function ActionsButtons(props) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  const onClickTypeActionButton = (type) => {
    if (appState.playerActive === 0) {
      appDispatch({
        type: "flashMessages",
        value: "Please Select a Player First!",
      });
    } else {
      appDispatch({ type: "turnOffActionsView" });
      appDispatch({ type: type, value: true });
    }
  };

  const toggleDrawer = () => {
    // Toggle the value of drawerBottom
    const newValue = !appState.drawerBottom;
    appDispatch({ type: "toggleDrawerBottom", value: newValue });
  };

  return (
    <>
      <ThemeProvider theme={actionButtons}>
        <div className="flex-item">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <IconButton
                onClick={() => {
                  props.toggleDrawer(true);
                  console.log("clicked drawer 2");
                }}
              >
                <LoopIcon style={{ fontSize: 50 }} />
              </IconButton>

              <IconButton
                onClick={() => {
                  onClickTypeActionButton("isVisibleSanctionButtons");
                }}
              >
                <SportsIcon style={{ fontSize: 50 }} />
              </IconButton>

              <IconButton
                onClick={() => {
                  onClickTypeActionButton("isVisibleDefenseButtons");
                }}
              >
                <SportsKabaddiIcon style={{ fontSize: 50 }} />
              </IconButton>

              <IconButton
                onClick={() => {
                  onClickTypeActionButton("isVisibleAttackButtons");
                }}
              >
                <SportsHandballIcon style={{ fontSize: 50 }} />
              </IconButton>
            
            
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default ActionsButtons;
