import { Col, Nav, Row, Tab } from 'react-bootstrap';

export default function JcGradesTab() {
    return (
        <div style={{ border: "1px dashed", borderRadius: "10px", padding: "0.5em" }}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="Y2">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="Y1">JC1 (2018)</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Y2">JC2 (2019)</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9} id="tab-modules">
                        <Tab.Content>
                            <Tab.Pane eventKey="Y1">
                                <ul>
                                    <li><strong>H1 Project Work: </strong>A</li>
                                    <li><strong>H1 Mother Tongue: </strong>E</li>
                                </ul>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Y2">
                                <ul>
                                    <li><strong>H2 Computing: </strong>A</li>
                                    <li><strong>H2 Mathematics: </strong>A</li>
                                    <li><strong>H2 Chemistry: </strong>A</li>
                                    <li><strong>H1 Economics: </strong>A</li>
                                    <li><strong>H1 General Paper: </strong>C</li>
                                </ul>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}