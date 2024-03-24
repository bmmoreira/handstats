import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import appLogo from "../../assets/images/logo_hb03.png";
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from "@mui/material/styles";
import { themeButtonHome } from "../Utils/Themes";
import Button from "@mui/material/Button";

import { useTranslation } from "react-i18next";

function HomeGuest() {
  const { t } = useTranslation();
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="row middle-row">
        <div className="col">
          <div className="row-content">
            <div>
              <img src={appLogo} className="logo" alt="HandballIsFun logo" />
            </div>
            <div className="intro">
              <p>{t("home_text_01")}</p>
            </div>
            <ThemeProvider theme={themeButtonHome}>
            <div className="home-buttons">
             
                <Button
                  size="medium"
                  variant="contained"
                  onClick={() => {
                    console.log("button login clicked");
                  }}
                >
                  {t("Login")}
                </Button>
                <Button
                  size="medium"
                  variant="contained"
                  onClick={() => {
                    console.log("button register clicked");
                    navigate("/register");
                  }}
                >
                  {t("register")}
                </Button>
              
            </div>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeGuest;
