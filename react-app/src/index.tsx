import * as React from 'react';
// import { Switch } from 'react-router';
import { App as TodoApp } from 'app/todo/containers/App';
import { hot } from 'react-hot-loader';
import About from "../src/app/about/about";
import Home from "../src/app/home/home";
import Profile from "../src/app/home/profile";
// import { default as Login } from "../src/app/login/login";
import SignUp from "../src/app/signup/signup";
import withRoot from "./withRoot";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { default as Navigation } from "../src/app/navigation/navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";

const NavBar = () => {
	return (
		<div>
			<Navigation />
		</div>
	);
};


export const App = hot(module)(() => (
	<Router>
		<div>
			<NavBar />
			<Route path="/todo" component={TodoApp} />
			<Route exact path="/" component={Home} />
			<Route strict path="/profile" component={Profile} />
			<Route strict path="/about" component={About} />
			{/* <Route strict path="/login" component={Login} /> */}
			<Route strict path="/signup" component={SignUp} />
			<Route path="/logs" render={() => <h1>Logs</h1>} />
		</div>

	</Router>
));


export default withRoot(hot(module)(App));
