import { Container, Stack } from 'react-bootstrap';
import Header from '../primary/Header';
import Footer from '../primary/Footer';
import PageSection from '../components/base/side-pages/PageSection';
import MainPageDivider from '../components/base/main-page/MainPageDivider';
import ResumeEntry from '../components/base/side-pages/ResumeEntry';
import ResumeList from '../components/base/side-pages/ResumeList';
import HomePageButton from '../components/buttons/HomePageButton';
import { useWindowParams } from '../hooks/useWindowParams';
import { useEffect } from 'react';
import TodoStudyLogo from '../components/base/logos/TodoStudyLogo';
import LinkToAwardButton from '../components/buttons/LinkToAwardButton';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import LinkButton from '../components/buttons/LinkButton';

function AwardsMainBody({ screenWidth } : {screenWidth : number}) {

    // fix React bug when accessing anchors in the page
    useEffect(() => {

        // if anchor exists
        if (document.location.hash) {

            // go to anchor and scroll to anchor after 200ms
            const aa = document.querySelector(document.location.hash);
            setTimeout(()=> {
                if (aa) aa.scrollIntoView({ behavior: "smooth", block: "start" })
            }, 200);
        }
    }, []);

    return (
        <article>
            <PageSection title="Awards">
                <p className="big justify">I have joined a lot of competitions, both in Computer Science and non-Computer Science, as well as earned awards for academic achievement. I have joined many competitions in different Computing sub-disciplines, such as competitive programming and cyber-security competitions.</p>
                <p className="big justify lastp">Apart from competitions, I have received several awards and bursaries from external organisations for academic performance and other achievements.</p>
            </PageSection>
            <MainPageDivider />
            <PageSection title="Academic Achievements">
                <ResumeList>
                    <ResumeEntry 
                        title="Top Student Award"
                        dates="12 Jan 2024"
                        subtitle="CS2100 Computer Organisation"
                        screenWidth={screenWidth}>
                            <p className="justify">
                                I was one of the top performers for the module <strong>CS2100 Computer Organisation</strong> (class of 796) during my Year 2 Sem 1 (<strong>AY2023/2024 Semester 1</strong>). This award distinguishes the top students among all students who have attained an A+ for the module.
                            </p>
                            <p className="justify lastp">
                                <LinkToAwardButton href="https://credentials.nus.edu.sg/a8c8b0a3-efa9-43d9-996e-b7d00d8231ed">
                                    CS2100 Top Performer Certificate
                                </LinkToAwardButton>
                            </p>
                    </ResumeEntry>
                    <ResumeEntry 
                        title="Top Student Award"
                        dates="30 May 2023"
                        subtitle="CS2030S Programming Methodology II"
                        screenWidth={screenWidth}>
                            <p className="justify">
                                I was one of the top performers (top 3% of the cohort) for the module <strong>CS2030S Programming Methodology II</strong> (class of 749) during my Year 1 Sem 2 (<strong>AY2022/2023 Semester 2</strong>). This award distinguishes the top students among all students who have attained an A+ for the module.
                            </p>
                            <p className="justify lastp">
                                <LinkToAwardButton href="/documents/CS2030S-Commendation-Letter.pdf">
                                    CS2030S Commendation Letter
                                </LinkToAwardButton>
                            </p>
                    </ResumeEntry>
                    <ResumeEntry 
                        title="Apollo 11 (Advanced) Achievement Level (Orbital 2023)"
                        dates="23 Aug 2023"
                        subtitle="CP2106 Independent Software Development Project (Orbital)"
                        screenWidth={screenWidth}>
                            <p className="justify">
                                Orbital is a summer project primarily done by Y1 Computing undergraduates in order to gain first-hand experience in developing applications of their choice. I worked alongside my friend to create <TodoStudyLogo link />, a comprehensive study buddy web application in React with features including <strong>study timer</strong>, <strong>to-do list</strong>, <strong>note-taking</strong>, and <strong>Canvas LMS downloader</strong>. We managed to achieve an Apollo 11 (advanced) achievement level for the project.
                            </p>
                            <Stack direction="horizontal" gap={2}>
                                <LinkToAwardButton href="https://credentials.nus.edu.sg/a200066c-97ac-4448-8f96-ba0532aed8a5">
                                    Orbital Certificate
                                </LinkToAwardButton>
                                <LinkButton variant="primary" href="https://todo-study-orbital.vercel.app" icon={ faSquareArrowUpRight }>
                                    <TodoStudyLogo green={ false } />
                                </LinkButton>
                            </Stack>
                    </ResumeEntry>
                </ResumeList>
            </PageSection>
            <MainPageDivider />
            <PageSection title="Computer Science Competitions">
                <ResumeList>
                    <ResumeEntry 
                        title="National Olympiad in Informatics (NOI) 2019"
                        subtitle="Silver Medal"
                        dates="23 Mar 2019"
                        screenWidth={screenWidth}
                    >
                        <p className="justify">
                            A competitive programming olympiad hosted by NUS School of Computing, testing participants' problem-solving skills in specific programming contexts. Given a problem, participants must try to find a solution that not only satisfies all test cases, but fits within time and memory limits imposed. I represented my Junior College and achieved a Silver Medal for this competition.
                        </p>
                        <p className="justify lastp">
                            <LinkToAwardButton href="/documents/NOI-2019-Silver.pdf">
                                NOI 2019 Silver Medal
                            </LinkToAwardButton>
                        </p>
                    </ResumeEntry>
                    <ResumeEntry 
                        title="BrainHack 2019"
                        subtitle="Bronze Award (JC/IP/ITE Category)"
                        dates="13 &amp; 14 Jun 2019"
                        screenWidth={screenWidth}
                    >
                        <p className="justify">
                            Held as part of the Cyber Defenders Discovery Camp (CDDC) 2019 by Singapore's Defence Science and Technology Agency (DSTA), BrainHack is a Jeopardy-style Capture The Flag (CTF), a computer security competition where teams compete to solve cybersecurity problems that award points and try to win as many points as possible.
                        </p>
                        <p className="justify">
                            I represented my JC as part of team <em>Tupperware</em> with my classmates.
                        </p>
                        <p className="justify lastp">
                            <LinkToAwardButton href="/documents/Brainhack-2019.pdf">
                                Brainhack 2019 Bronze Award
                            </LinkToAwardButton>
                        </p>
                    </ResumeEntry>
                    <ResumeEntry
                        title="SCSE Computing Challenge 2019"
                        subtitle="Participant"
                        dates="12 &amp; 13 Jan 2019"
                        screenWidth={screenWidth}>
                        <p className="justify">
                            Held by Nanyang Technological University's School of Computer Science and Engineering (NTU SCSE), this event was a 2-day hackathon where teams of 4 students from local Junior Colleges created a game using the Unity game engine with controls from the Leap motion controller.
                        </p>
                    </ResumeEntry>
                </ResumeList>
            </PageSection>
            <MainPageDivider />
            <PageSection title="Non-Computer Science Competitions">
                <ResumeList>
                    <ResumeEntry
                        title="Australian Mathematics Competition 2019"
                        subtitle="Distinction Award"
                        dates="Aug 2019"
                        screenWidth={screenWidth}>
                        <p className="justify">
                            Held annually by the Australian Mathematics Trust every year for students Years 3 to 12 in Australia and other countries. I was a Junior College Year 2 student (Year 12 equivalent) at the time of the competition. Distinction is awarded to the 80th&ndash;97th percentile of students in each participating country.
                        </p>
                        <p className="justify lastp">
                            <LinkToAwardButton href="/documents/AMC-2019-Distinction.pdf">
                                AMC 2019 Distinction Award
                            </LinkToAwardButton>
                        </p>
                    </ResumeEntry>
                </ResumeList>
            </PageSection>
            <MainPageDivider />
            <PageSection title="Other Awards and Recognitions">
                <ResumeList>
                    <ResumeEntry
                        title="JPJC 'A' Level Inspirational Story 2019"
                        dates="Dec 2019"
                        screenWidth={screenWidth}>
                        <p className="justify lastp">
                            An honourable mention from my JC as an inspirational story for future students, published as an article on the school website. Citation: "From not uttering a single word to others, I became a more confident communicator since entrolling in JC".
                        </p>
                    </ResumeEntry>
                    <ResumeEntry
                        title="Bursaries and Edusave Awards"
                        dates="2016&ndash;2020"
                        screenWidth={screenWidth}>
                        <p className="justify">Awarded by various organisations for my academic performance.</p>
                        <ol className="justify">
                            <li><strong>LCA 2019 Bursary (Feb 2020):</strong> $200. For good academic performance in Junior College.</li>
                            <li><strong>Edusave Certificate of Academic Achievement 2019 (2019):</strong> For achieving good academic performance and demonstrating good conduct during JC.</li>
                            <li><strong>Edusave Good Progress Award 2016 (Feb 2016):</strong> $200. For improvement in academic performance and demonstrating good conduct in my Secondary School.</li>
                            <li><strong>Edusave Certificate of Academic Achievement 2016 (Feb 2016):</strong> For achieving good academic performance and demonstrating good conduct in my Secondary School.</li>
                            <li><strong>LCA 2018 Bursary (Feb 2018):</strong> $200. For good academic performance.</li>
                        </ol>
                    </ResumeEntry>
                    <ResumeEntry
                        title="Childhood Awards"
                        dates="2011&ndash;2012"
                        screenWidth={screenWidth}>
                        <p className="justify">During my childhood, I have represented my primary school for Mathematics competitions. It is listed here as personal milestone achievements during my primary school days.</p>
                        <ol className="justify">
                            <li><strong>Australian Mathematics Competition (AMC 2011) Junior Division (Aug 2011):</strong> Achieved the <strong>Prudence Award</strong> for answering the most consecutive number of questions correctly for each participating school. I represented my primary school and got the first <strong>21</strong> consecutive questions out of 30 correct.</li>
                            <li><strong>Singapore &amp; ASEAN Schools Maths Olympiad (SASMO 2011) Primary 3 &amp; 4 Division (2011):</strong> Attained a <strong>Gold Medal</strong>. I represented my primary school for this competition.</li>
                            <li><strong>National Mathematics Olympiad of Singapore 2012 (2012):</strong> The National Mathematics Olympiad of Singapore was a mathematics competition hosted by NUS High School of Mathematics and Science. I was one of the top 4 students from my primary school. My primary school ended up being one of the top 10 schools that participated in this olympiad.</li>
                        </ol>
                    </ResumeEntry>
                </ResumeList>
            </PageSection>
            <MainPageDivider />
            <HomePageButton />
        </article>
    );
}

export default function Awards() {

    const screenWidth = useWindowParams(true, false)[0];

    document.title = "Awards | Brendan Koh";

    return (
        <div className="container-wrap">
            <Container className="container container-inner container-sm">
                <Header />
                <AwardsMainBody screenWidth={screenWidth}/>
                <Footer />
            </Container>
        </div>
    );
}