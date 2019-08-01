import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {
	ButtonGroup,
	Button,
	DropdownButton,
	Dropdown,
	NavDropdown
} from "react-bootstrap";
import "./index.css"

class LoggedInForm extends Component {
	onLogoutClick = e => {
		e.preventDefault();
		this.props.logoutUser();
	};

	render() {
		return (
			<NavDropdown
				title={this.props.auth.user.name}
				controlId="basic-nav-dropdown loggedIn"
			>
				<ButtonGroup vertical>
					<Button>Account</Button>
					<Button onClick={this.onLogoutClick}>Logout</Button>
				</ButtonGroup>
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
