import React from 'react'
import './FAQ.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const FAQ = () => {
    return (
        <div className='faq'>
            <Container>
                <Row>
                    <h2>
                        Frequently Asked Questions
                    </h2>
                    <Col md="6">
                        <h5>~ Is Foodera Bread really baked fresh each day?</h5>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                        </p>
                    </Col>
                    <Col md="6">
                        <h5>~ Do you bake breads containing animal fats or products?</h5>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                        </p>
                    </Col>
                    <Col md="6">
                        <h5>~ Can I order your products online?</h5>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                        </p>
                    </Col>
                    <Col md="6">
                        <h5>~ When are you opening a shop near me?</h5>
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FAQ