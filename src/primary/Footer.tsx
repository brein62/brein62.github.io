import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import EmailAccount from '../components/base/EmailAccount';

/**
 * Returns the component to be displayed as the footer in all pages.
 * @returns The footer component to be displayed in all pages.
 */
export default function Footer() {
  return (
    <footer>
      <p>
        Built from scratch with <FontAwesomeIcon icon={faHeart} /> using React, Bootstrap and Font Awesome icons.
      </p>
      <p>&nbsp;</p>
      <p>
        <strong>Contact details:</strong>
      </p>
      <p>
        Email: <EmailAccount />
      </p>
      <p>
        Telegram handle:{' '}
        <a className="link-light" href="https://t.me/brein62">
          @brein62
        </a>
      </p>
    </footer>
  );
}
