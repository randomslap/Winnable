import React, { Component } from "react"
import { InputGroup, FormControl, Container, Row, Col, Card, Form, Button } from "react-bootstrap"
import API from "../utils/API";

class StatsPage extends Component {

    state = {
        bnetName: "",
        bnetNum: "",
        battleNetUser: "",
        userRank: "",
        rankPicture: "",
        userIcon: "",
        userLevel:""
    };

      loadStats = () =>{
          console.log("Is load stats getting hit?")
        API.getStats(this.state.bnetName + "#" + this.state.bnetNum)
        .then(res => console.log(res.data))
        }

        handleInputChange = event =>{
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
            this.setState({
            [name]: value
            });
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
                                                type="email" 
                                                placeholder="Enter email" />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Number</Form.Label>
                                            <Form.Control 
                                            value={this.state.title}
                                            onChange={this.handleInputChange}
                                            name="bnetNum"
                                            type="password" placeholder="Password" />
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
                                        <li>Name: <span>{this.state.battleNetUser}</span></li>
                                        <li>Level: <span>{this.state.userLevel}</span></li>
                                        <li>Rank: <span>{this.state.userRank}</span></li>
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