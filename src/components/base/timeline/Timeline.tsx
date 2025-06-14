import { Container } from 'react-bootstrap';

/**
 * Returns a component representing a timeline, as used in the Personal page. Its children should contain
 * TimelineEntry components.
 *
 * @returns A component representing a timeline.
 */
export default function Timeline({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}
