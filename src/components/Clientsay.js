import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Clientsaydata from '../Apidata/Clientsaydata'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const Clientsay = () => {

    const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return <>
       <div className="clients_say">
        <Container className="my-5 text-center ">
            <h2 className="text-center py-5">What Our Clients Say</h2>
            <Carousel
                responsive={responsive}
                autoPlaySpeed={1}
                infinite={true}
                keyBoardControl={true}
                autoPlay={true}
                transitionDuration={3000}
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            >
                {Clientsaydata.map((CurElem) => {
                    const { id, details, name, img, desig } = CurElem;
                    return (
                        <>
                            <Container fluid className="m-auto">
                                  <FormatQuoteIcon className="quote_icon"/>
                                <p>{details}</p>

                                <Row >
                                    <Col >
                                        <img className="client_logos" src={img} alt={id} />
                                    </Col>
                                    <Col className="client_details">
                                        <h5>{name}</h5>
                                        <p>{desig}</p>
                                    </Col>
                                </Row>

                            </Container>
                        </>
                    );
                })}
            </Carousel>
        </Container>
        </div>
    </>
}

export default Clientsay
