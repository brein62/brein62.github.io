export default function TodoStudyLogo({ green = true, link = false } : { green? : boolean, link? : boolean }) {
    // TODO: add link to todo study project information in /projects if link === true
    return (
        <span className={ green ? "todo-study-logo" : "todo-study-logo-nocolor" }>
            { "// TODO: Study" }
        </span>
    )
}