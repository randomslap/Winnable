import React, { Component } from "react";
import {
	InputGroup,
	FormControl,
	Container,
	Row,
	Col,
	Card,
	Form,
	Button,
	Image
} from "react-bootstrap";
import API from "../utils/API";
import "./StatsPage.css";

class StatsPage extends Component {
	state = {
		bnetName: "",
		bnetNum: "",
		userRankImg: "",
		userIcon: "",
		userLevel: "",
		userEndorsLvl: 0,
		userSR: 0,
		gamesWon: 0,
		hero1Name: "",
		hero1Time: "",
		hero1Medals: "",
		hero1Elims: "",
		hero1Damage: "",
		hero1ObjTime: "",
		hero2Name: "",
		hero2Time: "",
		hero2Medals: "",
		hero2Elims: "",
		hero2Damage: "",
		hero2ObjTime: "",
		hero3Name: "",
		hero3Time: "",
		hero3Medals: "",
		hero3Elims: "",
		hero3Damage: "",
		hero3ObjTime: "",
		hero4Name: "",
		hero4Time: "",
		hero4Medals: "",
		hero4Elims: "",
		hero4Damage: "",
		hero4ObjTime: "",
		hero5Name: "",
		hero5Time: "",
		hero5Medals: "",
		hero5Elims: "",
		hero5Damage: "",
		hero5ObjTime: "",
		hero6Name: "",
		hero6Time: "",
		hero6Medals: "",
		hero6Elims: "",
		hero6Damage: "",
		hero6ObjTime: ""
	};

	convertTimeStringToNumber = val => Number(val.replace(/:/g, ""));

	loadStats = () => {
		console.log("LoadStats Request...........................");
		API.getOWStats(
			encodeURIComponent(this.state.bnetName + "#" + this.state.bnetNum)
		).then(res => {
			console.log(res.data.heroStats.competitive);
			var characters = Object.entries(res.data.heroStats.competitive);
			characters.sort((char1, char2) => {
				const char1timePlayed = this.convertTimeStringToNumber(
					char1[1].game.time_played
				);
				const char2timePlayed = this.convertTimeStringToNumber(
					char2[1].game.time_played
				);

				return char2timePlayed - char1timePlayed;
			});
			console.log("sorted?", characters);

			this.setState({
				userRankImg: res.data.rankIconURL,
				userLevel: res.data.level,
				userSR: res.data.rank,
				userIcon: res.data.iconURL,
				userEndorsLvl: res.data.endorsementLevel,
				gamesWon: res.data.heroStats.competitive.overall.game.games_won,
				hero1Name:
					characters[1][0].charAt(0).toUpperCase() +
					characters[1][0].slice(1),
				hero1Time: characters[1][1].game.time_played,
				hero1Medals: characters[1][1].match_awards.medals,
				hero1Elims: characters[1][1].combat.eliminations,
				hero1Damage: characters[1][1].combat.all_damage_done,
				hero1ObjTime: characters[1][1].combat.objective_time,

				hero2Name:
					characters[2][0].charAt(0).toUpperCase() +
					characters[2][0].slice(1),
				hero2Time: characters[2][1].game.time_played,
				hero2Medals: characters[2][1].match_awards.medals,
				hero2Elims: characters[2][1].combat.eliminations,
				hero2Damage: characters[2][1].combat.all_damage_done,
				hero2ObjTime: characters[2][1].combat.objective_time,

				hero3Name:
					characters[3][0].charAt(0).toUpperCase() +
					characters[3][0].slice(1),
				hero3Time: characters[3][1].game.time_played,
				hero3Medals: characters[3][1].match_awards.medals,
				hero3Elims: characters[3][1].combat.eliminations,
				hero3Damage: characters[3][1].combat.all_damage_done,
				hero3ObjTime: characters[3][1].combat.objective_time,

				hero4Name:
					characters[4][0].charAt(0).toUpperCase() +
					characters[4][0].slice(1),
				hero4Time: characters[4][1].game.time_played,
				hero4Medals: characters[4][1].match_awards.medals,
				hero4Elims: characters[4][1].combat.eliminations,
				hero4Damage: characters[4][1].combat.all_damage_done,
				hero4ObjTime: characters[4][1].combat.objective_time,

				hero5Name:
					characters[5][0].charAt(0).toUpperCase() +
					characters[5][0].slice(1),
				hero5Time: characters[5][1].game.time_played,
				hero5Medals: characters[5][1].match_awards.medals,
				hero5Elims: characters[5][1].combat.eliminations,
				hero5Damage: characters[5][1].combat.all_damage_done,
				hero5ObjTime: characters[5][1].combat.objective_time,

				hero6Name:
					characters[6][0].charAt(0).toUpperCase() +
					characters[6][0].slice(1),
				hero6Time: characters[6][1].game.time_played,
				hero6Medals: characters[6][1].match_awards.medals,
				hero6Elims: characters[6][1].combat.eliminations,
				hero6Damage: characters[6][1].combat.all_damage_done,
				hero6ObjTime: characters[6][1].combat.objective_time
			});
		});
	};

