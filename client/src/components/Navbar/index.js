import React, { Component } from "react";
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap'
import "./index.css"

class MainNavbar extends Component {
	render() {
		return (
			<Navbar bg="dark" expand="lg">
				<Navbar.Brand className="text-white" href="#home">Winnable</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
<<<<<<< Updated upstream
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
					<Nav.Link>Register</Nav.Link>
=======
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
>>>>>>> Stashed changes
				</Navbar.Collapse>
			</Navbar>
		)
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
