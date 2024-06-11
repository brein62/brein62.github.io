import { CardGroup, Container, Stack } from 'react-bootstrap';
import Header from '../primary/Header';
import Footer from '../primary/Footer';
import PageSection from '../components/base/side-pages/PageSection';
import MainPageDivider from '../components/base/main-page/MainPageDivider';
import HomePageButton from '../components/buttons/HomePageButton';
import { useWindowParams } from '../hooks/useWindowParams';
import { useEffect } from 'react';
import ResumeList from '../components/base/side-pages/ResumeList';
import ResumeEntry from '../components/base/side-pages/ResumeEntry';
import ProjectContainer from '../components/base/side-pages/ProjectContainer';
import ProjectColumn from '../components/base/side-pages/ProjectColumn';
import EventInfo from '../components/base/side-pages/EventInfo';
import EventList from '../components/base/side-pages/EventList';
import { AnchorScroll } from '../utils/AnchorScroll';

function VolunteeringMainBody({ screenWidth } : {screenWidth : number}) {


    // fix React bug when accessing anchors in the page
    useEffect(AnchorScroll, []);

    return (
        <article>
            <PageSection title="Community Engagement & Volunteer Work">
                <p className="big justify">I am passionate in serving my local community through spreading my love of Computer Science to those around me, as well as helping many beneficiaries with their basic needs and necessities. I have been involved in many community engagement projects and events, both in Computing events and non-Computing events. I am part of two community service organisations within NUS: <strong>NUS Students' Community Service Club</strong> (NUS CSC) and <strong>Rotaract Club of NUS</strong>, and have joined their regular volunteering programmes.</p>
                <p className="big justify lastp">Here is a list of community service and volunteer projects I have participated in.</p>
            </PageSection>
            <MainPageDivider />
            <PageSection title="Computing-related Events">
                <ResumeList>
                    <ResumeEntry
                        title="BuildingBloCS 2019"
                        dates="8 Jun 2019"
                        subtitle="Facilitator"
                        screenWidth={ screenWidth }>
                        Held in NUS School of Computing, BuildingBloCS is an annual event aiming to spread the love of Computer Science to its participants through workshops and talks from industry partners. Participants were students from local secondary schools. I facilitated and led a group of 4 students to participate in the activities throughout the event.
                    </ResumeEntry>
                    <ResumeEntry
                        title="SoC FLAG Beneficiary Engagement Day 2022"
                        dates="8 &amp; 25 Jul 2022"
                        subtitle="Volunteer"
                        screenWidth={ screenWidth }>
                        An event where volunteers from NUS SoC engage beneficiaries from MINDS Fernvale Gardens School through teaching simple programming through <a href="https://scratch.mit.edu">Scratch</a> (8 Jul) and a flower-making workshop (25 Jul). Part of SoC's FLAG initiative in 2022.
                    </ResumeEntry>
                </ResumeList>
            </PageSection>
            <MainPageDivider />
            <PageSection title="Regular Community Service Programmes">
                <ResumeList>
                    <ResumeEntry
                        title="Yishun Reading Odyssey (YRO)"
                        dates="Aug 2022 &ndash; Present"
                        subtitle="Programmes Head (Jun 2023 &ndash; Jun 2024) / Volunteer"
                        screenWidth={ screenWidth }>
                        <p className="justify">
                            YRO is a regular volunteering programme under <strong>NUS Students Community Service Club (NUS CSC)</strong> where volunteers teach primary-school age children to read and cultivate reading skills in these children through activities like group storytelling, cognitive games, and guided reading. The group storytelling section is country-themed, allowing for more exploration of different cultures and traditions among the children. YRO is a programme done in partnership with <strong>SHINE Children &amp; Youth Services</strong>, and lessons are held weekly in SHINE's Yishun Centre.
                        </p>
                        <p className="justify">
                            From Jun 2023 to Jun 2024, I joined YRO's executive committee as the Programmes Head, involving planning games for the children for the first and last sessions for each semester, planning the games and activity booklet for the annual outing which occurred on 1 Jun 2024, as well as borrowing country-themed books for the group storytelling portion of the programme.
                        </p>
                    </ResumeEntry>
                    <ResumeEntry
                        title="Project Embrace"
                        dates="Aug 2022 &ndash; Present"
                        subtitle="Volunteer"
                        screenWidth={ screenWidth }>
                        <p className="justify">
                            A regular volunteering programme under <strong>Rotaract Club of NUS</strong>, Project Embrace involves volunteers going in pairs to engage and interact with children/youths with intellectual disabilities (e.g. autism) by guiding them with homework and activities in their own homes. Sessions are held weekly and I have taught 3 different youths so far throughout this program.
                        </p>
                    </ResumeEntry>
                    <ResumeEntry
                        title="Reach Out"
                        dates="Apr 2022 &ndash; Oct 2022"
                        subtitle="Volunteer"
                        screenWidth={ screenWidth }>
                        <p className="justify">
                            Reach Out is an organisation aiming to help the elderly and needy in rental flats all around Singapore by providing pre-loved goods, food and other necessities donated by others. Events are held on average twice a month on Sundays. I have been volunteering with this organisation nearly consistently and joined most events from Apr 2022 to Oct 2022. It also has programmes to help migrant worker communities in Singapore. Here is the link to <a href="https://www.facebook.com/groups/2385004058279341">Reach Out's official Facebook group page</a>.
                        </p>
                    </ResumeEntry>
                </ResumeList>
            </PageSection>
            <MainPageDivider />
            <PageSection title="Overseas Community Involvement Programmes (OCIPs)">
                <ResumeList>
                    <ResumeEntry
                        title="Project Matuto 2022"
                        dates="Aug 2022 &ndash; Dec 2022"
                        subtitle="Programmes Committee Member"
                        screenWidth={ screenWidth }>
                        <p className="justify">
                            Project Matuto 2022 was an overseas community involvement programme (OCIP) organised by NUS Pioneer House (PH) and held in Bago City, Philippines from 13 Dec 2022 &ndash; 24 Dec 2022. As part of the programmes committee, I was involved in the planning of the event itinerary, games and lessons for children of primary school age from 3 schools within Bago City. During the trip, I helped ensure the activities planned for the children ran smoothly.
                        </p>
                    </ResumeEntry>
                </ResumeList>
            </PageSection>
            <MainPageDivider />
            <PageSection title="Community Service Events">
                <p className="justify lastp">Due to the high number of community service events I have joined, they are listed two-by-two in a page format. Click on the buttons below to browse through the community service events I have joined!</p>
                <EventList screenWidth={ screenWidth }>
                    <EventInfo
                        title="PH FLAG Day 2023"
                        dates="29 Jul 2023">
                        FLAG is an initiative by NUS to help beneficiaries in partner organisations through engagement events and Flag Day. As a resident of NUS Pioneer House (PH) in 2022 and 2023, I joined their FLAG committee for 2023 and did Flag Day for them as well. This Flag Day aimed to raise funds for Metta School (PH's partner school for FLAG 2023) through public donations physically and online.
                    </EventInfo>
                    <EventInfo
                        title="PH FLAG 2023 Beneficiary Engagement (Metta School Carnival)"
                        dates="19 Mar 2023">
                        As part of the Volunteering Committee for PH Flag 2023, we volunteered and manned several booths for the Metta School Carnival 2023 which aimed to raise funds for Metta School (PH's partner school).
                    </EventInfo>
                    <EventInfo
                        title="SoC FLAG Day 2022"
                        dates="1 Aug 2022">
                        FLAG is an initiative by NUS to help beneficiaries in partner organisations through engagement events and Flag Day. NUS School of Computing partnered with MINDS Fernvale Gardens School and this Flag Day aimed to raise funds for the school through public donations physically and online.
                    </EventInfo>
                    <EventInfo
                        title="Keat Hong Edusave &amp; CDC Awards Presentation Ceremony"
                        dates="4 Jan 2020">
                        Helped out with registration of students (awardees) and presentation of awards to them.
                    </EventInfo>
                    <EventInfo
                        title="Keat Hong CC New Year's Day Celebrations 2020"
                        dates="31 Dec 2019 &ndash; 1 Jan 2020">
                        Helped with setting up and manning of game stations there.
                    </EventInfo>
                    <EventInfo
                        title="AVIVA Superfundae 2019"
                        dates="15 Jun 2019">
                        Helped with setting up and manning of a game station there.
                    </EventInfo>
                    <EventInfo
                        title="Project SPHERE with HDB"
                        dates="May 2019">
                        An event, held in conjunction with Singapore's Housing and Development Board (HDB), where students and other volunteers help to do spring-cleaning for seniors living in rental flats. For my JC, we did the spring cleaning in the Teck Whye Lane estate. More info about Project SPHERE here.
                    </EventInfo>
                </EventList>
            </PageSection>
            <MainPageDivider />
            <HomePageButton />
        </article>
    );
}

export default function Volunteering() {

    const screenWidth = useWindowParams(true, false)[0];

    document.title = "Community Engagement & Volunteer Work | Brendan Koh";

    return (
        <div className="container-wrap">
            <Container className="container container-inner container-sm">
                <Header />
                <VolunteeringMainBody screenWidth={screenWidth}/>
                <Footer />
            </Container>
        </div>
    );
}