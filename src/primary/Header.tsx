import EmailTeleDisplay from '../components/base/EmailTeleDisplay';
import Spacing from '../components/base/Spacing';
import react from 'react';
import { useWindowParams } from '../hooks/useWindowParams';

export default function Header() {

    const screenWidth = useWindowParams(true, false)[0];

    return (
        <header>
            <h1>Name</h1>
            <p className="big">Description</p>
            <EmailTeleDisplay screenWidth={screenWidth}/>
        </header>
    );
}