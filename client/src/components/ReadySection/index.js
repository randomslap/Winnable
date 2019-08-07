import React from "react"
import { Col, Row, Container, Button } from "react-bootstrap"
import "./index.css"

const ReadySection = () => {
    return (
        <div className="ready pb-5">
            <Container>
                <Row className="text-white text-center">
                    <Col md={12}>
                        <img src={require("../../assets/images/winnable/winnableorange.png")} width="80px" height="80px"></img>
                        <h1 className="text-left text-center">Ready to get started?</h1>
                        <p>Create an account now to start your path to the pros</p>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}


export default ReadySection