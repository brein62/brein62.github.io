export default function ResumeEntry({title, dates, subtitle, screenWidth, children} : {title : string, dates : string, subtitle?: string, screenWidth : number, children: React.ReactNode }) {
    return (
        <li className="resume-entry">
            <p className="resume-event">
                <strong className="event-title">{ title }</strong>
                <span className="event-date">{ dates }</span>
            </p>
            { (screenWidth >= 768) ? <br /> : <></> }
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