export default function ResumeList({ children } : { children : React.ReactNode }) {
    return (
        <ul className="event-list">
            { children }
        </ul>
    )
}