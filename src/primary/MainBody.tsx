import MainPageSection from '../components/base/main-page/MainPageSection';
import { useWindowParams } from '../hooks/useWindowParams';
import sections from '../data/main-page/sections';
import MainPageDivider from '../components/base/main-page/MainPageDivider';

export default function MainBody() {

    const screenWidth = useWindowParams(true, false)[0];

    return (
        <article>
            {
                sections.sections.map((s, i) => {
                    let buttons = undefined;
                    if (s.buttons) {
                        buttons = s.buttons;
                    }
                    return (
                        <>
                            { i !== 0 ? <MainPageDivider /> : <></> }
                            <MainPageSection
                                title={s.title}
                                img={s.img}
                                href={s.href}
                                buttons={buttons}
                                screenWidth={screenWidth}
                                isFlipped={i % 2 !== 0}
                                >
                                <p className="big justify lastp" dangerouslySetInnerHTML={{__html: s.content}}></p>
                            </MainPageSection>
                        </>
                    );
                })
            }
        </article>
    );
}