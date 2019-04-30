import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";

//adding routes
import { Redirect, Route, Switch } from "react-router";
import { Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Login from "./features/Login";
import Home from "./features/Home";
import Particles from "react-particles-js";

//add create browser history
const customHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 70,
                density: {
                  enable: true,
                  value_area: 450
                }
              },
              size: {
                value: 3
              },

              line_linked: {
                shadow: {
                  enable: true,
                  color: "#1bd1a2",
                  opacity: 1.0
                }
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
          // style={{
          //   width: "100%",
          //   zIndex: "-1"
          // }}
        />
        <Router history={customHistory}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/app/home" component={Home} />
            <Redirect from="/" to="/login" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

const Root = () => {
  return <App />;
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
