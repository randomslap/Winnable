import React, { Component } from "react";
import { Animated } from "react-animated-css";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
class Jumbotron extends Component {
	state = {
		index: 0,
		currentItem: {
			row1: "test1",
			row2: "test1",
			row3: "test1"
		},
		visible: true
	};

	onChange() {
		console.log("sw");
	}

	handleSelect = selectedIndex => {
		console.log(selectedIndex);
		const items = [
			{
				row1: "test1",
				row2: "test1",
				row3: "test1"
			},
			{
				row1: "test2",
				row2: "test2",
				row3: "test2"
			},
			{
				row1: "test3",
				row2: "test3",
				row3: "test3"
			},
			{
				row1: "test4",
				row2: "test4",
				row3: "test4"
			}
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
				<Container className="overlay">
					<Row>
						<Col md={{ offset: 6 }}>
							<Animated
								animationIn="zoomIn"
								animationOut="zoomOut"
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
						<Col md={{ offset: 6 }}>
							<div className="jumboText">
								{this.state.currentItem.row2}
							</div>
						</Col>
					</Row>
					<Row>
						<Col md={{ offset: 6 }}>
							<div className="jumboText">
								{this.state.currentItem.row3}
							</div>
						</Col>
					</Row>
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
						<Carousel.Caption>
							<h3 onChange={this.onChange}>First slide label</h3>
							<p>
								Nulla vitae elit libero, a pharetra augue mollis
								interdum.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://via.placeholder.com/1200"
							alt="Third slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://via.placeholder.com/1200"
							alt="Third slide"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="https://via.placeholder.com/1200"
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
			</div>
		);
	}
}
export default Jumbotron;
