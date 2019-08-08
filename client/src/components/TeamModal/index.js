import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import TeamForm from "../TeamForm";

function TeamModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Create a Team
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<TeamForm />
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default TeamModal;