	handleInputChange = event => {
		let value = event.target.value;
		const name = event.target.name;

		// Updating the input's state
		this.setState({
			[name]: value
		});
		console.log(name);
		console.log(value);
	};

	handleFormSubmit = event => {
		event.preventDefault();
		this.loadStats();
	};

	render() {
		return (
			<div>
				<Container className="pt-3">
					<Row>
						<Col md={12}>
							<Card>
								<Row>
									<Col md={{ span: 3 }}>
										<Row>
											<Col>
												<p id="searchBarText">
													CHECK PLAYER RANK AND STATS
												</p>
											</Col>
										</Row>
									</Col>
									<Col md={{ span: 5 }}>
										<Form.Control
											value={this.state.bnetName}
											onChange={this.handleInputChange}
											name="bnetName"
											size="lg"
											type="text"
											placeholder="search user here..."
										/>
									</Col>
									<Col md={{ span: 2 }}>
										<Form.Control
											value={this.state.title}
											onChange={this.handleInputChange}
											name="bnetNum"
											size="lg"
											type="text"
											placeholder="battletag..."
										/>
									</Col>
									<Col md={{ span: 2 }}>
										<Button
											onClick={this.handleFormSubmit}
											size="lg"
											type="submit"
										>
											SEARCH
										</Button>
									</Col>
								</Row>
							</Card>
						</Col>
					</Row>
				</Container>

				<Container className="pt-5">
					<Row>
						<Col md={9}>
							<Card id="userInfoCard">
								<Row>
									<Col md={{ span: 3, offset: 1 }}>
										<Image
											src={this.state.userIcon}
											rounded
										/>
									</Col>
									<Col md={{ span: 8 }}>
										<h1>
											{this.state.bnetName +
												"#" +
												this.state.bnetNum}
										</h1>
									</Col>
								</Row>
							</Card>
						</Col>
						<Col md={3}>
							<Card>
								<Row>
									<Col md={12}>
										<Row>
											<Col md={12}>
												<p>COMPETITIVE STATS</p>
												<hr />
											</Col>
										</Row>
										<Row>
											<Col md={12}>
												<p id="test">
													LEVEL:{" "}
													<span>
														{this.state.userLevel}
													</span>{" "}
												</p>
											</Col>
										</Row>
										<Row>
											<Col md={12}>
												<img
													src={this.state.userRankImg}
												/>
												<p id="test">
													RANK:{" "}
													<span>
														{this.state.userSR}
													</span>
												</p>
											</Col>
										</Row>
										<Row>
											<Col md={12}>
												<p id="test">
													GAMES WON:{" "}
													<span>
														{this.state.gamesWon}
													</span>
												</p>
											</Col>
										</Row>
										<Row>
											<Col md={12}>
												<p id="test">
													ENDORSMENT:{" "}
													<span>
														{
															this.state
																.userEndorsLvl
														}
													</span>
												</p>
											</Col>
										</Row>
									</Col>
								</Row>
							</Card>
						</Col>
					</Row>
				</Container>

				<Container className="pt-5">
					<Row>
						<Col md={12}>
							<Card>
								<Row>
									<Col>
										<Card>
											<Card.Body>
												<div>
													Hero: {this.state.hero1Name}
												</div>
												<div>
													Time Played:{" "}
													{this.state.hero1Time}
												</div>
												<div>
													Medals:
													{this.state.hero1Medals}{" "}
												</div>
												<div>
													Eliminations:{" "}
													{this.state.hero1Elims}{" "}
												</div>
												<div>
													Damage Done:{" "}
													{this.state.hero1Damage}
												</div>
												<div>
													Objective Time:{" "}
													{this.state.hero1ObjTime}{" "}
												</div>
											</Card.Body>
										</Card>
									</Col>

									<Col>
										<Card>
											<Card.Body>
												<div>
													Hero: {this.state.hero2Name}
												</div>
												<div>
													Time Played:{" "}
													{this.state.hero2Time}
												</div>
												<div>
													Medals:
													{this.state.hero2Medals}{" "}
												</div>
												<div>
													Eliminations:{" "}
													{this.state.hero2Elims}{" "}
												</div>
												<div>
													Damage Done:{" "}
													{this.state.hero2Damage}
												</div>
												<div>
													Objective Time:{" "}
													{this.state.hero2ObjTime}{" "}
												</div>
											</Card.Body>
										</Card>
									</Col>
								</Row>

								<Row>
									<Col>
										<Card>
											<Card.Body>
												<div>
													Hero: {this.state.hero3Name}
												</div>
												<div>
													Time Played:{" "}
													{this.state.hero3Time}
												</div>
												<div>
													Medals:
													{this.state.hero3Medals}{" "}
												</div>
												<div>
													Eliminations:{" "}
													{this.state.hero3Elims}{" "}
												</div>
												<div>
													Damage Done:{" "}
													{this.state.hero3Damage}
												</div>
												<div>
													Objective Time:{" "}
													{this.state.hero3ObjTime}{" "}
												</div>
											</Card.Body>
										</Card>
									</Col>

									<Col>
										<Card>
											<Card.Body>
												<div>
													Hero: {this.state.hero4Name}
												</div>
												<div>
													Time Played:{" "}
													{this.state.hero4Time}
												</div>
												<div>
													Medals:
													{this.state.hero4Medals}{" "}
												</div>
												<div>
													Eliminations:{" "}
													{this.state.hero4Elims}{" "}
												</div>
												<div>
													Damage Done:{" "}
													{this.state.hero4Damage}
												</div>
												<div>
													Objective Time:{" "}
													{this.state.hero4ObjTime}{" "}
												</div>
											</Card.Body>
										</Card>
									</Col>
								</Row>

								<Row>
									<Col>
										<Card>
											<Card.Body>
												<div>
													Hero: {this.state.hero5Name}
												</div>
												<div>
													Time Played:{" "}
													{this.state.hero5Time}
												</div>
												<div>
													Medals:
													{this.state.hero5Medals}{" "}
												</div>
												<div>
													Eliminations:{" "}
													{this.state.hero5Elims}{" "}
												</div>
												<div>
													Damage Done:{" "}
													{this.state.hero5Damage}
												</div>
												<div>
													Objective Time:{" "}
													{this.state.hero5ObjTime}{" "}
												</div>
											</Card.Body>
										</Card>
									</Col>

									<Col>
										<Card>
											<Card.Body>
												<div>
													Hero: {this.state.hero6Name}
												</div>
												<div>
													Time Played:{" "}
													{this.state.hero6Time}
												</div>
												<div>
													Medals:
													{this.state.hero6Medals}{" "}
												</div>
												<div>
													Eliminations:{" "}
													{this.state.hero6Elims}{" "}
												</div>
												<div>
													Damage Done:{" "}
													{this.state.hero6Damage}
												</div>
												<div>
													Objective Time:{" "}
													{this.state.hero6ObjTime}{" "}
												</div>
											</Card.Body>
										</Card>
									</Col>
								</Row>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default StatsPage;
