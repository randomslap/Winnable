import React, { Component } from "react"
import { InputGroup, FormControl, Container, Row, Col, Card, Form, Button, Image } from "react-bootstrap"
import API from "../../utils/API";
import "./index.css"

class PlayerCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const src1 = this.props
            ? require(`../../assets/images/HeroIcons/${
                this.props.hero1 ? this.props.hero1 : "Baptiste"
                }.png`)
            : null;
        const src2 = this.props
            ? require(`../../assets/images/HeroIcons/${
                this.props.hero2 ? this.props.hero2 : "Baptiste"
                }.png`)
            : null;
        const src3 = this.props
            ? require(`../../assets/images/HeroIcons/${
                this.props.hero3 ? this.props.hero3 : "Baptiste"
                }.png`)
            : null;
        return (
            <Row>
                <Col md={12}>
                    <Container className="pt-4 playerCard">
                        <Row className="no-gutters">
                            <Col md={3}>
                                <Card id="playersInfoCard" >
                                    <Row>
                                        <Col md={12} className="pt-3">
                                            <img id="playersProfilePic" src={this.props.userIcon} ></img>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} id="leftTabContent" className="pt-5">

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} id="leftTabContent">
                                            <p id="PlayerInfoTabs">LEVEL: <span id="owOrange">{this.props.level}</span></p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} id="leftTabContent">
                                            <p id="PlayerInfoTabs">ENDORSEMENT LEVEL: <span id="owOrange">{this.props.endorsement}</span></p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} id="leftTabContent">
                                            <p id="PlayerInfoTabs">GAMES WON: <span id="owOrange">{this.props.gamesWon}</span></p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12} id="leftTabContentDescPlayers">
                                            <hr id="hrcustom2" />
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>

                            <Col md={9}>
                                <Card id="playersInfoCardRight">
                                    <Row>
                                        <Col md={8}>
                                            <h1 id="name">{this.props.name}</h1>
                                        </Col>
                                        <Col md={4} id="btnSpacing">
                                            <a target="_blank"
                                                href={`mailto:${
                                                    this.props.email
                                                    }?subject=Join%20My%20OW%20Team!&amp;`}>
                                                <Button id="btn-orangeAddit" onClick="" size="md" type="submit">INVITE PLAYER</Button>
                                            </a>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Container className="pt-1">
                                            <Row>
                                                <Col md={12}>
                                                    <Row>
                                                        <Col md={{ span: 4, offset: 2 }} >
                                                            <p id="rightContentText" className="text-left">PREFERRED ROLE:</p>
                                                            {(() => {
                                                                switch (this.props.role) {
                                                                    case "Damage":
                                                                        return (
                                                                            <img
                                                                                src="https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/1/1c/New_Damage_Icon.png/120px-New_Damage_Icon.png?version=a2c2d0fd3d02948d7664d63494a450f4"
                                                                                width="80"
                                                                                height="80"
                                                                            />
                                                                        );
                                                                    case "Tank":
                                                                        return (
                                                                            <img
                                                                                src="https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/d/d4/New_Tank_Icon.png/120px-New_Tank_Icon.png?version=0fda46c98855553e418631ade1d114ee"
                                                                                width="80"
                                                                                height="80"
                                                                            />
                                                                        );
                                                                    case "Support":
                                                                        return (
                                                                            <img
                                                                                src="https://gamepedia.cursecdn.com/overwatch_gamepedia/thumb/f/f7/New_Support_Icon.png/160px-New_Support_Icon.png?version=ed01b0059c14bc180981f295ea4a1c7d"
                                                                                width="80"
                                                                                height="80"
                                                                            />
                                                                        );
                                                                    default:
                                                                        return null;
                                                                }
                                                            })()}
                                                            <p>{this.props.role}</p>
                                                        </Col>
                                                        <Col md={4}>
                                                            <p id="rightContentText">RANK:</p>
                                                            <span>
                                                                <img src={this.props.rankIcon}
                                                                    width="80"
                                                                    height="80" />
                                                            </span>
                                                            <p>{this.props.rank}</p>

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
                                                    <hr id="hrcustom2" />
                                                    <p id="rightContentText" className="text-center">PREFERRED HEROES:</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={12}>
                                                    <Card id="descriptionCard">
                                                        <Row>
                                                            <Col md={4}>
                                                                <img id="heroImageFix" src={src1} />
                                                                <h3 id="owOrange">{this.props.hero1}</h3>
                                                            </Col>
                                                            <Col md={4}>
                                                                <img id="heroImageFix" src={src2} />
                                                                <h3 id="owOrange">{this.props.hero2}</h3>
                                                            </Col>
                                                            <Col md={4}>
                                                                <img id="heroImageFix" src={src3} />
                                                                <h3 id="owOrange">{this.props.hero3}</h3>
                                                            </Col>
                                                        </Row>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        )

    }

}

export default PlayerCard;