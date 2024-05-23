import react from 'react';

export default function Spacing(props : { width : string } | {}) {

    const width = (props as {width: string}).width ?? "30px";

    return (
        <span style={{"display": "inline-block", "width" : width}}></span>
    );
}