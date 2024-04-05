import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ActionsButtonsMobile from "./ActionsButtonsMobile";
import PlayersOnFieldMpbile from "./PlayersOnFieldMobile";
import PlayersOnBench from "./PlayersOnBench";
import TimeCounter from "./TimeCounter";
import FieldView from "./FieldView";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  margin: 0,
  padding: 0,
  display: "flex",
  backgroundColor: "green",
}));

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

export default function SwipeableEdgeDrawer(props) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  const { window } = props;
  const [open, setOpen] = React.useState(appState.drawerBottom);

  function moveToField() {
    console.log("move to field: " + appState.playerActive);
    if (
      appState.playerList.filter((player) => player.state.includes("F"))
        .length >= 7
    ) {
      console.log("Active player limite reached");
      appDispatch({
        type: "flashMessages",
        value: "You can only have 7 players on the field!",
      });
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

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  function getPlayerData(number) {
    console.log("getting player info: " + appState.playerActive);

    // Find the player with the matching number
    const player = appState.playerList.find(
      (player) => player.number === number
    );

    // Log the player data or handle it as needed
    return player ? (player.pos + ' ' + player.name) : "No player found";
  }

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <Box
        sx={{
          textAlign: "center",
          pt: 1,
          backgroundColor: "red",
          display: "flex",
          flexGrow: "1",
          alignItems: "start",
        }}
      >
        <div className="col">
          <div className="row gx-0" style={{ backgroundColor: "brown" }}>
            <TimeCounter />
          </div>
          <div className="row gx-0" style={{ backgroundColor: "#1a535c" }}>
            <FieldView />
          </div>
          <div className="row gx-0" style={{ backgroundColor: "#1a535c" }}>
            <ActionsButtonsMobile toggleDrawer={toggleDrawer(true)} />
          </div>

          <div className="row gx-0" style={{ backgroundColor: "#1a535c" }}>
            <PlayersOnFieldMpbile togglePlayer={togglePlayerSelection} />
          </div>
          {/* <div className="row gx-0" style={{backgroundColor: 'blue', }}><PlayersOnBenchMobile/></div> */}
        </div>
      </Box>
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: "text.secondary" }}>
            {" "}
            {appState.playerActive != 0
              ? `${appState.playerActive} - `
              : "No Player Selected"}
               {getPlayerData(appState.playerActive)}
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <PlayersOnBench togglePlayer={togglePlayerSelection} />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}
