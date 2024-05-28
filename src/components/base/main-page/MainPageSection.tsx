import react from 'react';
import ReadMoreButton from './ReadMoreButton';
import Carousel from 'react-bootstrap/Carousel';
import { Stack, Col, Container, Row, Image } from 'react-bootstrap';

function ImageCarousel({ img } : { img: (string | string[]) }) {
  
  return (
    (typeof img === "string") ? 
      <Image src={img} className="image-row" rounded />
    : (img.length === 1) ?
      <Image src={img[0]} className="image-row" rounded />
    : <Carousel data-bs-theme="dark">
      {
        img.map((i) => 
          <Carousel.Item>
            <Image src={i} className="image-row" rounded />
          </Carousel.Item>
        )
      }
      </Carousel>
  );
}

export default function MainPageSection({ title, img, href, children, screenWidth, isFlipped = false } : { title : string, img : (string | string[]) , href : (string | null), children: React.ReactNode, screenWidth : number, isFlipped : boolean }) {  
  return (
    <section>
      <Container>
        <Row>
          { (isFlipped && screenWidth >= 768) ? <Col><ImageCarousel img={img} /></Col> : <></> }  
          <Col xs={12} md={8}>   
            <Stack gap={4} className="ms-auto">
              <h2>{ title }</h2>
              <div className="section-content">
                { children }
              </div>
              { href === null ? <></> : 
              <ReadMoreButton href={href} /> }
              {
                (screenWidth < 768) ? <ImageCarousel img={img} /> : <></>
              }
            </Stack>
          </Col>   
          { (!isFlipped && screenWidth >= 768) ? <Col><ImageCarousel img={img} /></Col> : <></> }  
        </Row>
      </Container>
    </section>
  )
}