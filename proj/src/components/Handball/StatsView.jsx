import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import TimeCounter from "./TimeCounter";
import GameTimeline from "./GameTimeLine";
import Box from "@mui/material/Box";

function StatsView() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  return (
    <>
      <div className="col-md-4" style={{ backgroundColor: appState.field_bg_color }}>
        <div className="flex-container">
          <Box
            sx={{ height: "70vh", display: "flex", flexDirection: "column", alignItems: "center", alignContent: "center"}}
          >
            <Box
              sx={{
                width: "100%",
                height: "160px",
                backgroundColor: "#aabbbb",
              }}
            >
              <TimeCounter />
            </Box>
            <Box
              sx={{
                width: "100%",
                overflow: "auto",
                flex: 1,
                display: "flex", flexDirection: "column", alignItems: "center", alignContent: "center"
              }}
            >

              <GameTimeline />
            </Box>
          </Box>

         
        </div>
      </div>
    </>
  );
}

export default StatsView;
