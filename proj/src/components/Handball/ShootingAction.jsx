import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import StateContext from "../../StateContext";
import DispatchContext from "../../DispatchContext";
import { defaultColors } from "../Utils/Themes";
import appLogo from "../../assets/images/logo_action.png";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import BlockIcon from "@mui/icons-material/Block";
import { createEntry } from "../Utils/Utils";
import {
  BASE_URL,
  COLLECTION_NAME_GAMEACTIONS,
  TOKEN,
} from "../Utils/constants";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    background: defaultColors.quintenary,
    color: "white",
    fontWeight: "600",
    display: "flex",
    justifyContent: "center",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
    background: defaultColors.quintenary,
  },
  "& .MuiDialogTitle-root": {
    padding: theme.spacing(1),
    background: defaultColors.quintenary,
    color: "white",
    fontWeight: "600",
  },
}));

export default function ShootingAction() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const handleClose = () => {
    appDispatch({ type: "shootingActionDialogOpen", value: false });
  };

  const ShootingZones = (area) => {
    switch (area) {
      case "_6m_1":
        return "SIX1";
      case "_6m_2":
        return "SIX2";
      case "_6m_3":
        return "SIX3";
      case "_6m_4":
        return "SIX4";
      case "_6m_5":
        return "SIX5";
      case "_9m_3":
        return "NINE3";
      case "_9m_2":
        return "NINE2";
      case "_9m_1":
        return "NINE1";
      default:
        break;
    }
  };

  const ShootingEnd = (area) => {
    switch (area) {
      case "baliza1":
        return "BAL1";
      case "baliza2":
        return "BAL2";
      case "baliza3":
        return "BAL3";
      case "baliza4":
        return "BAL4";
      case "baliza5":
        return "BAL5";
      case "baliza6":
        return "BAL6";
      case "baliza7":
        return "BAL7";
      case "baliza8":
        return "BAL8";
      case "baliza9":
        return "BAL9";
      default:
        break;
    }
  };

  const handleGoal = () => {
    const entry = {
      data: {
        time: localStorage.getItem("timer"),
        action: "Finish",
        actionName: "Goal",
        game: 1,
        player: Number(appState.playerActive),
        team: 1,
        SHOTFROM: ShootingZones(appState.shotFrom),
        SHOTEND: ShootingEnd(appState.shotEnd),
        SHOTRESULT: "GOAL",
      },
    };

    createEntry(entry, TOKEN, BASE_URL, COLLECTION_NAME_GAMEACTIONS);

    appDispatch({ type: "shootingActionDialogOpen", value: false });
    appDispatch({
      type: "gameActions",
      value: {
        time: localStorage.getItem("timer"),
        action: "Finish",
        actionName: "Goal",
        player: appState.playerActive,
        team: "Home",
        shotFrom: appState.shotFrom,
        shotEnd: appState.shotEnd,
        shotResult: "Goal",
      },
    });
    appDispatch({ type: "resetShootingAction" });
    appDispatch({ type: "scoreMyTeam", value: appState.scoreMyTeam + 1 });
  };
  const handleBlocked = () => {
    const entry = {
      data: {
        time: localStorage.getItem("timer"),
        action: "Finish",
        actionName: "Goal",
        game: 1,
        player: Number(appState.playerActive),
        team: 1,
        SHOTFROM: ShootingZones(appState.shotFrom),
        SHOTEND: ShootingEnd(appState.shotEnd),
        SHOTRESULT: "BLOCKED",
      },
    };

    createEntry(entry, TOKEN, BASE_URL, COLLECTION_NAME_GAMEACTIONS);

    appDispatch({ type: "shootingActionDialogOpen", value: false });
    appDispatch({
      type: "gameActions",
      value: {
        time: localStorage.getItem("timer"),
        action: "Finish",
        actionName: "Blocked",
        player: appState.playerActive,
        team: "Home",
        shotFrom: appState.shotFrom,
        shotEnd: appState.shotEnd,
        shotResult: "Blocked",
      },
    });

    appDispatch({ type: "resetShootingAction" });
  };
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={appState.shootingActionDialogOpen}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Action
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 5,
          color: "white",
          backgroundColor: defaultColors.secondary,
          "&:hover": {
            backgroundColor: defaultColors.primary,
            color: defaultColors.quaternary,
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          },
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <img src={appLogo} alt="Handball" />
      </DialogContent>
      <DialogActions>
        <IconButton
          aria-label="add to favorites"
          autoFocus
          onClick={handleGoal}
          sx={{
            color: "white",
            backgroundColor: defaultColors.secondary,
            height: "90%",
            borderRadius: "5px",
            "&:hover": {
              backgroundColor: defaultColors.primary,
              color: defaultColors.quaternary,
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            },
          }}
        >
          <SportsSoccerIcon />
          <Typography variant="h5">Goal</Typography>
        </IconButton>

        <IconButton
          aria-label="add to favorites"
          autoFocus
          onClick={handleBlocked}
          sx={{
            color: "white",
            backgroundColor: defaultColors.secondary,
            height: "90%",
            borderRadius: "5px",
            "&:hover": {
              backgroundColor: defaultColors.primary,
              color: defaultColors.quaternary,
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            },
          }}
        >
          <BlockIcon />
          <Typography variant="h5">Blocked</Typography>
        </IconButton>
      </DialogActions>
    </BootstrapDialog>
  );
}
