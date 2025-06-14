import { faAward } from '@fortawesome/free-solid-svg-icons';
import LinkButton from './LinkButton';

/**
 * Returns a button that links user to the relevant award, with an award icon on the right side of the button. Requires
 * the following props:
 *
 * - href: The award link the button directs users to.
 * - children: The content of the button.
 *
 * @returns The component representing the link to award button.
 */
export default function LinkToAwardButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <LinkButton href={href} icon={faAward}>
      {children}
    </LinkButton>
  );
}
