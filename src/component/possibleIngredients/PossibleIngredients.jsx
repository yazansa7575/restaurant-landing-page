import React from 'react'
import './PossibleIngredients.css'
import PossibleIngredientsImage from '../../assets/image/2.png'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
const PossibleIngredients = () => {
    return (
        <div className='PossibleIngredients'>

            <Container>
                <Row>
                    <Col md="6" >
                        <h2>
                            We make everything by hand with the best possible ingredients.                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                        </p>
                        <ul>
                            <li>Etiam sed dolor ac diam volutpat.</li>
                            <li>Erat volutpat aliquet imperdiet.</li>
                            <li>purus a odio finibus bibendum.</li>
                        </ul>
                        <button>
                            <a href='#'>  learn more</a>
                        </button>
                    </Col>
                    <Col md="6" >
                        <img src={PossibleIngredientsImage} alt="" />
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default PossibleIngredients