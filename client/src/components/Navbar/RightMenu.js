import React, { Component } from "react";
import { Menu, Icon, Dropdown } from "antd";
import Login from "./Login";
import "./index.css";

class RightMenu extends Component {
	render() {
		return (
			<Menu mode="horizontal">
				<Menu.Item key="mail">
					<Dropdown overlay={Login} trigger={["click"]}>
						<a>
							Click me <Icon type="down" />
						</a>
					</Dropdown>
				</Menu.Item>
				<Menu.Item key="app">
					<a href="">Register</a>
				</Menu.Item>
			</Menu>
		);
	}
}

export default RightMenu;
