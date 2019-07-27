import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Carousel"
import Features from "../components/FeatureSection"
import StatSection from "../components/StatSection"


class Home extends Component {
	render() {
		return (
			<div>
				<Jumbotron/>
				<Features/>
				<StatSection/>
			</div>
		);
	}
}

export default Home;
