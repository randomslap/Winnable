import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Carousel"

class Home extends Component {
	render() {
		return (
			<div>
				<Jumbotron/>
			</div>
		);
	}
}

export default Home;
