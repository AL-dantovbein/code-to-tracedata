import React, {Fragment} from "react";
import ReactDOM, {render} from 'react-dom';
import {Provider} from "react-redux";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Store from "./store";
import "./index.css";

const App = () => <div>App!</div>;

render(
  <Provider store={Store}>
    <Router>
      <Fragment>
        <Switch>
          <Route 
            path={`/`}
            component={App}
          />
        </Switch>
      </Fragment>
    </Router>
  </Provider>,
  document.getElementById("root"))
