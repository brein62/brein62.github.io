import Header from '../primary/Header';
import Footer from '../primary/Footer';
import MainBody from '../primary/MainBody';
import { Container } from 'react-bootstrap';

/**
 * Returns the main page (/).
 * 
 * @returns The component representing the main page.
 */
export default function MainWindow() {
    //<img src="crumpled-paper-texture.jpg" className="image-bg" />

    document.title = "Personal Portfolio | Brendan Koh";

    return (
        <div className="container-wrap">
            <Container className="container container-inner container-sm">
                <Header />
                <MainBody />
                <Footer />
            </Container>
        </div>
    );
}