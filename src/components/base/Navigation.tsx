import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

export default function Navigation({ selectedPage, screenWidth }: { selectedPage: string; screenWidth: number }) {
  const pages = [
    {
      title: 'Home',
      href: '/#',
    },
    {
      title: 'Experience',
      href: '/#experience',
    },
    {
      title: 'Projects',
      href: '/#projects',
    },
    {
      title: 'Awards',
      href: '/#awards',
    },
    {
      title: 'Volunteering',
      href: '/#volunteering',
    },
    {
      title: 'Personal',
      href: '/#personal',
    }, // Add Resume PDF link here once I find it >:3
  ];

  const [activated, setActivated] = useState(false);

  function toggleMenu() {
    setActivated(!activated);
  }

  return (
    <div className="nav-wrapper">
      <nav className="d-flex flex-row align-items-center justify-content-center px-3 py-3">
        <a href="/#" className="text-decoration-none flex-grow-1 p-0 m-0 d-flex flex-row align-items-center gap-2">
          <img src="/logo512.png" alt="Logo" style={{ maxHeight: '2em' }} />
          <p className="m-0 p-0" style={{ fontSize: '1.2em' }}>
            <strong>Brendan Koh</strong>
          </p>
        </a>
        {/* Only show the navigation links if the screen width is greater than 768px */}
        {screenWidth > 768 && <NavigationLinks selectedPage={selectedPage} pages={pages} />}
        {/* Mobile navigation toggle button */}
        {screenWidth <= 768 && (
          <>
            <button
              className="btn d-flex align-items-center justify-content-center hamburger-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={activated ? 'true' : 'false'}
              aria-label="Toggle navigation"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={!activated ? faBars : faXmark} />
            </button>
          </>
        )}
        {/* Collapsible navigation links for mobile */}
      </nav>
      {screenWidth <= 768 && (
        <div id="navbarSupportedContent" className={activated ? 'open' : ''}>
          <div
            id="overlay"
            className={`menu-overlay ${activated ? 'active' : ''}`}
            onClick={() => setActivated(false)}
          ></div>
          <NavigationMobileLinks selectedPage={selectedPage} pages={pages} />
        </div>
      )}
    </div>
  );
}

function NavigationLinks({ selectedPage, pages }: { selectedPage: string; pages: { title: string; href: string }[] }) {
  return (
    <ul className="d-flex flex-row justify-content-center gap-3 p-0 m-0">
      {pages.map(page => (
        <li key={page.title}>
          <a className={selectedPage === page.title ? 'nav-selected' : 'nav-unselected'} href={page.href}>
            {page.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

function NavigationMobileLinks({
  selectedPage,
  pages,
}: {
  selectedPage: string;
  pages: { title: string; href: string }[];
}) {
  return (
    <ul className="d-flex flex-column justify-content-center p-0 m-0 nav-mobile-links">
      {pages.map(page => (
        <li key={page.title} className="px-4 py-2 d-flex align-items-center nav-mobile-link">
          <a className={selectedPage === page.title ? 'nav-selected' : 'nav-unselected'} href={page.href}>
            {page.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
