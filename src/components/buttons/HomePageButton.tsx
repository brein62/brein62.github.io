import { Button } from 'react-bootstrap';

/**
 * Returns a blue button that links users to the home page.
 * @returns The button to return to the home page.
 */
export default function HomePageButton() {
    return (
        <Button variant="primary" href="/">
            Return to home page
        </Button>
    );
}