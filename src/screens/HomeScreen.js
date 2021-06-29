import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ParticlesBg from 'particles-bg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Title from '../components/Title'
import Blur from 'react-blur'

let styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    msTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
};

function HomeScreen() {
    return (
        <Container style={styles} className="text-center">
            <Title />
            <ParticlesBg color="87CEFA" type="cobweb" bg={true} />
        </Container>
    )
}

export default HomeScreen