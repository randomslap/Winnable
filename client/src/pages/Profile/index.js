import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import API from "../../utils/API";

class Profile extends Component {
	state = {
		userIcon: "",
		userRankImg: "",
		userSR: "",
		userLevel: "",
		gamesWon: "",
		userEndorsLvl: "",
		hero1: "",
		hero2: "",
		hero3: "",
		loading: false,
		loaded: false
	};

	componentDidMount = () => {
		console.log(this.props.auth);
		this.loadStats();
	};

	convertTimeStringToNumber = val => Number(val.replace(/:/g, ""));
	
	loadStats = () => {
		console.log("loading stats......................................");
		// API.getOWStats(
		// 	encodeURIComponent(
		// 		this.props.auth.user.battleTag.name +
		// 			"#" +
		// 			this.props.auth.user.battleTag.number
		// 	)
		// ).then(res => {
		// 	var characters = Object.entries(res.data.heroStats.competitive);
		// 	characters.sort((char1, char2) => {
		// 		const char1timePlayed = this.convertTimeStringToNumber(
		// 			char1[1].game.time_played
		// 		);
		// 		const char2timePlayed = this.convertTimeStringToNumber(
		// 			char2[1].game.time_played
		// 		);

		// 		return char2timePlayed - char1timePlayed;
		// 	});
		// 	console.log(characters);
		// 	this.setState({
		// 		userRankImg: res.data.rankIconURL,
		// 		userLevel: res.data.level,
		// 		userSR: res.data.rank,
		// 		userIcon: res.data.iconURL,
		// 		userEndorsLvl: res.data.endorsementLevel,
		// 		gamesWon: res.data.heroStats.competitive.overall.game.games_won,
		// 		hero1:
		// 			characters[1][0].charAt(0).toUpperCase() +
		// 			characters[1][0].slice(1),
		// 		hero2:
		// 			characters[2][0].charAt(0).toUpperCase() +
		// 			characters[2][0].slice(1),
		// 		hero3:
		// 			characters[3][0].charAt(0).toUpperCase() +
		// 			characters[3][0].slice(1)
		// 	});
		// 	this.updateUser();
		// });
	};

	updateUser = () => {
		console.log("executed");
		if (this.props.auth.isAuthenticated) {
			API.updateUser(this.props.auth.user.id, {
				rank: this.state.userSR,
				rankIcon: this.state.userRankImg,
				userIcon: this.state.userIcon,
				level: this.state.userLevel,
				gamesWon: this.state.gamesWon,
				endorsementLvl: this.state.userEndorsLvl,
				preferredHeroes: {
					hero1: this.state.hero1,
					hero2: this.state.hero2,
					hero3: this.state.hero3
				}
			});
		} else {
			return;
		}
	};

	render() {
		const src1 = this.state
			? require(`../../assets/images/HeroIcons/${
					this.state.hero1 ? this.state.hero1 : "Baptiste"
			  }.png`)
			: null;
		const src2 = this.state
			? require(`../../assets/images/HeroIcons/${
					this.state.hero2 ? this.state.hero2 : "Baptiste"
			  }.png`)
			: null;
		const src3 = this.state
			? require(`../../assets/images/HeroIcons/${
					this.state.hero3 ? this.state.hero3 : "Baptiste"
			  }.png`)
			: null;

		return (
			<div>
				<Container>
					<Row>
						<Card className="cardOne">
							<Row>
								<Col md={12}>
									<h2>{this.props.auth.user.name}</h2>
									{/* <img src={this.state.userIcon} /> */}
									<h6 className="pt-3">Battle.net</h6>
									<p>
										{this.props.auth.user.battleTag.name}#
										{this.props.auth.user.battleTag.number}
									</p>
									<h6 className="pt-3">Region</h6>
									<p>North America</p>
									<h6 className="pt-3">Language</h6>
									<p>EN</p>
									<h6 className="pt-3">Stats</h6>
									<p id="test">
										LEVEL:{" "}
										{/* <span>{this.state.userLevel}</span>{" "} */}
									</p>
									<p id="test">
										ENDORSEMENT LEVEL:{" "}
										{/* <span>{this.state.userEndorsLvl}</span>{" "} */}
									</p>
									<p id="test">
										GAMES WON:{" "}
										{/* <span>{this.state.gamesWon}</span>{" "} */}
									</p>
									<p id="test">
										RANK SR:{" "}
										{/* <span>{this.state.userSR}</span>{" "} */}
									</p>
								</Col>
							</Row>
						</Card>
						<Card className="cardTwo">
							<Row>
								<Col md={2}>
									<h3 className="">Team:</h3>
								</Col>
								<Col className="text-right" md={10}>
									<a
										target="_blank"
										href={`mailto:${
											this.props.auth.user.email
										}?subject=Join%20My%20OW%20Team!&amp;`}
									>
										<Button className="btn btn-orange">
											Invite Player
										</Button>
									</a>
								</Col>
							</Row>
							<Row>
								<Col md={2}>
									<img src="https://place-hold.it/80x80" />
								</Col>
							</Row>
							<Row>
								<Col md={3}>
									<h3 className="pt-5">Preferred Role:</h3>
								</Col>
							</Row>
							<Row>
								<Col md={2}>
									<p>{this.props.auth.user.role}</p>
									{(() => {
										switch (this.props.auth.user.role) {
											case "Damage":
												return (
													<img
														src="https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/1/1c/New_Damage_Icon.png/120px-New_Damage_Icon.png?version=a2c2d0fd3d02948d7664d63494a450f4"
														width="80"
														height="80"
													/>
												);
											case "Tank":
												return (
													<img
														src="https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/d/d4/New_Tank_Icon.png/120px-New_Tank_Icon.png?version=0fda46c98855553e418631ade1d114ee"
														width="80"
														height="80"
													/>
												);
											case "Support":
												return (
													<img
														src="https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/f/f7/New_Support_Icon.png/160px-New_Support_Icon.png?version=ed01b0059c14bc180981f295ea4a1c7d"
														width="80"
														height="80"
													/>
												);
											default:
												return null;
										}
									})()}
								</Col>
								<Col md={1} />
							</Row>
							<Row>
								<Col md={2}>
									<h3 className="pt-5">Rank:</h3>
								</Col>
							</Row>
							<Row>
								<Col md={2}>
									<img
										src={this.state.userRankImg}
										width="80"
										height="80"
									/>
								</Col>
							</Row>
							<Row>
								<Col md={4}>
									<h3 className="pt-4">Preferred Heroes:</h3>
								</Col>
							</Row>
							<Row>
										<Col md={4}> 
											<p>{this.state.hero1}</p>
											<img src={src1} />
										</Col>
										<Col md={4}> 
											<p>{this.state.hero2}</p>
											<img src={src2} />
										</Col>
										<Col md={4}> 
											<p>{this.state.hero3}</p>
											<img src={src3} />
										</Col>
									</Row>
						</Card>
					</Row>
				</Container>
			</div>
		);
	}
}
Profile.propTypes = {
	auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
	auth: state.auth
});
export default connect(mapStateToProps)(Profile);
