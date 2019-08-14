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
	};

	render() {
		const src1 = this.props.auth.user.preferredHeroes
			? require(`../../assets/images/HeroIcons/${
					this.props.auth.user.preferredHeroes.hero1
						? this.props.auth.user.preferredHeroes.hero1
						: "Baptiste"
			  }.png`)
			: null;
		const src2 = this.props.auth.user.preferredHeroes
			? require(`../../assets/images/HeroIcons/${
					this.props.auth.user.preferredHeroes.hero2
						? this.props.auth.user.preferredHeroes.hero2
						: "Baptiste"
			  }.png`)
			: null;
		const src3 = this.props.auth.user.preferredHeroes
			? require(`../../assets/images/HeroIcons/${
					this.props.auth.user.preferredHeroes.hero3
						? this.props.auth.user.preferredHeroes.hero3
						: "Baptiste"
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
									<img src={this.props.auth.user.userIcon} />
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
										<span>
											{this.props.auth.user.level}
										</span>{" "}
									</p>
									<p id="test">
										ENDORSEMENT LEVEL:{" "}
										<span>
											{
												this.props.auth.user
													.endorsementLvl
											}
										</span>{" "}
									</p>
									<p id="test">
										GAMES WON:{" "}
										<span>
											{this.props.auth.user.gamesWon}
										</span>{" "}
									</p>
									<p id="test">
										RANK SR:{" "}
										<span>{this.props.auth.user.rank}</span>{" "}
									</p>
								</Col>
							</Row>
						</Card>
						<Card className="cardTwo">
							<Row>
								<Col md={2}>
									<h3 className="">Team:</h3>
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
										src={this.props.auth.user.rankIcon}
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
									<p>
										{
											this.props.auth.user.preferredHeroes
												.hero1
										}
									</p>
									<img src={src1} />
								</Col>
								<Col md={4}>
									<p>
										{
											this.props.auth.user.preferredHeroes
												.hero2
										}
									</p>
									<img src={src2} />
								</Col>
								<Col md={4}>
									<p>
										{
											this.props.auth.user.preferredHeroes
												.hero3
										}
									</p>
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
