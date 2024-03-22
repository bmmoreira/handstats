import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import SimCardAlertIcon from "@mui/icons-material/SimCardAlert";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../Utils/Themes'
import Box from "@mui/material/Box";

const DefenseButtons = [
  { id: 1, name: "Sanctions", icon: <SimCardAlertIcon/> },
  { id: 2, name: "Defense", icon: <SportsKabaddiIcon/> },
  { id: 3, name: "Attack", icon: <SportsHandballIcon /> },
];

function ActionsButtons() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  const onClickTypeActionButton = (type) => {
    appDispatch({ type: "turnOffActionsView"});  
    appDispatch({ type: type, value: true }); 
  }

  return (
    <>
    <ThemeProvider theme={theme}>
    <Box          
      sx={{
      backgroundColor: appState.colors.primaryColor,
      border: "2px solid grey",
      borderRadius: "20px",
      padding: "10px",
      margin: "0px 0 10px 0",
      flex: "1"
      }}>
      <div className="flex-item">
        <div className="container">
          <div className="row">
            <div className="col">{appState.playerActive != 0 ? `Jogador ${appState.playerActive}` : 'No Player Selected'}</div>
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
                    onClickTypeActionButton("isVisibleSanctionButtons");
                  } } 
                >
                  Sanctions
                </Button>
                <Button
                  loadingposition="start"
                  startIcon={<SportsKabaddiIcon />}
                  onClick={() => {
                    onClickTypeActionButton("isVisibleDefenseButtons");
                  } } 
                >
                  Defense
                </Button>
                <Button
                  loadingposition="start"
                  startIcon={<SportsHandballIcon />}
                  onClick={() => {
                    onClickTypeActionButton("isVisibleAttackButtons");
                  } } 
                >
                  Attack
                </Button>
              </ButtonGroup>
              
            </div>
          </div>
        </div>
        
      </div>
      </Box>
      </ThemeProvider>
    </>
  );
}

export default ActionsButtons;
