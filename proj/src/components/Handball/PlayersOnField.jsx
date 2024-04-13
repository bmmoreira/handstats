import React, { useContext } from "react";
import StateContext from "../../StateContext";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { themeButtonPlayers } from "../Utils/Themes";
import Typography from "@mui/material/Typography";

function PlayersOnField(props) {
  const appState = useContext(StateContext);

  return (
    <>
      <ThemeProvider theme={themeButtonPlayers}>
       
          <Grid container spacing={0}>
            {/* Assuming `playerList` is an array of objects where each object has 
                  a `state` property, you can filter the array to only include players 
                  with 'B' in their state. Then, you can map over the filtered array 
                  to create a list of buttons*/}
            {appState.playerList
              .filter((player) => player.state.includes("F"))
              .map((player, index) => (
                <Grid  key={index}>
                  <Button
                    variant={
                      appState.playersSelected.includes(player.number) ? "selected" : "dark"
                    }
                    size="large"
                    onClick={() => {
                      console.log("clicked: " + player.number);
                      props.togglePlayer(player.number);
                    }}
                  >
                    <Typography variant="h3">{player.number}</Typography>
                    <Typography variant="h5">{player.nickname}</Typography>
                  </Button>
                </Grid>
              ))}
          </Grid>
        
      </ThemeProvider>
    </>
  );
}

export default PlayersOnField;
