import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Stack } from 'react-bootstrap';

/**
 * Returns a button with a Font Awesome icon that links users to the page indicated by `href`, given the following props:
 *
 * - href: The link the button directs users to.
 * - direction: The location of the Font Awesome icon within the button.
 * - icon: The Font Awesome icon definition to use.
 * - variant: The Bootstrap colour/style variant for the button. Defaults to `primary`.
 * - children: The content of the button.
 *
 * @returns The component representing the link button.
 */
export default function LinkButton({
  href,
  direction = 'right',
  icon,
  variant,
  newTab = true,
  children,
}: {
  href: string;
  direction?: string;
  icon: IconDefinition;
  variant?: string;
  newTab?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Button variant={variant ?? 'primary'} target={newTab ? '_blank' : ''} rel="noopener noreferrer" href={href}>
      <Stack direction="horizontal" gap={2}>
        {direction === 'left' ? <FontAwesomeIcon icon={icon} /> : <></>}
        <span>{children}</span>
        {direction === 'right' ? <FontAwesomeIcon icon={icon} /> : <></>}
      </Stack>
    </Button>
  );
}
