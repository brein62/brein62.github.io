import { Badge, Col, Nav, Row, Tab } from 'react-bootstrap';
import TodoStudyLogo from '../logos/TodoStudyLogo';

export function SuBadge() {
    return (
        <Badge style={{ marginLeft: "0.3em" }} bg="secondary">S/U option exercised</Badge>
    );
}

function CsCuBadge() {
    return (
        <Badge style={{ marginLeft: "0.3em" }} bg="success">Pass/fail module (passed)</Badge>
    );
}

function UnitsBadge({ units = 4 } : { units? : number }) {
    return (
        <Badge style={{ marginLeft: "0.3em" }} bg="primary">{units} unit{units !== 1 ? "s" : ""}</Badge>
    )
}

export function TopBadge({ nolink = false } : { nolink? : boolean }) {
    return (
        !nolink ? 
        <a href="/#awards#academic-achievements">
            <Badge style={{ marginLeft: "0.3em" }} bg="warning">
                Top Performer Award
            </Badge>
        </a>
        :
        <Badge style={{ marginLeft: "0.3em" }} bg="warning">
            Top Performer Award
        </Badge>
    )
}

export function ProjectBadge({ nolink = false, name, href } : { nolink? : boolean, name : React.ReactNode, href : string }) {
    return (
        !nolink ? 
            <a href={ href }>
                <Badge style={{ marginLeft: "0.3em" }} bg="danger">
                    { name ? <>Project ({ name })</> : <>Project</> }
                </Badge>
            </a>
        : 
        <Badge style={{ marginLeft: "0.3em" }} bg="danger">
            { name ? <>Project ({ name })</> : <>Project</> }
        </Badge>
    )
}

function GradeEntry({ children } : { children : React.ReactNode }) {
    return (
        <li>
            { children }
        </li>
    )
}

export default function UniGradesTab() {
    return (
        <div style={{ border: "1px dashed", borderRadius: "10px", padding: "0.5em" }}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="Y2S2">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="Y1S1">Y1S1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Y1S2">Y1S2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Y2S1">Y2S1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Y2S2">Y2S2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9} id="tab-modules">
                        <Tab.Content>
                            <Tab.Pane eventKey="Y1S1">
                                <ul>
                                    <GradeEntry>
                                        <strong>CS1101S Programming Metholodogy: </strong>A
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry>
                                        <strong>CS1231S Discrete Structures: </strong>A
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry>
                                        <strong>MA2001 Linear Algebra I: </strong>A+
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry>
                                        <strong>EC1101E Introduction to Economic Analysis: </strong>B+
                                        <UnitsBadge />
                                        <SuBadge />
                                    </GradeEntry>
                                    <GradeEntry>
                                        <strong>ST1131 Introduction to Statistics and Statistical Computing: </strong>B+ 
                                        <UnitsBadge />
                                        <SuBadge />
                                    </GradeEntry>
                                    <GradeEntry>
                                        <strong>CFG1002 Career Catalyst: </strong>CS
                                        <UnitsBadge units={2} />
                                        <CsCuBadge />
                                    </GradeEntry>
                                </ul>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Y1S2">
                                <ul>
                                    <GradeEntry>
                                        <strong>CS2030S Programming Metholodogy II: </strong>A+
                                        <UnitsBadge />
                                        <TopBadge />
                                    </GradeEntry>
                                    <GradeEntry>
                                        <strong>CS2040S Data Structures and Algorithms: </strong>A
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry>
                                        <strong>MA1521 Calculus for Computing: </strong>A+
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry>
                                        <strong>ES2660 Communicating in the Information Age: </strong>B
                                        <UnitsBadge />
                                        <SuBadge />
                                    </GradeEntry>
                                    <GradeEntry>
                                        <strong>IS1108 Digital Ethics and Data Privacy: </strong>A
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry>
                                        <strong>CS1010R Programming Methodology: </strong>A+
                                        <UnitsBadge units={1} />
                                    </GradeEntry>
                                </ul>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Y2S1">
                                <ul>
                                    <GradeEntry>
                                        <strong>CS2100 Computer Organisation: </strong>A+
                                        <UnitsBadge />
                                        <TopBadge />
                                    </GradeEntry>
                                    <GradeEntry>
                                        <strong>CS2103T Software Engineering: </strong>A
                                        <UnitsBadge />
                                        <ProjectBadge name="iVolunteer" href="/#projects#school-projects" />
                                    </GradeEntry>
                                    <GradeEntry>
                                        <strong>CS2101 Effective Communication for Computing Professionals: </strong>B
                                        <UnitsBadge />
                                        <SuBadge />
                                    </GradeEntry>
                                    <GradeEntry>
                                        <strong>IS2238 Economics of IT and AI: </strong>B+
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry>
                                        <strong>EC2101 Microeconomic Analysis I: </strong>A
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry>
                                        <strong>CP2106 Independent Software Development Project (Orbital): </strong>CS - attained Apollo 11 (Advanced) achievement level. Done over Y1 summer.
                                        <UnitsBadge />
                                        <CsCuBadge />
                                        <ProjectBadge name={<TodoStudyLogo green={ false } />} href="/#projects#school-projects" />
                                    </GradeEntry>
                                </ul>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Y2S2">
                                <ul>
                                    <li>
                                        <strong>
                                            <a href="/#awards#academic-achievements">Dean's List, AY2023/2024 Semester 2</a>
                                        </strong>
                                    </li>
                                    <GradeEntry>
                                        <strong>CS2102 Database Systems: </strong>A
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry>
                                        <strong>CS2107 Introduction to Information Security: </strong>A
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry>
                                        <strong>CS2109S Introduction to AI and Machine Learning: </strong>A-
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry>
                                        <strong>ST2334 Probability and Statistics: </strong>A+
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry>
                                        <strong>ACC1701X Accounting for Decision Makers: </strong>A+
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry>
                                        <strong>CP2201 Journey of the Innovator: </strong>CS
                                        <UnitsBadge units={2} />
                                        <CsCuBadge />
                                    </GradeEntry>
                                    <GradeEntry>
                                        <strong>CFG1003 Financial Wellbeing - Introduction: </strong>CS
                                        <UnitsBadge units={0} />
                                        <CsCuBadge />
                                    </GradeEntry>
                                </ul>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}