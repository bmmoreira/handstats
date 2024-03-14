import { useState } from "react";
import { useImmerReducer } from "use-immer";
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import HomeGuest from "./components/pages/HomeGuest";
import Handball from "./components/Handball/Handball";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const initialState = {
    loggedIn: Boolean(localStorage.getItem("aStatsToken")),
    flashMessages: [],
    user: {
      token: localStorage.getItem("aStatsToken"),
      username: localStorage.getItem("aStatsUsername"),
      avatar: localStorage.getItem("aStatsAvatar"),
      email: localStorage.getItem("aStatsEmail"),
    },
  };

  /*
    This is a reducer function. It's a function that takes two arguments: state and action.
    */
  function mapReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true;
        draft.user = action.data;
        break;
      case "logout":
        draft.loggedIn = false;
        break;
      case "flashMessages":
        draft.flashMessages.push(action.value);
        break;
    }
  }
  /*
    Immer gives us a copy of state. A perfectly cloned copy that we are free to modify and change however we want.
    And then Immer will automatically handle the task of giving that draft object back to React.
   */
  const [state, dispatch] = useImmerReducer(mapReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
       
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={state.loggedIn ? <Home /> : <HomeGuest />}
            />
             <Route
              path="/handball"
              element={state.loggedIn ? <Handball /> : <Handball />}
            />
          </Routes>
        </BrowserRouter>
        
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
