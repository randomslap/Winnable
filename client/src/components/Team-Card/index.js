import React, { Component } from "react"
import { InputGroup, FormControl, Container, Row, Col, Card, Form, Button, Image } from "react-bootstrap"
import API from "../../utils/API";
import "./index.css"

const TeamCard = () => {
    return (
        <Container className="pt-4">
            <Row className="no-gutters">
                <Col md={3}>
                    <Card id="leftCardTeams" >
                        <Row>
                            <Col md={12} id="playersProfilePic" className="pt-3">
                                <img src="" ></img>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} id="leftTabContent" className="pt-5">
                                <p id="playerInfoTabs2">SR RANGE: </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} id="leftTabContent">
                                <p id="playerInfoTabs2">REGION: </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} id="leftTabContent">
                                <p id="playerInfoTabs2">LANGUAGE: </p>
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
                                <h1 id="name">TEAM USERNAME</h1>
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
                                        <img src="http://placehold.jp/80x80.png" ></img>
                                    </Col>
                                    <Col md={2}>
                                        <img src="http://placehold.jp/80x80.png" ></img>
                                    </Col>
                                    <Col md={2}>
                                        <img src="http://placehold.jp/80x80.png" ></img>
                                    </Col>
                                    <Col md={2}>
                                        <img src="http://placehold.jp/80x80.png" ></img>
                                    </Col>
                                    <Col md={2}>
                                        <img src="http://placehold.jp/80x80.png" ></img>
                                    </Col>
                                    <Col md={2}>
                                        <img src="http://placehold.jp/80x80.png" ></img>
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
                                            <p></p>
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