import EmailTeleDisplay from '../components/base/EmailTeleDisplay';
import { useWindowParams } from '../hooks/useWindowParams';

/**
 * Returns the component to be displayed as the header in all pages.
 * @returns The header component to be displayed in all pages.
 */
export default function Header() {
  const screenWidth = useWindowParams(true, false)[0];

  return (
    <header>
      <h1>Brendan Koh</h1>
      <p className="desc">
        <span className="big">Full-Stack Software Engineer</span>
        <br />
        <span>Final-Year Computer Science Student, NUS School of Computing</span>
      </p>
      <EmailTeleDisplay screenWidth={screenWidth} />
    </header>
  );
}
