import React from "react"
import {Container, Row, Col} from 'react-bootstrap'
import "./index.css"

const Features = () => {
    return (
        <Container className="text-white pt-5">
            <h2 className="text-center" id="featureheader">Features</h2>
            <h5 className="text-center pb-5">Winnable is your one platform site for everything competitive Overwatch.</h5>
            <Row>
                <Col md={3}><i class="fas fa-binoculars fa-6x pt-3"></i>
                    <p className="pt-3">Recruiting</p>
                </Col>

                <Col md={3}><i class="fas fa-chart-line fa-6x pt-3"></i>
                    <p className="pt-3">Statistics</p>

                </Col>
                <Col md={3}><i class="fas fa-users fa-6x pt-3"></i>
                    <p className="pt-3">Teams</p>
                </Col>
                <Col md={3}><i class="fab fa-battle-net fa-6x pt-3"></i>
                    <p className="pt-3">Battle.net Integration</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Features