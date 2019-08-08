import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginForm from "../LoginForm";
import LoggedInForm from "../LoggedInForm";
import RegisterModal from "../RegisterModal";

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
	componentDidUpdate() {
		if (this.props.reg.registered) {
			setInterval(() => {
				this.setState({
					modalShow: false
				});
			}, 3000);
		}
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
			// <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
			// </ScrollAnimation>
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
				<Navbar.Brand href="/">
					<img src={require('../Navbar/winnablenavbar.png')} width="180px" height="35px"/>
				</Navbar.Brand>
				<div className="betatext">
					BETA
				</div>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse
					variant="secondary"
					controlId="basic-navbar-nav"
					className="notLoggedIn"
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
	auth: PropTypes.object.isRequired,
	reg: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
	auth: state.auth,
	reg: state.reg
});

export default connect(mapStateToProps)(MainNavbar);
