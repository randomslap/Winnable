import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route component={Home}/>
				</Switch>
			</div>
		</Router>
	)
}


export default App;
