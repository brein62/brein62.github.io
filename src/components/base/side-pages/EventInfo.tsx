import { Card } from "react-bootstrap";

/**
 * A card body containing event information in an EventList. Requires the following props:
 * 
 * - title: The title of the event.
 * - dates: The dates of the event.
 * - children: The content containing the details/description of the event.
 * 
 * @returns The component representing the body of a card for an individual event in an EventList.
 */
export default function EventInfo({ title, dates, children } : { title : string, dates : string, children: React.ReactNode }) {
    
    return (
        <Card.Body>
            <Card.Title>{ title }</Card.Title>
            <Card.Subtitle>{ dates }</Card.Subtitle>
            <Card.Text style={{ marginTop: "0.5em" }}>
                <p className="justify">
                    { children }
                </p>
            </Card.Text>
        </Card.Body>
    );
}