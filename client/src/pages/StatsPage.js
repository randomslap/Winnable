import React, { Component } from "react"
import { InputGroup, FormControl, Container, Row, Col, Card, Form, Button } from "react-bootstrap"
import API from "../utils/API";

class StatsPage extends Component {

    state = {
        bnetName: "",
        bnetNum: "",
        userRank: "",
        rankPicture: "",
        userIcon: "",
        userLevel:"",
        userSR: 0,
    };
    
      loadStats = () =>{
          console.log("Is load stats getting hit?")
        API.getStats(this.state.bnetName + "-" + this.state.bnetNum)
        .then(res => {
            console.log(res.data.us.stats.competitive.overall_stats)
            this.setState({
                userRank: res.data.us.stats.competitive.overall_stats.tier,
                userLevel: res.data.us.stats.competitive.overall_stats.level,
                userSR: res.data.us.stats.competitive.overall_stats.comprank
            })
        }
        )}

        handleInputChange = event =>{
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
            this.setState({
            [name]: value
            });
            console.log(name)
            console.log(value)
        }

        handleFormSubmit = event => {
            event.preventDefault();
            this.loadStats()
        };

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card>

                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control 
                                                value={this.state.bnetName}
                                                onChange={this.handleInputChange}
                                                name="bnetName"
                                                type="text" 
                                                placeholder="Enter Battletag" />
                                            <Form.Text className="text-muted">
                                                Please make sure your Battletag is properly Capitalized
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Number</Form.Label>
                                            <Form.Control 
                                            value={this.state.title}
                                            onChange={this.handleInputChange}
                                            name="bnetNum"
                                            type="text" placeholder="1234" />
                                        </Form.Group>
                                        <Button onClick={this.handleFormSubmit} variant="primary" type="submit">
                                            Submit
                                            </Button>
                                    </Form></Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Container></Container>
                                    <ul>
                                        <li>Name: <span>{this.state.bnetName + "#" + this.state.bnetNum}</span></li>
                                        <li>Level: <span>{this.state.userLevel}</span></li>
                                        <li>Rank: <span>{this.state.userRank}</span></li>
                                        <li>Rank SR: <span>{this.state.userSR}</span></li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card>
                                <Card.Body>This is some text within a card body.</Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>This is some text within a card body.</Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card>
                                <Card.Body>This is some text within a card body.</Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card>

                                <Card.Body>This is some text within a card body.</Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card>
                                <Card.Body>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default StatsPage