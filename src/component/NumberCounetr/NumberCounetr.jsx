import React, { Fragment } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import './NumberCounetr.css'

const NumberCounetr = () => {
    return (
        <div className="NumberCounetr">
            <Container>
                <Row>
                    <Col md="3">
                        <h3>1287+</h3>
                        <p>SAVINGS</p>
                    </Col>
                    <Col md="3">
                        <h3>5786+</h3>
                        <p>PHOTOS</p>
                    </Col>
                    <Col md="3">
                        <h3>1440+</h3>
                        <p>ROCKETS</p>
                    </Col>
                    <Col md="3">
                        <h3>7110+</h3>
                        <p>GLOBES</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NumberCounetr