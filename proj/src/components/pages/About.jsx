import React, { useContext } from "react";
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";
import Header from "./Header";
import Footer from "./Footer";
import appLogo from "../../assets/images/logo_handyStats.png";

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
                  <h3>About</h3>
                  
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, quis. Animi numquam voluptatum sit velit odio quisquam totam atque laboriosam sapiente distinctio, deserunt architecto necessitatibus maxime commodi perspiciatis placeat eos.
                  </p>
                 
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