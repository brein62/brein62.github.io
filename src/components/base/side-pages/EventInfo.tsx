import { Card } from "react-bootstrap";

export default function EventInfo({ title, dates, children } : { title : string, dates : string, children: React.ReactNode }) {
    
    return (
        <Card.Body>
            <Card.Title>{ title }</Card.Title>
            <Card.Subtitle>{ dates }</Card.Subtitle>
            <Card.Text style={{ marginTop: "0.5em" }}>
                { children }
            </Card.Text>
        </Card.Body>
    );
}