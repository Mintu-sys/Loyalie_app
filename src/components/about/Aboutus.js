import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Aboutimg from '../../images/others/about_us_img.png'
import Our_Mission_img from '../../images/others/our_mission_img.png'
import Ourteam from '../../Apidata/Ourteam'
import Ourculturedata from '../../Apidata/Ourculturedata'
import Ourvaluesdata from '../../Apidata/Ourvaluesdata'
import Career_Icon1 from '../../images/others/career_icon1.png'
import Career_Icon2 from '../../images/others/career_icon2.png'
import Career_Icon3 from '../../images/others/career_icon3.png'


const Aboutus = () => {
    return <>


        <Container>
            <Row className="my-5">
                <Col sm={6} className="m-auto">
                    <h2>Loyalie Builds
                        Digital Amenities For
                        Real Estate Builders</h2>

                    <p>Loyalie is a real estate loyalty and referral solutions
                        provider that brings developers the platform to connect better
                        with their various stakeholders and create customer and channel
                        partner delight to encourage vertical growth of your company.</p>
                    <p>Our goal is to give your real estate brand a value higher
                        than what traditional marketing can offer – we make
                        your customers and channel partners your biggest
                        advocates. Once you give us the opportunity to
                        build real loyalty for you, it will root your business on a
                        firm customer base and help you reap the benefits for a lifetime.</p>
                </Col>
                <Col sm={6}>
                    <img className="img-fluid about_us_img" src={Aboutimg} alt='About Us' />
                </Col>
            </Row>
        </Container>



        {/* Our Vision Section */}

        <Container fluid className="our_vision py-5">
            <div className="text-center py-5">
                <h2>Our Vision</h2>
                <h1>BUILD BETTER HOUSING.</h1>
            </div>

        </Container>



        {/* Our Mission Section */}

        <Container>


            <Row className="my-5">
                <Col sm={6} className="m-auto">
                    <h2>Our Mission</h2>

                    <p>To create delight by helping builders adopt technology and
                        value-addition for their customers and channel partners.</p>

                </Col>
                <Col sm={6}>
                    <img className="img-fluid about_us_img" src={Our_Mission_img} alt='About Us' />
                </Col>
            </Row>
        </Container>





        {/* Our Team Section */}

        <div className="our_team py-5">
            <Container>
                <h2 className="text-center">Our Team</h2>
                <Row className="my-5">
                    {Ourteam.map((CurTeam) => {
                        const { id, photo, name, role } = CurTeam;
                        return (
                            <Col sm={3} className="m-auto text-center rounded">
                                <img key={id} src={photo} alt={id} />
                                <h5 className='mt-3'>{name}</h5>
                                <p>{role}</p>
                            </Col>
                        );
                    })}


                </Row>
            </Container>
        </div>




        {/* Our Culture  Section */}

        <Container>
            <Row className="my-5">
                <Col sm={4} className="m-auto">
                    <h2>Our Culture</h2>

                    <p>As a company, we want to
                        create a work culture that is founded
                        on our principals of:</p>

                </Col>
                <Col sm={8}>
                    <Row>
                        {Ourculturedata.map((CurData) => {
                            const { id, icon, title, details } = CurData;
                            return (

                                <Col sm={4}>
                                    <Row>
                                        <Col sm={2}>
                                            <img className="our_culture_icon" key={id} src={icon} alt={id} />
                                        </Col>
                                        <Col sm={10} >
                                            <h5>{title}</h5>
                                            <p>{details}</p>
                                        </Col>
                                    </Row>
                                </Col>

                            );
                        })}
                    </Row>
                </Col>
            </Row>
        </Container>



        {/* Our Values Section */}

        <div className="our_team py-5">
            <Container>
                <h2 className="text-center">Our Values</h2>
                <Row className="my-5">
                    {Ourvaluesdata.map((CurVal) => {
                        const { id, icon, title, details } = CurVal;
                        return (
                            <Col sm={4} className="m-auto text-center rounded">
                                <img className="our_value_icon" key={id} src={icon} alt={id} />
                                <h5 className='mt-3'>{title}</h5>
                                <p>{details}</p>
                            </Col>
                        );
                    })}


                </Row>
            </Container>
        </div>



        {/* Careers Section */}

        <Container>


            <Row className="my-5">
                <Col sm={6} className="m-auto">
                    <h2>Careers</h2>

                    <p>Young in our minds, wild in our ideas, and free in our
                        communication, a career at Loyalie is an experience. We are
                        dynamic, flexible, and believe in bringing out the very
                        best in our team. As a company, we believe in making mistakes
                        to grow faster and grow better.</p>

                    <p>We are driven by the philosophy that anyone can
                        do what they put their minds too. The only things that
                        matter are relevant skill set and the drive to excel.
                        Our job is to help you do what you want to do and grow
                        where you want to be. </p>

                </Col>
                <Col sm={6} className="m-auto">
                    <Row style={{ color: '#fff' }} className="mx-2" >
                        <Col sm={4} className="text-center m-auto career_sec career_sec1" style={{ backgroundColor: '#1A253B' }}>
                            <img className="our_culture_icon" src={Career_Icon1} alt='Career' />
                            <p>JOIN OUR TEAM</p>
                        </Col>

                        <Col sm={4} className="text-center m-auto career_sec career_sec2" style={{ backgroundColor: '#1CB2AA' }}>
                            <img className="our_culture_icon" src={Career_Icon2} alt='Career'/>
                            <p>JOIN OUR TEAM</p>
                        </Col>

                        <Col sm={4} className="text-center m-auto career_sec career_sec3" style={{ backgroundColor: '#1A253B' }}>
                            <img className="our_culture_icon" src={Career_Icon3} alt='Career' />
                            <p>JOIN OUR TEAM</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>




    </>
}

export default Aboutus
