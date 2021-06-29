import { motion } from "framer-motion"
import { Card, Jumbotron, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Title() {
    return (
        <motion.div animate={{ scale: 1.4 }} transition={{ duration: 2 }}>
             <Jumbotron fluid>
                <Container className="mt-5 pt-5 pb-5 mb-5">
                    <h3>Hello, I'm Cody Wright</h3>
                    <p>Software Engineer</p>
                </Container>
            </Jumbotron>
        </motion.div>
    )
}

export default Title