import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ActionsButtonsMobile from "./ActionsButtonsMobile";
import PlayersOnFieldMobile from "./PlayersOnFieldMobile";
import PlayersOnBenchMobile from "./PlayersOnBenchMobile";
import TimeCounter from "./TimeCounter";
import FieldView from "./FieldView";
import { defaultColors } from "../Utils/Themes";
import { createEntry } from "../Utils/Utils";
import { BASE_URL, COLLECTION_NAME_GAMEACTIONS, TOKEN } from "../Utils/constants";

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
      appDispatch({
        type: "gameActions",
        value: {
          time: localStorage.getItem("timer"),
          action: "Finish",
          actionName: "Outside",
          player: appState.playerActive,
          team: "Home",
          shotFrom: appState.shotFrom,
          shotEnd: "Outside",
          shotResult: "Miss",
        },
      });

      const entry = {
        data: {
          time: localStorage.getItem("timer"),
          action: "Finish",
          actionName: "Outside",
          game: 1,
          player: Number(appState.playerActive),
          team: 1,
          SHOTFROM: appState.shotFrom,
          SHOTEND: "OUTSIDE",
          SHOTRESULT: "MISS",
        },
      };

      createEntry(entry,TOKEN,BASE_URL,COLLECTION_NAME_GAMEACTIONS);


    }
    console.log(message);
    appDispatch({
      type: "flashMessages",
      value: message,
    });
  }
};

  function swapPlayers(playerBenched) {
    console.log("benched: " + playerBenched);
    console.log("field: " + appState.playerActive);
    const playerFieldNumber = appState.playerActive;
    const playerBenchNumber = playerBenched;
    if (appState.playerActive != 0) {
      // Create a new player list where the state of the selected player is altered
      const newPlayerList = appState.playerList.map((player) => {
        console.log(playerFieldNumber + " - " + player.number);
        if (player.number == playerFieldNumber) {
          // Alter the state of the selected player
          console.log("PlayerSelection - move to bench: " + playerFieldNumber);
          return { ...player, state: "B" };
        } else if (player.number == playerBenchNumber) {
          // Alter the state of the selected player
          console.log("PlayerSelection - move to field: " + playerBenchNumber);
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

  function togglePlayerSelectionBenched(playerNumber) {
    // If the player is not already in selected player list, add them to the selected players
    if (!appState.playersSelected.includes(playerNumber)) {
      console.log("including player to playersSelected array: " + playerNumber);
      const newPlayerSelected = [...appState.playersSelected, playerNumber];
      appDispatch({ type: "updatePlayerSelected", value: newPlayerSelected });
      swapPlayers(playerNumber);
    } else {
      // If the player is already selected, remove them from the selected players
      console.log("removing player to playersSelected array: " + playerNumber);
      const newPlayerSelected = appState.playersSelected.filter(
        (value) => value !== playerNumber
      );
      appDispatch({ type: "updatePlayerSelected", value: newPlayerSelected });
      appDispatch({ type: "updatePlayerActiveBenched", value: 0 });
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
    return player ? (player.pos + ' ' + player.name) : "No field player selected";
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
          backgroundColor: defaultColors.quaternary,
          display: "flex",
          flexGrow: "1",
          alignItems: "start",
        }}
      >
        <div className="col">
          <div className="row gx-0 d-flex justify-content-center align-items-center" >
            <TimeCounter />
          </div>
          <div className="row gx-0" style={{ backgroundColor: "#1a535c" }}>
          <FieldView fieldClick={handleFieldClick} />
          </div>
          <div className="row gx-0" style={{ backgroundColor: "#1a535c" }}>
            <ActionsButtonsMobile toggleDrawer={toggleDrawer(true)} />
          </div>

          <div className="row gx-0" style={{ backgroundColor: "#1a535c" }}>
            <PlayersOnFieldMobile togglePlayer={togglePlayerSelection} />
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
            backgroundColor: '#4cbd96',
          }}
        >
          <Puller sx={{backgroundColor: defaultColors.quaternary,}}/>
          <Typography sx={{ p: 2, color: "text.secondary", textAlign: 'center' }}>
            {" "}
            {appState.playerActive != 0
              ? `${appState.playerActive} - `
              : ""}
               {getPlayerData(appState.playerActive)}
          </Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
            backgroundColor: '#4cbd96',
          }}
        >
          <PlayersOnBenchMobile togglePlayer={togglePlayerSelectionBenched} />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}
