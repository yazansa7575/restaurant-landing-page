import React from 'react'
import './MansStomach.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'


const MansStomach = () => {
    return (
        <div className='MansStomach'>
            <Container>
                <Row>
                    <Col md="12" >
                        <h2>
                            When a man's stomach is full it makes no
                            difference whether he is rich or poor.                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                            finibus bibendum in sit amet leo. Mauris feugiat erat tellus.

                        </p>
                        <button>
                            <a href='#'>
                                Watch Our Story
                            </a>
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MansStomach