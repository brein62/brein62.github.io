import { Card, Carousel, Col } from "react-bootstrap";
import Gap from "../Gap";

export default function ProjectInfo({ title, date, languages, libraries, frameworks, apis, url, img, children } : { title : string | React.ReactNode, date : string, languages? : string, libraries? : string, frameworks? : string, apis? : string, url? : string, img? : string | string[], children: React.ReactNode }) {
    
    return (
        <Card style={{ marginTop: "1em" }}>
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
                <Card.Title>{ title }</Card.Title>
                <Card.Subtitle>{ date }</Card.Subtitle>
                <Card.Text style={{ marginTop: "0.5em" }}>
                    { languages !== undefined ? <p className="justify nomb"><strong>Languages: </strong>{ languages }</p> : <></> }
                    { libraries !== undefined ? <p className="justify nomb"><strong>Libraries: </strong>{ libraries }</p> : <></> }
                    { frameworks !== undefined ? <p className="justify nomb"><strong>Frameworks: </strong>{ frameworks }</p> : <></> }
                    { apis !== undefined ? <p className="justify nomb"><strong>APIs: </strong>{ apis }</p> : <></> }
                    { url !== undefined ? <p className="justify nomb"><strong>URL: </strong><a href={ url } rel="noopener noreferrer" target="_blank">{ url }</a></p> : <></> }
                    <Gap />
                    { children }
                </Card.Text>
            </Card.Body>
        </Card>
    );
}