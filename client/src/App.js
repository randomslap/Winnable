import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainNavbar from "./components/Navbar";
import Home from "./pages/Home";



class App extends Component {
	render() {
		return (
			<Router>
					<MainNavbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route component={Home} />
					</Switch>
			</Router>
		);
	}
}

export default App;
