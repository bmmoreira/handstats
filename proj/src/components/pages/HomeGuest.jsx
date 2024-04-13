import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import appLogo from "../../assets/images/logo_hb03.png";
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from "@mui/material/styles";
import { themeButtonHome } from "../Utils/Themes";
import Button from "@mui/material/Button";
import loginBg from "../../assets/images/login_bg.png";
import { useTranslation } from "react-i18next";

function HomeGuest() {
  const { t } = useTranslation();
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="row middle-row g-0"
       style={{
        backgroundImage: `url(${loginBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      >
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
                    navigate("/login");
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
