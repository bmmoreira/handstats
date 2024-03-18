import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import Header from "./Header";
import Footer from "./Footer";
import appLogo from "../../assets/images/logo_hb01.png";
import appLogoHorizontal from "../../assets/images/logo_hb01_horizontal02.png";

function HomeGuest() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  return (
    <>
      {/* g-0 is a utility class that sets the margin and padding to 0 in bootstrap */}
      <div className="container-fluid g-0">
        <div className="row header-row">
          <div className="col">
            <div className="row-content">
              <Header />
            </div>
          </div>
        </div>
        <div className="row middle-row">
          <div className="col">
            <div className="row-content">
              <div>
                <img src={appLogo} className="logo" alt="HandballIsFun logo" />
              </div>
              <div className="intro">
              <img src={appLogoHorizontal} alt="HandballIsFun logo" style={{ margin: '10px'}} />
               
                <p>
                  The definitive mobile app designed to
                  revolutionize the way you track and analyze handball
                  statistics during real-time gameplay.
                </p>
                <p>
                  Whether you're a seasoned coach, a passionate player, or an
                  enthusiastic fan, HandballIsFun is your go-to tool for gaining
                  deep insights into every aspect of the game.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-row">
          <div className="col">
            <div className="row-content">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeGuest;
