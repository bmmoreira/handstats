import React, { useContext, useEffect, useState } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Fab, Skeleton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { borderRadius, color, textAlign } from "@mui/system";
import { grey } from "@mui/material/colors";

function PlayerSelection() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  /**
   * State to keep track of selected players.
   * @type {string[]}
   */
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [playersOnBench, setPlayersOnBench] = useState([]);

  /**
   * Toggles the selection state of a player.
   * @param {string} playerName - The name of the player to toggle.
   * @returns {void}
   */
  const togglePlayerSelection = (player) => {
    if (selectedPlayers.includes(player.name)) {
      /*
        If the player name is already in the selectedPlayers array, 
        it means the player is currently selected. In this case, 
        it filters out the player name from the selectedPlayers array using filter, 
        effectively deselecting the player.
       */
      setSelectedPlayers(
        selectedPlayers.filter((name) => name !== player.name)
      );
    } else {
      /*
        If the player name is not in the selectedPlayers array, 
        it means the player is not currently selected. In this case, 
        it adds the player name to the selectedPlayers array using the spread operator ..., 
        effectively selecting the player.
        */
      setSelectedPlayers([...selectedPlayers, player.name]);
    }
    console.log(selectedPlayers);
  };

  /**
   * State to keep track of selected players.
   * @type {string[]}
   */
  const [selectedRemovePlayers, setSelectedRemovePlayers] = useState([]);

  /**
   * Toggles the selection state of a player.
   * @param {string} playerName - The name of the player to toggle.
   * @returns {void}
   */
  const togglePlayerRemoveSelection = (player) => {
    if (selectedRemovePlayers.includes(player)) {
      /*
      If the player name is already in the selectedPlayers array, 
      it means the player is currently selected. In this case, 
      it filters out the player name from the selectedPlayers array using filter, 
      effectively deselecting the player.
     */
      setSelectedRemovePlayers(
        selectedRemovePlayers.filter((name) => name !== player)
      );
    } else {
      /*
      If the player name is not in the selectedPlayers array, 
      it means the player is not currently selected. In this case, 
      it adds the player name to the selectedPlayers array using the spread operator ..., 
      effectively selecting the player.
      */
      setSelectedRemovePlayers([...selectedRemovePlayers, player]);
    }
    console.log(selectedRemovePlayers);
  };

  const togglePlayerActive = (player) => {
    appDispatch({ type: "playersActive", value: player });
  };

  /**
   * State to keep track of active players.
   * @type {Set<Object>} playerSet
   */
  const [activePlayers, setActivePlayers] = useState([]);

  function moveToActive(playerSet, playerList) {
    console.log("playerList: " + playerList);
    playerList.forEach((player) => {
      console.log("player: " + player);
      if (activePlayers.includes(player)) {
        console.log("player already in activePlayers: " + player);
      } else {
        /*
         If the player name is not in the selectedPlayers array, 
         it means the player is not currently selected. In this case, 
         it adds the player name to the selectedPlayers array using the spread operator ..., 
         effectively selecting the player.
        */
        setActivePlayers([...activePlayers, player]);
        setPlayersOnBench([...playersOnBench], player.number);
      }
    });
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
    console.log("active players: " + activePlayers);
  }, [activePlayers]);

  return (
    <>
      <div className="col-md-4" style={{ backgroundColor: "darkblue" }}>
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
              <Box
                display={"flex"}
                sx={{
                  backgroundColor: "#383838",
                  color: "white",
                  border: "2px solid grey",
                  borderRadius: "20px",
                  textAlign: "left",
                  margin: "5px 0",
                }}
              >
                <Grid container spacing={0}>
                  {appState.playersList.map((player, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Button
                        variant={
                          selectedPlayers.includes(player.name)
                            ? "light"
                            : "dark"
                        }
                        size="large"
                        onClick={() => {
                          console.log("clicked: " + player.name);
                          togglePlayerSelection(player);
                        }}
                      >
                        {player.name}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Box>
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
                  backgroundColor: "#383838",
                  color: "white",
                  border: "2px solid grey",
                  borderRadius: "20px",
                  margin: "5px 0 5px 45px",
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
                  console.log("arrow down clicked: " + selectedPlayers);
                  
                }}
              >
                <ArrowDropUpIcon />
              </Button>
              <Button
                variant="dark"
                size="sm"
                onClick={() => {
                  console.log("arrow down clicked: " + selectedPlayers);
                  moveToActive(activePlayers, selectedPlayers);
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
                  backgroundColor: "#383838",
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
              <Box
                height={150}
                width={400}
                display={"inline-block"}
                sx={{
                  backgroundColor: "#383838",
                  color: "white",
                  border: "2px solid grey",
                  borderRadius: "20px",
                  textAlign: "right",
                  margin: "5px 45px",
                }}
              >
                <Grid container spacing={0}>
                  {activePlayers.map((player, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Button
                        size="lg"
                        variant={
                          appState.playerActive == player.number
                            ? "light"
                            : "dark"
                        }
                        onClick={() => {
                          console.log("clicked Active: " + player.number);
                          togglePlayerActive(player);
                        }}
                      >
                        {player}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerSelection;
