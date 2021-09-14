import React from 'react'
import { Container,  Row, Col } from 'react-bootstrap'
import Clientimages from '../Apidata/Clientsimg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const Clientlists = () => {

    const responsive = {

        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };



    return <>
        <Container>
            <Row className="shadow-lg mb-5 clientsimg">

                <Col sm={3} className="m-auto text-center border-end">
                    <h3>TRUSTED BY</h3>
                </Col>

                <Col sm={9} className="m-auto text-center">
                <Carousel 
                responsive={responsive} 
                autoPlaySpeed={1}
                infinite={true}
                keyBoardControl={true}
                autoPlay={true}
                transitionDuration={3000}
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                > 
                    {Clientimages.map((url) => {  
                       return (
                        <img className="mx-2 clients_logo" src={url.img} alt={url.alttxt}/>
                       );     
                    })}
                    </Carousel>
                </Col>

            </Row>
            
        </Container>
    </>

}

export default Clientlists
