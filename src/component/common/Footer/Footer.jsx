import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <ul>
                        <li><a href="#"> Register</a></li>
                        <li><a href="#"> Forum</a></li>
                        <li><a href="#"> Affiliate</a></li>
                        <li><a href="#"> FAQ</a></li>
                    </ul>
                </Row>
                <Row>
                    <ul>
                        <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-telegram"></i></a></li>
                    </ul>
                </Row>
                <p>© 2023. Foodera. All rights reserved.</p>
                <p>Designed by MEZO SA * <a target="_blank" href="https://www.facebook.com/profile.php?id=100087187998090">VTMA-DP</a></p>
            </Container>
        </div>
    )
}

export default Footer