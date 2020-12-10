import React, { Component } from "react";
import "./App.css";
import Actual from "./components/Actual";
import DiasSiguientes from "./components/DiasSiguientes";
import Header from "./components/Header";
import HorasSiguientes from "./components/HorasSiguientes";
import Mapa from "./components/Mapa"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ciudad: "Buenos Aires",
      valido: true,
      cargando: true,
      actual: {
        ciudad: "",
        pais: "",
        temp: 0,
        desc: "",
        sensacion: 0,
        humedad: 0,
        viento: 0,
        fecha: "",
        timezone: "",
        lat:"",
        lon:""
      },
      futuro: {
        ciudad: "",
        crudo: [],
        timezone: "",
      },
    };
    this.elegir = this.elegir.bind(this);
    this.buscar = this.buscar.bind(this);
  }

  async buscar() {
      const condicionActual = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          this.state.ciudad +
          "&APPID=5624c8ede8c9de826c2f155e0b9e0133&units=metric&lang=es"
      ).then((res) => {
        return res.json();
      });
      if (condicionActual.main !== undefined) {
        const condicionFutura = await fetch(
          "https://api.openweathermap.org/data/2.5/forecast?q=" +
            this.state.ciudad +
            "&APPID=5624c8ede8c9de826c2f155e0b9e0133&units=metric&lang=es"
        ).then((res) => {
          return res.json();
        });
        this.setState({
          ciudad: condicionActual.name,
          valido: true,
          actual: {
            ciudad: condicionActual.name,
            pais: condicionActual.sys.country,
            temp: condicionActual.main.temp.toFixed(1),
            desc: condicionActual.weather[0].main,
            sensacion: condicionActual.main.feels_like.toFixed(1),
            humedad: condicionActual.main.humidity,
            viento: condicionActual.wind.speed.toFixed(1),
            fecha: condicionActual.dt,
            timezone: condicionActual.timezone,
            lat:condicionActual.coord.lat,
            lon:condicionActual.coord.lon
          },
          futuro: {
            ciudad: condicionFutura.city.name,
            crudo: condicionFutura.list,
            timezone: condicionFutura.city.timezone,
          },
          cargando: false,
          actualizando: false,
        });
      } else {
        this.setState({ valido: false});
      }
  }

  componentDidMount() {
   this.buscar();
  }


  elegir(elegida) {
    this.setState({ ciudad: elegida }, this.buscar);
  }

  render() {
    if (this.state.cargando) {
      return (
        <div>
          <Header
            lugar={{
              ciudad: "Nd",
              pais: "Nd",
            }}
            valido={true}
          />
        </div>
      );
    } else {
      return (
        <div id="main-div">
          <Header
            lugar={{
              ciudad: this.state.actual.ciudad,
              pais: this.state.actual.pais,
            }}
            elegir={this.elegir}
            valido={this.state.valido}
            fecha={this.state.actual.fecha}
            timezone={this.state.actual.timezone}
          />
          <Actual info={this.state.actual} />
          <HorasSiguientes
            info={this.state.futuro.crudo.slice(0, 6)}
            timezone={this.state.futuro.timezone}
          />
          <DiasSiguientes info={this.state.futuro} />
          <Mapa nombre={this.state.actual.ciudad} lat={this.state.actual.lat} lon={this.state.actual.lon}/>
        </div>
      );
    }
  }
}

export default App;
