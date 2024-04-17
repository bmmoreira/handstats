import React, { useState, useContext, useEffect } from "react";
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
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { getEntries } from "../Utils/Utils";
import { BASE_URL, COLLECTION_NAME_GAMEACTIONS, TOKEN } from "../Utils/constants";
import "./gametimeline.css";

export default function GameTimeline() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = getEntries(TOKEN,BASE_URL,COLLECTION_NAME_GAMEACTIONS);
        setData(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
            sx={{ m: "auto 0", color: '#f0f0f0', paddingRight: '5px'}}
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
            <Typography variant="h6" component="h1" sx={{ color: '#f0f0f0', fontSize: '0.875rem' }}>
              #{item.player} {item.actionName}
            </Typography>
            
            
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
    </Box>
  );
}
