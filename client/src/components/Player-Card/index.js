import React, { Component } from "react"
import { InputGroup, FormControl, Container, Row, Col, Card, Form, Button, Image } from "react-bootstrap"
import API from "../../utils/API";
import "./index.css"

const PlayerCard = (props) => {
    return (
        <Container className="pt-4 playerCard">
            <Row className="no-gutters">
                <Col md={3}>
                    <Card >
                        <Row>
                            <Col md={12} className="pt-3">
                                <img src="http://placehold.jp/150x150.png" ></img>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} id="leftTabContent" className="pt-5">
                                <p>RANK: </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} id="leftTabContent">
                                <p>REGION: </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} id="leftTabContent">
                                <p>LANGUAGE: </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12} id="leftTabContentDescPlayers">
                                <hr></hr>
                            </Col>
                        </Row>
                    </Card>
                </Col>

                <Col md={9}>
                    <Card>
                        <Row>
                            <Col md={8}>
                                <h1 id="name">{props.name}</h1>
                            </Col>
                            <Col md={4}>
                                <Button id="joinButton" onClick="" size="md" type="submit">INVITE PLAYER</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Container className="pt-1">
                                <Row>
                                    <Col md={12}>
                                        <p className="text-left">ROLES</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <Row>
                                            <Col md={4} >
                                                <img src="http://placehold.jp/80x80.png" ></img>
                                            </Col>
                                            <Col md={4}>
                                                <img src="http://placehold.jp/80x80.png" ></img>
                                            </Col>
                                            <Col md={4}>
                                                <img src="http://placehold.jp/80x80.png" ></img>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </Row>
                        <Row>
                            <Container>
                                <Row>
                                    <Col md={12}>
                                        <p className=" text-left">DESCRIPTION</p>
                                        <hr></hr>
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

export default PlayerCard;