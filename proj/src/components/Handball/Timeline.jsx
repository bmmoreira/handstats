import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import { useTranslation } from "react-i18next";
import { defaultColors } from "../Utils/constants";
import Box from "@mui/material/Box";
import GameTimeline from "./GameTimeLine";
import ExtraActions from "./ExtraActions";
import { ThemeProvider } from "@mui/material/styles";
import { themeRegisterPage } from "../Utils/Themes";
import IconButton from "@mui/material/IconButton";
import ReplyIcon from '@mui/icons-material/Reply';
import { useNavigate } from "react-router-dom";



function TimeLine() {
  const { t } = useTranslation();
  const appDispatch = useContext(DispatchContext);
  const navigate = useNavigate();

   const timeLine = (
    <div
      id="timeLine"
      className="row g-0 justify-content-evenly md-4"
    >
      <div className="container">
        <Box className="col">
          <IconButton sx={{width: 90, height: 50, color: 'red', backgroundColor: 'yellow', margin: '10px'}} onClick={() => navigate("/handball")}>
            <ReplyIcon sx={{width: 30, height: 30}} />
          </IconButton>
          
        </Box>
      </div>
      <div className="col" style={{ background: "#1F6372"}}>
        <GameTimeline />
      </div>
    </div>
  );

  return (
    <>
      <ThemeProvider theme={themeRegisterPage}>
        <div
          className="row middle-row g-0"
          style={{ backgroundColor: defaultColors.quaternary }}
        >
          <div className="col">
            <div className="row gx-0" style={{ backgroundColor: "#1a535c" }}>
            <ExtraActions/>
            </div>
            <div className="row gx-0" style={{ backgroundColor: "#1a535c"}}>
              {timeLine}
            </div>

          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default TimeLine;
