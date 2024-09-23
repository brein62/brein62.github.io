import { Container, Row } from "react-bootstrap";

/**
 * A container that contains all the project information cards in ProjectInfo within two ProjectColumn objects.
 * Requires the prop:
 * 
 * - children: The two ProjectColumn objects to display the two project columns in (if there is space).
 * 
 * @returns The component representing the container that contains the ProjectColumn objects that contain the ProjectInfo objects.
 */
export default function ProjectContainer({ children } : { children : React.ReactNode }) {
    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
                { children }
            </Row>
        </Container>
    )
}