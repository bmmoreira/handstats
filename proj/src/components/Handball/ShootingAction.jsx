import React, { useContext } from "react";
import Button from "@mui/material/Button";
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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    background: "white",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
    background: "white",
  },
  "& .MuiDialogTitle-root": {
    padding: theme.spacing(1),
    background: "white",
  },
}));

export default function ShootingAction() {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const handleClose = () => {
    appDispatch({ type: "shootingActionDialogOpen", value: false });
   
  };
  const handleGoal = () => {
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
  };
  const handleBlocked = () => {
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
        Attack Action
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Typography gutterBottom>Define the action result</Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleGoal}>
          Goal
        </Button>
        <Button autoFocus onClick={handleBlocked}>
          Blocked
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
