import React from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import "./index.css"

const TeamProfile = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Card className="cardOne">
                        <Row>
                            <Col md={12}>
                                <h2>Team Name</h2>
                                <img src="https://place-hold.it/184x184"></img>
                                <h6 className="pt-3">Region</h6>
                                <p>North America</p>
                                <h6 className="pt-3">Language</h6>
                                <p>EN</p>
                                <h6 className="pt-3">Main Goal</h6>
                                <p>To play competitively</p>
                                <h6 className="pt-3">About</h6>
                                <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
                            </Col>
                        </Row>
                    </Card>
                    <Card className="cardTwo">
                        <Row>
                            <Col md={3}>
                                <h3 className="text-left">Team Owner:</h3>
                            </Col>
                            <Col className="text-right" md={9}>
                                <Button className="btn btn-orange">Apply <i class="fas fa-paper-plane"></i></Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                                <img src="https://place-hold.it/80x80"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}>
                                <h3 className="pt-5 text-left">Roster:</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                                <img src="https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/d/d4/New_Tank_Icon.png/120px-New_Tank_Icon.png?version=0fda46c98855553e418631ade1d114ee" width="80" height="80"/>
                                <a href="#"><p className="pt-2">cmndrshepard</p></a>
                            </Col>
                            <Col md={2}>
                                <img src="https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/d/d4/New_Tank_Icon.png/120px-New_Tank_Icon.png?version=0fda46c98855553e418631ade1d114ee" width="80" height="80"/>
                                <a href="#"><p className="pt-2">cmndrshepard</p></a>
                            </Col>
                            <Col md={2}>
                                <img src="https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/1/1c/New_Damage_Icon.png/120px-New_Damage_Icon.png?version=a2c2d0fd3d02948d7664d63494a450f4" width="80" height="80"/>
                                <a href="#"><p className="pt-2">cmndrshepard</p></a>
                            </Col>
                            <Col md={2}>
                                <img src="https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/1/1c/New_Damage_Icon.png/120px-New_Damage_Icon.png?version=a2c2d0fd3d02948d7664d63494a450f4" width="80" height="80"/>
                                <a href="#"><p className="pt-2">cmndrshepard</p></a>
                            </Col>
                            <Col md={2}>
                                <img src="https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/f/f7/New_Support_Icon.png/120px-New_Support_Icon.png?version=ed01b0059c14bc180981f295ea4a1c7d" width="80" height="80"/>
                                <a href="#"><p className="pt-2">cmndrshepard</p></a>
                            </Col>
                            <Col md={2}>
                                <img src="https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/f/f7/New_Support_Icon.png/120px-New_Support_Icon.png?version=ed01b0059c14bc180981f295ea4a1c7d" width="80" height="80"/>
                                <a href="#"><p className="pt-2">cmndrshepard</p></a>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}>
                                <h3 className="pt-5 text-left">SR Range:</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}>
                            <h4 className="text-left">3500 - 4000</h4>
                            </Col>
                        </Row>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}

export default TeamProfile