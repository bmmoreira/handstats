import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import ViewDesktop from "./ViewDesktop";
import ViewMobileHandball from "./ViewMobileHandball";
import useWindowDimensions from '../Utils/useWindowDimensions.js';
import "./handball.css";


function Handball(props) {
  const { height, width } = useWindowDimensions();


  return (
    <>
   
        {/* main content */}
        <div className="row middle-row g-0">
          <div className="col">
            <div className="row-content">
              <div className="container gx-0 container-fluid h-100" id="mainContainerView" >
                <div className="row gx-0 container-fluid h-100 bg-info" >
                { (width < 768) ? <ViewMobileHandball/> : <ViewDesktop/> }
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </>
  );
}

export default Handball;
