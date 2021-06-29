import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

let styles = {
    marginTop: '60%',
};

function Footer() {
    return (
        <footer>
            <Container style={styles}>
                <Row>
                    <Col className="text-center py-5">Copyright &copy; Pro Shop</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer