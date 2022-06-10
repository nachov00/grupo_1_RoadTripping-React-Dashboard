import React from "react";
import Card from "./Card";
import "../assets/App.css";
import "../assets/css/DashBoard.css";
import Logo from "../assets/images/Logo.png";
import Test from "../assets/images/Test1.jpg"
import image1 from "../assets/images/mapamundi-politico.png";

function DashBoard() {

  
  return (
    <React.Fragment>
      <div id="Dashboard">
        <div id="Container-Superior">

            <div id="Container-S-Izquierdo">
            
            <div id="Container-S-I-S">
            <img src={Logo} className="mine-logo"/>

            </div>
            <div id="Container-S-I-I">
            <Card image={Test} encabezado="Hola" valor="10"/>
                
            </div>

            </div>

            <div id="Container-S-Derecho">
            <Card image={image1} encabezado="Hola" valor="39"/>

            </div>

        </div>
        <div id="Container-Inferior">

            
            <div id="Container-I-Izquierdo">
            
            <div id="Container-I-I-Izquierdo">
                <Card image={Logo} encabezado="Hola"/>
            </div>
            <div id="Container-I-I-Derecho">
                <Card image={Test} encabezado="Hola"/>
            </div>

            </div>

            <div id="Container-I-Derecho">
            <Card image={Test} encabezado="Hola"/>

            </div>
            
        </div>
      </div>
    </React.Fragment>
  );
}

export default DashBoard;
