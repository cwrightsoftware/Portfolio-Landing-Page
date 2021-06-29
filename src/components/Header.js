import React from 'react'
import { Navbar, Nav, Container, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/home">
                                <Nav.Link><i className="fas fa-rocket"></i>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/projects">
                                <Nav.Link><i className="fas fa-rocket"></i>Projects</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/resume">
                                <Nav.Link><i className="fas fa-rocket-launch"></i>Resume</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link><i className="fas fa-rocket-launch"></i>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Link><i className="fas fa-rocket-launch"></i>Contact</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header