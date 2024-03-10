import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useImmerReducer } from 'use-immer';
import StateContext from './StateContext';
import DispatchContext from './DispatchContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const initialState = {
    loggedIn: Boolean(localStorage.getItem('aStatsToken')),
    flashMessages: [],
    user: {
      token: localStorage.getItem('aStatsToken'),
      username: localStorage.getItem('aStatsUsername'),
      avatar: localStorage.getItem('aStatsAvatar'),
      email: localStorage.getItem('aStatsEmail')
    },

  };

    /*
    This is a reducer function. It's a function that takes two arguments: state and action.
    */
  function mapReducer(draft, action) {
    switch (action.type) {
      case 'login':
        draft.loggedIn = true;
        draft.user = action.data;
        break;
      case 'logout':
        draft.loggedIn = false;
        break;
      case 'flashMessages':
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
      <Header />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
