import React, { Component } from "react";
import {
	Navbar,
	Nav,
	Button,
	NavDropdown,
	Form,
	Container,
	Row,
	Col
} from "react-bootstrap";
import "./index.css";

class MainNavbar extends Component {
	render() {
		return (
			<Navbar bg="dark" expand="lg">
				<Navbar.Brand className="text-white" href="#home">Winnable</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Button variant="outline-success">Login</Button>

					<Nav className="mr-auto" />
					<NavDropdown title="Login" id="basic-nav-dropdown">
						<Form>
							<Container>
								<Row>
									<Col>
										<Form.Text className="text-muted">
											Username/Email validation text
										</Form.Text>
										<Form.Group controlId="formBasicEmail">
											<Form.Label>
												Email address
											</Form.Label>
											<Form.Control type="email" />
										</Form.Group>
									</Col>
								</Row>
								<Row>
									<Col>
										<Form.Group controlId="formBasicPassword">
											<Form.Label>Password</Form.Label>
											<Form.Control type="password" />
										</Form.Group>
										<Form.Group controlId="formBasicChecbox">
											<Form.Check
												type="checkbox"
												label="Remember me"
											/>
										</Form.Group>
									</Col>
								</Row>
								<Row>
									<Col>
										<Button variant="primary" type="submit">
											Login
										</Button>
									</Col>
								</Row>
							</Container>
						</Form>
					</NavDropdown>
					<Nav.Link>Register</Nav.Link>

					<Nav className="mr-auto" />
					<NavDropdown title="Login" id="basic-nav-dropdown">
						<Form>
							<Container>
								<Row>
									<Col>
										<Form.Text className="text-muted">
											Username/Email validation text
										</Form.Text>
										<Form.Group controlId="formBasicEmail">
											<Form.Label>
												Email address
											</Form.Label>
											<Form.Control type="email" />
										</Form.Group>
									</Col>
								</Row>
								<Row>
									<Col>
										<Form.Group controlId="formBasicPassword">
											<Form.Label>Password</Form.Label>
											<Form.Control type="password" />
										</Form.Group>
										<Form.Group controlId="formBasicChecbox">
											<Form.Check
												type="checkbox"
												label="Remember me"
											/>
										</Form.Group>
									</Col>
								</Row>
								<Row>
									<Col>
										<Button variant="dark" type="submit">
											Login
										</Button>
									</Col>
								</Row>
							</Container>
						</Form>
					</NavDropdown>
					<Nav.Link id="oworange">Register</Nav.Link>

				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default MainNavbar;