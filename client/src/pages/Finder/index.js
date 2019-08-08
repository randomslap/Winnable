import React, { Component } from "react"
import { InputGroup, Tab, Tabs, FormControl, Container, Row, Col, Card, Form, Button, Image } from "react-bootstrap"
import API from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./index.css"
import TeamCard from "../../components/Team-Card";
import PlayerCard from "../../components/Player-Card";
import PlayerResultsContainer from "../../components/PlayerResultsContainer";
import TeamResultsContainer from "../../components/TeamResultsContainer";

class Finder extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        usersArr: [],
        teamsArr: []
    }

    componentDidMount = () => {
        API.getUsers()
            .then(res => {
                console.log(res.data)
                this.setState({ usersArr: res.data })
            })

        API.getTeams()
        .then(res => {
            console.log(res.data)
            this.setState({ teamsArr: res.data })
        })

    }

    render() {
        return (
            <Tabs className="nav-justified" defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Teams">
                    <div>
                        <Container>
                            <Row>
                                <Col md={{ span: 6, offset: 3 }} className="pb-5 pt-2">
                                    <h1 id="owOrange"> View Teams from: <span className="text-white">Skill Rating</span>, available <span className="text-white">Roles</span>, and <span className="text-white">Region</span></h1>
                                    <h5 className="pt-2" id="owOrange"> Looking to join a team? Search through all registered teams on Winnable to view open teams, or just browse. </h5>
                                </Col>
                                <Col md={12} className="pb-5">
                                    <Card md={12} id="backgroundCard">
                                        <TeamResultsContainer teamsArr={this.state.teamsArr} />
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
                                <Col md={{ span: 6, offset: 3 }} className="pb-5 pt-2">
                                    <h1 id="owOrange"> View free-agents from: <span className="text-white">Skill Rating</span>, <span className="text-white">Roles</span>, and <span className="text-white">Region</span></h1>
                                    <h5 className="pt-2" id="owOrange"> Invite other free-agents to your team. Determine if they accommodate to your teams needs.</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} className="pb-5">
                                    <Card id="backgroundCard">
                                        <Row>
                                            <Col md={12}>
                                                <PlayerResultsContainer usersArr={this.state.usersArr} />
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Tab>
            </Tabs >
        )

    }

}

//export default Finder

Finder.propTypes = {
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(mapStateToProps)(Finder);