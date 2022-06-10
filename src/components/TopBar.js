import React from "react";
import { Link, Route, Switch } from "react-router-dom";
//import NotFound from "./NotFound";
import logo from "../assets/images/Logo.png";
import "../assets/css/TopBar.css"
import DashBoard from './DashBoard'

function TopBar() {
  return (
    <React.Fragment>
      {/*<!-- BootStrap -->*/}
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossorigin="anonymous"
            ></link>
        </>
      {/*<!-- End of BootStrap -->*/}

      {/*<!-- TopBar -->*/}
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active li-mine-padding">
                <Link className="nav-link" to="/">
                    Dashboard
                </Link> 
                <span className="sr-only">(current)</span>
            </li>
            <li className="nav-item li-mine-padding">
                <Link className="nav-link" to="/Product">
                    Productos
                </Link>
            </li>

          </ul>
        </div>
      </nav>
      {/*<!-- End of TopBar -->*/}

      {/*<!-- Routes -->*/}
       <DashBoard />
      {/*<!-- End of Routes -->*/}
    </React.Fragment>
  );
}
export default TopBar;
