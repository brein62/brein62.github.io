import { PropsWithChildren } from 'react';
import { Container } from 'react-bootstrap';
import { toKebabCase } from '../../../utils/TitleUtils';

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