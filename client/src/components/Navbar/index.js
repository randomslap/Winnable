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
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">Winnable</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
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
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default MainNavbar;

// const { SubMenu } = Menu;

// class MainNavbar extends Component {
// 	state = {
// 		current: "mail"
// 	};

// 	handleClick = e => {
// 		console.log("click ", e);
// 		this.setState({
// 			current: e.key
// 		});
// 	};

// 	render() {
// 		return (
// 			<Menu
// 				onClick={this.handleClick}
// 				selectedKeys={[this.state.current]}
// 				mode="horizontal"
// 			>
// 				<Menu.Item key="mail">
// 					<Icon type="mail" />
// 					Navigation One
// 				</Menu.Item>
// 				<Menu.Item key="app">
// 					<Icon type="appstore" />
// 					Navigation Two
// 				</Menu.Item>
// 				<SubMenu
// 					title={
// 						<span className="submenu-title-wrapper">
// 							<Icon type="login" />
// 							Login
// 						</span>
// 					}
// 				>
// 					<Menu.ItemGroup title="Item 1">
// 						<Menu.Item key="setting:1">Option 1</Menu.Item>
// 						<Menu.Item key="setting:2">Option 2</Menu.Item>
// 					</Menu.ItemGroup>
// 					<Menu.ItemGroup title="Item 2">
// 						<Menu.Item key="setting:3">Option 3</Menu.Item>
// 						<Menu.Item key="setting:4">Option 4</Menu.Item>
// 					</Menu.ItemGroup>
// 				</SubMenu>
// 				<Menu.Item key="alipay">
// 					<a
// 						href="https://ant.design"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 					>
// 						Navigation Four - Link
// 					</a>
// 				</Menu.Item>
// 			</Menu>
// 		);
// 	}
// }

// export default MainNavbar;
