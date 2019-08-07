import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import "./index.css"

const StatSection = () => {
    return (
        <div>
            <Container id="spacingTopBot">
                <Row>
                    <Col md={6}>
                    <div class="imagecontainer">
                        <img src={require("./stat.png")} width="570px" height="284.4px"/>
                    </div>
                    </Col>
                    <Col id="spacing" md={6}>
                        <h2 className="text-center text-white">Check out our Stat Tracker!</h2>
                        <p className="text-center text-white lead">Keep up to date with your own stats, and other players while recruiting for your team.</p>
                        <a href="/stats"><Button className="text-center btn btn-white">GO</Button></a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StatSection