import React, { Component } from "react";
import { Card, Form, Row, Col, Button, ButtonToolbar, Container } from 'react-bootstrap'
import "./index.css"

class Test extends Component {
    render() {
        return (
            <Container>
                <Row>
                <Col md={ 6 }>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title> TEST//TEST </Card.Title>
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                </Row>
                            </Form>
                            <ButtonToolbar>
                                <Button variant="primary">Submit</Button>
                            </ButtonToolbar>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={ 6 }>
                    <Card>
                        <Card.Body>
                            <Card.Title>TEST//TEST</Card.Title>
                            <Card.Text> </Card.Text>
                            <Card.Text> </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Container>
        )
    }
}

export default Test;
