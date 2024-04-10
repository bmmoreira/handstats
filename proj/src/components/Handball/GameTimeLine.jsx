import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import SimCardAlertIcon from "@mui/icons-material/SimCardAlert";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import { defaultColors } from "../Utils/Themes";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import BlockIcon from "@mui/icons-material/Block";
import Typography from "@mui/material/Typography";
import "./gametimeline.css";
import { minWidth } from "@mui/system";
import Box from "@mui/material/Box";

export default function GameTimeline() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${padZero(minutes)}:${padZero(seconds)}`;
  };

  const padZero = (num) => {
    return num.toString().padStart(2, "0");
  };

  const selectActionIcon = (type) => {
    switch (type) {
      case "attack":
        return <SportsHandballIcon sx={{ color: 'red',  }} />;
      case "defense":
        return <SportsKabaddiIcon sx={{ color: 'red',  }} />;
      case "sanction":
        return <SimCardAlertIcon sx={{ color: 'red',  }} />;
      case "Finish":
        return <SportsSoccerIcon sx={{ color: 'red',  }} />;
     
    }
  };

  return (

    <Box
      sx={{
          m: 0,
          p: 0,
          display: "flex",
          flexDirection: "column",
          height: 400,
          overflow: "hidden",
          overflowY: "scroll",
         // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
        }}
    >
    <Timeline position="right" >
      {appState.gameActions.map((item, index) => (
        <TimelineItem sx={{ minWidth: "100%", borderRadius: '5px', backgroundColor: '#4cbd96', height: '90px' }} key={index}>
          <TimelineOppositeContent
            sx={{ m: "auto 0", color: 'red', paddingRight: '5px'}}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {formatTime(item.time)} min Half-1
          </TimelineOppositeContent>
          <TimelineSeparator>
          <TimelineConnector sx={{backgroundColor: 'red'}}/>
            <TimelineDot sx={{backgroundColor: 'yellow'}}>{selectActionIcon(item.action)}</TimelineDot>
            <TimelineConnector sx={{backgroundColor: 'red'}} />
          </TimelineSeparator>
          <TimelineContent
             sx={{ m: "auto 0", color: 'red' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            <Typography variant="h6" component="h1" sx={{ color: 'red', fontSize: '0.875rem' }}>
              Player: {item.player}
            </Typography>
            <Typography variant="h5" component="h1" sx={{ color: 'red', fontSize: '0.875rem' }}>
            {item.actionName}
            </Typography>
            
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
    </Box>
  );
}
