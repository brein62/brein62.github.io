import { Col, Container, Row } from "react-bootstrap";
import { useWindowParams } from "../hooks/useWindowParams";
import Header from "../primary/Header";
import Footer from "../primary/Footer";
import HomePageButton from "../components/buttons/HomePageButton";
import MainPageDivider from "../components/base/main-page/MainPageDivider";
import PageSection from "../components/base/side-pages/PageSection";
import ResumeList from "../components/base/side-pages/ResumeList";
import ResumeEntry from "../components/base/side-pages/ResumeEntry";
import RowLayout from "../components/base/side-pages/RowLayout";
import Timeline from "../components/base/timeline/Timeline";
import TimelineEntry from "../components/base/timeline/TimelineEntry";

function PersonalMainBody({ screenWidth } : { screenWidth : number } ) {
    return (
        <article>
            <PageSection title="Personal &amp; Hobbies">
                <p className="big justify lastp">
                    I am currently 22 years old. In my spare time, you can either find me programming side projects or learning many other things! I try to maintain a fit and healthy lifestyle despite my busy schedule through running around my neighbourhood or weight training. As a Computer Science student, I also do like to work my brain through puzzle games and love speedcubing. I also play rhythm games as well on my PC/mobile/consoles.
                </p>
            </PageSection>
            <MainPageDivider />
            <PageSection title='My Programming "Career"'>
                <p className="justify">
                    I have been programming since primary school! From learning from a YouTube video on how to make a calculator in HTML/JavaScript till today, I have never given up my love for programming and I have always known that this would be my future ambition.
                </p>
                <Timeline>
                    <TimelineEntry years="2011">
                        <p className="justify lastp">
                            I started programming in 2011! From my curiosity as to how Wikipedia articles are edited that inspired me to start learning HTML, to learning how to make basic and simple Windows programs, my journey had only just begun and I didn't expect such an interest to transform into a potential future career!
                        </p>
                    </TimelineEntry>
                    <TimelineEntry years="2012">
                        <p className="justify lastp">
                            As I gained some knowledge and familiarity with programming, I tried creating a few <a href="/projects#early-projects">projects</a>! I created a few games using Game Maker and other programs using Visual Basic .NET, since it was included in Visual Studio and I found out that this could be used to write Windows programs. I even created a website using HTML, CSS, and JavaScript!
                        </p>
                    </TimelineEntry>
                    <TimelineEntry years="2013 &ndash; 2017">
                        <p className="justify lastp">
                            I did not really focus on programming as much due to other hobbies and school taking my time. However, I did code here and there occasionally and my spark for programming never really was lost.
                        </p>
                    </TimelineEntry>
                    <TimelineEntry years="2018 &ndash; 2019">
                        <p className="justify lastp">
                            My love for programming was mostly rekindled due to Computing being offered as a subject in my Junior College. This subject gave me a lot of exposure to other aspects of Computing and opportunities to join many Computing competitions and events. It was really gratifying to have formal programming education since I have been self-learnt ever since I started programming as a hobby in 2012.
                        </p>
                    </TimelineEntry>
                    <TimelineEntry years="2020 &ndash; 2021">
                        <p className="justify lastp">
                            I served National Service! Although I did not really focus too much on programming as I was focusing on my duties, I still managed to work on a few small programming projects, including a <a href="https://brein62.github.io/pt-timer">workout timer</a> and a <a href="/projects#online-budget-tracker">budget tracking application</a> using Google Sheets!
                        </p>
                    </TimelineEntry>
                    <TimelineEntry years="2022 &ndash; Present">
                        <p className="justify lastp">
                            After I entered university to pursue a degree in Computer Science, I have learned a lot beyond what was taught in my Junior College back in 2018! I have learnt a lot of interesting topics, such as programming paradigms like functional programming, real-life software engineering, and topics like database systems and information security. My love for programming has only strengthened over the years due to the interesting modules and content I have learned in university, and has given me a lot of knowledge and experience for computer-science related fields.
                        </p>
                    </TimelineEntry>
                    <TimelineEntry years="Future?">
                        <p className="justify lastp">
                            Nowadays, I do want to explore other aspects of programming, as can be seen scattered throughout this website. From learning new APIs and libraries, to making programs for social good, I do see a bright future ahead of me and I am excited for what is to come!
                        </p>
                    </TimelineEntry>
                </Timeline>
            </PageSection>
            <MainPageDivider />
            <PageSection title="Hobbies">
                <p className="justify">Here are some of the hobbies I have taken part in over the years!</p>
                <ResumeList>
                    <ResumeEntry title="Speedcubing" dates="2014 &ndash; Present" screenWidth={ screenWidth }>
                        <p className="justify">I have been solving Rubik's cubes casually over the past 10 years! Although I don't really play it competitively, I do enjoy the challenge of trying to solve them as fast as possible! I have a pretty large Rubik's cube collection at home and I solve many different types of puzzles as well. Here are my personal bests (PBs):</p>
                        <Container style={{ textAlign: "center", borderRadius: "1em", border: "1px dashed", marginTop: "1em" }}>
                            <RowLayout screenWidth={ screenWidth }>
                                <Col style={{ padding: "0.5em 0"}}>
                                    <strong>3x3</strong>:<br /><span className="big">10.990s</span>
                                </Col>
                                <Col style={{ padding: "0.5em 0"}}>
                                    <strong>2x2</strong>:<br /><span className="big">2.124s</span>
                                </Col>
                                <Col style={{ padding: "0.5em 0"}}>
                                    <strong>4x4</strong>:<br /><span className="big">47.922s</span>
                                </Col>
                                <Col style={{ padding: "0.5em 0"}}>
                                    <strong>5x5</strong>:<br /><span className="big">1:37.304</span>
                                </Col>
                                <Col style={{ padding: "0.5em 0"}}>
                                    <strong>6x6</strong>:<br /><span className="big">2:57.190</span>
                                </Col>
                                <Col style={{ padding: "0.5em 0"}}>
                                    <strong>7x7</strong>:<br /><span className="big">4:27.745</span>
                                </Col>
                                <Col style={{ padding: "0.5em 0"}}>
                                    <strong>Pyraminx</strong>:<br /><span className="big">6.519s</span>
                                </Col>
                                <Col style={{ padding: "0.5em 0"}}>
                                    <strong>Megaminx</strong>:<br /><span className="big">1:52.842</span>
                                </Col>
                                <Col style={{ padding: "0.5em 0"}}>
                                    <strong>Skewb</strong>:<br /><span className="big">4.877s</span>
                                </Col>
                                <Col style={{ padding: "0.5em 0"}}>
                                    <strong>3x3 One-Handed</strong>:<br /><span className="big">36.862s</span>
                                </Col>
                                <Col style={{ padding: "0.5em 0"}}> 
                                    <strong>Square-1</strong>:<br /><span className="big">42.226s</span>
                                </Col>
                            </RowLayout>
                        </Container>
                    </ResumeEntry>      
                    <ResumeEntry title="Fitness" dates="" screenWidth={ screenWidth }>
                        <p className="justify">In my spare time, I do try to maintain a regular exercise routine depending on my schedule. Generally I run or go to the gym, but I do cycle and swim occasionally as well. I do play racket sports like badminton and table tennis recreationally, but I am generally not as skilled in these sports. I am always open to learning new sports, especially if they are individual/pair sports.</p>
                    </ResumeEntry>         
                    <ResumeEntry title="Video games" dates="" screenWidth={ screenWidth }>
                        <p className="justify">I do play video games in my spare time, and I do have a PC and a Nintendo Switch console to play many different types of games.</p>
                        <p className="justify">I enjoy games of specific genres, including rhythm games, puzzle games and tower defense games.</p>
                        <p className="justify">I have been a fan of Pokémon since 2016, and have completed several main series titles on the Switch over the past few years. As a result, I have accumulated quite a large number of plushies and figurines over this time!</p>
                    </ResumeEntry>  
                    <ResumeEntry title="Sport Stacking (Cup stacking)" dates="Mar 2013 &ndash; 2017, 2020 &ndash; 2023" screenWidth={ screenWidth }>
                        <p className="justify">During my teenage/secondary school years, an interesting hobby I did was stacking cups. Sport stacking is an activity where participants stack a set of 12 plastic cups in various pre-defined sequences as quickly as possible. I used to publish a lot of videos about it onto <a href="https://www.youtube.com/@brenstack6298/featured">YouTube</a> to share with other like-minded people.</p>
                        <p className="justify">I have competed in a lot of competitions and have gone overseas (Malaysia and South Korea) to compete before, especially from 2013 to 2016. Even recently, in 2023, I volunteered as a judge for the World Championships which was held in the Singapore University of Technology and Design (SUTD).</p>
                        <p className="justify">A fun fact is that this sport indirectly got me into speedcubing since both hobbies use the same timing equipment, as well as video editing (which is currently part of my skillset).</p>
                        <p className="justify">My personal records (Gen 4):</p>
                        <Container style={{ textAlign: "center", borderRadius: "1em", border: "1px dashed", marginTop: "1em" }}>
                            <RowLayout screenWidth={ screenWidth } cutoffs={[4, 4, 4, 2, 1]}>
                                <Col style={{ padding: "0.5em 0"}}> 
                                    <strong>3-3-3</strong>:<br /><span className="big">1.521s</span>
                                </Col>
                                <Col style={{ padding: "0.5em 0"}}> 
                                    <strong>3-6-3</strong>:<br /><span className="big">1.956s</span>
                                </Col>
                                <Col style={{ padding: "0.5em 0"}}> 
                                    <strong>Cycle</strong>:<br /><span className="big">5.521s</span>
                                </Col>
                                <Col style={{ padding: "0.5em 0"}}> 
                                    <strong>Overall</strong>:<br /><span className="big">9.006s</span>
                                </Col>
                            </RowLayout>
                        </Container>
                    </ResumeEntry>
                </ResumeList>
            </PageSection>
            <MainPageDivider />
            <HomePageButton />
        </article>
    );
}

export default function Personal() {

    const screenWidth = useWindowParams(true, false)[0];

    document.title = "Projects | Brendan Koh";

    return (
        <div className="container-wrap">
            <Container className="container container-inner container-sm">
                <Header />
                <PersonalMainBody screenWidth={screenWidth}/>
                <Footer />
            </Container>
        </div>
    );
}