import { Accordion } from 'react-bootstrap';

export default function ResumeAccordion({ children }: { children: React.ReactNode }) {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <strong>My contributions:</strong>
        </Accordion.Header>
        <Accordion.Body>{children}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
