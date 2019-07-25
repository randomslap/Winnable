import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

class App extends Component {
	render() {
		return (
			<Router>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route component={null} />
					</Switch>
			</Router>
		);
	}
}

export default App;
