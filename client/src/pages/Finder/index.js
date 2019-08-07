import React, { Component } from "react"
import { InputGroup, Tab, Tabs, FormControl, Container, Row, Col, Card, Form, Button, Image } from "react-bootstrap"
import API from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./index.css"
import TeamCard from "../../components/Team-Card";
import PlayerCard from "../../components/Player-Card";
import PlayerResultsContainer from "../../components/PlayerResultsContainer";

class Finder extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        usersArr: []
    }

    componentDidMount = () =>{
        API.getUsers()
        .then(res =>{
            console.log(res.data)
            this.setState({usersArr: res.data})
        })
        
    }

    render(){
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
                        <PlayerResultsContainer usersArr={this.state.usersArr}/>
                    </div>
                </Tab>
            </Tabs>
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