import React from 'react';
import { Container } from 'react-bootstrap';

export default function ErrorPage({ error, errorDesc } : { error : string, errorDesc : string }) {
    return (
        <div className="container-wrap">
            <img src="crumpled-paper-texture.jpg" className="image-bg" />
            <Container className="container container-inner container-xs error-wrap">
                { error } <br />
                { errorDesc }
            </Container>
        </div>
    );
}