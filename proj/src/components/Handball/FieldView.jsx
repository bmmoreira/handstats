import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";


function FieldView() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  

  return (
   <>
    <div class="flex-item" style={{backgroundColor: 'blue', flexGrow:'2'}}>
                       bruno asdasdasdas
    </div>
   </>
  );
}

export default FieldView;