import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./index.css"

const Footer = () => {
    return (
        <div className="pt-5">
            <Container id="mainContainer">
                <Row>
                    <Col md={4}>
                        <h3 id="footerTxt" className="text-white text-left">FRONT-END</h3>
                        <p id="footerTxt" className="text-white text-left pt-3">Davis Cabrera <i class="fab fa-github"></i> <i class="fab fa-linkedin"></i></p>
                        <p id="footerTxt" className="text-white text-left">Matthew Madrigal <i class="fab fa-github"></i> <i class="fab fa-linkedin"></i></p>
                    </Col>
                    <Col md={4}>
                        <p id="footerTxt" className="text-white">HOME</p>
                        <p id="footerTxt" className="text-white">STATS</p>
                        <p id="footerTxt" className="text-white">PROFILE</p>
                        <p id="footerTxt" className="text-white">TEAMS/PLAYERS</p>
                        <img className="" src={require('../Navbar/winnablenavbar.png')} width="220px" />
                    </Col>
                    <Col md={4}>
                    <h3 id="footerTxt" className="text-white text-right">BACK-END</h3>
                        <p id="footerTxt" className="text-white text-right pt-3">Kent Okazaki <i class="fab fa-github"></i> <i class="fab fa-linkedin"></i></p>
                        <p id="footerTxt" className="text-white text-right">Logan Bertrand <i class="fab fa-github"></i> <i class="fab fa-linkedin"></i></p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Footer