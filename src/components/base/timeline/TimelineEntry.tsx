import { Row, Col } from "react-bootstrap";
import TimelineComponent from "./TimelineComponent";
import React, { useEffect, useRef, useState } from "react";

export default function TimelineEntry( { years, children } : { years : string, children : React.ReactNode }) {

    const content = useRef<HTMLDivElement>(null);
    
    const [ height, setHeight ] = useState(content.current?.clientHeight);

    useEffect(() => {
        setHeight(content.current && content.current.clientHeight && content.current.clientHeight > 150 ? content.current.clientHeight + 20 : 150);
    });

    return (
        <Row style={{ alignItems: "center" }}>
            <Col xs="3" lg="2">
                <p style={{textAlign: "right"}} className="big lastp">
                    <strong>{ years }</strong>
                </p>
            </Col>
            <Col xs="auto">
                <TimelineComponent height={ height } />
            </Col>
            <Col xs ref={content}>
                { children }
            </Col>
        </Row>
    );
}