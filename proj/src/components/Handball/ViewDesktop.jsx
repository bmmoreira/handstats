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

 /**
   * Handles click events on the field view.
   *
   * @param {Event} event - The click event.
   * @returns {void}
   */
 const handleFieldClick = (event) => {
  if (appState.playerActive === 0) {
    appDispatch({
      type: "flashMessages",
      value: "Please Select a Player First!",
    });
   return
  } else {
    // Get the target element that was clicked
    const target = event.target;
    let message = `Area out of play clicked! ID: ${target.id}`;

    // You can now inspect the target element to determine which specific item was clicked
    if (target.tagName === "path") {
      // If a path (representing an attack area) was clicked
      const areaId = target.id;
      message = `Attack area clicked! ID: ${areaId}`;
      appDispatch({ 
        type: "setShootingFrom", 
        value: areaId,
      });

    } else if (target.tagName === "rect") {
      const rectId = target.id; // Get the ID of the rectangle
      // If goal rectangle was clicked
      if(appState.shotFrom == ""){
        message = `No Area Shoting from defined!`;
      } else {
        message = `Goal rectangle clicked! ID: ${rectId}`;
        appDispatch({ 
          type: "setShootingEnd", 
          value: rectId,
          dialogValue: true,
        });
      }
     
    } else if (target.tagName === "polygon") {
      // If a rectangle was clicked
      const polygonId = target.id; // Get the ID of the rectangle
      message = `Miss polygon area clicked! ID: ${polygonId}`;
    }
    console.log(message);
    appDispatch({
      type: "flashMessages",
      value: message,
    });
  }
};

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
                      <FieldView fieldClick={handleFieldClick} />
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
