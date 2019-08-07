import React, { Component } from "react";
import Fade from "react-bootstrap/Fade";
import { css } from "@emotion/core";
import { PropagateLoader } from "react-spinners";
import ScrollAnimation from "react-animate-on-scroll";
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
import API from "../../utils/API";
import "./index.css";

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
		hero6ObjTime: "",
		loading: false,
		loaded: false,
		notFound: false
	};

	convertTimeStringToNumber = val => Number(val.replace(/:/g, ""));

	loadStats = () => {
		console.log("LoadStats Request...........................");
		this.setState({
			loading: true
		});
		API.getOWStats(
			encodeURIComponent(this.state.bnetName + "#" + this.state.bnetNum)
		)
			.then(res => {
				console.log(res.data);
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

				// if (characters[1][0] === "ana") {

				// }

				this.setState({
					userRankImg: res.data.rankIconURL,
					userLevel: res.data.level,
					userSR: res.data.rank,
					userIcon: res.data.iconURL,
					userEndorsLvl: res.data.endorsementLevel,
					gamesWon:
						res.data.heroStats.competitive.overall.game.games_won,
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
					hero6ObjTime: characters[6][1].combat.objective_time,

					loading: false,
					loaded: true,
					notFound: false
				});
			})
			.catch(err => {
				if (err) {
					this.setState({
						loading: false,
						loaded: true,
						notFound: true
					});
					console.log("error " + this.state.notFound);
					console.log(err);
				}
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
		const override = css`
			display: block;
			margin-left: 34rem;
			margin-top: 50px;
			margin-bottom: 65rem;
			border-color: red;
		`;
		const src1 = this.state
			? require(`../../assets/images/HeroIcons/${
				this.state.hero1Name ? this.state.hero1Name : "Baptiste"
				}.png`)
			: null;
		const src2 = this.state
			? require(`../../assets/images/HeroIcons/${
				this.state.hero2Name ? this.state.hero2Name : "Baptiste"
				}.png`)
			: null;
		const src3 = this.state
			? require(`../../assets/images/HeroIcons/${
				this.state.hero3Name ? this.state.hero3Name : "Baptiste"
				}.png`)
			: null;
		const src4 = this.state
			? require(`../../assets/images/HeroIcons/${
				this.state.hero4Name ? this.state.hero4Name : "Baptiste"
				}.png`)
			: null;
		const src5 = this.state
			? require(`../../assets/images/HeroIcons/${
				this.state.hero5Name ? this.state.hero5Name : "Baptiste"
				}.png`)
			: null;
		const src6 = this.state
			? require(`../../assets/images/HeroIcons/${
				this.state.hero6Name ? this.state.hero6Name : "Baptiste"
				}.png`)
			: null;
		const results = (
			<div>
				<Container className="pt-5">
					<Row>
						<Col md={9}>
							<ScrollAnimation
								animateIn="fadeInLeft"
								animateOut="fadeOutLeft"
								animateOnce={true}
								initiallyVisible={false}
							>
								<Card id="userInfoCard">
									<Row>
										<Col md={{ span: 3, offset: 1 }}>
											<Image
												id="profilePicture"
												src={this.state.userIcon}
											/>
										</Col>
										<Col md={{ span: 8 }}>
											<h1 id="owOrange">
												{this.state.bnetName +
													"#" +
													this.state.bnetNum}
											</h1>
										</Col>
									</Row>
								</Card>
							</ScrollAnimation>
						</Col>
						<Col md={3}>
							<ScrollAnimation
								animateIn="fadeInRight"
								animateOut="fadeOutRight"
								animateOnce={true}
								initiallyVisible={false}
							>
								<Card id="userStatsCard">
									<Row>
										<Col md={12}>
											<Row>
												<Col md={12}>
													<p id="owOrange">COMPETITIVE STATS</p>
													<hr id="hrcustom" />
												</Col>
											</Row>
											<Row>
												<Col md={12}>
													<p id="test">
														LEVEL:{" "}
														<span>
															{
																this.state
																	.userLevel
															}
														</span>{" "}
													</p>
												</Col>
											</Row>
											<Row>
												<Col md={12}>
													<p id="test">
														RANK:{" "}
														<span>
															{this.state.userSR}
														</span>{" "}
														<img
															id="rankIcon"
															src={
																this.state
																	.userRankImg
															}
														/>
													</p>
												</Col>
											</Row>
											<Row>
												<Col md={12}>
													<p id="test">
														GAMES WON:{" "}
														<span>
															{
																this.state
																	.gamesWon
															}
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
							</ScrollAnimation>
						</Col>
					</Row>
				</Container>

				<Container className="pt-5">
					<Row>
						<Col md={12}>
							<ScrollAnimation
								animateIn="fadeInUp"
								animateOut="fadeOutDown"
								animateOnce={true}
								initiallyVisible={false}
							>
								<Card id="heroContainer">
									<Container>
										<Row>
											<Col md={12}>
												<h1 id="owOrange" className="pt-3 pb-3">
													TOP SIX HEROES
												</h1>
											</Col>
										</Row>
										<Row>
											<Col md={12} className="pt-3">
												<Card id="resultsCard">
													<Container>
														<Row>
															<Col md={2}>
																<p id="heroName">
																	{
																		this
																			.state
																			.hero1Name
																	}
																</p>
																<img
																	src={src1}
																/>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero1Time
																	}
																</p>
																<p>
																	TIME PLAYED
																</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero1Medals
																	}
																</p>
																<p>MEDALS</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero1Elims
																	}
																</p>
																<p>
																	ELIMINATIONS
																</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero1Damage
																	}
																</p>
																<p>
																	DAMAGE DONE
																</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero1ObjTime
																	}
																</p>
																<p>
																	OBJECTIVE
																	TIME
																</p>
															</Col>
														</Row>
													</Container>
												</Card>
											</Col>
											<Col md={12} className="pt-3">
												<Card id="resultsCard">
													<Container>
														<Row>
															<Col md={2}>
																<p id="heroName">
																	{
																		this
																			.state
																			.hero2Name
																	}
																</p>
																<img
																	src={src2}
																/>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero2Time
																	}
																</p>
																<p>
																	TIME PLAYED
																</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero2Medals
																	}
																</p>
																<p>MEDALS</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero2Elims
																	}
																</p>
																<p>
																	ELIMINATIONS
																</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero2Damage
																	}
																</p>
																<p>
																	DAMAGE DONE
																</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero2ObjTime
																	}
																</p>
																<p>
																	OBJECTIVE
																	TIME
																</p>
															</Col>
														</Row>
													</Container>
												</Card>
											</Col>
											<Col md={12} className="pt-3">
												<Card id="resultsCard">
													<Container>
														<Row>
															<Col md={2}>
																<p id="heroName">
																	{
																		this
																			.state
																			.hero3Name
																	}
																</p>
																<img
																	src={src3}
																/>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero3Time
																	}
																</p>
																<p>
																	TIME PLAYED
																</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero3Medals
																	}
																</p>
																<p>MEDALS</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero3Elims
																	}
																</p>
																<p>
																	ELIMINATIONS
																</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero3Damage
																	}
																</p>
																<p>
																	DAMAGE DONE
																</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero3ObjTime
																	}
																</p>
																<p>
																	OBJECTIVE
																	TIME
																</p>
															</Col>
														</Row>
													</Container>
												</Card>
											</Col>
											<Col md={12} className="pt-3">
												<Card id="resultsCard">
													<Container>
														<Row>
															<Col md={2}>
																<p id="heroName">
																	{
																		this
																			.state
																			.hero4Name
																	}
																</p>
																<img
																	src={src4}
																/>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero4Time
																	}
																</p>
																<p>
																	TIME PLAYED
																</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero4Medals
																	}
																</p>
																<p>MEDALS</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero4Elims
																	}
																</p>
																<p>
																	ELIMINATIONS
																</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero4Damage
																	}
																</p>
																<p>
																	DAMAGE DONE
																</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero4ObjTime
																	}
																</p>
																<p>
																	OBJECTIVE
																	TIME
																</p>
															</Col>
														</Row>
													</Container>
												</Card>
											</Col>
											<Col md={12} className="pt-3">
												<Card id="resultsCard">
													<Container>
														<Row>
															<Col md={2}>
																<p id="heroName">
																	{
																		this
																			.state
																			.hero5Name
																	}
																</p>
																<img
																	src={src5}
																/>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero5Time
																	}
																</p>
																<p>
																	TIME PLAYED
																</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero5Medals
																	}
																</p>
																<p>MEDALS</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero5Elims
																	}
																</p>
																<p>
																	ELIMINATIONS
																</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero5Damage
																	}
																</p>
																<p>
																	DAMAGE DONE
																</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero5ObjTime
																	}
																</p>
																<p>
																	OBJECTIVE
																	TIME
																</p>
															</Col>
														</Row>
													</Container>
												</Card>
											</Col>
											<Col md={12} className="pt-3 pb-3">
												<Card id="resultsCard">
													<Container>
														<Row>
															<Col md={2}>
																<p id="heroName">
																	{
																		this
																			.state
																			.hero6Name
																	}
																</p>
																<img
																	src={src6}
																/>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero6Time
																	}
																</p>
																<p>
																	TIME PLAYED
																</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero6Medals
																	}
																</p>
																<p>MEDALS</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero6Elims
																	}
																</p>
																<p>
																	ELIMINATIONS
																</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero6Damage
																	}
																</p>
																<p>
																	DAMAGE DONE
																</p>
															</Col>
															<Col
																md={2}
																id="statInfo"
															>
																<p id="statsInfoSize">
																	{
																		this
																			.state
																			.hero6ObjTime
																	}
																</p>
																<p>
																	OBJECTIVE
																	TIME
																</p>
															</Col>
														</Row>
													</Container>
												</Card>
											</Col>
										</Row>
									</Container>
								</Card>
							</ScrollAnimation>
						</Col>
					</Row>
				</Container>
			</div>
		);
		const notFound = (
			<Container>
				<Row>
					<Col md={12}>
						<h1 id="owOrange">Player not found, please try again.</h1>
					</Col>
				</Row>
			</Container>
		);
		return (
			<div>
				<Container className="pt-3">
					<Row>
						<Col md={12}>
							<Card id="searchBarCard">
								<Row>
									<Col md={{ span: 3 }}>
										<Row>
											<Col>
												<p id="searchBarText" className="text-center">
													CHECK PLAYER RANK AND STATS
												</p>
											</Col>
										</Row>
									</Col>
									<Col md={{ span: 5 }}>
										<Form.Control className="bg-transparent text-white"
											value={this.state.bnetName}
											onChange={this.handleInputChange}
											name="bnetName"
											size="lg"
											type="text"
											placeholder=""
										/>
									</Col>
									<Col
										xs={{ span: false }}
										md={{ span: false }}
										lg={{ span: false }}
									>
										<h3 id="searchBarText2">#</h3>
									</Col>
									<Col md={{ span: 2 }}>
										<Form.Control className="bg-transparent text-white"
											value={this.state.title}
											onChange={this.handleInputChange}
											name="bnetNum"
											size="lg"
											type="text"
											placeholder=""
										/>
									</Col>
									<Col md={{ span: 1 }}>
										<Button className="btn-orange"
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
				<div>
					(
					{!this.state.loading && !this.state.loaded ? (
						<div className="results" />
					) : (
							<div />
						)}
					)
				</div>
				<div>
					{this.state.loading || !this.state.loaded ? (
						<ScrollAnimation
							animateIn="fadeIn"
							animateOut="fadeOut"
							animateOnce={true}
						>
							<Container>
								<Row>
									<Col md="auto">
										<PropagateLoader
											css={override}
											sizeUnit={"px"}
											size={30}
											color={"white"}
											loading={this.state.loading}
										/>
									</Col>
								</Row>
							</Container>
						</ScrollAnimation>
					) : (
							<div>
								<ScrollAnimation
									animateIn="fadeIn"
									animateOut="fadeOut"
								>
									{this.state.loaded && !this.state.notFound
										? results
										: notFound}
									}
							</ScrollAnimation>
							</div>
						)}
				</div>
			</div>
		);
	}
}

export default StatsPage;
