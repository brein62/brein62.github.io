import { Col } from "react-bootstrap";

export default function ProjectColumn({ second = false, screenWidth, children } : { second? : boolean, screenWidth : number, children : React.ReactNode }) {
    return (
        <Col style={(second && screenWidth < 768) ? { marginTop: 0 } : {}}>
            { children }
        </Col>
    )
}