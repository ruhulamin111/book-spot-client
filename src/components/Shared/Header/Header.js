import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <>
                <Navbar bg="info" sticky='top' variant="dark">
                    <Container>
                        <Navbar.Brand className='fs-2' as={Link} to="home">The Book Spot</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link href="home#book">Book</Nav.Link>
                            <Nav.Link href="home#subject">Subject</Nav.Link>

                        </Nav>
                        <Nav >
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            <Nav.Link as={Link} to="signin">SignIn</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

            </>
        </div>
    );
};

export default Header;