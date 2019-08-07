import React, { Component } from "react"
import { InputGroup, Tab, Tabs, FormControl, Container, Row, Col, Card, Form, Button, Image } from "react-bootstrap"
import API from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./index.css"
import TeamCard from "../../components/Team-Card";
import PlayerCard from "../../components/Player-Card";

const Finder = () => {
    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Teams">
                <div>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <Card>
                                    <TeamCard />
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Tab>
            <Tab eventKey="profile" title="Players">
                <div>
                    <Container>
                        <Row>
                            <Col md={12}>
                                <Card>
                                    <PlayerCard 
                        
                                    />
                                    {/* <p>{this.props.auth.user.battleTag.name + "#" + this.props.auth.user.battleTag.number}</p> */}
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Tab>
        </Tabs>
    )
}

//export default Finder

Finder.propTypes = {
	auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
	auth: state.auth
});
export default connect(mapStateToProps)(Finder);