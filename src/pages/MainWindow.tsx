import Header from '../primary/Header';
import Footer from '../primary/Footer';
import MainBody from '../primary/MainBody';
import { Container } from 'react-bootstrap';
import Navigation from '../components/base/Navigation';
import { useWindowParams } from '../hooks/useWindowParams';

/**
 * Returns the main page (/).
 *
 * @returns The component representing the main page.
 */
export default function MainWindow() {
  //<img src="crumpled-paper-texture.jpg" className="image-bg" />
  const screenWidth = useWindowParams(true, false)[0];

  document.title = 'Personal Portfolio | Brendan Koh';

  return (
    <div className="container-wrap">
      <Navigation selectedPage="Home" screenWidth={screenWidth} />
      <Container className="container container-inner container-sm">
        <Header />
        <MainBody />
        <Footer />
      </Container>
    </div>
  );
}
