import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import logoCesae from "../../assets/images/logo_cesae.png";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  return (
   <>

            <div className="row middle-row g-0">
              <div className="col">
                <div className="row-content">
                  <div>
                   
                      <img src={logoCesae}  alt="Cesae Digital" style={{marginTop: '80px', marginBottom: '20px'}} />
                   
                  </div>
                  <div className="intro" style={{marginTop: '30px'}}>
                  <h3>{t("about")}</h3>
                  
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