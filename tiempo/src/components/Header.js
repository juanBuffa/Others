import React, { Component } from "react";
import BarraDeBusqueda from "./BarraDeBusqueda";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: new Date(),
    };
    this.actHora = this.actHora.bind(this);
  }

  actHora() {
    this.setState({ fecha: new Date() });
  }

  render() {
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let fechaLugar = new Date(this.props.fecha * 1000);
    fechaLugar = new Date(
      (this.props.fecha +
        fechaLugar.getTimezoneOffset() * 60 +
        this.props.timezone) *
        1000
    );
    fechaLugar =
      diasSemana[fechaLugar.getDay()] +
      "-" +
      fechaLugar.getDate() +
      "/" +
      (fechaLugar.getMonth() + 1) +
      " " +
      fechaLugar.getHours() +
      ":" +
      (fechaLugar.getMinutes() > 9
        ? fechaLugar.getMinutes()
        : "0" + fechaLugar.getMinutes());

    const fechaYHora =
      this.state.fecha.toLocaleDateString() +
      " " +
      this.state.fecha.getHours() +
      ":" +
      (this.state.fecha.getMinutes() > 9
        ? this.state.fecha.getMinutes()
        : "0" + this.state.fecha.getMinutes());

    return (
      <div id="header">
        <div style={{display:"flex"}}>
          <img
            src="/solnube.png"
            style={{ width: "50px", height: "50px", marginRight: "1rem" }}
            alt="Logo"
          ></img>
          <p
            style={{
              width: "fit-content",
              alignSelf: "center",
              maxHeight: "2rem",
              marginRight: "0.5rem",
            }}
          >
            Tiempo en{" "}
            {this.props.lugar.ciudad +
              "," +
              this.props.lugar.pais +
              " - " +
              fechaLugar}
          </p>
        </div>
        <div id="barra" style={{alignSelf: "center"}}>
          <BarraDeBusqueda
            elegir={this.props.elegir}
            actHora={this.actHora}
            valido={this.props.valido}
          ></BarraDeBusqueda>
        </div>
        <div style={{ display:"flex", justifyContent:"flex-end"}}>
          <p
            style={{
              marginLeft: "0.5rem",
              marginRight: "0.4rem",
              textAlign:"right",
              maxHeight: "2rem",
            }}
          >
            {fechaYHora}
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
