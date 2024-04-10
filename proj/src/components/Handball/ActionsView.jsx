import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import { useTranslation } from "react-i18next";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import SimCardAlertIcon from "@mui/icons-material/SimCardAlert";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import { ThemeProvider } from "@mui/material/styles";
import { createEntry } from "../Utils/Utils";
import { BASE_URL, COLLECTION_NAME_GAMEACTIONS, TOKEN } from "../Utils/constants";
import { themesActions } from "../Utils/Themes";


function ActionsView(props) {
  const { t } = useTranslation();
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

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

   /**
   * Returns the appropriate button component based on the type.
   *
   * @param {string} type - The type of the button. Can be "attack", "defense", or "sanction".
   * @returns {React.Component} The button component corresponding to the type.
   */
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

  const onClickActionButton = (button) => {
    if (appState.playerActive === 0) {
      appDispatch({
        type: "flashMessages",
        value: t("select_player"),
      });
      appDispatch({
        type: "turnOffActionsView",
      });
    } else {
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

      const entry = {
        data: {
          time: localStorage.getItem("timer"),
          action: props.type,
          actionName: button.name,
          game: 1,
          player: Number(appState.playerActive),
          team: 1,
          SHOTFROM: "NONE",
          SHOTEND: "NONE",
          SHOTRESULT: "NONE",
        },
      };

      createEntry(entry,TOKEN,BASE_URL,COLLECTION_NAME_GAMEACTIONS);
    }
  };

  return (
    <>
      <ThemeProvider theme={themesActions}>
        <div
          className="flex-container"
          style={{
            position: "absolute",
            zIndex: "99",
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
                  console.log(
                    "Action View Component, button clicked: " + button.name
                  );
                  onClickActionButton(button);
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
