import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import "./index.css"

const Features = () => {
    return (
        <Container>

            <h1 class="pt-3 text-center">Features</h1>

            <h1 className="pt-3 text-center text-white">Features</h1>


            <h1 className="pt-3 text-center text-white">Features</h1>

            <Row>
                <Col md={3}><img src="https://via.placeholder.com/100x100" />
                    <p>sdadjksndklsajd</p>
                </Col>
                <Col md={3}><img src="https://via.placeholder.com/100x100" />
                    <p>sdadjksndklsajd</p>
                </Col>
                <Col md={3}><img src="https://via.placeholder.com/100x100" />
                    <p>sdadjksndklsajd</p>
                </Col>
                <Col md={3}><img src="https://via.placeholder.com/100x100" />
                    <p>sdadjksndklsajd</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Features