import Spacing from './Spacing';

/**
 * Returns the section with email address and Telegram handles in the page header, customised for different screen sizes.
 * Requires the following props:
 * 
 * - screenWidth: The width of the screen for the EmailTeleDisplay to be rendered in.
 * 
 * @returns A component representing the header section with email and Telegram handles.
 */
export default function EmailTeleDisplay({ screenWidth } : { screenWidth : number }) {
    if (screenWidth >= 818) {
        return (
            <p>
                Email: e0958078@u.nus.edu
                <Spacing /> | <Spacing />
                Telegram: @brein62
            </p>
        );
    } else if (screenWidth >= 768) {
        const spacingWidth = ((screenWidth - 758) / 2).toString() + "px";
        return (
            <p>
                Email: e0958078@u.nus.edu
                <Spacing width={spacingWidth} /> | <Spacing width={spacingWidth} />
                Telegram: @brein62
            </p>
        );
    } else {
        return (
            <p>
                Email: e0958078@u.nus.edu
                <br />
                Telegram: @brein62
            </p>

        );
    }
}