import React, { Component } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import API from "../../utils/API";

class RegisterForm extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			password: "",
			password2: "",
			battleTagName: "",
			battleTagNumber: "",
			hero1: "",
			hero2: "",
			hero3: "",
			role: "",
			userIcon: "",
			userRankImg: "",
			userSR: "",
			userLevel: "",
			gamesWon: "",
			userEndorsLvl: "",
			errors: {},
			registered: false
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
	}

	componentDidUpdate() {
		if (this.props.reg.registered) {
			console.log("problem?");
			setInterval(() => {
				this.setState({
					registered: true
				});
			}, 1000);
		}
	}

	onChange = e => {
		console.log([e.target.id]);
		console.log(e.target.value);
		this.setState({ [e.target.id]: e.target.value });
	};
	onSubmit = e => {
		e.preventDefault();
		this.registerNewUser();
	};

	registerNewUser = () => {
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2,
			battleTag: {
				name: this.state.battleTagName,
				number: this.state.battleTagNumber
			},
			preferredRole: this.state.role,
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
		};
		this.props.registerUser(newUser, this.props.history);
	};

	render() {
		const { errors } = this.state;
		const success = <h4>Successfully Registered!</h4>;
		const signUp = (
			<Form onSubmit={this.onSubmit}>
				<Container>
					<Row>
						<Col>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email</Form.Label>
								<Form.Control
									onChange={this.onChange}
									value={this.state.email}
									error={errors.email}
									id="email"
									type="email"
									placeholder="Enter Email"
									className={classnames("", {
										invalid: errors.email
									})}
								/>
								<Form.Text className="text-muted">
									{errors.email}
								</Form.Text>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Username</Form.Label>
								<Form.Control
									onChange={this.onChange}
									value={this.state.name}
									error={errors.name}
									id="name"
									type="name"
									placeholder="Enter Usename"
									className={classnames("", {
										invalid: errors.name
									})}
								/>
								<Form.Text className="text-muted">
									{errors.name}
								</Form.Text>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Label>Enter BattleTag</Form.Label>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Group controlId="formBasicEmail">
								<Form.Control
									onChange={this.onChange}
									value={this.state.battleTagName}
									// error={}
									id="battleTagName"
									type="battleTagName"
									placeholder="Soldier"
									// className={classnames("", {
									// 	invalid: errors.password2
									// })}
								/>
							</Form.Group>
							<Form.Text className="text-muted">
								{errors.battelTag.name}
							</Form.Text>
						</Col>
						<Col md={2}>
							<h2>#</h2>
						</Col>
						<Col>
							<Form.Group controlId="formBasicEmail">
								<Form.Control
									onChange={this.onChange}
									value={this.state.battleTagNumber}
									// error={}
									id="battleTagNumber"
									type="battleTagNumber"
									placeholder="1234"
									// className={classnames("", {
									// 	invalid: errors.password2
									// })}
								/>
							</Form.Group>
							<Form.Text className="text-muted">
								{errors.battleTag.number}
							</Form.Text>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Preferred Role</Form.Label>
								<Form.Control
									onChange={this.onChange}
									value={this.state.role}
									id="role"
									type="role"
									placeholder="Damage / Tank / Support"
								/>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									onChange={this.onChange}
									value={this.state.password}
									error={errors.password}
									id="password"
									type="password"
									placeholder="Enter Password"
									className={classnames("", {
										invalid: errors.password
									})}
								/>
								<Form.Text className="text-muted">
									{errors.password}
								</Form.Text>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Group controlId="formBasicPassword">
								<Form.Label>Confirm Password</Form.Label>
								<Form.Control
									onChange={this.onChange}
									value={this.state.password2}
									error={errors.password2}
									id="password2"
									type="password"
									placeholder="Re-Enter Password"
									className={classnames("", {
										invalid: errors.password2
									})}
								/>
							</Form.Group>
							<Form.Text className="text-muted">
								{errors.password2}
							</Form.Text>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Group controlId="formBasicChecbox">
								<Form.Check
									type="checkbox"
									label="By checking this box, you agree to our non-existent policy"
								/>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col>
							<Button className="btn btn-black" type="submit">
								Sign-up
							</Button>
						</Col>
					</Row>
				</Container>
			</Form>
		);
		return this.state.registered ? success : signUp;
	}
}

RegisterForm.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired,
	reg: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors,
	reg: state.reg
});

export default connect(
	mapStateToProps,
	{ registerUser }
)(withRouter(RegisterForm));
