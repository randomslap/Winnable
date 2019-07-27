import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainNavbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer"
import StatsPage from "./pages/StatsPage"


class App extends Component {
	render() {
		return (
			<Router>
					<MainNavbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/stats" component={StatsPage} />
						<Route component={Home} />
					</Switch>
					<Footer/>
			</Router>
		)
	}
}

export default App;
