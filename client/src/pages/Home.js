import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import HomeJumbotron from "../components/Jumbotron"

class Home extends Component {
	render() {
		return (
			<div>
				<HomeJumbotron/>
			</div>
		);
	}
}

export default Home;
