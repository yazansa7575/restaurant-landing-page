import React from 'react'
import './SliderPer.css'
import Carousel from 'react-bootstrap/Carousel';
import per1 from '../../assets/image/1.jpg';
import per2 from '../../assets/image/2.jpg';

const SliderPer = () => {
    return (
        <div className='SliderPer'>
            <h2>
                Testimonials
            </h2>
            <Carousel >
                <Carousel.Item className='MyCarouselItem'>
                    <div>
                        <img
                            className="d-block "
                            src={per1}
                            alt="First slide"
                        />
                    </div>
                    <h4>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "</h4>
                    <p>Maccy Doe - Front End</p>
                </Carousel.Item>
                <Carousel.Item className='MyCarouselItem'>
                    <div>
                        <img
                            className="d-block "
                            src={per2}
                            alt="First slide"
                        />
                    </div>
                    <h4>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "</h4>
                    <p>Maccy Doe - Front End</p>
                </Carousel.Item>
                <Carousel.Item className='MyCarouselItem'>
                    <div>
                        <img
                            className="d-block "
                            src={per1}
                            alt="First slide"
                        />
                    </div>
                    <h4>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. "</h4>
                    <p>Maccy Doe - Front End</p>
                </Carousel.Item>


            </Carousel>
        </div>
    )
}

export default SliderPer