import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { ButtonGroup, Button, DropdownButton, Dropdown } from "react-bootstrap";

class LoggedInForm extends Component {
	onLogoutClick = e => {
		e.preventDefault();
		this.props.logoutUser();
	};
	
	render() {
		const { user } = this.props.auth;
		return (
			<ButtonGroup vertical>
				<Button>{user.name}</Button>
				<Button>Button</Button>
				<DropdownButton
					as={ButtonGroup}
					title="Dropdown"
					id="bg-vertical-dropdown-1"
				>
					<Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
					<Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
				</DropdownButton>
				<Button onClick = {this.onLogoutClick}>Button</Button>
				<Button>Button</Button>
				<DropdownButton
					as={ButtonGroup}
					title="Dropdown"
					id="bg-vertical-dropdown-2"
				>
					<Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
					<Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
				</DropdownButton>
				<DropdownButton
					as={ButtonGroup}
					title="Dropdown"
					id="bg-vertical-dropdown-3"
				>
					<Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
					<Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
				</DropdownButton>
			</ButtonGroup>
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
