import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";


function ActionsButtons() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  return (
   <>
    <div class="flex-item" style={{backgroundColor: 'orange', flex:'1'}}>
                       alexandre asdasdasdasd
    </div>
   </>
  );
}

export default ActionsButtons;