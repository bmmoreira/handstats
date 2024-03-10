import React, { useContext } from 'react';
import StateContext from '../../StateContext';

function Footer(props) {
  const appState = useContext(StateContext);

  return (
    <footer className="">{appState.loggedIn ? "Logado" : "Não Logado"}</footer>
  );
}

export default Footer;