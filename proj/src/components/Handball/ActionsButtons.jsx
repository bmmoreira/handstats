import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import SimCardAlertIcon from "@mui/icons-material/SimCardAlert";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";

function ActionsButtons() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  return (
    <>
      <div
        className="flex-item"
        style={{ backgroundColor: appState.colors.secondaryColor, flex: "1"}}
      >
        <div className="container">
          <div className="row">
            <div className="col">Jogador {appState.playerActive}</div>
          </div>

          <div className="row">
            <div className="col">
              <ButtonGroup
                variant="contained"
                aria-label="actions group"
                orientation="horizontal"
              >
                <Button
                  loadingposition="start"
                  startIcon={<SimCardAlertIcon />}
                  onClick={() => {
                    appDispatch({ type: "turnOffActionsView"});  
                    appDispatch({ type: "isVisibleSanctionButtons", value: true }); 
                  } } 
                >
                  Sanctions
                </Button>
                <Button
                  loadingposition="start"
                  startIcon={<SportsKabaddiIcon />}
                  onClick={() => {
                    appDispatch({ type: "turnOffActionsView"}); 
                    appDispatch({ type: "isVisibleDefenseButtons", value: true }); 
                  } } 
                >
                  Defense
                </Button>
                <Button
                  loadingposition="start"
                  startIcon={<SportsHandballIcon />}
                  onClick={() => {
                    appDispatch({ type: "turnOffActionsView"}); 
                    appDispatch({ type: "isVisibleAttackButtons", value: true }); 
                  } } 
                >
                  Attack
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActionsButtons;
