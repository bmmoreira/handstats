import { useState } from "react";
import { useImmerReducer } from "use-immer";
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import HomeGuest from "./components/pages/HomeGuest";
import Handball from "./components/Handball/Handball";
import About from "./components/pages/About";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import Register from "./components/pages/Register";
import FlashMessages from "./components/pages/FlashMessages";
import AppDrawer from "./components/Drawer/AppDrawer";
import Timeline from "./components/Handball/Timeline";
import Statistics from "./components/Handball/Statistics";
import { playersList } from "./components/Utils/constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ShootingAction from "./components/Handball/ShootingAction";
import BottomDrawer from "./components/Handball/BottomDrawer";


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
    playerList: playersList,
    playersSelected: [],
    playerActive: 0,
    playersOnBench: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    playersOnField: [],
    shotFrom: "",
    shotEnd: "",
    shotResult: "",
    gameTime: 0,
    gameScoreboardHome: 0,
    gameScoreboardAway: 0,
    field_bg_color: "#1a535c",
    colors: {
      primaryColor: "#f7fff7",
      secondaryColor: "#4ecdc4",
      terciaryColor: "#ffe66d",
      quaternaryColor: "#ff6b6b",
    },

    isVisibleAttackButtons: false,
    isVisibleDefenseButtons: false,
    isVisibleSactionButtons: false,
    shootingActionDialogOpen: false,
    gameActions: [],
    drawer: false,
    drawerBottom: false,
  };

  /**
   * This is a reducer function. It's a function that takes two arguments: state and action.
   * Depending on the action type, it modifies the state accordingly.
   *
   * @param {Object} draft - The current state that will be modified.
   * @param {Object} action - The action that will be performed. It should have a 'type' property and optionally a 'value' or 'data' property.
   * @returns {void} This function does not return anything; it directly modifies the state.
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
      case "updatePlayerActive":
        draft.playerActive = action.value;
        break;
      case "playersOnBench":
        draft.playersOnBench = action.value;
        break;
      case "playersOnField":
        draft.playersOnField = action.value;
        break;
      case "updateScoreboardHome":
        draft.gameScoreboardHome = action.value;
        break;
      case "updateScoreboardAway":
        draft.gameScoreboardAway = action.value;
        break;
      case "updatePlayerList":
        draft.playerList = action.value;
        draft.playerActive = 0;
        break;
      case "updatePlayerSelected":
        draft.playersSelected = action.value;
        break;
      case "isVisibleAttackButtons":
        draft.isVisibleAttackButtons = action.value;
        break;
      case "isVisibleDefenseButtons":
        draft.isVisibleDefenseButtons = action.value;
        break;
      case "isVisibleSanctionButtons":
        draft.isVisibleSanctionButtons = action.value;
        break;
      case "turnOffActionsView":
        draft.isVisibleSanctionButtons = false;
        draft.isVisibleDefenseButtons = false;
        draft.isVisibleAttackButtons = false;
        break;
      case "gameActions":
        draft.gameActions.push(action.value);
        draft.isVisibleSanctionButtons = false;
        draft.isVisibleDefenseButtons = false;
        draft.isVisibleAttackButtons = false;
        break;
      case "shootingActionDialogOpen":
        draft.shootingActionDialogOpen = action.value;
        break;
      case "setShootingFrom":
        draft.shotFrom = action.value;
        break;
      case "setShootingEnd":
        draft.shotEnd = action.value;
        draft.shootingActionDialogOpen = action.dialogValue;
        break;
      case "setShootingResult":
        draft.shotEnd = action.value;
        break;
      case "resetShootingAction":
        draft.shotEnd = "";
        draft.shotFrom = "";
        draft.shotResult = "";
        draft.playerActive = 0;
        draft.playersSelected = [];
        break;
      case "toggleDrawer":
        draft.drawer = action.value;
        break;
      case "toggleDrawerBottom":
        draft.drawerBottom = action.value;
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
          {/* g-0 is a utility class that sets the margin and padding to 0 in bootstrap */}
          <div className="container-fluid g-0">
            <div className="row header-row g-0">
              <div className="col">
                <div className="row-content">
                  <Header />
                  <FlashMessages messages={state.flashMessages} />
                </div>
              </div>
            </div>
            <Routes>
              <Route
                path="/"
                element={state.loggedIn ? <Home /> : <HomeGuest />}
              />
              <Route
                path="/handball"
                element={state.loggedIn ? <Handball /> : <Handball />}
              />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<About />} />
              <Route path="/game-timeline" element={<Timeline />} />
              <Route path="/game-statistics" element={<Statistics />} />
            </Routes>
            <div className="row footer-row g-0">
              <div className="col">
                <div className="row-content">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
          <AppDrawer />
          <ShootingAction />
         
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
