import * as React from 'react';
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
  return (
    <Timeline position="right">
        <TimelineItem sx={{ minWidth: '350px'}}>

          
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          00:35 min Half 1
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <ArrowUpwardIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent  sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary">
          
            Player in 12

        </TimelineContent>
      </TimelineItem>

      <TimelineItem sx={{ minWidth: '350px'}}>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          01:17 min Half 1
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <SimCardAlertIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent  sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary">
          
            Yellow Card 7

        </TimelineContent>
      </TimelineItem>

      
    </Timeline>
  );
}
