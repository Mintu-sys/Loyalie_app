import React from 'react'
import { Container } from 'react-bootstrap'
import Brandlogodata from '../Apidata/Brandlogodata'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Ourbrands = () => {

    const responsive = {

        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
          slidesToSlide: 3
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
        <Container className="my-5 text-center">
            <h2 className="text-center my-5">Our Brand Partners</h2>
            <Carousel 
                responsive={responsive} 
                autoPlaySpeed={1}
                infinite={true}
                keyBoardControl={true}
                autoPlay={true}
                transitionDuration={3000}
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                > 
                    {Brandlogodata.map((url) => {  
                       return (
                        <img className="brands_logo" src={url.logos} alt={url.logos}/>
                       );     
                    })}
                    </Carousel>
        </Container>
    </>
}

export default Ourbrands
