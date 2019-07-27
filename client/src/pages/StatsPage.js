import React, { Component } from "react"
import { InputGroup, FormControl, Container, Row, Col, Card, Form, Button } from "react-bootstrap"

class StatsPage extends Component {
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
                                            <Form.Control type="email" placeholder="Enter email" />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
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
                                        <li>Name: <span></span></li>
                                        <li>Level: <span></span></li>
                                        <li>Rank: <span></span></li>
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