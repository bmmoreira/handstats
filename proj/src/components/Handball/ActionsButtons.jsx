import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import SimCardAlertIcon from "@mui/icons-material/SimCardAlert";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from "@mui/material/Box";


function ActionsButtons() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  const theme = createTheme({
    components: {
      MuiButton: {  
        styleOverrides: {
          root: {
            width: '120px',
            backgroundColor: appState.colors.quaternaryColor, 
            '&:hover': {
              backgroundColor: '#ffe66d',
              color: '#ff0000', 
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',         
            },
            borderRadius: '18px', 
            padding: '12px 24px', 
            fontWeight: 'bold', 
            fontSize: '12px', 
            textTransform: 'uppercase', 
          },
        },
      },
    },
  });

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
             }}
           >
      <div
        className="flex-item"
        
      >
          
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
      </Box>
      </ThemeProvider>
    </>
  );
}

export default ActionsButtons;
