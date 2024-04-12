import React, { useState, useEffect, useContext } from "react";
import DispatchContext from "../../DispatchContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { defaultColors } from "../Utils/constants";
import GameTimeline from "./GameTimeLine";
import Box from "@mui/material/Box";

function Timeline() {
  const { t } = useTranslation();
  const appDispatch = useContext(DispatchContext);
  const navigate = useNavigate();

  return (
    <>
     
        <div
          className="row middle-row"
          style={{ backgroundColor: defaultColors.quaternary }}
        >
          <div className="col d-flex justify-content-center align-items-center">
            <div className="row-content border-0 d-flex justify-content-center align-items-center">
              {/* Start Component content */}
              <Box>
                <GameTimeline />
              </Box>
              {/* End Component content */}
            </div>
          </div>
        </div>
     
    </>
  );
}

export default Timeline;
