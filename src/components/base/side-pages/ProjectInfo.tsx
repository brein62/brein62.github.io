import { Card, Carousel, Col } from "react-bootstrap";
import Gap from "../Gap";
import { toKebabCase } from "../../../utils/TitleUtils";

/**
 * A card representing a single project's information within a ProjectColumn. May have the following props:
 * 
 * - title (required): The title of the project.
 * - date (required): The dates the project has taken place in.
 * - languages: The programming languages used within the project.
 * - libraries: The libraries used within this project.
 * - frameworks: The frameworks used in this project.
 * - apis: The APIs used in this project.
 * - url: The URL(s) of the project, either as a single URL string or as an array of
 *   `{name: NAME, url: URL}`.
 * - img: The image URL(s) that represents the project. Can be either a single image URL string or
 *   an array of image URL strings.
 * - gap: Whether to include a gap between the image section and the title of the project info card.
 *   Defaults to false.
 * - children (required): The content/description of the project.
 * 
 * @returns The project information card as a component within a ProjectColumn.
 */
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