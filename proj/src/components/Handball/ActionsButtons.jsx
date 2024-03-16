import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";

function ActionsButtons() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  return (
    <>
      <div className="flex-item" style={{ backgroundColor: "orange", flex: "1" }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <button type="button" className="bn632-hover bn25">
                Button 1
              </button>
            </div>
            <div className="col">
              <button type="button" className="bn632-hover bn25">
                Button 2
              </button>
            </div>
            <div className="col">
              <button type="button" className="bn632-hover bn25">
                Button 3
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActionsButtons;
