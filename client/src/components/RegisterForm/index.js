import React, { Component } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class RegisterForm extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			password: "",
			password2: "",
			errors: {}
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
			setInterval(() => {
				window.location.reload();
			}, 2000);
		}
	}

	onChange = e => {
		this.setState({ [e.target.id]: e.target.value });
	};
	onSubmit = e => {
		e.preventDefault();
		console.log(this.props.reg);
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		};
		this.props.registerUser(newUser, this.props.history);
		// if (this.props.errors) {
		// 	console.log(this.props.errors);
		// } else {
		// 	console.log("Success");
		// }
		// //
		console.log(newUser);
		// console.log(this.state.errors);
		// if ((this.state.errors = {})) {
		// 	return this.setState({ registered: true });
		// }
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
							<Button variant="primary" type="submit">
								Sign-up
							</Button>
						</Col>
					</Row>
				</Container>
			</Form>
		);
		return this.props.reg.registered ? success : signUp;
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
