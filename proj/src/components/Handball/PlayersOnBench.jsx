import React, { useContext, useEffect, useState } from "react";
import StateContext from "../../StateContext";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { themeButtonPlayers } from '../Utils/Themes'
import Box from "@mui/material/Box";

function PlayersOnBench(props) {
   
    const appState = useContext(StateContext);

    return (
        <>
        <ThemeProvider theme={themeButtonPlayers}>
        <Box
                display={"flex"}
                sx={{
                  backgroundColor: appState.colors.terciaryColor,
                  width: "400px",
                  color: "white",
                  border: "2px solid grey",
                  borderRadius: "20px",
                  textAlign: "left",
                  margin: "5px",
                  minHeight: "150px",
                }}
              >
                <Grid container spacing={0}>
                  {props.playersBenchList.map((number, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Button
                        variant={
                          props.selectedPlayersBenchList.includes(number)
                            ? "light"
                            : "dark"
                        }
                        size="large"
                        onClick={() => {
                          console.log("clicked: " + number);
                          props.togglePlayerSelection(number);
                        }}
                      >
                        {number}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Box>
        </ThemeProvider>
    </>
  );
}

export default PlayersOnBench;
