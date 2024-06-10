import { Container } from "react-bootstrap";

export default function Timeline({ children } : { children : React.ReactNode }) {
    return (
        <Container>
            { children }
        </Container>
    )
}