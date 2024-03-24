import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import ViewDesktop from "./ViewDesktop";
import ViewMobile from "./ViewMobile";
import useWindowDimensions from '../Utils/useWindowDimensions.js';
import "./handball.css";


function Handball(props) {
  const { height, width } = useWindowDimensions();
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  return (
    <>
   
        {/* main content */}
        <div className="row middle-row">
          <div className="col">
            <div className="row-content">
              <div className="container">
                <div className="row gx-0">
                { (width < 576) ? <ViewMobile/> : <ViewDesktop/> }
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </>
  );
}

export default Handball;
