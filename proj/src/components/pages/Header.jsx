import React, { useContext } from 'react';
import StateContext from '../../StateContext';

function Header(props) {
  const appState = useContext(StateContext);

  return (
    <header className="">{appState.loggedIn ? "Logado" : "Não Logado"}</header>
  );
}

export default Header;