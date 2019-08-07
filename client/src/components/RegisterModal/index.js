import React from "react";
import { Modal, Button } from "react-bootstrap";
import RegisterForm from "../RegisterForm";
import "./index.css"

function RegisterModal(props) {
	return (
		<Modal
			{...props}
			size="sm"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Register
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<RegisterForm />
			</Modal.Body >
		</Modal>
	);
}

export default RegisterModal;
