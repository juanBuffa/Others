import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  WiCloudy,
  WiDaySunny,
  WiFog,
  WiNightAltCloudy,
  WiNightAltRain,
  WiNightFog,
  WiRain,
  WiMoonAltWaxingGibbous4,
  WiSnowflakeCold,
  WiSmog,
} from "react-icons/wi";

class IconoTiempo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    //Hasta ahora no encontre tormenta asi que no conozco la descripcion clave
    let icono;
    const hora = this.props.hora;
    switch (this.props.desc) {
      case "Smoke":
        icono = <WiSmog size={this.props.size} />;
        break;
      case "Clouds":
        if ((hora >= 21) | (hora <= 6)) {
          icono = <WiNightAltCloudy size={this.props.size} />;
        } else {
          icono = <WiCloudy size={this.props.size} />;
        }
        break;
      case "Rain":
        if ((hora >= 21) | (hora <= 6)) {
          icono = <WiNightAltRain size={this.props.size} />;
        } else {
          icono = <WiRain size={this.props.size} />;
        }
        break;
      case "Clear":
        if ((hora >= 21) | (hora <= 6)) {
          icono = <WiMoonAltWaxingGibbous4 size={this.props.size} />;
        } else {
          icono = <WiDaySunny size={this.props.size} />;
        }
        break;
      case "Mist":
      case "Haze":
      case "Fog":
        if ((hora >= 21) | (hora <= 6)) {
          icono = <WiNightFog size={this.props.size} />;
        } else {
          icono = <WiFog size={this.props.size} />;
        }
        break;
      case "Snow":
        icono = <WiSnowflakeCold size={this.props.size} />;
        break;
      default:
        icono = "Condicion de tiempo sin icono";
    }
    return icono;
  }
}
IconoTiempo.propTypes = {
  hora: PropTypes.any.isRequired,
  desc: PropTypes.any.isRequired,
};
export default IconoTiempo;
