import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainNavbar from "./components/Navbar";
import Features from "./components/Features";
import Home from "./pages/Home";

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<MainNavbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route component={Home} />
					</Switch>
					<Features />
				</div>
			</Router>
		);
	}
}

export default App;
