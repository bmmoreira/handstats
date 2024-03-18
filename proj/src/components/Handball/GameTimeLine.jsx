import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Typography from '@mui/material/Typography';
import SportsKabaddiIcon from "@mui/icons-material/SportsKabaddi";
import SimCardAlertIcon from "@mui/icons-material/SimCardAlert";
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import "./gametimeline.css";
import { minWidth } from '@mui/system';

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
    return num.toString().padStart(2, '0');
  };

  const selectActionIcon = (type) => {
    switch (type) {
      case "attack":
        return <SportsHandballIcon/>;
      case "defense":
        return <SportsKabaddiIcon/>;
      case "sanction":
        return <SimCardAlertIcon/>;
    }
  };

  return (
    <Timeline position="right">

    {appState.gameActions.map((item) => (
             <TimelineItem sx={{ minWidth: '350px'}}>

          
             <TimelineOppositeContent
               sx={{ m: 'auto 0' }}
               align="right"
               variant="body2"
               color="text.secondary"
             >
               {formatTime(item.time)} min Half 1
             </TimelineOppositeContent>
             <TimelineSeparator>
               <TimelineConnector />
               <TimelineDot>
                {selectActionIcon(item.action)}
               </TimelineDot>
               <TimelineConnector />
             </TimelineSeparator>
             <TimelineContent  sx={{ m: 'auto 0' }}
               align="right"
               variant="body2"
               color="text.secondary">
               
                 Player {item.player} - {item.actionName} 
     
             </TimelineContent>
           </TimelineItem>
            ))}

        

           
    </Timeline>
  );
}
