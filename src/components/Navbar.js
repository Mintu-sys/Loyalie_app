import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import About from '../pages/About'
import Home from '../pages/Home'
import Loyalie from '../images/logos/loyalielogo.png'


const Navheader = (props) => {


    return <>
        <Router>
          <div >
            <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark" >
                <Container > 
                    <Navbar.Brand as={Link} to="/"><img className="logo" src={Loyalie} alt="Loyalie" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav " className="justify-content-end"  >
                        <Nav className="main_menu">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/About">About Us</Nav.Link>

                            <NavDropdown title="Services" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">ConnectRE</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">WinnRE</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/About">Partner Brands</Nav.Link>
                            <Nav.Link as={Link} to="/About">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/About">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/About">Log In</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            
            </div>

            <div>
               <Switch>
                    <Route exact path="/"><Home /></Route>
                </Switch>
                <Switch>
                    <Route exact path="/about"><About /></Route>
                </Switch>
            </div>
        </Router>


    </>

}

export default Navheader
