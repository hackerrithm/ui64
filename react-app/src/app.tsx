import * as redux from "redux";
import About from "@src/components/about/about";
import Home from "@src/components/home/home";
import Profile from "@src/components/home/profile";
import { default as Login } from "@src/components/login/login";
import React from "react";
import SignUp from "@src/components/signup/signup";
import thunk from "redux-thunk";
// import Tools from "./components/tools/tools";
import withRoot from "@src/withRoot";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { default as Navigation } from "@src/components/navigation/navigation";
import { Provider } from "react-redux";
import reducers, * as state from "@src/app/counter/reducer";
// import { default as NavigationBelow } from './components/navigation/navigation.below';
import { hot } from 'react-hot-loader';

const store: redux.Store<state.All> = redux.createStore(
  reducers,
  {} as state.All,
  redux.applyMiddleware(thunk)
);

const NavBar = () => {
  return (
    <div>
      <Navigation />
    </div>
  );
};

export const App: React.SFC<{}> = _props => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route strict path="/profile" component={Profile} />
          {/* <Route strict path="/tools" component={Tools} /> */}
          {/* <Route strict path="/tools" component={Tools} /> */}
          <Route strict path="/about" component={About} />
          <Route strict path="/login" component={Login} />
          <Route strict path="/signup" component={SignUp} />
          <Route path="/logs" render={() => <h1>Logs</h1>} />
          <Route
            path="/children"
            children={({ match }) => {
              if (match) {
                return <h1>Children</h1>;
              }
              return null;
            }}
          />
        </div>
      </Router>
      {/* <Root /> */}
    </Provider>
  );
};

export default withRoot(hot(module)(App));
// export default (App);