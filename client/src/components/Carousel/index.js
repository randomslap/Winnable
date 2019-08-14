import React, { Component } from "react";
import { Animated } from "react-animated-css";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Button } from "react-bootstrap";
import TeamModal from "../TeamModal";
import RegisterModal from "../RegisterModal";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerTeam } from "../../actions/authActions";
import "./index.css";
class Jumbotron extends Component {
	state = {
		index: 0,
		currentItem: {
			row1: "Create or Join a",
			row2: "Overwatch Team",
			row3: ""
		},
		visible: true,
		show: false,
		teamCreated: false
	};
	componentDidMount = () => {
		this.setState({
			row1: "test1",
			row2: "test1",
			row3: "test1"
		});
	};

	componentDidUpdate() {
		if (this.props.team.created) {
			setInterval(() => {
				this.setState({
					show: false
				});
			}, 100);
		}
	}

	onChange() {
		console.log("sw");
	}

	handleSelect = selectedIndex => {
		const items = [
			{
				row1: "Create or Join an",
				row2: "Overwatch Team",
				row3: ""
			},
			{
				row1: "Lead Your",
				row2: "Overwatch Team to victory",
				row3: ""
			},
			{
				row1: "Keep track on",
				row2: "Player Statistics",
				row3: ""
			}
		];
		this.setState({
			currentItem: items[selectedIndex],
			visible: false
		});
		setInterval(() => {
			this.setState({
				visible: true
			});
		}, 500);
	};

	render() {
		return (
			<div className="mediabg">
				<div className="zindexfix">
					<Container>
						<Row>
							<Col md={{ offset: 1 }}>
								<Animated
									animationIn="fadeInLeft"
									animationOut="fadeOutRight"
									animationInDuration={400}
									isVisible={this.state.visible}
								>
									<div
										onChange={this.onChange}
										id={this.state.index}
										className="jumboText"
									>
										{this.state.currentItem.row1}
									</div>
								</Animated>
							</Col>
						</Row>
						<Row>
							<Col md={{ offset: 1 }}>
								<div className="jumboText">
									{this.state.currentItem.row2}
								</div>
							</Col>
						</Row>
						<Row>
							<Col md={{ offset: 1 }}>
								<div className="ptext mt-3">
									<p>
										Helping players and teams improve their
										game.
									</p>
									<p>
										Winnable will guide you to the{" "}
										<span id="oworange">top.</span>
									</p>
								</div>
							</Col>
						</Row>

						<Row>
							<Col md={{ offset: 1 }}>
								<div className="jumboText">
									<a>
										<Button
											className="btn btn-white mr-4"
											onClick={() =>
												this.setState({ show: true })
											}
										>
											Create a team
										</Button>
									</a>
									<a href="/finder">
										<Button className="btn btn-orange">
											Join a team
										</Button>
									</a>
									{this.props.auth.isAuthenticated ? (
										<TeamModal
											show={this.state.show}
											onHide={() =>
												this.setState({ show: false })
											}
										/>
									) : (
										<RegisterModal
											show={this.state.show}
											onHide={() =>
												this.setState({
													show: false
												})
											}
										/>
									)}
								</div>
							</Col>
						</Row>
					</Container>
				</div>
				<Container className="overlay" />
				<Carousel
					wrap={true}
					interval={3500}
					onSelect={this.handleSelect}
				>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={require("../../assets/images/Carousel/teamcarousel.jpg")}
							alt="First slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={require("../../assets/images/Carousel/carouselpro.jpg")}
							alt="Third slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={require("../../assets/images/Carousel/statcarousel.jpg")}
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
			</div>
		);
	}
}

Jumbotron.propTypes = {
	auth: PropTypes.object.isRequired,
	team: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	team: state.team
});

export default connect(
	mapStateToProps,
	{ registerTeam }
)(withRouter(Jumbotron));
