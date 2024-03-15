import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import Box from '@mui/material/Box';
import { Fab, Skeleton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { borderRadius, color, textAlign } from "@mui/system";
import { grey } from "@mui/material/colors";


function PlayerSelection() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  

  return (
   <>
     <div class="col-md-4" style={{backgroundColor: 'darkblue'}}>
                    <div class="flex-container">
                      <div class="flex-item">
                        <Box
                          height={150}
                          width={150}
                          my={4}
                          display={"justify"}
                          alignItems="center"
                          p={2}
                          sx={{ backgroundColor: "darkgrey",
                                border: '5px solid grey',
                                borderRadius: "20px",
                                opacity: 0.6,
                              margin:"15px 5px 5px 40px"}}
                        >
                          <div class="row d-flex">
                            <Fab>
                              <AddIcon sx={{color: "orange"}}/>
                            </Fab>
                          </div>
                        </Box>
                      </div>
                    <div class="flex-item">
                      <div class="row">
                        <Box
                          height={150}
                          width={400}
                          display={"inline-block"}
                          sx={{ backgroundColor: "#383838",
                                color: "white",
                                border: '2px solid grey',
                                borderRadius: "20px",
                                textAlign:"left",
                                margin: "5px 0"
                                }}>
                          <Button variant="dark" size="lg">Jogador 1</Button>
                          <Button variant="dark" size="lg">Jogador 2</Button>
                          <Button variant="dark" size="lg">Jogador 3</Button>
                          <Button variant="dark" size="lg">Jogador 4</Button>
                          <Button variant="dark" size="lg">Jogador 5</Button>
                          <Button variant="dark" size="lg">Jogador 6</Button>
                          <Button variant="dark" size="lg">Jogador 7</Button>
                        </Box>
                      </div>
                    </div>
                    <div class="flex-item">
                      <div class="row">
                        <Box
                          height={50}
                          width={100}
                          display={"justify"}
                          p={1}
                          sx={{ backgroundColor: "#383838",
                                color: "white",
                                border: '2px solid grey',
                                borderRadius: "20px",
                                margin: "5px 0 5px 45px"}}
                        >
                          <h4>BENCH</h4>
                        </Box>
                      </div>
                      <div class="row-2 d-flex justify-content-center">
                        <Button variant="dark" size="sm">
                            <ArrowDropUpIcon/>
                        </Button>
                        <Button variant="dark" size="sm">
                          <ArrowDropDownIcon/>
                        </Button>
                      </div>
                      <div class="row">
                        <Box 
                          height={50}
                          width={100}
                          display={"justify"}
                          p={1}
                          sx={{ backgroundColor: "#383838",
                                color: "white",
                                border: '2px solid grey',
                                borderRadius: "20px",
                                margin: "10px 0 5px 300px"}}
                        >
                            <h4>FIELD</h4>
                        </Box>
                      </div>
                      <div class="row"> 
                        <Box
                          height={150}
                          width={400}
                          display={"inline-block"}
                          sx={{ backgroundColor: "#383838",
                                color: "white",
                                border: "2px solid grey",
                                borderRadius: "20px",
                                textAlign:"right",
                                margin: "5px 45px"
                                }}>
                          <Button variant="dark" size="lg">Jogador 1</Button>
                          <Button variant="dark" size="lg">Jogador 2</Button>
                          <Button variant="dark" size="lg">Jogador 3</Button>
                          <Button variant="dark" size="lg">Jogador 4</Button>
                          <Button variant="dark" size="lg">Jogador 5</Button>
                          <Button variant="dark" size="lg">Jogador 6</Button>
                          <Button variant="dark" size="lg">Jogador 7</Button>
                        </Box>
                      </div>
                    </div>
                  </div>
    </div>
   </>
  );
}

export default PlayerSelection;