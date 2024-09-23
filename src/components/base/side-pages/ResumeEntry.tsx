/**
 * A resume entry within the ResumeList, in the format of a typical resume entry. May have the following props:
 * 
 * - title (required): The title of the resume entry.
 * - dates (required): The dates that the resume entry has taken place in.
 * - subtitle: The subtitle of the resume entry (if any).
 * - screenWidth (required): The screen width the resume entry is rendered in.
 * - children (required): The content of the resume entry.
 * 
 * @returns The resume entry component in the ResumeList, in a typical resume entry format.
 */
export default function ResumeEntry({title, dates, subtitle, screenWidth, children} : {title : string, dates : string, subtitle?: string, screenWidth : number, children: React.ReactNode }) {
    return (
        <li className="resume-entry">
            <p className="resume-event">
                <strong className="event-title">{ title }</strong>
                { dates !== "" ? <span className="event-date">{ dates }</span> : <></> }
            </p>
            { (screenWidth >= 768 || (dates === "" && screenWidth < 768)) ? <br /> : <></> }
            { (subtitle !== undefined) ? ( <>
                <p className="subtitle">{ subtitle }</p>
            </>
            ) : <></> }
            <div style={{textAlign: 'left'}}>
                { children }
            </div>
        </li>
    );
}