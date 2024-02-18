import React, { Fragment } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import './Main.css'

const Main = () => {
    return (
        <div className="bgImageMain">
            <Container className="Container ">
                <Row className="row ">
                    <Col md="6" className='left-main'>
                        <h2>
                            Good food choices are good investments.
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.
                        </p>
                        <button>Order now</button>
                        <button>learn more</button>
                    </Col>
                    <Col md="6" className='right-main'>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main