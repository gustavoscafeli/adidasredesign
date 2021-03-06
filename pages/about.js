import Image from 'next/image'
import Link from 'next/link'

import Header from '../components/Header';
import Footer from '../components/Footer';


import { Container, Row, Col } from 'react-bootstrap'


export default function About() {
    return(<>
        <Header />

        <div className="sobre-page">

            <Container className="header-page">            
                <h1 className="title-page">About Me</h1>
                <p>Hey, I’m Gustavo. I'm a developer, consultant, and the creator of Projeto Med and React 2025.</p>
            </Container>


            <Container>
                <Row>
                    <Col md={6}>
                        <h3>Nossa história</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac felis dignissim, semper justo vitae, lobortis lacus. Nam id urna sit amet nunc sodales sollicitudin. Aenean pellentesque nunc vel mattis sollicitudin. Morbi risus erat, aliquam eget scelerisque non, accumsan quis nisi. Cras fermentum tincidunt finibus. Phasellus commodo felis id ante fringilla, malesuada tincidunt velit condimentum. Pellentesque finibus nisi nisi, at laoreet ante sollicitudin eget.</p>
                    </Col>

                    <Col md={6}>
                        <h3>Nossa visão</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac felis dignissim, semper justo vitae, lobortis lacus. Nam id urna sit amet nunc sodales sollicitudin. Aenean pellentesque nunc vel mattis sollicitudin. Morbi risus erat, aliquam eget scelerisque non, accumsan quis nisi. Cras fermentum tincidunt finibus. Phasellus commodo felis id ante fringilla, malesuada tincidunt velit condimentum. Pellentesque finibus nisi nisi, at laoreet ante sollicitudin eget.</p>
                    </Col>
                </Row>
            </Container>

        </div>



       <Footer />

    </>);
}