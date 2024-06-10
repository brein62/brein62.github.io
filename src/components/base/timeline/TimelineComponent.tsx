export default function TimelineComponent({ height = 150 } : { height? : number }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={ height } width="20">
            <line x1="10" y1="0" x2="10" y2={ height } style={{stroke: "#666666", strokeWidth: "2"}} />
            <circle r="10" cx="10" cy={ height / 2 } fill="#666666" />
        </svg>
    );
}