import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import PlayerSelection from "./PlayersSelection";
import StatsView from "./StatsView";
import ActionsButtons from "./ActionsButtons";
import FieldView from "./FieldView";
import "./handball.css";

function Handball() {
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
        {/* main content */}
        <div className="row middle-row">
          <div className="col">
            <div className="row-content">
              <div class="container">
                <div class="row">
                    {/* Nuno content */}
                    <PlayerSelection/>
                   {/* Alex & Bruno content */}
                  <div class="col-md-4" style={{backgroundColor: 'green'}}>
                    <div class="flex-container" style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                      {/* Bruno content */}
                     <FieldView/>
                      
                      {/* Alex content */}
                      <ActionsButtons/>
                    </div>
                  </div>
                   {/* Joao content */}
                  <StatsView/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer content */}
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

export default Handball;
