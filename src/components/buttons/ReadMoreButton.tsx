import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
/**
 * Returns a button that links user to the relevant sub-page from the main page, with an right angle bracket icon on the right side of the button.
 * Requires the following props:
 * 
 * - href: The link the read more button directs users to.
 * 
 * @returns The component representing the read more button.
 */
export default function ReadMoreButton({ href } : { href : string }) {
  return (
    <Button variant="primary" href={href}>
      <span style={{marginRight: "0.3em"}}>Read More</span>
      <FontAwesomeIcon icon={faAngleRight} />
    </Button>
  )
}