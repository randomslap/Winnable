import React, { Component } from "react";
import { Animated } from "react-animated-css";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./index.css";
class Jumbotron extends Component {
	state = {
		index: 0,
		currentItem: {
			row1: "Create or Join a",
			row2: "Overwatch Team",
			row3: ""
		},
		visible: true
	};
	componentDidMount = () => {
		this.setState({
			row1: "test1",
			row2: "test1",
			row3: "test1"
		})
	}

	onChange() {
		console.log("sw");
	}

	handleSelect = selectedIndex => {
		console.log(selectedIndex);
		const items = [
			{
				row1: "Create or Join an",
				row2: "Overwatch Team",
				row3: ""
			},
			{
				row1: "Lead Your",
				row2: "Overwatch Team to the Top",
				row3: ""
			},
			{
				row1: "Keep track on",
				row2: "Player Statistics",
				row3: ""
			},
		];
		this.setState({
			currentItem: items[selectedIndex],
			visible: false
		});
		setInterval(() => {
			this.setState({
				visible: true
			});
		}, 500);
	};

	render() {
		return (
			<div>
				<div className="zindexfix">
				<Container>
				<Row>
						<Col md={{ offset: 3 }}>
							<Animated
								animationIn="fadeInLeft"
								animationOut="fadeOutRight"
								animationInDuration={400}
								isVisible={this.state.visible}
							>
								<div
									onChange={this.onChange}
									id={this.state.index}
									className="jumboText"
								>
									{this.state.currentItem.row1}
								</div>
							</Animated>
						</Col>
					</Row>
					<Row>
						<Col md={{ offset: 3 }}>
							<div className="jumboText">
								{this.state.currentItem.row2}
							</div>
						</Col>
					</Row>
					
					<Row>
						<Col md={{ offset: 3}}>
							<div className="jumboText mt-5">
								<Button className="btn btn-white mr-4">Create a team</Button>
								<Button className="btn btn-orange">Join a team</Button>
							</div>
						</Col>
					</Row>
				</Container>
				</div>
				<Container className="overlay">
					
				</Container>
				<Carousel
					wrap={true}
					interval={3500}
					onSelect={this.handleSelect}
				>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://d2y4mhrku00tr3.cloudfront.net/images/pages/about/team-logos-40f002676ef0d61a27cee08d85358575bee03e5b2374f52d2fa1b2b7fb0f061ada398c1c99e32189c64d9628b21b091f939c84ed6066ad179193de6a6305e004.jpg"
							alt="First slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://bnetcmsus-a.akamaihd.net/cms/page_media/sv/SV2HSWCEM6051532817684707.jpg"
							alt="Third slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="http://calixtechnews.com/wp-content/uploads/2016/06/20141108025652a0dxq9aond8nkjdk.jpg"
							alt="Third slide"
						/>
					</Carousel.Item>
					
				</Carousel>
			</div>
		);
	}
}
export default Jumbotron;
