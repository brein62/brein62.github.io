/**
 * Returns the // TODO: Study logo. Accepts the following props:
 * 
 * - green: Whether to use the green logo or follow the colour of the page. Defaults to true.
 * - link: Whether to include a link to the // TODO: Study entry in the Projects page. Defaults to false.
 * 
 * @returns The // TODO: Study logo with the desired colour and link settings.
 */
export default function TodoStudyLogo({ green = true, link = false } : { green? : boolean, link? : boolean }) {
    // TODO: add link to todo study project information in /projects if link === true
    return (
        
        <span className={ green ? "todo-study-logo" : "todo-study-logo-nocolor" }>
            { link ?
                <a className={ green ? "todo-study-logo" : "todo-study-logo-nocolor" } href="/#projects#school-projects">{ "// TODO: Study" }</a> :
                "// TODO: Study" }
        </span>
    )
}