import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginForm from "../LoginForm";
import LoggedInForm from "../LoggedInForm";
import RegisterModal from "../Modal";
import {
	Navbar,
	Nav,
	Button,
	ButtonToolbar,
	NavDropdown
} from "react-bootstrap";
import "./index.css";

class MainNavbar extends Component {
	constructor() {
		super();
		this.state = {
			modalShow: false
		};
	}

	render() {
		const register = (
			<div>
				<Button
					variant="dark"
					onClick={() => this.setState({ modalShow: true })}
				>
					Register
				</Button>
				<RegisterModal
					show={this.state.modalShow}
					onHide={() => this.setState({ modalShow: false })}
				/>
			</div>
		);
		const auth = (
			<LoggedInForm />
		);

		const notAuth = (
			<div>
				<NavDropdown title="Login" controlId="basic-nav-dropdown">
					<LoginForm />
				</NavDropdown>
			</div>
		);
		return (
			<Navbar bg="dark" variant="dark" expand="lg">
				<Navbar.Brand href="#home">
					<img src={require('../Navbar/winnablenavbar.png')} width="180px" height="35px"/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse
					variant="secondary"
					controlId="basic-navbar-nav"
				>
					<Nav className="mr-auto" />
					{this.props.auth.isAuthenticated ? auth : notAuth}

					<ButtonToolbar>
						{this.props.auth.isAuthenticated ? null : register}
					</ButtonToolbar>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

MainNavbar.propTypes = {
	auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(MainNavbar);
