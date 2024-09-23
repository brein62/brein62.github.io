/**
 * Returns a resume list that contains ResumeEntry objects that are displayed as typical resume
 * entries. Must have the following prop:
 * 
 * - children: The ResumeEntry objects that make up the resume list.
 * 
 * @returns The resume list component as a typical list of resume entries.
 */
export default function ResumeList({ children } : { children : React.ReactNode }) {
    return (
        <ul className="event-list">
            { children }
        </ul>
    )
}