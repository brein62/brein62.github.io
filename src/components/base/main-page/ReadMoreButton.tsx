import react from "react";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from "react-bootstrap";

export default function ReadMoreButton({ href } : { href : string }) {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }} xl={{ span: 4, offset: 4 }}>
          <Button variant="primary" href={href}>
            <span style={{marginRight: "0.3em"}}>Read More</span>
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>
        </Col>
      </Row>
    </Container>
  )
}