import React from 'react'
import { Container , Row, Col } from 'react-bootstrap'
import Partnerusdata from '../Apidata/Partnerusdata'

const Partnersection = () => {
    return  <>  
              <Container className="my-5">

                   <h2 className="text-center">Why Partner With Us?</h2>
                   <h4 className="text-center my-5">Our objective is to enable faster, cost-efficient, 
                   and higher sales for real estate builders.</h4>
                  <Row>
                      {Partnerusdata.map((Partner , index)=>{
                          const {id, picon, title, desc} = Partner;
                           return (
                                <Col md={4} className="text-center">
                                    <img className="partner_icons my-5" key={id} src={picon} alt={title} />
                                     <h4 className="partner_title mb-4">{title}</h4>
                                     <p>{desc}</p>
                                </Col>
                           );
                      })}
                     
                  </Row>
              </Container>
            
             
             
        </>

}

export default Partnersection
