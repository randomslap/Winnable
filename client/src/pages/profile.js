import React from "react"
import {Container, Row, Col, Card} from "react-bootstrap"
import "./profile.css"


const Profile = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Card className="cardOne">
                        <Row>
                            <Col md={12}>
                                <h2>Username</h2>
                                <img src="https://place-hold.it/184x184"></img>
                                <h6 className="pt-3">Battle.net</h6>
                                <p>sauceman#6969</p>
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
                            <Col md={2}>
                                <h6>Team:</h6>
                                <img src="https://place-hold.it/50x50"/>
                            </Col>
                            
                        </Row>
                    </Card>
                </Row>
                
                
            </Container>
        </div>
    )
}

export default Profile