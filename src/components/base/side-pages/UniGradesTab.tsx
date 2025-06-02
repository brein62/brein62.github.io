import { Badge, Col, Nav, Row, Tab, Table } from 'react-bootstrap';
import TodoStudyLogo from '../logos/TodoStudyLogo';

/**
 * Returns a badge indicating S/U option has been exercised.
 * 
 * - nomargin: Whether the badge should have a left margin (if false). Defaults to false.
 * 
 * @returns A badge indicating S/U option has been exercised.
 */
export function SuBadge({ nomargin = false } : { nomargin? : boolean }) {
    return (
        <Badge style={!nomargin ? { marginLeft: "0.3em" } : {}} bg="secondary">S/U option exercised</Badge>
    );
}

/**
 * Returns a badge indicating that there are details to be confirmed.
 * 
 * @returns A badge indicating that there are details to be confirmed.
 */
export function TbcBadge() {
    return (
        <Badge style={{ marginLeft: "0.3em" }} bg="secondary">To be confirmed</Badge>
    );
}

/**
 * Returns a badge indicating that the module is pass/fail (CS/CU).
 * 
 * @returns A badge indicating that the module is pass/fail (CS/CU).
 */
function CsCuBadge() {
    return (
        <Badge style={{ marginLeft: "0.3em" }} bg="success">Pass/fail module (passed)</Badge>
    );
}


/**
 * Returns a badge indicating the number of units in the module. May include the prop:
 * 
 * - units: The number of units in the module (default 4).
 * 
 * @returns A badge indicating indicating the number of units in the module.
 */
function UnitsBadge({ units = 4 } : { units? : number }) {
    return (
        <Badge style={{ marginLeft: "0.3em" }} bg="primary">{units} unit{units !== 1 ? "s" : ""}</Badge>
    )
}

/**
 * Returns a badge indicating top performance in the module. May have the following props:
 * 
 * - nolink: Whether to link to the Awards page under Academic Achievements (if false). Defaults
 *   to false.
 * - nomargin: Whether the badge should have a left margin (if false). Defaults to false.
 * 
 * @returns A badge indicating top performance in the module. May link to the Awards page under
 * Academic Achievements.
 */
export function TopBadge({ nolink = false, nomargin = false } : { nolink? : boolean, nomargin? : boolean }) {
    return (
        !nolink ? 
        <a href="/#awards#academic-achievements">
            <Badge style={!nomargin ? { marginLeft: "0.3em" } : {}} bg="warning">
                Top Performer Award
            </Badge>
        </a>
        :
        <Badge style={!nomargin ? { marginLeft: "0.3em" } : {}} bg="warning">
            Top Performer Award
        </Badge>
    )
}

/**
 * Returns a badge indicating the project made in the module. May have the following props:
 * 
 * - nolink: Whether to link to the Awards page under Academic Achievements (if false). Defaults
 *   to false.
 * - nomargin: Whether the badge should have a left margin (if false). Defaults to false.
 * - name (required): The name of the project. Can be a string or React node (for logos).
 * - href (required): The link to the project (typically in the Projects page).
 * 
 * @returns A badge indicating the project made in the module. May link to the project in the Projects page.
 */
export function ProjectBadge({ nolink = false, nomargin = false, name, href } : { nolink? : boolean, nomargin? : boolean, name : React.ReactNode, href : string }) {
    return (
        !nolink ? 
            <a href={ href }>
                <Badge style={!nomargin ? { marginLeft: "0.3em" } : {}} bg="danger">
                    { name ? <>Project ({ name })</> : <>Project</> }
                </Badge>
            </a>
        : 
        <Badge style={!nomargin ? { marginLeft: "0.3em" } : {}} bg="danger">
            { name ? <>Project ({ name })</> : <>Project</> }
        </Badge>
    )
}

/**
 * A table of modules within each UniGradesTab pane. Represents a list of modules
 * taken during the semester and their grades. Requires the following prop:
 * 
 * - children: The list of `GradeEntry` objects that form the grade table for a
 *   specific semester.
 * 
 * Example usage:
 * ```
 * <GradeTable>
 *   <GradeEntry course="MA2001 Linear Algebra I" grade="A+">
 *     <UnitsBadge />
 *   </GradeEntry> 
 * </GradeTable>
 * ```
 * @returns The component representing a table of modules taken within a semester
 * within a UniGradesTab pane.
 */
