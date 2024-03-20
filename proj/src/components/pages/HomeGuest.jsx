import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import appLogo from "../../assets/images/logo_hb01.png";
import appLogoHorizontal from "../../assets/images/logo_hb01_horizontal02.png";
import { useTranslation } from "react-i18next";

function HomeGuest() {
  const { t } = useTranslation();
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  return (
    <>
 
        <div className="row middle-row">
          <div className="col">
            <div className="row-content">
              <div>
                <img src={appLogo} className="logo" alt="HandballIsFun logo" />
              </div>
              <div className="intro">
              <img src={appLogoHorizontal} alt="HandballIsFun logo" style={{ margin: '10px'}} />
               
                <p>
                {t("home_text_01")}
                </p>
                <p>
                {t("home_text_02")}
                </p>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default HomeGuest;
