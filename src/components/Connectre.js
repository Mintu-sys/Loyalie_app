import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ConnectreBG from '../video/connectre.mp4'
import Connectre_Logo from '../images/logos/connectRE_logo.png'

const Connectre = () => {



    return <>
       <div className="container">
       <h4 className="text-center">We have partnered with 5 of the Top 15 </h4>
        <h2 className="text-center my-5">Our Real Estate Loyalty Platforms </h2>

       </div>
        
        <video className='videoTag' autoPlay loop muted>
                <source src={ConnectreBG} type='video/mp4' />
            </video>
        <Container>
            
            <Row>
                <Col className="m-auto my-5">
                   <img className="connectre_logo mt-4" src={Connectre_Logo} alt="ConnectRE"/>
                   <p className="connectre_title mt-4">ConnectRE builds digital amenities that enrich the lives of 
                   your homeowners, creating happier communities that recommend you.</p>
                   <p className="connectre_descrip my-4">Our easy plug and play solution helps you maximise 
                   your referral potential instantly.</p>
                   <button className="main_btn mb-5">Learn More</button>
                </Col>
                <Col></Col>
            </Row>

        </Container>

    </>

}

export default Connectre
