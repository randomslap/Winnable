import React, { Component } from "react";
import {Navbar, Nav} from 'react-bootstrap'
import "./index.css"

class MainNavbar extends Component {
	render() {
		return (
			<Navbar bg="light" variant="light">
			<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Nav className="mr-auto">
					<Nav href="#home">Home</Nav>
					<Nav href="#features">Features</Nav>
					<Nav href="#pricing">Pricing</Nav>
				</Nav>
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
