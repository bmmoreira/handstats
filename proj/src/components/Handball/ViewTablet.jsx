import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";

import PlayerSelection from "./PlayersSelection";
import StatsView from "./StatsView";
import ActionsButtons from "./ActionsButtons";
import FieldView from "./FieldView";
import { ThemeProvider } from "@mui/material/styles";
import { themeButtonPlayers } from "../Utils/Themes";
import Button from "@mui/material/Button";
import "./handball.css";

function HandballDesktop(props) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);



  return (
    <>
   
        {/* main content */}
        <div className="row middle-row">
          <div className="col">
            <div className="row-content">
              <div className="container">
                <div className="row">
                <ThemeProvider theme={themeButtonPlayers}>
                  {/* Content within the ThemeProvider */}
                
                  {/* First Main Column - Players in Bench and Active */}
                  <div className="col-md-4" style={{ padding: "5px" }}>
                    <PlayerSelection />
                  </div>
                  {/* Second Main Column - Handball Field and Action Button */}
                  <div className="col-md-4" style={{ padding: "5px" }}>
                    <div
                      className="flex-container"
                      style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <FieldView />
                      <ActionsButtons />
                    </div>
                  </div>
                  {/* Third Main Column - TimeCounter, Timeline and Statistcs */}
                  <div className="col-md-4" style={{ padding: "5px" }}>
                    <StatsView />
                  </div>
                  </ThemeProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </>
  );
}

export default HandballDesktop;
