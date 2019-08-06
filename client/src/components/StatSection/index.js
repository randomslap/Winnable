import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import "./index.css"

const StatSection = () => {
    return (
        <Container id="spacingTopBot">
            <Row>
                <Col md={5}>
                    <img src="https://via.placeholder.com/500x250"/>
                </Col>
                <Col id="spacing" md={7}>
                    <h2 className="text-center text-white">Check out our Stat Checker</h2>
                    <p className="text-center text-white lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    <Button className="text-center" variant="success">GO</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default StatSection