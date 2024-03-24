import React, { useContext, useEffect, useState } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import Grid from "@mui/material/Grid";
import { Fab, Skeleton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { theme, themeButtonPlayers } from '../Utils/Themes'
import Box from "@mui/material/Box";
import PlayersOnBench from "./PlayersOnBench";
import PlayersOnField from "./PlayersOnField";
import { use } from "i18next";

function PlayerSelection() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  const [benchPlayers, setBenchPlayers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [fieldPlayers, setFieldPlayers] = useState([
    { id: "4", name: "Player 4" },
    { id: "5", name: "Player 5" },
    { id: "6", name: "Player 6" }
  ]);

  

  /**
   * State to keep track of selected players.
   * @type {string[]}
   */
  const [selectedPlayersBench, setSelectedPlayersBench] = useState([]);
  const [playersOnBench, setPlayersOnBench] = useState(appState.playersOnBench);
  const [playersOnField, setPlayersOnField] = useState([]);
  const [selectedPlayersField, setSelectedPlayersField] = useState([]);

  /**
   * Toggles the selection state of a player.
   * @param {number} playerNumber - The number of the player to toggle.
   * @returns {void}
   */
  const togglePlayerSelectionOnBench = (playerNumber) => {
    if (selectedPlayersBench.includes(playerNumber)) {
      /*
        If the player name is already in the selectedPlayers array, 
        it means the player is currently selected. In this case, 
        it filters out the player name from the selectedPlayers array using filter, 
        effectively deselecting the player.
        In JavaScript, the filter() function is an array method used to create a new 
        array with all elements that pass a certain test provided by a callback function
        In our case it will create a new array with all elements that are 
        different from the playerNumber selected
       */
        setSelectedPlayersBench(
        selectedPlayersBench.filter((value) => value !== playerNumber)
      );
    } else {
      /*
        If the player name is not in the selectedPlayers array, 
        it means the player is not currently selected. In this case, 
        it adds the player number to the selectedPlayers array using the spread operator ..., 
        effectively selecting the player.
        */
      setSelectedPlayersBench([...selectedPlayersBench, playerNumber]);
    }
    console.log('PlayerSelection '+ selectedPlayersBench);
  };

  /**
   * Toggles the selection state of a player.
   * @param {number} playerNumber - The number of the player to toggle.
   * @returns {void}
   */
  const togglePlayerSelectionField = (playerNumber) => {
    if (selectedPlayersField.includes(playerNumber)) {
        setSelectedPlayersField(
        selectedPlayersField.filter((value) => value !== playerNumber)
      );
    } else {
      setSelectedPlayersField([...selectedPlayersField, playerNumber]);
    }
    
  };


 
/**
 * Moves selected players from bench to field.
 * 
 * @param {number[]} arrayBenchSelected - Array of selected player numbers from the bench.
 * @param {number[]} arrayBench - Array representing players currently on the bench.
 * @param {number[]} arrayField - Array representing players currently on the field.
 * @returns {boolean} - True if the operation was successful, otherwise false.
 */
function moveToField(arrayBenchSelected, arrayBench, arrayField) {
  // Iterate through selected players on the bench
  arrayBenchSelected.forEach((playerNumber) => {
    console.log("iterating player: " + playerNumber);

    // Check if the player is already on the field
    if (arrayBench.includes(playerNumber)) {
      // If player is already on field, return false
      return false;
    } else {
      /*
       * If the player name is not in the selectedPlayers array, 
       * it means the player is not currently selected. In this case, 
       * it adds the player name to the selectedPlayers array using the spread operator ..., 
       * effectively selecting the player.
       */
      console.log("add player to field array: " + playerNumber);

      // Add player to field array
      setPlayersOnField([...arrayBench, playerNumber]);

      // Remove player from bench array
      setPlayersOnBench(arrayField.filter((value) => value !== playerNumber));

      // Clear selected players from bench
      setSelectedPlayersBench([]);
    }
  });
  
  // Return true indicating successful operation
  return true;
}

  function moveToBench() {
    selectedPlayersField.forEach((playerNumber) => {

      if (playersOnBench.includes(playerNumber)) {
        console.log("player already in playersOnBench array: " + playerNumber);
      } else {
         setPlayersOnBench([...playersOnBench, playerNumber]);
         setPlayersOnField(
          playersOnField.filter((value) => value !== playerNumber)
        );
      }
    });
  }

  function selectPlayerOnField(playerNumber) {
    console.log("clicked Active: " + playerNumber);
    togglePlayerSelectionField(playerNumber);
    appDispatch({ type: "turnOffActionsView"}); 
    appDispatch({ type: "playerActive", value: playerNumber });
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

   useEffect(() => {
    console.log("Number of players on the Field Changed! " + playersOnField);
  }, [playersOnField]); 



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
            <Box
              height={150}
              width={150}
              my={4}
              display={"justify"}
              alignItems="center"
              p={2}
              sx={{
                backgroundColor: "darkgrey",
                border: "5px solid grey",
                borderRadius: "20px",
                opacity: 0.6,
                margin: "15px 5px 5px 40px",
              }}
            >
              <div className="row d-flex">
                <Fab>
                  <AddIcon sx={{ color: "orange" }} />
                </Fab>
              </div>
            </Box>
          </div>
          <div className="flex-item">
            <div className="row">
              {/* Players on Bench*/}
              <PlayersOnBench 
                togglePlayerSelection={togglePlayerSelectionOnBench} 
                playersBenchList={benchPlayers}
                selectedPlayersBenchList={selectedPlayersBench}
                />
            </div>
          </div>
          <div className="flex-item">
            <div className="row">
              <Box
                height={50}
                width={100}
                display={"justify"}
                p={1}
                sx={{
                  backgroundColor: appState.colors.secondaryColor,
                  color: "white",
                  border: "2px solid grey",
                  borderRadius: "20px",
                 
                }}
              >
                <h4>BENCH</h4>
              </Box>
            </div>
            <div className="row-2 d-flex justify-content-center">
              <Button
                variant="dark"
                size="sm"
                onClick={() => {
                  console.log("arrow down clicked: " + selectedPlayersField);
                  moveToBench();
                }}
              >
                <ArrowDropUpIcon />
              </Button>
              <Button
                variant="dark"
                size="sm"
                onClick={() => {
                  console.log("Arrow down clicked: " + selectedPlayersBench);
                  moveToField(selectedPlayersBench,playersOnBench,playersOnField)? 
                  console.log("player added to field array") :
                  console.log("player already in playersOnBench array: " + playerNumber);
                  //appDispatch({ type: "playersOnField", value: player.number });
                }}
              >
                <ArrowDropDownIcon />
              </Button>
            </div>
            <div className="row">
              <Box
                height={50}
                width={100}
                display={"justify"}
                p={1}
                sx={{
                  backgroundColor: appState.colors.secondaryColor,
                  color: "white",
                  border: "2px solid grey",
                  borderRadius: "20px",
                  margin: "10px 0 5px 300px",
                }}
              >
                <h4>FIELD</h4>
              </Box>
            </div>
            <div className="row">
           

                <PlayersOnField selectPlayerOnField={selectPlayerOnField} playersOnField={playersOnField}/>
                 
             
            </div>
          </div>
        </div>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default PlayerSelection;
