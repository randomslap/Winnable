import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import RegisterForm from "../RegisterForm";
import "./index.css"
const modal = (
	<Modal
		show={true}
		size="sm"
		aria-labelledby="contained-modal-title-vcenter"
		centered
	>
		<Modal.Header>
			<Modal.Title id="contained-modal-title-vcenter">
				Register
			</Modal.Title>
		</Modal.Header>
		<Modal.Body>
			<Container>
				<Row>
					<Col>
						<RegisterForm />
					</Col>
				</Row>
				<Row>
					<Col>
						<Button variant="danger" href="/" centered>
							Go back
						</Button>
					</Col>
				</Row>
			</Container>
		</Modal.Body>
	</Modal>
);
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			auth.isAuthenticated === true ? <Component {...props} /> : modal
		}
	/>
);
PrivateRoute.propTypes = {
	auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
	auth: state.auth
});
export default connect(mapStateToProps)(PrivateRoute);
