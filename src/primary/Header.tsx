import EmailTeleDisplay from '../components/base/EmailTeleDisplay';
import { useWindowParams } from '../hooks/useWindowParams';

export default function Header() {

    const screenWidth = useWindowParams(true, false)[0];
    
    return (
        <header>
            <h1>Brendan Koh</h1>
            <p className="big desc">Upcoming Year 3 Computer Science Student, NUS School of Computing</p>
            <EmailTeleDisplay screenWidth={screenWidth}/>
        </header>
    );
}