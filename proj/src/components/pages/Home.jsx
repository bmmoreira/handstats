import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import appLogo from "../../assets/images/logo_hb01.png";

function Home() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  return (
   <>
   
            <div className="row middle-row">
              <div className="col">
                <div className="row-content">
                  <div>
                    
                      <img src={appLogo} className="logo" alt="Handball is Fun" />
                    
                  </div>
                  <h3>Introducing HandyStats</h3>
                  <h1>Your Ultimate Handball Companion</h1>
                  
                  <p>
                    Welcome to HandStats, the definitive mobile app designed to
                    revolutionize the way you track and analyze handball
                    statistics during real-time gameplay.
                  </p>
                  <p>
                    Whether you're a seasoned coach, a passionate player, or an
                    enthusiastic fan, HandStats is your go-to tool for gaining
                    deep insights into every aspect of the game.
                  </p>
                </div>
              </div>
            </div>
          
   </>
  );
}

export default Home;