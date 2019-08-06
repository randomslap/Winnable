import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { NavDropdown } from "react-bootstrap";
import "./index.css";

class LoggedInForm extends Component {
	onLogoutClick = e => {
		e.preventDefault();
		this.props.logoutUser();
	};
	componentDidMount(){
		console.log(this.props.auth.user)
	}

	render() {
		return (
			<NavDropdown
				title={this.props.auth.user.email}
				controlId="nav-dropdown"
				className="loggedIn"
			>
				<NavDropdown.Item href="/profile">Account</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item onClick={this.onLogoutClick}>
					Logout
				</NavDropdown.Item>
			</NavDropdown>
		);
	}
}

LoggedInForm.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
	auth: state.auth
});
export default connect(
	mapStateToProps,
	{ logoutUser }
)(LoggedInForm);
