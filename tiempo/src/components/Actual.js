import React, { Component } from "react";
import IconoTiempo from "./IconoTiempo";

class Actual extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const hora = new Date().toLocaleTimeString().slice(0, 2);

    return (
      <div id="actual">
        <div id="actual1">
          <IconoTiempo hora={hora} desc={this.props.info.desc} size={"70%"} />
        </div>
        <div id="actual2">
          <p style={{ fontSize: "2em" }}>
            <b id="nombre">{this.props.info.ciudad}</b>
          </p>
          <p style={{ fontSize: "1.2em",maxWidth:"90%"}}>
            Temperatura Actual: {this.props.info.temp}°
          </p>
        </div>
        <div id="actual3" style={{ paddingLeft: "14%" }}>
          <p>Sensación: {this.props.info.sensacion}°</p>
          <p>Viento: {(this.props.info.viento * 3.6).toFixed(1)} km/h</p>
          <p>Humedad: {this.props.info.humedad}%</p>
        </div>
        <div id="actual4"></div>
      </div>
    );
  }
}

export default Actual;
