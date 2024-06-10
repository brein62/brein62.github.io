import { Card, Carousel, Col } from "react-bootstrap";
import Gap from "../Gap";
import { toKebabCase } from "../../../utils/TitleUtils";

export default function ProjectInfo({ title, date, languages, libraries, frameworks, apis, url, img, gap = false, children } : { title : string | React.ReactNode, date : string, languages? : string, libraries? : string, frameworks? : string, apis? : string, url? : string | {name: string, url: string}[], img? : string | string[], gap?: boolean, children: React.ReactNode }) {
    
    return (
        <Card id={ (typeof title === 'string') ? toKebabCase(title) : 'todo-study' } style={{ marginTop: "1em" }}>
            <Card.Body>
                { 
                    img !== undefined ?
                    (typeof img === "string" ? <Card.Img variant="top" src={ img } /> :
                    img.length === 1 ? <Card.Img variant="top" src={ img[0] } /> :
                        <Carousel>
                            { img.map(i => (
                                <Carousel.Item>
                                    <img style={{ maxWidth: "100%" }} src={ i } />
                                </Carousel.Item>
                            )) }
                        </Carousel>
                    )
                    : <></> 
                }
                { gap ? <Gap /> : <></> }
                <Card.Title>{ title }</Card.Title>
                <Card.Subtitle>{ date }</Card.Subtitle>
                <Card.Text style={{ marginTop: "0.5em" }}>
                    { languages !== undefined ? <p className="justify nomb"><strong>Languages: </strong>{ languages }</p> : <></> }
                    { libraries !== undefined ? <p className="justify nomb"><strong>Libraries: </strong>{ libraries }</p> : <></> }
                    { frameworks !== undefined ? <p className="justify nomb"><strong>Frameworks: </strong>{ frameworks }</p> : <></> }
                    { apis !== undefined ? <p className="justify nomb"><strong>APIs: </strong>{ apis }</p> : <></> }
                    { url !== undefined ? 
                        (typeof url === 'string' ?
                            <p className="justify nomb"><strong>URL: </strong><a href={ url } rel="noopener noreferrer" target="_blank">{ url }</a></p>
                        :
                            url.map(o => (
                                <p className="nomb"><strong>URL ({o.name}): </strong><a href={ o.url } rel="noopener noreferrer" target="_blank">{ o.url }</a></p>
                            ))
                        )
                    : <></>
                    }
                    <Gap />
                    { children }
                </Card.Text>
            </Card.Body>
        </Card>
    );
}