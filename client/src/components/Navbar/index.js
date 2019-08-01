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
					variant="primary"
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

		return (
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">Winnable</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto" />
					<NavDropdown title="Login" id="basic-nav-dropdown">
						{this.props.auth.name ? (
							<LoggedInForm />
						) : (
							<LoginForm />
						)}
					</NavDropdown>
					<ButtonToolbar>
						{this.props.auth.name ? null : register}
					</ButtonToolbar>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

MainNavbar.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(MainNavbar);
