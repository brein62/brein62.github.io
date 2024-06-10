import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function ReadMoreButton({ href } : { href : string }) {
  return (
    <Button variant="primary" href={href}>
      <span style={{marginRight: "0.3em"}}>Read More</span>
      <FontAwesomeIcon icon={faAngleRight} />
    </Button>
  )
}