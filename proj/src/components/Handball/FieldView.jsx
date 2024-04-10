import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import "./fieldview.css";
import ActionsView from "./ActionsView";
import Box from "@mui/material/Box";
import { fieldBox } from "../Utils/Themes";

function FieldView(props) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  return (
    <>
      <Box sx={{ ...fieldBox }}>
        <div
          className="flex-item"
          style={{
            backgroundColor: appState.field_bg_color,
            flexGrow: "2",
            position: "relative",
          }}
        >
          {appState.isVisibleAttackButtons && <ActionsView type="attack" />}
          {appState.isVisibleDefenseButtons && <ActionsView type="defense" />}
          {appState.isVisibleSanctionButtons && <ActionsView type="sanction" />}
          <svg
            id="courtgoal"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 106.43 81.19"
            onClick={props.fieldClick}
          >
            <defs>
              <style>
                {`
                            
                                .cls-1 {
                                    fill: ${appState.field_bg_color};
                                }

                                .cls-1,
                                .cls-2,
                                .cls-3,
                                .cls-4,
                                .cls-5,
                                .cls-6,
                                .cls-7,
                                .cls-8 {
                                    stroke-width: 0px;
                                }

                                .cls-9 {
                                    stroke-width: .2px;
                                }

                                .cls-9,
                                .cls-10,
                                .cls-11 {
                                    stroke: #c0bfbf;
                                }

                                .cls-9,
                                .cls-10,
                                .cls-11,
                                .cls-12 {
                                    fill: none;
                                }

                                .cls-9,
                                .cls-11,
                                .cls-12 {
                                    stroke-miterlimit: 10;
                                }

                                .cls-2 {
                                    fill: #81c341;
                                }

                                .cls-10 {
                                    stroke-linecap: round;
                                    stroke-linejoin: round;
                                    stroke-width: .8px;
                                }

                                .cls-11 {
                                    stroke-width: .24px;
                                }

                                .cls-3 {
                                    fill: #f6f6f6;
                                }

                                .cls-4 {
                                    fill: #fff;
                                }

                                .cls-12 {
                                    stroke: #fff;
                                    stroke-width: .5px;
                                }

                                .cls-5 {
                                    fill: #d53127;
                                }

                                .cls-6 {
                                    fill: #82c341;
                                }

                                .cls-7 {
                                    fill: #d53027;
                                }

                                .cls-8 {
                                    fill: #4cbd96;
                                }`}
              </style>
            </defs>
            <g id="Estatico" width={"500px"}>
              <rect
                id="Fundo"
                className="cls-1"
                x="0"
                width="106.42"
                height="81.19"
              />
              <g id="Campo">
                <path
                  id="Exterior_Campo"
                  className="cls-8"
                  d="M0,51.42v4.05h106.42v-4.05H0Z"
                />
                <path
                  id="Linha_Campo"
                  className="cls-3"
                  d="M0,55.21v.51h106.42v-.51H0Z"
                />
                <path
                  id="Linha_6m"
                  className="cls-3"
                  d="M8.5,55.22l.02.25v.25s.15,2.25.15,2.25c.26,4.39,16.39,7.99,37.48,7.99h16.36c21.09,0,37.17-3.6,37.38-7.99l.11-2.25v-.25s.02-.25.02-.25H8.5ZM96.91,57.89c-.33,4.03-15.16,7.31-34.47,7.31h-16.23c-19.31,0-34.19-3.28-34.57-7.31l-.19-2.06h85.62l-.16,2.06Z"
                />
                <g id="Linha_9m">
                  <path
                    className="cls-3"
                    d="M82.07,69.76l.54.83c2.81-.06,5.62-.17,8.35-.31l-.98-.81c-2.58.14-5.24.24-7.9.3Z"
                  />
                  <path
                    className="cls-3"
                    d="M98.95,69.72c2.57-.22,5.09-.48,7.47-.77l-1.79-.73c-2.26.27-4.65.52-7.09.73l1.4.77Z"
                  />
                  <path
                    className="cls-3"
                    d="M1.81,68.18L0,68.91c2.37.29,4.87.56,7.44.78l1.42-.77c-2.43-.21-4.8-.46-7.05-.73Z"
                  />
                  <polygon
                    className="cls-3"
                    points="49.03 69.83 48.99 70.66 57.37 70.66 57.34 69.83 49.03 69.83"
                  />
                  <polygon
                    className="cls-3"
                    points="32.41 69.83 32.24 70.66 40.62 70.66 40.72 69.83 32.41 69.83"
                  />
                  <polygon
                    className="cls-3"
                    points="73.95 69.83 65.64 69.83 65.74 70.66 74.12 70.66 73.95 69.83"
                  />
                  <path
                    className="cls-3"
                    d="M16.41,69.44l-1,.81c2.71.15,5.52.26,8.33.32l.56-.83c-2.66-.06-5.32-.17-7.89-.31Z"
                  />
                </g>
                <path
                  id="Area_Baliza"
                  className="cls-8"
                  d="M97.08,55.83H11.45l.19,2.06c.38,4.03,15.25,7.31,34.57,7.31h16.23c19.31,0,34.14-3.28,34.47-7.31l.17-2.06Z"
                />
              </g>
              <g id="Baliza">
                <g id="Rede">
                  <g id="Rede_Centro_Hor">
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="52.08"
                      x2="84.81"
                      y2="52.08"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="49.73"
                      x2="84.81"
                      y2="49.73"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="47.39"
                      x2="84.81"
                      y2="47.39"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="45.04"
                      x2="84.81"
                      y2="45.04"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="42.7"
                      x2="84.81"
                      y2="42.7"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="40.36"
                      x2="84.81"
                      y2="40.36"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="38.01"
                      x2="84.81"
                      y2="38.01"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="35.67"
                      x2="84.81"
                      y2="35.67"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="33.32"
                      x2="84.81"
                      y2="33.32"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="30.98"
                      x2="84.81"
                      y2="30.98"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="28.63"
                      x2="84.81"
                      y2="28.63"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="26.29"
                      x2="84.81"
                      y2="26.29"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="23.95"
                      x2="84.81"
                      y2="23.95"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="21.6"
                      x2="84.81"
                      y2="21.6"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="19.26"
                      x2="84.81"
                      y2="19.26"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="16.91"
                      x2="84.81"
                      y2="16.91"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="14.57"
                      x2="84.81"
                      y2="14.57"
                    />
                  </g>
                  <g id="Rede_Esq_Hor">
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="52.08"
                      x2="18.47"
                      y2="55.16"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="49.73"
                      x2="18.47"
                      y2="52.81"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="47.39"
                      x2="18.47"
                      y2="50.47"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="45.04"
                      x2="18.47"
                      y2="48.13"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="42.7"
                      x2="18.47"
                      y2="45.78"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="40.36"
                      x2="18.47"
                      y2="43.44"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="38.01"
                      x2="18.47"
                      y2="41.09"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="35.67"
                      x2="18.47"
                      y2="38.75"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="33.32"
                      x2="18.47"
                      y2="36.4"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="30.98"
                      x2="18.47"
                      y2="34.06"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="28.63"
                      x2="18.47"
                      y2="31.72"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="26.29"
                      x2="18.47"
                      y2="28.97"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="23.95"
                      x2="18.47"
                      y2="26.62"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="21.6"
                      x2="18.47"
                      y2="23.88"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="19.26"
                      x2="18.47"
                      y2="20.73"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="16.91"
                      x2="18.47"
                      y2="17.98"
                    />
                    <line
                      className="cls-9"
                      x1="22.52"
                      y1="14.57"
                      x2="18.47"
                      y2="15.24"
                    />
                  </g>
                  <g id="Rede_Dir_Hor">
                    <line
                      className="cls-9"
                      x1="84.81"
                      y1="52.08"
                      x2="88.85"
                      y2="55.16"
                    />
                    <line
                      className="cls-9"
                      x1="84.81"
                      y1="49.73"
                      x2="88.85"
                      y2="52.81"
                    />
                    <line
                      className="cls-9"
                      x1="84.81"
                      y1="47.39"
                      x2="88.85"
                      y2="50.47"
                    />
                    <line
                      className="cls-9"
                      x1="84.81"
                      y1="45.04"
                      x2="88.85"
                      y2="48.13"
                    />
                    <line
                      className="cls-9"
                      x1="84.81"
                      y1="42.7"
                      x2="88.85"
                      y2="45.78"
                    />
                    <line
                      className="cls-9"
                      x1="84.81"
                      y1="40.36"
                      x2="88.85"
                      y2="43.44"
                    />
                    <line
                      className="cls-9"
                      x1="84.81"
                      y1="38.01"
                      x2="88.85"
                      y2="41.09"
                    />
                    <line
                      className="cls-9"
                      x1="84.81"
                      y1="35.67"
                      x2="88.85"
                      y2="38.75"
                    />
                    <line
                      className="cls-9"
                      x1="84.81"
                      y1="33.32"
                      x2="88.85"
                      y2="36.4"
                    />
                    <line
                      className="cls-9"
                      x1="84.81"
                      y1="30.98"
                      x2="88.85"
                      y2="34.06"
                    />
                    <line
                      className="cls-9"
                      x1="84.81"
                      y1="28.63"
                      x2="88.85"
                      y2="31.72"
                    />
                    <line
                      className="cls-9"
                      x1="84.81"
                      y1="26.29"
                      x2="88.85"
                      y2="28.97"
                    />
                    <line
                      className="cls-9"
                      x1="84.81"
                      y1="23.95"
                      x2="88.85"
                      y2="26.62"
                    />
                    <line
                      className="cls-9"
                      x1="84.81"
                      y1="21.6"
                      x2="88.85"
                      y2="23.88"
                    />
                    <line
                      className="cls-9"
                      x1="84.81"
                      y1="19.26"
                      x2="88.85"
                      y2="20.73"
                    />
                    <line
                      className="cls-9"
                      x1="84.81"
                      y1="16.91"
                      x2="88.85"
                      y2="17.98"
                    />
                    <line
                      className="cls-9"
                      x1="84.81"
                      y1="14.57"
                      x2="88.85"
                      y2="15.24"
                    />
                  </g>
                  <g id="Rede_Vert">
                    <line
                      className="cls-10"
                      x1="22.52"
                      y1="12.74"
                      x2="22.52"
                      y2="52.08"
                    />
                    <line
                      className="cls-11"
                      x1="24.5"
                      y1="52.08"
                      x2="24.5"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="19.59"
                      y1="54.34"
                      x2="19.59"
                      y2="13.61"
                    />
                    <line
                      className="cls-11"
                      x1="21.26"
                      y1="53.02"
                      x2="21.26"
                      y2="12.29"
                    />
                    <line
                      className="cls-11"
                      x1="87.67"
                      y1="54.34"
                      x2="87.67"
                      y2="13.61"
                    />
                    <line
                      className="cls-11"
                      x1="85.99"
                      y1="53.02"
                      x2="85.99"
                      y2="12.29"
                    />
                    <line
                      className="cls-11"
                      x1="26.91"
                      y1="52.08"
                      x2="26.91"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="29.32"
                      y1="52.08"
                      x2="29.32"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="31.73"
                      y1="52.08"
                      x2="31.73"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="34.15"
                      y1="52.08"
                      x2="34.15"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="36.56"
                      y1="52.08"
                      x2="36.56"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="38.97"
                      y1="52.08"
                      x2="38.97"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="41.38"
                      y1="52.08"
                      x2="41.38"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="43.79"
                      y1="52.08"
                      x2="43.79"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="46.2"
                      y1="52.08"
                      x2="46.2"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="48.61"
                      y1="52.08"
                      x2="48.61"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="51.02"
                      y1="52.08"
                      x2="51.02"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="53.44"
                      y1="52.08"
                      x2="53.44"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="55.85"
                      y1="52.08"
                      x2="55.85"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="58.26"
                      y1="52.08"
                      x2="58.26"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="60.67"
                      y1="52.08"
                      x2="60.67"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="63.08"
                      y1="52.08"
                      x2="63.08"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="65.49"
                      y1="52.08"
                      x2="65.49"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="67.9"
                      y1="52.08"
                      x2="67.9"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="70.31"
                      y1="52.08"
                      x2="70.31"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="72.73"
                      y1="52.08"
                      x2="72.73"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="75.14"
                      y1="52.08"
                      x2="75.14"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="77.55"
                      y1="52.08"
                      x2="77.55"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="79.96"
                      y1="52.08"
                      x2="79.96"
                      y2="12.74"
                    />
                    <line
                      className="cls-11"
                      x1="82.37"
                      y1="52.08"
                      x2="82.37"
                      y2="12.74"
                    />
                    <line
                      className="cls-10"
                      x1="84.81"
                      y1="52.08"
                      x2="84.81"
                      y2="12.74"
                    />
                  </g>
                </g>
                <g id="Baliza_Divisao">
                  <line
                    id="Div_Vert_2"
                    className="cls-12"
                    x1="65.49"
                    y1="55.72"
                    x2="65.49"
                    y2="12.74"
                  />
                  <path
                    id="Div_Vert_1"
                    className="cls-12"
                    d="M41.38,55.72V12.74v42.98Z"
                  />
                  <line
                    id="Div_Hor_2"
                    className="cls-12"
                    x1="18.22"
                    y1="41.53"
                    x2="89.03"
                    y2="41.53"
                  />
                  <line
                    id="Div_Hor_1"
                    className="cls-12"
                    x1="18.34"
                    y1="27.58"
                    x2="88.97"
                    y2="27.58"
                  />
                </g>
                <g id="Barras">
                  <g id="Poste_Esq" data-name="Poste Esq">
                    <path
                      className="cls-7"
                      d="M16.36,51.47h2.11v4.37c0,.33-.27.6-.6.6h-.9c-.33,0-.6-.27-.6-.6v-4.37h0Z"
                    />
                    <rect
                      className="cls-4"
                      x="16.36"
                      y="46.5"
                      width="2.11"
                      height="4.97"
                    />
                    <rect
                      className="cls-7"
                      x="16.36"
                      y="41.53"
                      width="2.11"
                      height="4.97"
                    />
                    <rect
                      className="cls-4"
                      x="16.36"
                      y="36.55"
                      width="2.11"
                      height="4.97"
                    />
                    <rect
                      className="cls-7"
                      x="16.36"
                      y="31.58"
                      width="2.11"
                      height="4.97"
                    />
                    <rect
                      className="cls-4"
                      x="16.36"
                      y="26.61"
                      width="2.11"
                      height="4.97"
                    />
                    <rect
                      className="cls-7"
                      x="16.36"
                      y="21.63"
                      width="2.11"
                      height="4.97"
                    />
                    <rect
                      className="cls-4"
                      x="16.36"
                      y="16.66"
                      width="2.11"
                      height="4.97"
                    />
                    <polygon
                      className="cls-5"
                      points="18.47 13.8 16.36 11.69 16.36 16.66 18.47 16.66 18.47 13.8"
                    />
                  </g>
                  <g id="Poste_Dir" data-name="Poste Dir">
                    <path
                      className="cls-5"
                      d="M89.45,51.47h.9c.33,0,.6.27.6.6v4.37h-2.11v-4.37c0-.33.27-.6.6-.6Z"
                      transform="translate(179.81 107.92) rotate(180)"
                    />
                    <rect
                      className="cls-4"
                      x="88.85"
                      y="46.5"
                      width="2.11"
                      height="4.97"
                      transform="translate(179.81 97.97) rotate(180)"
                    />
                    <rect
                      className="cls-7"
                      x="88.85"
                      y="41.53"
                      width="2.11"
                      height="4.97"
                      transform="translate(179.81 88.03) rotate(180)"
                    />
                    <rect
                      className="cls-4"
                      x="88.85"
                      y="36.55"
                      width="2.11"
                      height="4.97"
                      transform="translate(179.81 78.08) rotate(180)"
                    />
                    <rect
                      className="cls-7"
                      x="88.85"
                      y="31.58"
                      width="2.11"
                      height="4.97"
                      transform="translate(179.81 68.14) rotate(180)"
                    />
                    <rect
                      className="cls-4"
                      x="88.85"
                      y="26.61"
                      width="2.11"
                      height="4.97"
                      transform="translate(179.81 58.19) rotate(180)"
                    />
                    <rect
                      className="cls-7"
                      x="88.85"
                      y="21.63"
                      width="2.11"
                      height="4.97"
                      transform="translate(179.81 48.24) rotate(180)"
                    />
                    <rect
                      className="cls-4"
                      x="88.85"
                      y="16.66"
                      width="2.11"
                      height="4.97"
                      transform="translate(179.81 38.3) rotate(180)"
                    />
                    <polygon
                      className="cls-7"
                      points="88.85 13.8 90.96 11.69 90.96 16.66 88.85 16.66 88.85 13.8"
                    />
                  </g>
                  <g id="Trave">
                    <polygon
                      className="cls-7"
                      points="18.47 13.8 16.36 11.69 21.34 11.69 21.34 13.8 18.47 13.8"
                    />
                    <rect
                      className="cls-4"
                      x="22.77"
                      y="10.26"
                      width="2.11"
                      height="4.97"
                      transform="translate(36.57 -11.08) rotate(90)"
                    />
                    <rect
                      className="cls-7"
                      x="27.74"
                      y="10.26"
                      width="2.11"
                      height="4.97"
                      transform="translate(41.54 -16.05) rotate(90)"
                    />
                    <rect
                      className="cls-4"
                      x="32.71"
                      y="10.26"
                      width="2.11"
                      height="4.97"
                      transform="translate(46.51 -21.03) rotate(90)"
                    />
                    <rect
                      className="cls-7"
                      x="37.69"
                      y="10.26"
                      width="2.11"
                      height="4.97"
                      transform="translate(51.49 -26) rotate(90)"
                    />
                    <rect
                      className="cls-4"
                      x="42.66"
                      y="10.26"
                      width="2.11"
                      height="4.97"
                      transform="translate(56.46 -30.97) rotate(90)"
                    />
                    <rect
                      className="cls-7"
                      x="47.63"
                      y="10.26"
                      width="2.11"
                      height="4.97"
                      transform="translate(61.43 -35.95) rotate(90)"
                    />
                    <rect
                      className="cls-4"
                      x="52.61"
                      y="10.26"
                      width="2.11"
                      height="4.97"
                      transform="translate(66.41 -40.92) rotate(90)"
                    />
                    <rect
                      className="cls-7"
                      x="57.58"
                      y="10.26"
                      width="2.11"
                      height="4.97"
                      transform="translate(71.38 -45.89) rotate(90)"
                    />
                    <rect
                      className="cls-4"
                      x="62.55"
                      y="10.26"
                      width="2.11"
                      height="4.97"
                      transform="translate(76.35 -50.87) rotate(90)"
                    />
                    <rect
                      className="cls-7"
                      x="67.53"
                      y="10.26"
                      width="2.11"
                      height="4.97"
                      transform="translate(81.32 -55.84) rotate(90)"
                    />
                    <rect
                      className="cls-4"
                      x="72.5"
                      y="10.26"
                      width="2.11"
                      height="4.97"
                      transform="translate(86.3 -60.81) rotate(90)"
                    />
                    <rect
                      className="cls-7"
                      x="77.47"
                      y="10.26"
                      width="2.11"
                      height="4.97"
                      transform="translate(91.27 -65.79) rotate(90)"
                    />
                    <rect
                      className="cls-4"
                      x="82.45"
                      y="10.26"
                      width="2.11"
                      height="4.97"
                      transform="translate(96.24 -70.76) rotate(90)"
                    />
                    <polygon
                      className="cls-7"
                      points="88.85 13.8 90.96 11.69 85.99 11.69 85.99 13.8 88.85 13.8"
                    />
                  </g>
                </g>
              </g>
            </g>
            <g id="Interativo">
              <g id="Zonas_Baliza">
                <rect
                  id="baliza9"
                  className="cls-2 shotTarget"
                  x="65.49"
                  y="41.53"
                  width="23.37"
                  height="14.23"
                />
                <rect
                  id="baliza8"
                  className="cls-2 shotTarget"
                  x="41.38"
                  y="41.53"
                  width="24.11"
                  height="14.23"
                />
                <rect
                  id="baliza7"
                  className="cls-2 shotTarget"
                  x="18.47"
                  y="41.53"
                  width="22.91"
                  height="14.23"
                />
                <rect
                  id="baliza6"
                  className="cls-2 shotTarget"
                  x="65.49"
                  y="27.59"
                  width="23.37"
                  height="13.94"
                />
                <rect
                  id="baliza5"
                  className="cls-2 shotTarget"
                  x="41.38"
                  y="27.59"
                  width="24.11"
                  height="13.94"
                />
                <rect
                  id="baliza4"
                  className="cls-2 shotTarget"
                  x="18.47"
                  y="27.59"
                  width="22.91"
                  height="13.94"
                />
                <rect
                  id="baliza3"
                  className="cls-2 shotTarget"
                  x="65.49"
                  y="13.8"
                  width="23.37"
                  height="13.79"
                />
                <rect
                  id="baliza2"
                  className="cls-2 shotTarget"
                  x="41.38"
                  y="13.8"
                  width="24.11"
                  height="13.79"
                />
                <rect
                  id="baliza1"
                  className="cls-2 shotTarget"
                  x="18.47"
                  y="13.8"
                  width="22.91"
                  height="13.79"
                />
                <polygon
                  id="fora"
                  className="st10 shotTarget"
                  points="92.3,0 91,0 16.3,0 14.8,0 0,0 0,55.8 16.3,55.8 16.3,11.7 91,11.7 91,55.8 106.5,55.8 
			106.5,0 		"
                />
              </g>
              <g id="Zonas_Remate">
                <path
                  id="Area_Baliza-2"
                  data-name="Area_Baliza"
                  className="cls-6"
                  d="M98.4,55.72c0,.87-.05,2.34-.32,2.77-.28.44-1.16,2.07-5.72,3.66h-.01c-1.88.67-4.39,1.32-7.74,1.87-3.82.64-8.8,1.08-15.09,1.34-4.63.19-9.98.28-16.08.28s-10.92-.13-15.27-.37c-11.21-.58-17.76-1.8-21.62-3.02-.51-.16-.98-.32-1.41-.49-3.17-1.23-4.39-2.6-4.72-3.27-.25-.51-.34-1.91-.37-2.77h88.35Z"
                />
                <path
                  id="_6m_5"
                  data-name="6m_5"
                  className="cls-6 shotFrom"
                  d="M106.43,55.72v12.71c-.06.01-.13.02-.19.03l-13.88-6.31c4.56-1.59,5.44-3.22,5.72-3.66.27-.43.32-1.9.32-2.77h8.03Z"
                />
                <path
                  id="_6m_4"
                  data-name="6m_4"
                  className="cls-6 shotFrom"
                  d="M106.24,68.46c-9.8,1.35-23.6,1.75-34.75,1.84l-1.97-4.94c6.29-.26,11.27-.7,15.09-1.34,3.35-.55,5.86-1.2,7.74-1.87h.01l13.88,6.31Z"
                />
                <path
                  id="_6m_3"
                  data-name="6m_3"
                  className="cls-6 shotFrom"
                  d="M71.49,70.3c-8.94.07-16.17-.06-18.28-.06-1.92,0-8.56.1-16.72.06l1.68-5.03c4.35.24,9.4.37,15.27.37s11.45-.09,16.08-.28l1.97,4.94Z"
                />
                <path
                  id="_6m_2"
                  data-name="6m_2"
                  className="cls-6 shotFrom"
                  d="M38.17,65.27l-1.68,5.03c-12.42-.06-28.34-.45-36.48-2.03l15.13-6.51c.43.17.9.33,1.41.49,3.86,1.22,10.41,2.44,21.62,3.02Z"
                />
                <path
                  id="_6m_1"
                  data-name="6m_1"
                  className="cls-6 shotFrom"
                  d="M15.14,61.76L.01,68.27h-.01v-12.55h10.05c.03.86.12,2.26.37,2.77.33.67,1.55,2.04,4.72,3.27Z"
                />
                <path
                  id="_9m_3"
                  data-name="9m_3"
                  className="cls-6 shotFrom"
                  d="M106.43,68.54v12.64h-30.61l-4.33-10.88c11.15-.09,24.95-.49,34.75-1.84l.19.08Z"
                />
                <path
                  id="_9m_2"
                  data-name="9m_2"
                  className="cls-6 shotFrom"
                  d="M75.82,81.18h-42.94l3.61-10.88c8.16.04,14.8-.06,16.72-.06,2.11,0,9.34.13,18.28.06l4.33,10.88Z"
                />
                <path
                  id="_9m_1"
                  data-name="9m_1"
                  className="cls-6 shotFrom"
                  d="M36.49,70.3l-3.61,10.88H0v-12.9h.01c8.14,1.57,24.06,1.96,36.48,2.02Z"
                />
              </g>
            </g>
          </svg>
        </div>
      </Box>
    </>
  );
}

export default FieldView;
