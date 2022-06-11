import React from "react";
import Card from "./Card";
import "../assets/App.css";
import "../assets/css/DashBoard.css";
import Logo from "../assets/images/Logo.png";
import Test from "../assets/images/Test1.jpg";
import image1 from "../assets/images/MapaMundi.png";
import image2 from "../assets/images/VentasTemporadas.png";
import image3 from "../assets/images/VentasMensual.png";
import image4 from "../assets/images/Usuarios.png";
import image5 from "../assets/images/BalanceAnual.png";
import image6 from "../assets/images/Glaciar.jpg";
import image7 from "../assets/images/Mendoza.jpg";


function DashBoard() {


  return (
    <React.Fragment>
      <div id="Dashboard">
        <div id="Container-Superior">

          <div id="Container-S-Izquierdo">

            <div id="Container-S-I-S">
              <img src={Logo} className="mine-logo" />

            </div>
            <div id="Container-S-I-I">
              <div>
                <Card image={image2} encabezado="Hola" valor="10" />
                </div>
              <div>
                <Card image={image3} encabezado="De nuevo" valor="11" />
                </div>
            </div>

          </div>

          <div id="Container-S-Derecho">
            <Card image={image1} encabezado="Hola" valor="12" />
          </div>

        </div>
        <div id="Container-Inferior">

          <div id="Container-I-Izquierdo">

            <div id="Container-I-I-Izquierdo">
              <div>
                <Card image={image6} encabezado="Hola" />
              </div>
              <div>
                <Card image={image7} encabezado="Hola" />
              </div>
            </div>

            <div id="Container-I-I-Derecho">
              <Card image={image4} encabezado="Hola" />
            </div>

          </div>

          <div id="Container-I-Derecho">
            <Card image={image5} encabezado="Hola" />

          </div>

        </div>
      </div>
    </React.Fragment>
  );
}

export default DashBoard;
