import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <footer>
            <p>
                Built from scratch with <FontAwesomeIcon icon={faHeart} /> using
                React,
                Bootstrap
                and Font Awesome icons.
            </p>
            <p>&nbsp;</p>
            <p>
                <strong>Contact details:</strong>
            </p>
            <p>
                Email: e0958078@u.nus.edu
            </p>
            <p>
                Telegram handle: <a className="link-light" href="https://t.me/brein62">@brein62</a>
            </p>
        </footer>
    );
}