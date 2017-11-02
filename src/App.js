import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import rp from "request-promise";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comp: null
    };
  }
  loadComponent() {
    let url =
      "https://gist.githubusercontent.com/ihfazhillah/6053095daec61c24d19d49779d1a4236/raw/f3930825c8e3169ff6d351d8fd67001a8b39bff4/postlist.js";
    return rp(url);
  }

  componentDidMount() {
    this.loadComponent().then(src => {
      const exports = {};
      function require(name) {
        if (name === "react") return React;
        else throw "hello world";
      }
      eval(src);

      this.setState({ comp: exports.__esModule ? exports.default : exports });
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.comp && (
          <this.state.comp
            title="Hello world"
            content="ini adalah percobaan, apakah kemudian akan berhasil????"
          />
        )}
      </div>
    );
  }
}

export default App;
