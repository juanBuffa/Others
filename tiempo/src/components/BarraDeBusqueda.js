import React, { Component } from "react";
import { Input } from "reactstrap";
class BarraDeBusqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      listo: true,
    };
    this.hanldeChange = this.hanldeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.handleSubmit();
    }
  };

  hanldeChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleSubmit() {
    this.setState({ input: "" });
    this.props.elegir(this.state.input);
    this.props.actHora();
  }

  render() {
    const style = this.props.valido
      ? {
          alignSelf: "center",
          height: "70%",
        }
      : {
          borderColor: "red",
          borderWidth: "3.5px",
          alignSelf: "center",
          height: "70%",
        };
    return (
      <Input
        type="text"
        value={this.state.input}
        onChange={this.hanldeChange}
        onKeyPress={this._handleKeyDown}
        style={style}
        placeholder="Ingrese Ciudad o Código Postal"
      ></Input>
    );
  }
}

export default BarraDeBusqueda;
