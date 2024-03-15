import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";

function StatsView() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  return (
    <>
      <div class="col-md-4" style={{ backgroundColor: "yellow" }}>
        <div class="flex-container">
          <div class="flex-item">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Placeholder Image"
            />
          </div>
          <div class="flex-item">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Placeholder Image"
            />
          </div>
          <div class="flex-item">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Placeholder Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default StatsView;
