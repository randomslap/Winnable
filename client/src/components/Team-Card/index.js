import React, { Component } from "react"
import { InputGroup, FormControl, Container, Row, Col, Card, Form, Button, Image } from "react-bootstrap"
import API from "../../utils/API";
import "./index.css"

const TeamCard = () => {
    return (
        <Container className="pt-4 pb-2">
            <Row className="no-gutters">
                <Col md={3}>
                    <Card id="leftCardTeams" >
                        <Row>
                            <Col md={12} className="pt-3">
                                <img id="TeamLogo" src={require('../../assets/images/winnable/winnableteamlogo.png')} width="180px" ></img>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} id="leftTabContent" className="pt-5">
                                <p id="playerInfoTabs2">SR RANGE: <span id="owOrange">3000-3500</span> </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} id="leftTabContent">
                                <p id="playerInfoTabs2">REGION: <span id="owOrange">NORTH AMERICA</span> </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} id="leftTabContent">
                                <p id="playerInfoTabs2">LANGUAGE: <span id="owOrange">ENG</span> </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} id="leftTabContentDescTeams">
                                <hr id="hrcustom2" />
                            </Col>
                        </Row>
                    </Card>
                </Col>

                <Col md={9}>
                    <Card id="rightCardTeams">
                        <Row>
                            <Col md={8}>
                                <h1 id="name">Winnable</h1>
                            </Col>
                            <Col md={4} id="btnSpacing">
                            <Button id="btn-orangeAddit" onClick="" size="md" type="submit">JOIN TEAM</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Container className="pt-1">
                                <Row>
                                    <Col md={12}>
                                        <p className="text-left">ROLES:</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={2} >
                                        <img src={require('../../assets/images/RoleIcons/dpsicon.png')} ></img>
                                        <p id="teamPlayers">Logandi#1297</p>
                                    </Col>
                                    <Col md={2}>
                                        <img src={require('../../assets/images/RoleIcons/dpsicon.png')} ></img>
                                        <p id="teamPlayers">cmndrshepard#1628</p>
                                    </Col>
                                    <Col md={2}>
                                        <img src={require('../../assets/images/RoleIcons/tankicon.png')} ></img>
                                        <p id="teamPlayers">sauce#11279</p>
                                    </Col>
                                    <Col md={2}>
                                        <img src={require('../../assets/images/RoleIcons/tankicon.png')} ></img>
                                        <p id="teamPlayers">ned#11980</p>
                                    </Col>
                                    <Col md={2}>
                                        <img src={require('../../assets/images/RoleIcons/supporticon.png')} ></img>
                                        <p id="teamPlayers">almond#11234</p>
                                    </Col>
                                    <Col md={2}>
                                        <img src={require('../../assets/images/RoleIcons/supporticon.png')} ></img>
                                        <p id="teamPlayers">kieranGO#1585</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                        <Row>
                            <Container>
                                <Row>
                                    <Col md={12}>
                                        <hr id="hrcustom2" />
                                        <p className=" text-center">DESCRIPTION</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <Card id="descriptionCard">
                                            <p> We are a competitive team playing in US, located in California. Not currently looking for any players!</p>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default TeamCard;