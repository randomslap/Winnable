import React, { Component } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class LoginForm extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			errors: {}
		};
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push("/");
		}
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
	}
	onChange = e => {
		this.setState({ [e.target.id]: e.target.value });
	};
	onSubmit = e => {
		e.preventDefault();
		const userData = {
			email: this.state.email,
			password: this.state.password
		};
		this.props.loginUser(userData);
	};
	render() {
		const { errors } = this.state;
		return (
			<Form>
				<Container>
					<Row>
						<Col>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Email</Form.Label>
								<Form.Control
									onChange={this.onChange}
									value={this.state.email}
									id="email"
									type="email"
									className={classnames("", {
										invalid:
											errors.email || errors.emailnotfound
									})}
								/>
								<Form.Text className="text-muted">
									{errors.email}
									{errors.emailnotfound}
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
									id="password"
									type="password"
									className={classnames("", {
										invalid:
											errors.password ||
											errors.passwordincorrect
									})}
								/>
								<Form.Text className="text-muted">
									{errors.password}
									{errors.passwordincorrect}
								</Form.Text>
							</Form.Group>
							<Form.Group controlId="formBasicChecbox">
								<Form.Check
									type="checkbox"
									label="Remember me"
								/>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col>
							<Button variant="primary" type="submit">
								Login
							</Button>
						</Col>
					</Row>
				</Container>
			</Form>
		);
	}
}

LoginForm.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});
export default connect(
	mapStateToProps,
	{ loginUser }
)(LoginForm);
