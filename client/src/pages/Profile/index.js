import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

class Profile extends Component {
	render() {
		return (
			<div>
				<Container>
					<Row>
						<Card className="cardOne">
							<Row>
								<Col md={12}>
									<h2>Username</h2>
									<img src="https://place-hold.it/184x184" />
									<h6 className="pt-3">Battle.net</h6>
									<p>
										{this.props.auth.user.battleTag.name}#
										{this.props.auth.user.battleTag.number}
									</p>
									<h6 className="pt-3">Region</h6>
									<p>North America</p>
									<h6 className="pt-3">Language</h6>
									<p>EN</p>
									<h6 className="pt-3">Main Goal</h6>
									<p>To play competitively</p>
									<h6 className="pt-3">About</h6>
									<p>
										blah blah blah blah blah blah blah blah
										blah blah blah blah blah blah blah blah
										blah blah blah blah
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
									<Button className="btn btn-primary">
										Invite Player
									</Button>
								</Col>
							</Row>
							<Row>
								<Col md={2}>
									<img src="https://place-hold.it/80x80" />
								</Col>
							</Row>
							<Row>
								<Col md={2}>
									<h3 className="pt-5">Roles:</h3>
								</Col>
							</Row>
							<Row>
								<Col md={2}>
									<img
										src="https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/d/d4/New_Tank_Icon.png/120px-New_Tank_Icon.png?version=0fda46c98855553e418631ade1d114ee"
										width="80"
										height="80"
									/>
								</Col>
								<Col md={1}>
									<img
										src="https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/1/1c/New_Damage_Icon.png/120px-New_Damage_Icon.png?version=a2c2d0fd3d02948d7664d63494a450f4"
										width="80"
										height="80"
									/>
								</Col>
							</Row>
							<Row>
								<Col md={2}>
									<h3 className="pt-5">Rank:</h3>
								</Col>
							</Row>
							<Row>
								<Col md={2}>
									<img
										src="https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/1/1c/New_Damage_Icon.png/120px-New_Damage_Icon.png?version=a2c2d0fd3d02948d7664d63494a450f4"
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
