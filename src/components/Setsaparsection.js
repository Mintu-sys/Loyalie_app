import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Setsapart from '../Apidata/Setsapart'

const Setsaparsection = () => {
    return <>

        <Container fluid className="apart_section_header py-5">
                <h2 className="text-center">What Sets Us Apart?</h2>
        </Container>


        <Container fluid className="">
            <Row>
                {Setsapart.map((Partner, index) => {
                    const { id, icons, title, desc } = Partner;
                    return (
                        <Col sm={3} className="text-center apart_card">
                            <img className="apart_icons my-5" key={id} src={icons} alt={title} />
                            <h4 className="apart_title mb-4">{title}</h4>
                            <p className="apart_desc">{desc}</p>
                        </Col>
                    );
                })}

            </Row>
        </Container>
    </>
}

export default Setsaparsection