function GradeTable({ children } : { children : React.ReactNode }) {
    return (
        <Table striped bordered responsive hover>
            <thead>
                <tr>
                    <th>Course</th>
                    <th>Grade</th>
                    <th>Other Information</th>
                </tr>
            </thead>
            <tbody>
                { children }
            </tbody>
        </Table>
    )
}

/**
 * A module entry within each UniGradesTab pane. Represents a module and their grades.
 * Must be a child of the GradeTable component. Requires the following props:
 * 
 * - course: The course the grade entry refers to.
 * - grade: The grade of the module. If left an empty string, it means that the grade is
 *   unannounced, and a placeholder grade `<i>TBA</i>` is used instead.
 * - children: The content of the module/grade entry with the UniGradesTab pane.
 * 
 * Example usage:
 * ```
 * <GradeEntry course="MA2001 Linear Algebra I" grade="A+">
 *     <UnitsBadge />
 * </GradeEntry>
 * ```
 * @returns The component representing a module within a UniGradesTab pane.
 */
function GradeEntry({ course, grade, children } : { course : string, grade : string, children : React.ReactNode }) {
    return (
        <tr>
            <td>
                <strong style={{ fontWeight: 600 }}>
                    { course }
                </strong>
            </td>
            <td>
                { grade === "" ? <i>TBA</i> : grade }
            </td>
            <td>
                { /* column for badges */ }
                <div style={{ marginLeft: "-0.3em" }}>
                    { children }
                </div>
            </td>
        </tr>
    )
}

/**
 * Returns the tab interface for university grades in the Experience page.
 * 
 * @returns A component containing a tab interface for university grades in the Experience page.
 */
