import React, { Component } from "react";
import Horas from "./Horas";

class HorasSiguientes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="horas-siguientes">
        {this.props.info.map((p) => {
          return (
            <Horas
              id={p.dt_txt}
              info={{ main: p.main, weather: p.weather[0].main ,timezone:this.props.timezone, hora:p.dt}}
            />
          );
        })}
      </div>
    );
  }
}

export default HorasSiguientes;
