/**
 * Returns the timeline component as an SVG line with a circle in the middle. The height of the line
 * can be configured using the `height` prop (which is set to 150 by default).
 * 
 * @returns The timeline component separating the year and the timeline events within a TimelineEntry,
 * as an SVG object.
 */
export default function TimelineComponent({ height = 150 } : { height? : number }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={ height } width="20">
            <line x1="10" y1="0" x2="10" y2={ height } style={{stroke: "#666666", strokeWidth: "2"}} />
            <circle r="10" cx="10" cy={ height / 2 } fill="#666666" />
        </svg>
    );
}