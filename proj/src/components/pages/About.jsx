import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import Header from "./Header";
import Footer from "./Footer";
import appLogo from "../../assets/images/logotipo_cesae_digital.png";

function About() {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  return (
   <>
    {/* g-0 is a utility class that sets the margin and padding to 0 in bootstrap */}
    <div className="container-fluid g-0">
            <div className="row header-row">
              <div className="col">
                <div className="row-content">
                  <Header />
                </div>
              </div>
            </div>
            <div className="row middle-row">
              <div className="col">
                <div className="row-content">
                  <div>
                   
                      <img src={appLogo} className="logo" alt="Handball is Fun logo" />
                   
                  </div>
                  <div className="intro">
                  <h3>About</h3>
                  
                  <p>
                  This application is one the final projects of the CESAE DIGITAL FrontEnd Developer Course 2023/2024 taking place in Lisbon within the scope of PRO_MOV by Reskilling 4 Employment.
                  </p>
                  <p>Team members in alphabetical order: Alexandre Novas, Bruno Moreira, Carina Coelho, João Souza, Nuno Soares. Client Tutor: João Câncio. Project Supervisors: Helena Passos, José Alfaiate and Bruno Santos </p>
              </div>
            
                 
                </div>
              </div>
            </div>
            <div className="row footer-row">
              <div className="col">
                <div className="row-content">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
   </>
  );
}

export default About;