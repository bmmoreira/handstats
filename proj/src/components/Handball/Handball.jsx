import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";

import PlayerSelection from "./PlayersSelection";
import StatsView from "./StatsView";
import ActionsButtons from "./ActionsButtons";
import FieldView from "./FieldView";
import { ThemeProvider } from "@mui/material/styles";
import { themeButtonPlayer } from "../Utils/Themes";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import "./handball.css";
import { Box, width } from "@mui/system";

function Handball(props) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  const timeCounter = (
    <div className="row" style={{width: 430, height: 145, position:"relative", background: '#1A5C6A'}}>
                        <div id="topBar" className="col d-flex justify-content-center text-align-text" style={{width: 430, height: 40, background: '#FF6B6B', borderBottomLeftRadius: 15, borderBottomRightRadius: 15}}>HandStats</div>
                    
                    <div className= "row justify-content-between" style={{width: 430, height: 91, position: 'relative'}}>
                            <div className= "col-4 ms-3 mt-2" style={{width: 128.89, height: 3.79, background: '#C0FEFA', borderRadius: 1.90}}></div>
                            <div className= "col-5 mt-2" style={{width: 128.89, height: 3.79, background: '#C0FEFA', borderRadius: 1.90}}></div>
                        <div className= "row justify-content-between">
                            <div className= "col-6 ms-3 mt-4" style={{width: 94.77, height: 45.49, color: 'white'}}>2 - 0</div>
                            <div className="col-4  d-flex justify-content-center ms-3 mt-2">
                                <Button className="btn btn-outline-light" style={{alignSelf: 'stretch', flex: '1 1 0',
                                    paddingBottom: 7.58, background: 'conic-gradient(from 90deg at 0.00% 0.00%, FF6B6B 70deg, #994040 189deg, #994040 227deg)',
                                    boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.20)', borderRadius: 51.18, overflow: 'hidden', flexDirection: 'column', 
                                    justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                        <svg width="31" height="33" viewBox="0 0 31 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Polygon 1" filter="url(#filter0_d_221_3673)">
                                        <path d="M27.4775 13.3567C28.7409 14.0941 28.7282 15.9239 27.4548 16.6438L7.54614 27.8978C6.27752 28.6149 4.70791 27.6919 4.71798 26.2346L4.87546 3.45245C4.88553 1.99521 6.46776 1.09394 7.72634 1.82854L27.4775 13.3567Z" fill="white"/>
                                        </g>
                                        <defs>
                                        <filter id="filter0_d_221_3673" x="0.917773" y="0.767383" width="29.2997" height="32.1786" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dx="-1" dy="2"/>
                                        <feGaussianBlur stdDeviation="1.4"/>
                                        <feComposite in2="hardAlpha" operator="out"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_221_3673"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_221_3673" result="shape"/>
                                        </filter>
                                        </defs>
                                        </svg>
                                </Button>
                            </div>
                            <div className="col-3 justify-content-between"> 
                                <div className= "col mt-2" style={{color: 'white'}}>33:17:83</div>
                                <div className= "col me-1 align-text-center" style={{color: 'white'}}>Tempo excedido</div>
                            </div>
                        </div>
                    </div>
                  </div>
  );

  const actionButtons = ( 
    <div className="row position-relative"style={{width: 430, height: 110, background: "green", borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
                        <div className="col-12 d-flex justify-content-center">
                            <div className="col position-absolute">
                                <div className="col mb-1 offset-4" style={{width: 130, height: 26, backgroundColor: '#1A4046', color: 'white', borderRadius: 15, fontSize: 10.97}}>
                                    4 Jogador B Sousa
                                </div>
                                <div className="col position-relative" style={{top: -16, width: 431, height: 100, background: '#1A535C', borderTopLeftRadius: 30, borderTopRightRadius: 30}} />
                            </div>
                            <div className="col-12 d-flex justify-content-between py-1 px-3 mt-3">
                                <Button id="bench" style={{width: 69, height: 66, borderRadius: 22}}>
                                        <div style={{background: '#FF6B6B'}} />
                                        <div style={{textAlign: 'center', color: 'white', fontSize: 13, fontFamily: 'Roboto', fontWeight: '500', textTransform: 'uppercase', lineHeight: 22, letterSpacing: 0.46, wordWrap: 'break-word'}}>Bench</div>
                                </Button>
                                <ButtonGroup className="col-7 justify-content-between">
                                <Button id="sanction" className="btn btn-outline-light" style={{width: 60, height: 60, borderRadius: 22}}>
                                <svg style={{width: 41, height: 40, position: "absolute"}}>
                                    <g id="whistle 1" clip-path="url(#clip0_375_3924)">
                                    <path id="Vector" d="M33.3392 10.9783C33.765 10.9783 34.318 11.1563 35.1085 11.6194C34.7947 11.9541 34.4622 12.3119 33.8052 12.996C33.3476 13.4724 32.8858 13.9462 32.537 14.2892C32.534 14.2922 32.5326 14.2931 32.5297 14.2961L30.0849 13.0141L31.2444 12.0026C32.138 11.3302 32.7198 11.0112 33.2558 10.9807C33.2831 10.9791 33.3108 10.9783 33.3392 10.9783ZM23.8368 12.0565C23.9068 12.0558 23.9766 12.0561 24.0459 12.0573C24.8737 12.0711 25.6445 12.2167 26.1622 12.445L31.4849 15.236C31.291 15.2749 31.0983 15.3215 30.9082 15.3804C29.5412 15.8039 28.2894 16.6832 26.9857 17.8612L9.85785 33.1251L3.44971 29.9485L20.2987 13.1186C20.9837 12.5581 22.0784 12.1957 23.2024 12.0895C23.4142 12.0695 23.6268 12.0588 23.8369 12.0566L23.8368 12.0565ZM36.1531 12.5009C37.5414 13.9824 37.7809 15.1594 37.3659 16.5763C37.3112 16.7635 37.124 17.0308 36.8616 17.3248C36.6879 17.1001 36.5015 16.8741 36.3009 16.6472C35.9851 16.2901 35.6373 15.9907 35.2654 15.7494L35.2738 15.7351L35.0547 15.62C34.9476 15.5584 34.8387 15.5013 34.7279 15.4489L33.7887 14.9563C34.1191 14.6262 34.4962 14.2402 34.881 13.8394C35.3523 13.3487 35.8095 12.8657 36.1531 12.5009ZM21.585 13.4616L16.9624 17.8706C20.6094 17.5105 21.4564 18.8143 22.4248 20.3157L26.9619 16.0758L21.585 13.4616ZM32.5517 16.3966C32.6082 16.3954 32.6649 16.3954 32.7218 16.3967C33.2739 16.4096 33.8461 16.5438 34.4827 16.8174C34.7229 16.9812 34.9568 17.1889 35.1878 17.4503C37.2271 19.757 37.5975 21.6781 37.2045 23.4184C36.8116 25.1587 35.5794 26.754 34.204 28.1695C33.1504 29.2539 31.9202 29.8848 30.3682 30.1663C28.8161 30.448 26.9308 30.3599 24.6721 29.9179C22.0412 29.4031 19.4485 30.5198 17.0903 31.8957C15.0234 33.1017 13.08 34.5474 11.4733 35.4668L10.7777 34.1131L27.991 18.7727L27.9928 18.7711C29.2213 17.6613 30.3324 16.9191 31.3704 16.5976C31.7676 16.4745 32.1558 16.405 32.5517 16.3966ZM3.50304 31.4428L9.31546 34.3243L10.1448 35.9377L4.53946 33.1916L3.50312 31.4429L3.50304 31.4428Z" fill="#FFE66D"/>
                                    <line id="Line 7" y1="-0.5" x2="9.0061" y2="-0.5" transform="matrix(-0.935528 -0.353253 -0.265676 0.964062 13.5654 14.0679)" stroke="white"/>
                                    <line id="Line 8" y1="-0.5" x2="9.15404" y2="-0.5" transform="matrix(-0.683226 -0.730207 -0.615038 0.788498 15.7412 10.2483)" stroke="white"/>
                                    <line id="Line 9" y1="-0.5" x2="10.8965" y2="-0.5" transform="matrix(-0.424238 -0.905551 -0.841539 0.540197 20.3638 9.92993)" stroke="white"/>
                                    </g>
                                </svg>
                                </Button>
                                <Button id= "defense" style={{width: 60, height: 60, borderRadius: 22}}>
                                <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Arrow 15" d="M7.29289 23.7071C7.68342 24.0976 8.31658 24.0976 8.70711 23.7071L15.0711 17.3431C15.4616 16.9526 15.4616 16.3195 15.0711 15.9289C14.6805 15.5384 14.0474 15.5384 13.6569 15.9289L8 21.5858L2.34315 15.9289C1.95262 15.5384 1.31946 15.5384 0.928932 15.9289C0.538408 16.3195 0.538408 16.9526 0.928932 17.3431L7.29289 23.7071ZM7 0L7 23H9L9 0L7 0Z" fill="#FFE66D"/>
                                    </svg>
                                </Button>
                                <Button id="attack" style={{width: 60, height: 60, borderRadius: 22}}>
                                <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Arrow 16" d="M8.70711 0.292892C8.31658 -0.0976315 7.68342 -0.0976315 7.29289 0.292892L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292892ZM9 24L9 1H7L7 24H9Z" fill="#FFE66D"/>
                                    </svg>
                                </Button></ButtonGroup>
                            </div>
                        </div>
                    </div>
  )

  const playerButtonsField = (
    <div className= "row" style={{width: 430, height: 90, textAlign: 'center', backgroundColor: '#1A5C6A'}}>
                    
                        <div className="col justify-content-center mt-1" style={{width: 0, height:0, color: 'white'}}>
                        FIELD</div>
                        <div id="7players "className="col-12 justify-content-center mb-1">
                          <ButtonGroup className="col-12 justify-content-between">                        
                            <Button className="btn btn-outline-light" style={{width: 50, height: 45, background: '#FF6B6B', border: "solid white", borderRadius: 15}}>Player 1</Button>
                            <Button className="btn btn-outline-light" style={{width: 50, height: 45, background: '#FF6B6B', border: "solid white", borderRadius: 15}}>Player 2</Button>
                            <Button className="btn btn-outline-light" style={{width: 50, height: 45, background: '#FF6B6B', border: "solid white", borderRadius: 15}}>Player 3</Button>
                            <Button className="btn btn-outline-light" style={{width: 50, height: 45, background: '#FF6B6B', border: "solid white", borderRadius: 15}}>Player 4</Button>
                            <Button className="btn btn-outline-light" style={{width: 50, height: 45, background: '#FF6B6B', border: "solid white", borderRadius: 15}}>Player 5</Button>
                            <Button className="btn btn-outline-light" style={{width: 50, height: 45, background: '#FF6B6B', border: "solid white", borderRadius: 15}}>Player 6</Button>
                            <Button className="btn btn-outline-light" style={{width: 50, height: 45, background: '#FFE66D', border: "solid white", borderRadius: 15}}>Player 7</Button>
                        </ButtonGroup>
                        </div>
                    </div>
  )

const playerButtonsBench = ( 
        <div className= "row justify-content-between" style={{width: 430, height: 220, textAlign: 'center', backgroundColor: '#1F6372'}}>
                        <div className="col" style={{ width: 45, height:35, color: 'white'}}>
                        BENCH
                        
                        <div id="9players" className="col justify-content-center">
                            <ButtonGroup className="col justify-content-center">                          
                                <Button className="btn btn-outline-light" style={{width: 50, height: 45, background: '#FF6B6B', border: "solid white", borderRadius: 15}}>Player 1</Button>
                                <Button className="btn btn-outline-light" style={{width: 50, height: 45, background: '#FF6B6B', border: "solid white", borderRadius: 15}}>Player 2</Button>
                            </ButtonGroup>
                            <ButtonGroup className="col-12 justify-content-center">
                                <Button className="btn btn-outline-light" style={{width: 50, height: 45, background: '#FF6B6B', border: "solid white", borderRadius: 15}}>Player 3</Button>
                                <Button className="btn btn-outline-light" style={{width: 50, height: 45, background: '#FF6B6B', border: "solid white", borderRadius: 15}}>Player 4</Button>
                                <Button className="btn btn-outline-light" style={{width: 50, height: 45, background: '#FF6B6B', border: "solid white", borderRadius: 15}}>Player 5</Button>
                            </ButtonGroup>
                            <ButtonGroup className="col">
                                <Button className="btn btn-outline-light" style={{width: 50, height: 45, background: '#FF6B6B', border: "solid white", borderRadius: 15}}>Player 6</Button>
                                <Button className="btn btn-outline-light" style={{width: 50, height: 45, background: '#FF6B6B', border: "solid white", borderRadius: 15}}>Player 7</Button>
                                <Button className="btn btn-outline-light" style={{width: 50, height: 45, background: '#FF6B6B', border: "solid white", borderRadius: 15}}>Player 8</Button>
                                <Button className="btn btn-outline-light" style={{width: 50, height: 45, background: '#FFE66D', border: "solid white", borderRadius: 15}}>Player 9</Button>
                            </ButtonGroup>
                        </div></div>
                    </div>
  )

  return (
    <>
   
        {/* main content */}
        <div className="row middle-row">
          <div className="col">
            <div className="row-content">
              <div className="container">
                <div className="row">
                <ThemeProvider theme={themeButtonPlayer}>
                <div className="iPhone" style={{width: '430px', height: '932'}}>
                  
                {timeCounter}

                    <div className="row"  style={{width: 430, height: 500, postition: 'relative', backgroundColor: 'green'}}></div>

                {actionButtons}

                {playerButtonsField}
                
                {playerButtonsBench}
                
                </div>
                </ThemeProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </>
  );
}

export default Handball;
