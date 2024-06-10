import { Container, Row } from "react-bootstrap";

export default function ProjectContainer({ children } : { children : React.ReactNode }) {
    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
                { children }
            </Row>
        </Container>
    )
}