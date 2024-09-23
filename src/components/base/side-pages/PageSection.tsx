import { PropsWithChildren } from 'react';
import { Container } from 'react-bootstrap';
import { toKebabCase } from '../../../utils/TitleUtils';

/**
 * Represents a page section within the body of a page. Requires the following props:
 * 
 * - title: The title of the page section.
 * - children: The content of the page section.
 * 
 * @returns The component representing a page section within the body of a page.
 */
export default function PageSection({ title, children } : PropsWithChildren<{title : string}>) {
    return (
        <section>
            <Container>
                <h3 id={ toKebabCase(title) }>{ title }</h3>
                <div style={{textAlign: 'left'}}>
                    { children }
                </div>
            </Container>
        </section>
    )
}