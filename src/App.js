import React from "react";
import logo from "./logo.svg";
import "./App.css";
import rp from "request-promise";
import safeEval from "safe-eval";
import Script from "react-load-script";
const ReactRouter = require("react-router-dom");

window.react = React;
window["react-router"] = ReactRouter;

var req = require;

const Nav = props => {
  return null;
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onLoad = this.onLoad.bind(this);

    this.state = {
      comp: null
    };
  }
  loadComponent() {
    let url =
      "https://gist.githubusercontent.com/ihfazhillah/6053095daec61c24d19d49779d1a4236/raw/f3930825c8e3169ff6d351d8fd67001a8b39bff4/postlist.js";
    url = "https://shopkeeper-lionel-47443.netlify.com/single.min.js";
    url = "https://shopkeeper-lionel-47443.netlify.com/dist/stellar.js";
    return rp(url);
  }

  componentDidMount() {
    /*
    this.loadComponent().then(src => {
      debugger;
      setTimeout(() => {
        const exports = {};
        function require(name) {
          if (name === "react") return React;
          if (name === "react-router") return ReactRouter;
        }
        let require = require;
        window.eval(src);
        debugger;
        this.setState({ comp: window.stellar });
      }, 5000);
      //  eval(src);

      //this.setState({ comp: exports.__esModule ? exports : exports });
    });
        */
  }
  onLoad() {
    this.setState({ comp: window.stellar });
  }

  render() {
    const theMenu = () => {
      return <Nav menuItems={[]} />;
    };

    return (
      <ReactRouter.BrowserRouter>
        <div className="App">
          <Script
            url="https://shopkeeper-lionel-47443.netlify.com/stellar.js"
            onError={() => {}}
            onLoad={this.onLoad}
          />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          {this.state.comp && (
            <this.state.comp.Home
              postData={{}}
              theConfig={{ frontPage: "latestPost" }}
              theMenu={theMenu}
              data={[
                { id: "123jksafj", title: "hello", content: "hello there" }
              ]}
              loadDone
            />
          )}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://shopkeeper-lionel-47443.netlify.com/style.css"
          />
        </div>
      </ReactRouter.BrowserRouter>
    );
  }
}

export default App;
