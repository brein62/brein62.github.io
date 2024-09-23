import ReadMoreButton from '../../buttons/ReadMoreButton';
import Carousel from 'react-bootstrap/Carousel';
import { Stack, Col, Container, Row, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

/**
 * The image carousel to be displayed within each MainPageSection. Requires the props:
 * 
 * - img: The URL to an image, or an array to URLs of multiple images.
 * 
 * @returns The component representing the image carousel within the MainPageSection.
 */
function ImageCarousel({ img } : { img: (string | string[]) }) {
  
  return (
    (typeof img === "string") ? 
      <Image style={{maxHeight: 250}} src={img} className="image-row" rounded />
    : (img.length === 1) ?
      <Image style={{maxHeight: 250}} src={img[0]} className="image-row" rounded />
    : <Carousel data-bs-theme="dark">
      {
        img.map((i) => 
          <Carousel.Item>
            <Image style={{maxHeight: 250}} src={i} className="image-row" rounded />
          </Carousel.Item>
        )
      }
      </Carousel>
  );
}

/**
 * Returns a main page section within the main page, given the following props:
 * 
 * - title: The title of the main page section.
 * - img: The image URL (or a list of image URLs) to be displayed for the main page section.
 * - href: The link of the ReadMoreButton within this main page section.
 * - children: The content of the main page section.
 * - buttons: Any additional buttons (apart from the read more button) to be used in the main page section.
 *   These buttons will be displayed alongside the read more button, and are objects of the format:
 * 
 *   `{ title: string; icon: IconDefinition; variant: string; href: string; }[]`
 * 
 *   - title: The content of the button.
 *   - icon: The Font Awesome icon definition to be used for this button, displayed on the left side.
 *   - variant: The Bootstrap variant of the button.
 *   - href: The link of the button.
 * 
 * - screenWidth: The width of the screen rendering this MainPageSection.
 * - isFlipped: Displays the images on the left of the content if true, displays the images on the right side of the content if false.
 * 
 * @returns A component representing a main page section.
 */
export default function MainPageSection({ title, img, href, children, buttons = undefined, screenWidth, isFlipped = false } : { title : string, img : (string | string[]) , href : (string | null), children: React.ReactNode, buttons : ({ title: string; icon: IconDefinition; variant: string; href: string; }[] | undefined), screenWidth : number, isFlipped : boolean }) {  
  return (
    <section>
      <Container>
        <Row>
          { (isFlipped && screenWidth >= 768) ? <Col style={{display: 'grid'}}  className="align-items-center"><ImageCarousel img={img} /></Col> : <></> }  
          <Col xs={12} md={8}>   
            <Stack gap={4} className="ms-auto">
              <h2>{ title }</h2>
              <div className="section-content">
                { children }
              </div>
              <Stack style={{justifyContent: "center"}} direction={(screenWidth < 384) ? "vertical" : "horizontal"} gap={3}>
              { buttons === undefined ? <></> :
                buttons.map(
                  button => (
                    <Button variant={button.variant} href={button.href}>
                      <FontAwesomeIcon icon={button.icon} />
                      <span style={{marginLeft: "0.3em"}}>{button.title}</span>
                    </Button>
                  )
                ) 
              }
              { href === null ? <></> : 
                <ReadMoreButton href={href} /> }
              </Stack>
              {
                (screenWidth < 768) ? <ImageCarousel img={img} /> : <></>
              }
            </Stack>
          </Col>   
          { (!isFlipped && screenWidth >= 768) ? <Col style={{display: 'grid'}} className="align-items-center"><ImageCarousel img={img} /></Col> : <></> }  
        </Row>
      </Container>
    </section>
  )
}