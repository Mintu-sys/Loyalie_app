import React from 'react'
import { Container } from 'react-bootstrap'
import Talkaboutlogos from '../Apidata/Talkaboutlogos'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Talkaboutus = () => {

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
        <Container className="my-5 text-center">
            <h2 className="text-center my-2">Who Is Talking About Us?</h2>
            <Carousel 
                responsive={responsive} 
                autoPlaySpeed={1}
                infinite={true}
                keyBoardControl={true}
                autoPlay={true}
                transitionDuration={2000}
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                > 
                    {Talkaboutlogos.map((url) => {  
                       return (
                        <img className="media_logos m-auto" src={url.logos} alt={url.logos}/>
                       );     
                    })}
                    </Carousel>
        </Container>
    </>
}

export default Talkaboutus
