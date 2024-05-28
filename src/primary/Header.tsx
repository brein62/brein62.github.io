import EmailTeleDisplay from '../components/base/EmailTeleDisplay';
import Spacing from '../components/base/Spacing';
import react from 'react';
import { useWindowParams } from '../hooks/useWindowParams';

export default function Header({ name, description } : { name : string, description : string } ) {

    const screenWidth = useWindowParams(true, false)[0];

    return (
        <header>
            <h1>{ name }</h1>
            <p className="big desc">{ description }</p>
            <EmailTeleDisplay screenWidth={screenWidth}/>
        </header>
    );
}