import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import SimCardAlertIcon from "@mui/icons-material/SimCardAlert";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const AttackButtons = [
  { id: 1, name: "Travelling", icon: <SportsHandballIcon /> },
  { id: 2, name: "Double dribble", icon: <SportsHandballIcon /> },
  { id: 3, name: "Forcing", icon: <SportsHandballIcon /> },
  { id: 4, name: "Lost ball", icon: <SportsHandballIcon /> },
  { id: 5, name: "Countered Shot", icon: <SportsHandballIcon /> },
  { id: 6, name: "2 min provoked", icon: <SportsHandballIcon /> },
  { id: 7, name: "7m provoked", icon: <SportsHandballIcon /> },
  { id: 8, name: "One-on-one won", icon: <SportsHandballIcon /> },
];

const DefenseButtons = [
  { id: 1, name: "7m conceded", icon: <SportsKabaddiIcon /> },
  { id: 2, name: "One-on-one lost", icon: <SportsKabaddiIcon /> },
  { id: 3, name: "Free throw", icon: <SportsKabaddiIcon /> },
  { id: 4, name: "Countered Shot", icon: <SportsKabaddiIcon /> },
  { id: 5, name: "Offensive foul", icon: <SportsKabaddiIcon /> },
  { id: 6, name: "Stealing", icon: <SportsKabaddiIcon /> },
];

const SanctionButtons = [
  { id: 1, name: "Red card", icon: <SimCardAlertIcon /> },
  { id: 2, name: "Yellow card", icon: <SimCardAlertIcon /> },
  { id: 3, name: "2 minutes", icon: <SimCardAlertIcon /> },
];

const selectedButtons = (type) => {
  switch (type) {
    case "attack":
      return AttackButtons;
    case "defense":
      return DefenseButtons;
    case "sanction":
      return SanctionButtons;
  }
};


const setActionType = (type, name) => {
  console.log("Setting action type to: " + type);
  switch (type) {
    case "attack":
      {
        appDispatch({
          type: "gameActions",
          value: {
            time: localStorage.getItem("timer"),
            action: type,
            actionName: name,
            player: appState.playerActive,
            team: "Home",
            shotFrom: null,
            shotEnd: null,
            shotResult: null,
          },
        });
      }
      return;
    case "defense":
      return DefenseButtons;
    case "sanction":
      return SanctionButtons;
  }
};

function ActionsView(props) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: appState.colors.quaternaryColor, // Change background color of the button

            "&:hover": {
              backgroundColor: "#ffe66d",
              color: "#ff0000", // Change text color on hover
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", // Add a box shadow on hover
              // Add any other styles you want to change on hover
            },
            borderRadius: "18px", // Change border radius of the button
            padding: "12px 24px", // Change padding of the button
            fontWeight: "bold", // Change font weight of the button text
            fontSize: "14px", // Change font size of the button text
            textTransform: "uppercase", // Change text transformation of the button text
            // Add any other styles you want to apply to all buttons
          },
        },
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <div
          className="flex-container"
          style={{
            position: "absolute",
            zIndex: "3",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <ButtonGroup
            variant="contained"
            aria-label="Loading button group"
            orientation="vertical"
          >
            {selectedButtons(props.type).map((button) => (
              <Button
                key={button.id}
                startIcon={button.icon}
                onClick={() => {
                  console.log("Button clicked" + button.name);
                  appDispatch({
                    type: "gameActions",
                    value: {
                      time: localStorage.getItem("timer"),
                      action: props.type,
                      actionName: button.name,
                      player: appState.playerActive,
                      team: "Home",
                      shotFrom: null,
                      shotEnd: null,
                      shotResult: null,
                    },
                  });
                }}
              >
                {button.name}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </ThemeProvider>
    </>
  );
}

export default ActionsView;
