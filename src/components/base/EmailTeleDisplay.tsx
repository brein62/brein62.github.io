import react from 'react';
import Spacing from './Spacing';

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