import Image from 'next/image'
import Link from 'next/link'

import Header from '../components/Header';
import Footer from '../components/Footer';

import { Container, Row, Col } from 'react-bootstrap'


export default function Produtos() {
    return(<>
        <Header />

        <Container className="header-page text-center">
            <h1 className="title-page">Produtos</h1>
            <p>A Scafeli é uma Gestora e Produtora de Conteúdos Digitais.</p>
            <i class="fas fa-arrow-down"></i>
        </Container>

        <Footer />

    </>);
}