import React, { useContext } from "react";
import StateContext from "../../StateContext";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import {
  themeButtonPlayers,
  boxFieldMobile,
  buttonFieldSecondRow,
} from "../Utils/Themes";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function PlayersOnFieldMpbile(props) {
  const appState = useContext(StateContext);

  /* Assuming `playerList` is an array of objects where each object has 
     a `state` property, you can filter the array to only include players 
    with 'B' in their state. Then, you can map over the filtered array 
    to create a list of buttons*/
  const buttonArray = appState.playerList
    .filter((player) => player.state.includes("F"))
    .map((player, index) => (
      <Button
        variant={
          appState.playersSelected.includes(player.number)
            ? "selected"
            : player.pos == "GR"
            ? "gk"
            : "dark"
        }
        size="large"
        onClick={() => {
          console.log("clicked: " + player.number);
          props.togglePlayer(player.number);
        }}
      >
        <Typography variant="h3">{player.number}</Typography>
        <Typography variant="h4">{player.pos}</Typography>
        <Typography variant="h5">{player.nickname}</Typography>
      </Button>
    ));

  return (
    <>
      <ThemeProvider theme={themeButtonPlayers}>
        <div className="flex-item">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              {buttonArray.slice(0, 3)}
            </div>
          </div>
        </div>
      </ThemeProvider>
      <ThemeProvider theme={buttonFieldSecondRow}>
        <div className="flex-item">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              {buttonArray.slice(3)}
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default PlayersOnFieldMpbile;
