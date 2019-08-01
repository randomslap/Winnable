import React, { Component } from "react"
import { InputGroup, FormControl, Container, Row, Col, Card, Form, Button, Image } from "react-bootstrap"
import API from "../utils/API";
import "./StatsPage.css"

class StatsPage extends Component {

    state = {
        bnetName: "",
        bnetNum: "",
        userRank: "",
        rankPicture: "",
        userIcon: "",
        userLevel: "",
        userSR: 0,
    };

    loadStats = () => {
        console.log("Is load stats getting hit?")
        API.getStats(this.state.bnetName + "-" + this.state.bnetNum)
            .then(res => {
                console.log(res.data.us.stats.competitive.overall_stats)
                this.setState({
                    userRank: res.data.us.stats.competitive.overall_stats.tier,
                    userLevel: res.data.us.stats.competitive.overall_stats.level,
                    userSR: res.data.us.stats.competitive.overall_stats.comprank
                })
            }
            )
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
        console.log(name)
        console.log(value)
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.loadStats()
    };

    render() {
        return (
            <div>

                <Container className="pt-3">
                    <Row>
                        <Col md={12}>
                            <Card>
                                <Row>
                                    <Col md={{ span: 3 }}>
                                        <Row>
                                            <Col>
                                                <p id="searchBarText">CHECK PLAYER RANK AND STATS</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={{ span: 5 }}>
                                        <Form.Control size="lg" type="text" placeholder="search user here..." />
                                    </Col>
                                    <Col md={{ span: 2 }}>
                                        <Form.Control size="lg" type="text" placeholder="battletag..." />
                                    </Col>
                                    <Col md={{ span: 2 }}>
                                        <Button size="lg" type="submit">SEARCH</Button>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Container className="pt-5">
                    <Row>
                        <Col md={9}>
                            <Card id="userInfoCard">
                                <Row>
                                    <Col md={{ span: 3, offset: 1 }}>
                                        <Image src="https://place-hold.it/200x200" rounded />
                                    </Col>
                                    <Col md={{ span: 8 }}>
                                        <h1>User_Name619<span>#8080</span></h1>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <Row>
                                    <Col md={12}>
                                        <Row>
                                            <Col md={12}>
                                                <p>COMPETITIVE STATS</p>
                                                <hr></hr>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12}>
                                                <p id="test">LEVEL: </p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12}>
                                                <p id="test">RANK: </p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12}>
                                                <p id="test">GAMES WON: </p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12}>
                                                <p id="test">ENDORSMENT:</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Container className="pt-5">
                    <Row>
                        <Col md={12}>
                            <Card>
                                <Row>
                                    <Col md={6}>
                                        <Row>
                                            <Col md={{ span: 6 }}>
                                                <Image src="https://place-hold.it/80x80" />
                                            </Col>
                                            <Col md={{ span: 6 }}>
                                            <p id="test">LUCIO</p>
                                            </Col>
                                        </Row>
                                    </Col>

                                    <Col md={6}>

                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default StatsPage