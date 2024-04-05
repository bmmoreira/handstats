import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import ActionButtonsMobile from "./ActionsButtonsMobile";

import { ThemeProvider } from "@mui/material/styles";
import { themeButtonPlayers } from "../Utils/Themes";
import { HandballField } from "./HandballField";
import "./viewmobile.css";
import TimeCounter from "./TimeCounter";
import PlayersOnFieldMobile from "./PlayersOnFieldMobile";
import PlayersOnBenchMobile from "./PlayersOnBenchMobile";

function ViewMobile(props) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);



  return (
    <>
   
        {/* main content */}
        <div className="row middle-row gx-0">
          <div className="col">
                <div className="row d-flex justify-content-center">
                <ThemeProvider theme={themeButtonPlayers}>
                <div className="iPhone" style={{width: '100%', height: '100%', margin: '0', padding: '0'}}>
                <div className="col" >
                <div className="row gx-0"  style={{backgroundColor: 'brown'}}>
                <TimeCounter/>
               </div>   
                <div className="row gx-0"  style={{backgroundColor: 'green'}}>
                <HandballField/>
               </div>
                <div className="row gx-0" style={{backgroundColor: 'yellow', height: '105px'}}><ActionButtonsMobile/></div>
                <div className="row gx-0" style={{backgroundColor: 'blue', }}><PlayersOnFieldMobile/></div>
                {/* <div className="row gx-0" style={{backgroundColor: 'blue', }}><PlayersOnBenchMobile/></div> */}
                
                </div>
                </div>
                </ThemeProvider>
                </div>
          </div>
        </div>
    
    </>
  );
}

export default ViewMobile;