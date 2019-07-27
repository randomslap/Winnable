import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import "./index.css"

const StatSection = () => {
    return (
        <Container>
            <Row>
                <Col md={5}>
                    <img src="https://via.placeholder.com/500x250"/>
                </Col>
                <Col id="spacing" md={7}>
                    <h2 class="text-center">Check out our Stat Checker</h2>
                    <p class="text-center lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    <Button class="text-center" variant="success">GO</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default StatSection