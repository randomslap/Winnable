import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import MainNavbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import StatsPage from "./pages/StatsPage";
import Profile from "./pages/Profile";
import TeamProfile from "./pages/TeamProfile";


import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/Private-Route/PrivateRoute";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
	// Set auth token header auth
	const token = localStorage.jwtToken;
	setAuthToken(token);
	// Decode token and get user info and exp
	const decoded = jwt_decode(token);
	// Set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));
	// Check for expired token
	const currentTime = Date.now() / 1000; // to get in milliseconds
	if (decoded.exp < currentTime) {
		// Logout user
		store.dispatch(logoutUser());
		// Redirect to login
		window.location.href = "/";
	}
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<MainNavbar />
					<Switch>
						<PrivateRoute
							exact
							path="/profile"
							component={Profile}
						/>
						<Route exact path="/" component={Home} />
						<Route exact path="/stats" component={StatsPage} />
						<Route exact path="/teamprofile" component={TeamProfile} />
						
						<Route component={Home} />
					</Switch>
					<Footer />
				</Router>
			</Provider>
		);
	}
}

export default App;
