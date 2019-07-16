import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

App = () => {
	const { userInfo, setuserInfo } = useState({
		username: null,
	})
	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home}/>
				</Switch>
			</div>
		</Router>
	)
}

export default App;
