import React, { Component } from "react";
import IconoTiempo from "./IconoTiempo";

class Horas extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let fecha=new Date((this.props.info.hora)*1000)
    fecha=new Date((this.props.info.hora+fecha.getTimezoneOffset()*60+this.props.info.timezone)*1000)
    let hora = fecha.getHours()
    let icono = (
      <IconoTiempo hora={hora} desc={this.props.info.weather} size={"70%"} />
    );
    return (
      <div style={{ textAlign: "center" }}>
        <div>{icono}</div>
        <p
          style={{fontSize: "1.8em"}}
        >
          {hora}:00
        </p>
        <p> Temp: {this.props.info.main.temp.toFixed(1)}°</p>
        <p> Humed: {this.props.info.main.humidity}%</p>
      </div>
    );
  }
}

export default Horas;
