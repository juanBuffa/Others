import React, { Component } from "react";
import IconoTiempo from "./IconoTiempo";
class DiasSiguientes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  formatearDias() {
    const crudo = this.props.info.crudo;
    const diasSemana = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    let fecha;
    const formateado = crudo.map((medicion) => {
      fecha = new Date(medicion.dt * 1000);
      fecha = new Date(
        (medicion.dt +
          fecha.getTimezoneOffset() * 60 +
          this.props.info.timezone) *
          1000
      );
      return {
        desc: medicion.weather[0].main,
        temp: medicion.main.temp,
        fecha: diasSemana[fecha.getDay()],
      };
    });
    return formateado;
  }

  producir() {
    const descNivel = ["Fog","Haze", "Mist", "Clear", "Clouds", "Rain"];
    let ordenador = 0;
    let orden = [];
    let formateado = this.formatearDias();
    formateado.forEach((medicion2) => {
      let arr2 = orden.filter((p) => (p.fecha === medicion2.fecha));
      if (arr2[0] !== undefined) {
        arr2[0] = {
          fecha: medicion2.fecha,
          tempmin:
            medicion2.temp < arr2[0].tempmin ? medicion2.temp : arr2[0].tempmin,
          tempmax:
            medicion2.temp > arr2[0].tempmax ? medicion2.temp : arr2[0].tempmax,
          descripción:
            descNivel.indexOf(medicion2.desc) > descNivel.indexOf(arr2[0].descripción)
              ? medicion2.desc
              : arr2[0].descripción,
        };
        orden[
          orden.indexOf(orden.filter((p) => p.fecha === arr2[0].fecha)[0])
        ] = arr2[0];
      } else {
        orden[ordenador] = {
          fecha: medicion2.fecha,
          tempmin: medicion2.temp,
          tempmax: medicion2.temp,
          descripción: medicion2.desc,
        };
        ordenador++;
      }
    });
    return orden;
  }

  render() {
    const dias = this.producir();
    const hora = 12;
    return (
      <div id="dias-siguientes">
        {dias.map((dia, x) => (
          <div id={x} style={{ textAlign: "center", padding: "0.5rem" }}>
            <p>
              <b style={{ fontSize: "1.15em" }}>{dia.fecha}</b>
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <IconoTiempo hora={hora} desc={dia.descripción} size={"90%"} />
            </div>
            <p> Max:{dia.tempmax.toFixed(1)}°</p>
            <p> Min:{dia.tempmin.toFixed(1)}°</p>
          </div>
        ))}
      </div>
    );
  }
}

export default DiasSiguientes;
