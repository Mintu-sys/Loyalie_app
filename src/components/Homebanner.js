import React from 'react'
import Bannertext from '../Apidata/Bannertext'
import { Carousel, Container } from 'react-bootstrap'



const Homebanner = () => {

    return <>

        <Container fluid >
            <div className='row banner'>
                <div className='col-12 m-auto text-center'>
                    <h1 className='main_header_one'>Digital Amenities for Real Estate Builders</h1>
                    <Carousel pause="false">

                    {Bannertext.map((Curtext) => {  
                       return (
                            <Carousel.Item interval={1500}>
                                    <div><h1 className='main_header_two my-2'>{Curtext.title}</h1></div>
                            </Carousel.Item>
                           );     
                      })}
                    </Carousel>
                    <button className="my-3 main_btn">Contact Us Now</button>
                </div>
            </div>
        </Container>


    </>
}

export default Homebanner