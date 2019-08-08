import React, { Component } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import API from "../../utils/API";
import { registerTeam } from "../../actions/authActions";
import classnames from "classnames";

class TeamForm extends Component {
	constructor() {
		super();
		this.state = {
			owner: "",
			teamName: "",
			image: "",
			region: "",
			goal: "",
			about: "",
			range1: "",
			range2: "",
			errors: {}
		};
	}
	onChange = e => {
		this.setState({ [e.target.id]: e.target.value });
	};
	onSubmit = e => {
		e.preventDefault();
		if (this.props.auth.isAuthenticated) {
			const newTeam = {
				owner: this.props.auth.user.id,
				teamName: this.state.teamName,
				image: this.state.image,
				region: this.state.region,
				goal: this.state.goal,
				about: this.state.about,
				range1: this.state.range1,
				range2: this.state.range2
			};
			this.props.registerTeam(newTeam);
		}
	};
	render() {
		const { errors } = this.state;
		return (
			<Form onSubmit={this.onSubmit}>
				<Container>
					<Row>
						<Col>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Team Name</Form.Label>
								<Form.Control
									onChange={this.onChange}
									value={this.state.teamName}
									error={errors.teamName}
									id="teamName"
									type="teamName"
									placeholder="Enter a Team Name"
								/>
								<Form.Text className="text-muted">
									{errors.teamName}
								</Form.Text>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Team Image</Form.Label>
								<Form.Control
									onChange={this.onChange}
									value={this.state.image}
									id="image"
								/>
								<Form.Text className="text-muted">
									{errors.image}
								</Form.Text>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Label>SR Range</Form.Label>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Group controlId="formBasicEmail">
								<Form.Control
									onChange={this.onChange}
									value={this.state.range1}
									id="range1"
									type="range1"
									placeholder="1"
								/>
							</Form.Group>
						</Col>
						<Col md={2}>
							<h2>-</h2>
						</Col>
						<Col>
							<Form.Group controlId="formBasicEmail">
								<Form.Control
									onChange={this.onChange}
									value={this.state.range2}
									id="range2"
									type="range2"
									placeholder="5000"
								/>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Group controlId="exampleForm.ControlSelect2">
								<Form.Label>Select a goal</Form.Label>
								<Form.Control
									onChange={this.onChange}
									value={this.state.goal}
									id="goal"
									type="goal"
									as="select"
								>
									<option>To play competitively</option>
									<option>To have fun</option>
								</Form.Control>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Group controlId="exampleForm.ControlTextarea1">
								<Form.Label>About the team</Form.Label>
								<Form.Control
									onChange={this.onChange}
									value={this.state.about}
									id="about"
									type="about"
									as="textarea"
									rows="3"
								/>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Group controlId="exampleForm.ControlSelect1">
								<Form.Label>Select a region</Form.Label>
								<Form.Control
									onChange={this.onChange}
									value={this.state.region}
									id="region"
									type="region"
									as="select"
								>
									<option>North America</option>
									<option>Asia</option>
									<option>Europe</option>
								</Form.Control>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col>
							<Button className="btn btn-black" type="submit">
								Submit
							</Button>
						</Col>
					</Row>
				</Container>
			</Form>
		);
	}
}

TeamForm.propTypes = {
	auth: PropTypes.object.isRequired,
	team: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	team: state.team
});

export default connect(
	mapStateToProps,
	{ registerTeam }
)(withRouter(TeamForm));
