import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Link } from "react-router-dom"

import Loyalie from '../images/logos/loyalielogo.png'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
    return <>


        <div className="footer_section">
            <Container className="py-5">
                <Row>
                    <Col sm={8}>
                        <img className="footer_logo" src={Loyalie} alt="Logo" />
                        <p className="footer_desc my-3">Indiabulls Finance Centre, 1201, Tower – 1,
                            Senapati Bapat Road, Lower Parel, Mumbai 400013,
                            Maharashtra, India.</p>
                        <FacebookIcon className="social_icon" />
                        <TwitterIcon className="social_icon mx-3" />
                        <InstagramIcon className="social_icon" />
                        <LinkedInIcon className="social_icon  mx-3" />
                    </Col>


                    <Col sm={2} className="footer_link">
                        <h5 className="footer_title">Navigation</h5>

                        <ul>
                            <li>Home</li>
                            <li> <Router>
                            <Link as={Link} to="/About">About Us</Link>
                            
                            </Router>
                                
                            </li>
                            <li>Partner Brands</li>
                            <li>Contact</li>
                        </ul>

                    </Col>


                    <Col sm={2} className="footer_link">
                        <h5 className="footer_title">Quick Links</h5>


                        <ul>
                            <li>WinnRE</li>
                            <li>ConnectRE</li>
                            <li>Career</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>

                    </Col>
                </Row>
            </Container>
        </div>



    </>
}

export default Footer