export default function UniGradesTab() {
    return (
        <div style={{ border: "1px dashed", borderRadius: "10px", padding: "0.5em" }}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="Y3S2">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="Y1S1"><span title="Year 1 Semester 1 (Academic Year 2022/23)">Y1S1 (Aug &ndash; Dec 2022)</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Y1S2"><span title="Year 1 Semester 2 (Academic Year 2022/23)">Y1S2 (Jan &ndash; May 2023)</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Y2S1"><span title="Year 2 Semester 1 (Academic Year 2023/24)">Y2S1 (Aug &ndash; Dec 2023)</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Y2S2"><span title="Year 2 Semester 2 (Academic Year 2023/24)">Y2S2 (Jan &ndash; May 2024)</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Y3S1"><span title="Year 3 Semester 1 (Academic Year 2024/25)">Y3S1 (Aug &ndash; Dec 2024)</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Y3S2"><span title="Year 3 Semester 2 (Academic Year 2024/25)">Y3S2 (Jan &ndash; May 2025)</span></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9} id="tab-modules">
                        <Tab.Content>
                            <Tab.Pane eventKey="Y1S1">
                                <GradeTable>
                                    <GradeEntry course="CS1101S Programming Metholodogy" grade="A">
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry course="CS1231S Discrete Structures" grade="A">
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry course="MA2001 Linear Algebra I" grade="A+">
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry course="EC1101E Introduction to Economic Analysis" grade="B+">
                                        <UnitsBadge />
                                        <SuBadge />
                                    </GradeEntry>
                                    <GradeEntry course="ST1131 Introduction to Statistics and Statistical Computing" grade="B+">
                                        <UnitsBadge />
                                        <SuBadge />
                                    </GradeEntry>
                                    <GradeEntry course="CFG1002 Career Catalyst" grade="CS">
                                        <UnitsBadge units={2} />
                                        <CsCuBadge />
                                    </GradeEntry>
                                </GradeTable>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Y1S2">
                                <GradeTable>
                                    <GradeEntry course="CS2030S Programming Metholodogy II" grade="A+">
                                        <UnitsBadge />
                                        <TopBadge />
                                    </GradeEntry>
                                    <GradeEntry course="CS2040S Data Structures and Algorithms" grade="A">
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry course="MA1521 Calculus for Computing" grade="A+">
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry course="ES2660 Communicating in the Information Age" grade="B">
                                        <UnitsBadge />
                                        <SuBadge />
                                    </GradeEntry>
                                    <GradeEntry course="IS1108 Digital Ethics and Data Privacy" grade="A">
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry course="CS1010R Programming Methodology" grade="A+">
                                        <UnitsBadge units={1} />
                                    </GradeEntry>
                                </GradeTable>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Y2S1">
                                <GradeTable>
                                    <GradeEntry course="CS2100 Computer Organisation" grade="A+">
                                        <UnitsBadge />
                                        <TopBadge />
                                    </GradeEntry>
                                    <GradeEntry course="CS2103T Software Engineering" grade="A">
                                        <UnitsBadge />
                                        <ProjectBadge name="iVolunteer" href="/#projects#school-projects" />
                                    </GradeEntry>
                                    <GradeEntry course="CS2101 Effective Communication for Computing Professionals" grade="B">
                                        <UnitsBadge />
                                        <SuBadge />
                                    </GradeEntry>
                                    <GradeEntry course="IS2238 Economics of IT and AI" grade="B+">
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry course="EC2101 Microeconomic Analysis I" grade="A">
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry course="CP2106 Independent Software Development Project (Orbital)" grade="CS">
                                        <UnitsBadge />
                                        <CsCuBadge />
                                        <ProjectBadge name={<TodoStudyLogo green={ false } />} href="/#projects#school-projects" />
                                        <div style={{ marginLeft: "0.3em" }}>
                                            <small className="text-muted" style={{ fontSize: "0.8rem" }}>
                                                Attained Apollo 11 (Advanced) achievement level. Done over Y1 summer.
                                            </small>
                                        </div>
                                    </GradeEntry>
                                </GradeTable>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Y2S2">
                                <p>
                                    <strong>Award: </strong>
                                    <span style={{ fontWeight: 600 }}>
                                        <a href="/#awards#academic-achievements">Dean's List, AY2023/2024 Semester 2</a>
                                    </span>
                                </p>
                                <GradeTable>
                                    <GradeEntry course="CS2102 Database Systems" grade="A">
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry course="CS2107 Introduction to Information Security" grade="A">
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry course="CS2109S Introduction to AI and Machine Learning" grade="A-">
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry course="ST2334 Probability and Statistics" grade="A+">
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry course="ACC1701X Accounting for Decision Makers" grade="A+">
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry course="CP2201 Journey of the Innovator" grade="CS">
                                        <UnitsBadge units={2} />
                                        <CsCuBadge />
                                    </GradeEntry>
                                    <GradeEntry course="CFG1003 Financial Wellbeing - Introduction" grade="CS">
                                        <UnitsBadge units={0} />
                                        <CsCuBadge />
                                    </GradeEntry>
                                </GradeTable>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Y3S1">
                                <GradeTable>
                                    <GradeEntry course="CS3219 Software Engineering Principles and Patterns" grade="A-">
                                        <UnitsBadge />
                                        <ProjectBadge name="PeerPrep" href="/#projects#school-projects" />
                                    </GradeEntry>
                                    <GradeEntry course="CS3230 Design and Analysis of Algorithms" grade="A-">
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry course="CS2106 Introduction to Operating Systems" grade="A+">
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry course="CS2105 Introduction to Computer Networks" grade="A+">
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry course="EC3101 Microeconomic Analysis II" grade="A-">
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry course="CP3108A Independent Work" grade="CS">
                                        <UnitsBadge units={2} />
                                        <ProjectBadge name="Migrate AB3 to Java 17" href="/#projects#school-projects" />
                                        <CsCuBadge />
                                    </GradeEntry>
                                    <GradeEntry course="CFG1004 Financial Wellbeing - Art and Science of Investing" grade="CS">
                                        <UnitsBadge units={2} />
                                        <CsCuBadge />
                                    </GradeEntry>
                                </GradeTable>
                            </Tab.Pane>
                            <Tab.Pane eventKey="Y3S2">
                                <GradeTable>
                                    <GradeEntry course="CS3264 Foundations of Machine Learning" grade="A-">
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry course="CS3210 Parallel Computing" grade="A">
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry course="IS2218 Digital Platforms for Business" grade="A+">
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry course="FIN2704X Finance" grade="A+">
                                        <UnitsBadge />
                                    </GradeEntry>
                                    <GradeEntry course="GESS1025 Singapore: Imagining the Next 50 Years" grade="CS">
                                        <UnitsBadge />
                                        <CsCuBadge />
                                    </GradeEntry>
                                </GradeTable>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}