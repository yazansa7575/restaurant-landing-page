import React from 'react'
import './Pride.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import pridImage from '../../assets/image/1.png'

const Pride = () => {
    return (
        <div className='prid'>


            <Container>
                <Row>
                    <Col md="6" >
                        <img src={pridImage} alt="" />
                    </Col>
                    <Col md="6" >
                        <h2>
                            We pride ourselves on making real food from the best ingredients.
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                        </p>
                        <button>
                            <a href='#'>  learn more</a>
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Pride