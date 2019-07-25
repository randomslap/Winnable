import React, { Component } from "react";
import RightMenu from "./RightMenu";
import { Drawer, Button } from "antd";
import './index.css'

class Navbar extends Component {
	state = {
		current: "mail",
		visible: false
    };
	showDrawer = () => {
		this.setState({
			visible: true
		});
	};

	onClose = () => {
		this.setState({
			visible: false
		});
	};

	render() {
		return (
			<nav className="menuBar">
				<div className="logo">
					<a href="/">Winnable</a>
				</div>
				<div className="menuCon">
					<div className="rightMenu">
						<RightMenu />
					</div>
					<Button
						className="barsMenu"
						type="primary"
						onClick={this.showDrawer}
					>
						<span className="barsBtn" />
					</Button>
					<Drawer
						title="Basic Drawer"
						placement="right"
						closable={false}
						onClose={this.onClose}
						visible={this.state.visible}
					>
						<RightMenu />
					</Drawer>
				</div>
			</nav>
		);
	}
}

export default Navbar;
