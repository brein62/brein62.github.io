import { Container } from 'react-bootstrap';
import { AnchorScroll } from '../utils/AnchorScroll';
import { useEffect } from 'react';

/**
 * Returns the ErrorPage (/[any invalid URL]) given the following props:
 *
 * - error: The error title to be displayed in the error page.
 * - errorDesc: The description of the error to be displayed in the error page.
 *
 * @returns The component representing the ErrorPage.
 */
export default function ErrorPage({ error, errorDesc }: { error: string; errorDesc: string }) {
  // <img src="crumpled-paper-texture.jpg" className="image-bg" />

  document.title = error + ' :(';
  useEffect(AnchorScroll, []);

  return (
    <div className="container-wrap">
      <Container className="container container-inner container-xs error-wrap" style={{ padding: '1em' }}>
        <h1>{error} :(</h1>
        <p className="big">{errorDesc}</p>
        <p className="big">
          Return to the main page <a href="/">here</a>.
        </p>
      </Container>
    </div>
  );
}
