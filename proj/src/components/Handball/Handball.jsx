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

function Handball(props) {
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
              <div className="container">
                <div className="row">
                  {/* First Main Column - Players in Bench and Active */}
                  <div className="col-md-4" style={{ padding: "5px" }}>
                    <PlayerSelection />
                  </div>
                  {/* Second Main Column - Handball Field and Action Button */}
                  <div className="col-md-4" style={{ padding: "5px" }}>
                    <div
                      className="flex-container"
                      style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <FieldView />
                      <ActionsButtons />
                    </div>
                  </div>
                  {/* Third Main Column - TimeCounter, Timeline and Statistcs */}
                  <div className="col-md-4" style={{ padding: "5px" }}>
                    <StatsView />
                  </div>
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
