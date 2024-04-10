import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { defaultColors } from "../Utils/constants";
import Box from "@mui/material/Box";
import TimeCounter from "./TimeCounter";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import "./handball.css";
import GameTimeline from "./GameTimeLine";
import { ThemeProvider } from "@mui/material/styles";
import { themeRegisterPage } from "../Utils/Themes";

/*
Adding validation and automatically log in a successfully registered user
*/

function TimeLine() {
  const { t } = useTranslation();
  const appDispatch = useContext(DispatchContext);
  const navigate = useNavigate();

  const countDownTable = (
    <div className="row g-0">
      <TimeCounter />
    </div>
  );

  const actionsButtonsTimeline = (
    <div
      className="row g-0"
      style={{ width: "106%", height: "30%", backgroundColor: "#1F6372" }}
    >
      <ButtonGroup
        className="col p-0 justify-content-evenly align-items-center"
        orientation="vertical"
      >
        <Button
          className="px-5"
          id="arrowLeft"
          style={{
            width: 150,
            height: 40,
            color: "white",
            border: "solid grey",
            borderRadius: 5,
          }}
        >
          <svg viewBox="0 0 30 15" xmlns="http://www.w3.org/2000/svg">
            <path
              id="Arrow 16"
              d="M0.792892 6.79289C0.402369 7.18342 0.402369 7.81658 0.792892 8.20711L7.15685 14.5711C7.54738 14.9616 8.18054 14.9616 8.57107 14.5711C8.96159 14.1805 8.96159 13.5474 8.57107 13.1569L2.91421 7.5L8.57107 1.84315C8.96159 1.45262 8.96159 0.819457 8.57107 0.428932C8.18054 0.0384078 7.54738 0.0384078 7.15685 0.428932L0.792892 6.79289ZM24.5 6.5L1.5 6.5V8.5L24.5 8.5V6.5Z"
              fill="#FFE66D"
            />
          </svg>
          <svg viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
            <g id="Pause">
              <path
                id="Vector"
                d="M0 0.922783C0 0.412484 0.381099 0 0.852324 0L4.26162 0C4.73284 0 5.11394 0.412484 5.11394 0.922783V13.8417C5.11394 14.352 4.73284 14.7645 4.26162 14.7645H0.852324C0.381099 14.7645 0 14.352 0 13.8417L0 0.922783Z"
                fill="#FFE66D"
              />
              <path
                id="Vector_2"
                d="M6.86658 0.922783C6.86658 0.412484 7.24768 0 7.7189 0L11.1282 0C11.5994 0 11.9805 0.412484 11.9805 0.922783V13.8417C11.9805 14.352 11.5994 14.7645 11.1282 14.7645H7.7189C7.24768 14.7645 6.86658 14.352 6.86658 13.8417V0.922783Z"
                fill="#FFE66D"
              />
            </g>
          </svg>
        </Button>
        <Button
          style={{
            width: 150,
            height: 40,
            fill: "#FF6B6B",
            color: "white",
            border: "solid grey",
            borderRadius: 5,
          }}
        >
          Empty Goal
        </Button>
        <Button
          style={{
            width: 150,
            height: 40,
            fill: "#FF6B6B",
            color: "white",
            border: "solid grey",
            borderRadius: 5,
          }}
        >
          Events
        </Button>
      </ButtonGroup>

      <ButtonGroup
        className="col p-0 justify-content-evenly align-items-center"
        orientation="vertical"
      >
        <Button
          className="px-5"
          id="arrowRight"
          style={{
            width: 150,
            height: 40,
            color: "white",
            border: "solid grey",
            borderRadius: 5,
          }}
        >
          <svg viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
            <g id="Pause">
              <path
                id="Vector"
                d="M0 0.922783C0 0.412484 0.381099 0 0.852324 0L4.26162 0C4.73284 0 5.11394 0.412484 5.11394 0.922783V13.8417C5.11394 14.352 4.73284 14.7645 4.26162 14.7645H0.852324C0.381099 14.7645 0 14.352 0 13.8417L0 0.922783Z"
                fill="#FFE66D"
              />
              <path
                id="Vector_2"
                d="M6.86658 0.922783C6.86658 0.412484 7.24768 0 7.7189 0L11.1282 0C11.5994 0 11.9805 0.412484 11.9805 0.922783V13.8417C11.9805 14.352 11.5994 14.7645 11.1282 14.7645H7.7189C7.24768 14.7645 6.86658 14.352 6.86658 13.8417V0.922783Z"
                fill="#FFE66D"
              />
            </g>
          </svg>
          <svg
            viewBox="-5 0 30 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Arrow 16"
              d="M24.2071 8.20711C24.5976 7.81658 24.5976 7.18342 24.2071 6.79289L17.8431 0.428932C17.4526 0.0384079 16.8195 0.0384079 16.4289 0.428932C16.0384 0.819456 16.0384 1.45262 16.4289 1.84315L22.0858 7.5L16.4289 13.1569C16.0384 13.5474 16.0384 14.1805 16.4289 14.5711C16.8195 14.9616 17.4526 14.9616 17.8431 14.5711L24.2071 8.20711ZM0.5 8.5L23.5 8.5V6.5L0.5 6.5L0.5 8.5Z"
              fill="#FFE66D"
            />
          </svg>
        </Button>
        <Button
          style={{
            width: 150,
            height: 40,
            fill: "#FF6B6B",
            color: "white",
            border: "solid grey",
            borderRadius: 5,
          }}
        >
          Empty Goal
        </Button>
        <Button
          style={{
            width: 150,
            height: 40,
            fill: "#FF6B6B",
            color: "white",
            border: "solid grey",
            borderRadius: 5,
          }}
        >
          Events
        </Button>
      </ButtonGroup>
    </div>
  );

  const timeLine = (
    <div
      id="timeLine"
      className="row g-0 justify-content-evenly md-4"
      style={{ width: "100%", height: "40%" }}
    >
      <div className="container">
        <Box className="col">
          <Button style={{ width: 90, height: 45 }}>
            <svg viewBox="31 5 25 20" xmlns="http://www.w3.org/2000/svg">
              <g id="Bell">
                <g id="Group">
                  <path
                    id="Vector"
                    d="M44.7226 5.63938C44.7226 4.73301 44.1237 4 43.3855 4C42.6472 4 42.0494 4.73301 42.0494 5.63938C42.0494 5.74137 42.059 5.84335 42.073 5.94151C39.2165 7.26602 37.0715 10.0425 37.0715 16.7071H49.9287C49.9297 10.0412 47.5544 7.26729 44.6969 5.94151C44.713 5.84335 44.7226 5.74137 44.7226 5.63938Z"
                    fill="#FFE66D"
                  />
                  <path
                    id="Vector_2"
                    d="M51 20.5315H36L36.9707 17.9819H49.7271L51 20.5315Z"
                    fill="#FFE66D"
                  />
                  <path
                    id="Vector_3"
                    d="M43.4582 24.3559C44.6197 24.3559 45.5593 23.2379 45.5593 21.8611H41.3572C41.3572 23.2379 42.2979 24.3559 43.4582 24.3559Z"
                    fill="#FFE66D"
                  />
                </g>
              </g>
            </svg>
          </Button>
        </Box>
      </div>
      <div className="col" style={{ background: "#1F6372", marginTop: '10px' }}>
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
              {actionsButtonsTimeline}
            </div>
            <div className="row gx-0" style={{ backgroundColor: "#1a535c"}}>
              {timeLine}
            </div>

            {/* <div className="row gx-0" style={{backgroundColor: 'blue', }}><PlayersOnBenchMobile/></div> */}
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default TimeLine;
