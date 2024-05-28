import React from 'react';
import Header from '../primary/Header';
import Footer from '../primary/Footer';
import MainBody from '../primary/MainBody';
import { Container } from 'react-bootstrap';

export default function MainWindow() {
    //<img src="crumpled-paper-texture.jpg" className="image-bg" />
    return (
        <div className="container-wrap">
            
            <Container className="container container-inner container-sm">
                <Header name="Brendan Koh" description="Upcoming Year 3 Computer Science Student, NUS School of Computing" />
                <MainBody />
                <Footer />
            </Container>
        </div>
    );
}