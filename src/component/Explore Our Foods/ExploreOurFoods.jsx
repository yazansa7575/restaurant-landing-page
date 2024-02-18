import React from 'react'
import './ExploreOurFoods.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { data } from '../../Data'


function ExploreOurFoods() {
    return (
        <div className='ExploreOurFoods'>
            <Container>
                <Row className='row-1'>
                    <Col md="12" >
                        <h2>
                            Explore Our Foods
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                        </p>
                    </Col>
                </Row>
                <Row className='row-2'>
                    {
                        data.map((e) => {
                            return (
                                <Col md="4" className='cards'>
                                    <div className='card'>
                                        <img src={e.img} alt="" />
                                        <h3>{e.title}</h3>
                                        <p>{e.time}</p>
                                        <p className='price'>{e.price} <del> <span>{e.disc}</span></del></p>
                                        <button><a href="#">order now</a></button>
                                    </div>
                                </Col>
                            )
                        })
                    }


                </Row>
            </Container>
        </div>
    )
}

export default ExploreOurFoods