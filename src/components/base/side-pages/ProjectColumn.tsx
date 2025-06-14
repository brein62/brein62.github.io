import { Col } from "react-bootstrap";

/**
 * A column that contains half of the project information cards in ProjectInfo, representing a column in a
 * two-column ProjectContainer format.
 * 
 * May have the props:
 * - second: Whether this column is the second column or not. Defaults to false.
 * - screenWidth: The width of the screen rendering the ProjectColumn.
 * - children: The individual ProjectInfo objects to be displayed within each project column.
 * 
 * @returns The component representing the columns that contain the ProjectInfo objects within the ProjectContainer.
 */
export default function ProjectColumn({ second = false, screenWidth, children } : { second? : boolean, screenWidth : number, children? : React.ReactNode }) {
    return (
        <Col style={(second && screenWidth < 768) ? { marginTop: 0 } : {}}>
            { children }
        </Col>
    )
}