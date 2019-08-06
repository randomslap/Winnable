import React from "react"
import {Container, Row, Col} from 'react-bootstrap'
import "./index.css"

const Features = () => {
    return (
        <Container className="text-white pt-5">
            <h1 className="text-center pb-5">Features</h1>
            <Row>
                <Col md={3}><i class="fas fa-binoculars fa-6x pt-3"></i>
                    <p className="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
                <Col md={3}><i class="fas fa-chart-line fa-6x pt-3"></i>
                    <p className="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
                <Col md={3}><i class="fas fa-users fa-6x pt-3"></i>
                    <p className="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
                <Col md={3}><i class="fab fa-battle-net fa-6x pt-3"></i>
                    <p className="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Features