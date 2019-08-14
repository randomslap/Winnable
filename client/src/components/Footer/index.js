import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./index.css"

const Footer = () => {
    return (
        <div>
            <Container id="mainContainer">
                <Row>
                    <Col md={4}>
                        <h3 id="footerTxt" className="text-white text-left">FRONT-END</h3>
                        <p id="footerTxt" className="text-white text-left pt-3">Davis Cabrera <a target="_blank" href="https://github.com/dcabrera97" ><i class="fab fa-github"></i></a> <a  target="_blank" href="https://www.linkedin.com/in/davis-cabrera-66593217a/" ><i class="fab fa-linkedin"></i></a></p>
                        <p id="footerTxt" className="text-white text-left">Matthew Madrigal <a target="_blank" href="https://github.com/Madrigalbit" ><i class="fab fa-github"></i></a> <a  target="_blank" href="https://www.linkedin.com/in/matthew-madrigal-72993417a/" ><i class="fab fa-linkedin"></i></a></p>
                    </Col>
                    <Col md={4}>
                        <a href="/"> <p id="footerTxt" className="text-white">HOME</p> </a>
                        <a href="/stats"> <p id="footerTxt" className="text-white">STATS</p> </a>
                        <a href="/profile"> <p id="footerTxt" className="text-white">PROFILE</p> </a>
                        <a href="/teams"> <p id="footerTxt" className="text-white">TEAMS/PLAYERS</p> </a>
                        <img class="img-fluid" src={require('../Navbar/winnablenavbar.png')} width="220px" />
                    </Col>
                    <Col md={4}>
                    <h3 id="footerTxt" className="text-white text-right">BACK-END</h3>
                        <p id="footerTxt" className="text-white text-right pt-3">Kent Okazaki <a target="_blank" href="https://github.com/randomslap" ><i class="fab fa-github"></i></a> <a  target="_blank" href="https://www.linkedin.com/in/kent-okazaki-b129b317a/" ><i class="fab fa-linkedin"></i></a></p>
                        <p id="footerTxt" className="text-white text-right">Logan Bertrand <a target="_blank" href="https://github.com/loganbertrand" ><i class="fab fa-github"></i></a> <a  target="_blank" href="https://www.linkedin.com/in/logan-bertrand-/" ><i class="fab fa-linkedin"></i></a></p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Footer