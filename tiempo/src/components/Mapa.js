import React, { Component } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

class Mapa extends Component {
  constructor(props) {
    super(props);
  }

  getMarcador() {
    const marcadores = [
      {
        markerOffset:-20,
        nombre: this.props.nombre,
        coordenadas: [this.props.lon, this.props.lat],
      },
    ];
    return marcadores;
  }

  render() {
    const marcadores = this.getMarcador();
    return (
      <div id="mapa">
        <div id="contorno-mapa" style={{backgroundColor:"blanchedAlmond"}}>
          <ComposableMap>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    id="interior-mapa"
                    key={geo.rsmKey}
                    geography={geo}
                    stroke="black"
                  />
                ))
              }
            </Geographies>
            {marcadores.map(({ nombre, coordenadas, markerOffset }) => (
              <Marker key={nombre} coordinates={coordenadas}>
                <circle r={12} fill="#F00" stroke="#fff" strokeWidth={2} />
                <text id="texto-mapa" textAnchor="middle" y={markerOffset} >
                  {nombre}
                </text>
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </div>
    );
  }
}
export default Mapa;
