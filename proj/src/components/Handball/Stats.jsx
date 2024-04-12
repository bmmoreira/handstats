import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import Typography from "@mui/material/Typography";
import "./gametimeline.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Item from '@mui/material/Grid';


export default function Stats() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  return (

    <Box
      sx={{
          m: 0,
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 400,
          overflow: "hidden",
          overflowY: "scroll",
         // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
        }}
    >
       <Grid className="col m-0 align-items-center" container spacing={1}>
            <Grid
              item
              xs={5}
              md={5}
              borderBottom={"3px solid grey"}
              borderRadius={"10px"}
            >
              <Item>Synthesis*</Item>
            </Grid>
            <Grid item xs={5} md={4}>
              <Item></Item>
            </Grid>
            <Grid item xs={2} md={3}>
              <Item></Item>
            </Grid>
            <Grid
              item
              xs={5}
              md={5}
              borderBottom={"3px solid grey"}
              borderRadius={"10px"}
            >
              <Item>Goalkeeper Effeciency:</Item>
            </Grid>
            <Grid item xs={5} md={4}>
              <Item>45% 20/44</Item>
            </Grid>
            <Grid item xs={2} md={3}>
              <Item>
                <button
                  className="btn justify-content-evenly"
                  style={{ width: "40px", height: "25%" }}
                >
                  <svg
                    viewBox=" 5 -5 20 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Arrow right"
                      d="M24.2071 8.20711C24.5976 7.81658 24.5976 7.18342 24.2071 6.79289L17.8431 0.428932C17.4526 0.0384079 16.8195 0.0384079 16.4289 0.428932C16.0384 0.819456 16.0384 1.45262 16.4289 1.84315L22.0858 7.5L16.4289 13.1569C16.0384 13.5474 16.0384 14.1805 16.4289 14.5711C16.8195 14.9616 17.4526 14.9616 17.8431 14.5711L24.2071 8.20711ZM0.5 8.5L23.5 8.5V6.5L0.5 6.5L0.5 8.5Z"
                      fill="#FFE66D"
                    />
                  </svg>
                </button>
              </Item>
            </Grid>
            <Grid
              item
              xs={5}
              md={5}
              borderBottom={"3px solid grey"}
              borderRadius={"10px"}
            >
              <Item>Player Activity*</Item>
            </Grid>
            <Grid item xs={5} md={4}>
              <Item></Item>
            </Grid>
            <Grid item xs={2} md={3}>
              <Item></Item>
            </Grid>
            <Grid
              item
              xs={5}
              md={5}
              borderBottom={"3px solid grey"}
              borderRadius={"10px"}
            >
              <Item>Shots efficiency</Item>
            </Grid>
            <Grid item xs={5} md={4}>
              <Item>77% 23/30</Item>
            </Grid>
            <Grid item xs={2} md={3}>
              <Item>
                <button
                  className="btn justify-content-evenly"
                  style={{ width: "40px", height: "25%" }}
                >
                  <svg
                    viewBox=" 5 -5 20 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Arrow right"
                      d="M24.2071 8.20711C24.5976 7.81658 24.5976 7.18342 24.2071 6.79289L17.8431 0.428932C17.4526 0.0384079 16.8195 0.0384079 16.4289 0.428932C16.0384 0.819456 16.0384 1.45262 16.4289 1.84315L22.0858 7.5L16.4289 13.1569C16.0384 13.5474 16.0384 14.1805 16.4289 14.5711C16.8195 14.9616 17.4526 14.9616 17.8431 14.5711L24.2071 8.20711ZM0.5 8.5L23.5 8.5V6.5L0.5 6.5L0.5 8.5Z"
                      fill="#FFE66D"
                    />
                  </svg>
                </button>
              </Item>
            </Grid>
            <Grid
              item
              xs={5}
              md={5}
              borderBottom={"3px solid grey"}
              borderRadius={"10px"}
            >
              <Item>6m shots effeciency</Item>
            </Grid>
            <Grid item xs={5} md={4}>
              <Item>75% 15/20</Item>
            </Grid>
            <Grid item xs={2} md={3}>
              <Item></Item>
            </Grid>
            <Grid
              item
              xs={5}
              md={5}
              borderBottom={"3px solid grey"}
              borderRadius={"10px"}
            >
              <Item>Timeline*</Item>
            </Grid>
            <Grid item xs={5} md={4}>
              <Item></Item>
            </Grid>
            <Grid item xs={2} md={3}>
              <Item></Item>
            </Grid>
            <Grid
              item
              xs={5}
              md={5}
              borderBottom={"3px solid grey"}
              borderRadius={"10px"}
            >
              <Item>Scorers*</Item>
            </Grid>
            <Grid item xs={5} md={4}>
              <Item></Item>
            </Grid>
            <Grid item xs={2} md={3}>
              <Item></Item>
            </Grid>
          </Grid>
    </Box>
  );
}
