import { useState, useEffect } from "react";
import { useImmerReducer } from "use-immer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StateContext from "./StateContext";
import DispatchContext from "./DispatchContext";
import Home from "./components/pages/Home";
import HomeGuest from "./components/pages/HomeGuest";
import Handball from "./components/Handball/Handball";
import About from "./components/pages/About";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import HandballGuest from "./components/pages/HandballGuest";
import FlashMessages from "./components/pages/FlashMessages";
import AppDrawer from "./components/Drawer/AppDrawer";
import { playersList } from "./components/Utils/constants";
import ShootingAction from "./components/Handball/ShootingAction";
import Axios from "axios";
import Statistics from "./components/Handball/Statistics";
import Timeline from "./components/Handball/Timeline";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const SET_PLAYER_LIST = "SET_PLAYER_LIST";

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
    playerListDB: null,
    playersSelected: [],
    playerActive: 0,
    playerActiveBenched: 0,
    playersOnBench: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    playersOnField: [],
    shotFrom: "",
    shotEnd: "",
    shotResult: "",
    gameTime: 0,
    scoreMyTeam: 0,
    scoreOpponentTeam: 0,
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
    timeLine: [],
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
      case "updatePlayerActiveBenched":
        draft.playerActiveBenched = action.value;
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
      case "updateGameTime":
        draft.gameTime = action.value;
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
      case "scoreMyTeam":
        draft.scoreMyTeam = action.value;
        break;
      case "scoreOpponentTeam":
        draft.scoreOpponentTeam = action.value;
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
      case SET_PLAYER_LIST:
        draft.playerListDB = action.payload;
        break;
    }
  }
  /*
    Immer gives us a copy of state. A perfectly cloned copy that we are free to modify and change however we want.
    And then Immer will automatically handle the task of giving that draft object back to React.
   */
  const [state, dispatch] = useImmerReducer(mapReducer, initialState);

  useEffect(() => {
    const getPlayerList = async () => {
      const res = await Axios("https://api.handballisfun.org/api/players");
      console.log(res.data.data);
      dispatch({ type: SET_PLAYER_LIST, payload: res.data.data });
    };

    getPlayerList();
  }, [dispatch]);

  useEffect(() => {
    if (state.playerListDB) {
      console.log(state.playerListDB);
      const playerList = state.playerListDB.map((player) => {
        return {
          name: player.attributes.name,
          nickname: player.attributes.nickname,
          number: player.attributes.number,
          id: player.attributes.id,
          active: player.attributes.active,
          state: player.attributes.state,
          selected: player.attributes.selected,
          pos: player.attributes.pos,
        };
      });
      dispatch({ type: "updatePlayerList", value: playerList });
    }
  }, [state.playerListDB]);

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
                element={state.loggedIn ? <Handball /> : <HandballGuest />}
              />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/game-timeline"
                element={state.loggedIn ? <Timeline /> : <HandballGuest />}
              />
              <Route
                path="/game-statistics"
                element={state.loggedIn ? <Statistics /> : <HandballGuest />}
              />
            </Routes>
            <div className="row footer-row g-0">
              <div className="col">
                <div className="row-content">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
          <AppDrawer  />
          <ShootingAction />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
