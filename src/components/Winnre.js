import React from 'react'
import Winnre_Logo from '../images/logos/WinnRE_logo.png'
import { Container, Row, Col } from 'react-bootstrap'
import Winnre_screens from '../images/others/winnre_screens.png'


const Winnre = () => {
    return <>

        <Container fluid>

            <Row className="winnre_section">

                <Col>
                    <img className="winnre_screens my-5" src={Winnre_screens} alt="WinnRE" />
                </Col>


                <Col className="my-5 m-auto">
                    <img className="winnre_logo mt-4" src={Winnre_Logo} alt="ConnectRE" />
                    <p className="winnre_title mt-4">Scale up how many, how easily, 
                    and how rewardingly channel partners sell real estate.</p>
                    <p className="winnre_descrip my-4">WinnRE builds digital amenities that allow 
                    them to sell your projects in the easiest, fastest, and most rewarding way.</p>
                    <button className="main_btn mb-5">Learn More</button>
                </Col>

            </Row>

        </Container>

    </>

}

export default Winnre
