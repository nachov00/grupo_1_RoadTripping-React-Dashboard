import React, { useEffect, useState } from "react";
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
import image7 from "../assets/images/Iguazu.jpg";
import image8 from "../assets/images/Bariloche.jpg";

function DashBoard() {
  let PromedioDeVentas = 3;
  let PromedioDeVentasMensual = 8;
  let DestinosConMasVentas = "Europa, EEUU, Argentina";
  let BalanceAnual = 30;

  let [UsuariosTotales, setUsuariosTotales] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3030/API/users")
      .then((res) => res.json())
      .then((data) => {
        setUsuariosTotales(data.meta.count);
      });
    }, []);

  let [ProductosTotales, setProductosTotales] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3030/API/products")
      .then((res) => res.json())
      .then((data) => {
        setProductosTotales(data.meta.count);
      });
  });

  return (
    <React.Fragment>
      <div id="Dashboard">
        <div id="Container-Superior">
          <div id="Container-S-Izquierdo">
            <div id="Container-S-I-S">
              <img src={Logo} className="mine-logo" />
            </div>
            <div id="Container-S-I-I">
              <div id="Container-S-I-I1">
                <Card
                  image={image2}
                  encabezado="Promedio de Ventas por Temporadas"
                  valor={PromedioDeVentas}
                />
              </div>
              <div id="Container-S-I-I2">
                <Card
                  image={image3}
                  encabezado="Promedio de Ventas Mensual"
                  valor={PromedioDeVentasMensual}
                />
              </div>
            </div>
          </div>

          <div id="Container-S-Derecho">
            <Card
              image={image1}
              encabezado="Destinos con mas ventas"
              valor={ProductosTotales}
            />
          </div>
        </div>
        <div id="Container-Inferior">
          <div id="Container-I-Izquierdo">
            <div id="Container-I-I-Izquierdo">
              <div>
                <Card image={image6} encabezado="Promoción Calafate" />
              </div>
              <div>
                <Card image={image7} encabezado="Promoción Iguazú" />
              </div>
              <div>
                <Card image={image8} encabezado="Promoción Bariloche" />
              </div>
            </div>

            <div id="Container-I-I-Derecho">
              <Card
                image={image4}
                encabezado="Crecimiento de Usuarios por Pais"
                valor={UsuariosTotales}
              />
            </div>
          </div>

          <div id="Container-I-Derecho">
            <Card
              image={image5}
              encabezado="Balance de Ventas Anual"
              valor={BalanceAnual}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DashBoard;
