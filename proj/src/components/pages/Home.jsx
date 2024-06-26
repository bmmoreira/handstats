import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import appLogo from "../../assets/images/logo_hb01.png";
import loginBg from "../../assets/images/login_bg.png";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

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
          
          </div>
        </div>
      </div>
   </>
  );
}

export default Home;