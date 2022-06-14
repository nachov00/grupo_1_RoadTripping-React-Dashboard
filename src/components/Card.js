import React from "react";
import "../assets/App.css";
import "../assets/css/Card.css"

function Card(props) {
  return (
    <React.Fragment>
       <div id="mine-card">

        { 
        props.image ?
        <>
            <h6 className="mine-head">{props.encabezado}</h6>
            <p>{props.valor}</p>
            <img src={props.image} className="mine-graphic"/> 
        </>
        :<></> }
        {props.valor2 ?
        <>
        <p>{props.valor2}</p>
        </>
        :<></> }


       </div>
    </React.Fragment>
  );
}

export default Card;