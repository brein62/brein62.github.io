import React from 'react';
import Header from '../primary/Header';
import Footer from '../primary/Footer';
import MainBody from '../primary/MainBody';
import { Container } from 'react-bootstrap';

export default function MainWindow() {
    return (
        <div className="container-wrap">
            <img src="crumpled-paper-texture.jpg" className="image-bg" />
            <Container className="container container-inner container-sm">
                <Header />
                <MainBody />
                <Footer />
            </Container>
        </div>
    );
}