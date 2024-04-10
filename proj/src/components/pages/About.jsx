import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import appLogo from "../../assets/images/cesae.png";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  return (
   <>

            <div className="row middle-row">
              <div className="col">
                <div className="row-content">
                  <div>
                   
                      <img src={appLogo} className="logo" alt="Handball is Fun logo" />
                   
                  </div>
                  <div className="intro">
                  <h3>About</h3>
                  
                  <p>
                  {t("about_p_01")}  </p>
                  <p> {t("about_p_02")}</p>
              </div>
            
                 
                </div>
              </div>
            </div>
          
   </>
  );
}

export default About;