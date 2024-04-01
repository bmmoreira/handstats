import React, { useContext, useEffect, useState } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { theme, themeButtonPlayers } from "../Utils/Themes";
import Box from "@mui/material/Box";
import PlayersOnBench from "./PlayersOnBench";
import PlayersOnField from "./PlayersOnField";
import { use } from "i18next";

function PlayerSelection() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

 


  function moveToField() {
    console.log("move to field: " + appState.playerActive);
    if(appState.playerList.filter((player) => player.state.includes("F")).length >= 7 ){
      console.log("Active player limite reached");
      appDispatch({ type: "flashMessages", value: "You can only have 7 players on the field!" });
      return;
    }
   
    const playerNumber = appState.playerActive;
    if (appState.playerActive != 0) {
      // Create a new player list where the state of the selected player is altered
      const newPlayerList = appState.playerList.map((player) => {
        console.log(playerNumber + " - " + player.number);
        if (player.number == playerNumber) {
          // Alter the state of the selected player
          console.log("PlayerSelection - move to bench: " + playerNumber);
          return { ...player, state: "F" };
        } else {
          return player;
        }
      });

      // Dispatch an action to update the player list in the state
      // this action also set the playerActive to 0, so the button you no longer be highlighted
      appDispatch({ type: "updatePlayerList", value: newPlayerList });
    }
    appDispatch({ type: "updatePlayerSelected", value: [] });
  }

  function moveToBench() {
    console.log("move to bench: " + appState.playerActive);
    const playerNumber = appState.playerActive;
    if (appState.playerActive != 0) {
      // Create a new player list where the state of the selected player is altered
      const newPlayerList = appState.playerList.map((player) => {
        console.log(playerNumber + " - " + player.number);
        if (player.number == playerNumber) {
          // Alter the state of the selected player
          console.log("PlayerSelection - move to bench: " + playerNumber);
          return { ...player, state: "B" };
        } else {
          return player;
        }
      });

      // Dispatch an action to update the player list in the state
      // this action also set the playerActive to 0, so the button you no longer be highlighted
      appDispatch({ type: "updatePlayerList", value: newPlayerList });
    }
    appDispatch({ type: "updatePlayerSelected", value: [] });
  }

  function togglePlayerSelection(playerNumber) {
   
    // If the player is not already in selected player list, add them to the selected players
    if (!appState.playersSelected.includes(playerNumber)) {
      console.log("including player to playersSelected array: " + playerNumber);
      const newPlayerSelected = [...appState.playersSelected, playerNumber];
      appDispatch({ type: "updatePlayerSelected", value: newPlayerSelected });
      appDispatch({ type: "updatePlayerActive", value: playerNumber });
    } else {
      // If the player is already selected, remove them from the selected players
      console.log("removing player to playersSelected array: " + playerNumber);
      const newPlayerSelected = appState.playersSelected.filter(
        (value) => value !== playerNumber
      );
      appDispatch({ type: "updatePlayerSelected", value: newPlayerSelected });
      appDispatch({ type: "updatePlayerActive", value: 0 });
    }
  }

  /**
   * This function retrieves the data for a specific player.
   *
   * @param {number} playerNumber - The name of the player whose data is to be retrieved.
   * @returns {Object} The data of the player, or undefined if no player with the given name is found.
   */
  const getPlayerData = (playerNumber) => {
    return appState.playersList.find((p) => p.number === playerNumber);
  };



  return (
    <>
      <ThemeProvider theme={themeButtonPlayers}>
        <Box
          sx={{
            backgroundColor: appState.colors.primaryColor,
            border: "2px solid grey",
            borderRadius: "20px",
            padding: "10px",
            margin: "10px 0 10px 0",
          }}
        >
          <div className="flex-container">
            
            <div className="flex-item">
              <div className="row">
                {/* Players on Bench*/}
                <PlayersOnBench
                 togglePlayer={togglePlayerSelection}
                />
              </div>
            </div>
            <div className="flex-item">
             
              <div className="row-2 d-flex justify-content-center">
                <Button variant="dark" size="sm" onClick={()=>{
                  moveToBench();
                }}>
                  <ArrowDropUpIcon />
                </Button>
                <Button
                  variant="dark"
                  size="sm"
                  onClick={() => {
                    moveToField();
                  }}
                >
                  <ArrowDropDownIcon />
                </Button>
              </div>
           
              <div className="row">
                <PlayersOnField togglePlayer={togglePlayerSelection} />
              </div>
            </div>
          </div>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default PlayerSelection;
