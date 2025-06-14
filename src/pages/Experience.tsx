import { Accordion, Container } from 'react-bootstrap';
import Header from '../primary/Header';
import Footer from '../primary/Footer';
import PageSection from '../components/base/side-pages/PageSection';
import MainPageDivider from '../components/base/main-page/MainPageDivider';
import ResumeEntry from '../components/base/side-pages/ResumeEntry';
import ResumeList from '../components/base/side-pages/ResumeList';
import UniGradesTab, { ProjectBadge, SuBadge, TopBadge } from '../components/base/side-pages/UniGradesTab';
import JcGradesTab from '../components/base/side-pages/JcGradesTab';
import HomePageButton from '../components/buttons/HomePageButton';
import { useWindowParams } from '../hooks/useWindowParams';
import { AnchorScroll } from '../utils/AnchorScroll';
import { useEffect } from 'react';

/**
 * Returns the main body of the Experience page, given the following props:
 *
 * - screenWidth: The screen width of the main body of the Experience page to be displayed.
 *
 * @returns The component containing the main body of the Experience page.
 */
function ExperienceMainBody({ screenWidth }: { screenWidth: number }) {
  document.title = 'About Me & Experience | Brendan Koh';
  useEffect(AnchorScroll, []);

  return (
    <article>
      <PageSection title="About Me">
        <p className="big justify lastp">
          I am a Year 3 student currently pursuing a Bachelor of Computing (Computer Science) at the School of
          Computing, National University of Singapore. I have had years of experience programming as a hobby, and I
          pursued Computing as a subject during my Junior College days. In my free time, I not only code, but also solve
          Rubik's cubes, casually run, gym, as well as play puzzle or rhythm games. I also enjoy community service and
          volunteering and am always willing to help my peers and those in need. I am always welcome to learn new
          hobbies or help others with my area of expertise!
        </p>
      </PageSection>
      <MainPageDivider />
      <PageSection title="Academic Background">
        <ResumeList>
          <ResumeEntry
            title="National University of Singapore"
            dates="Aug 2022 &ndash; Present"
            subtitle="Bachelor of Computing (Computer Science)"
            screenWidth={screenWidth}
          >
            <ul>
              <li>Minor in Economics</li>
              <li>
                <strong>GPA: </strong>4.86/5 (as of Jun 2025)
              </li>
              <li>
                <strong>Expected Graduation Year: </strong>2026
              </li>
            </ul>
            <Accordion defaultActiveKey="coursework">
              <Accordion.Item eventKey="coursework">
                <Accordion.Header>Coursework done and grades:</Accordion.Header>
                <Accordion.Body>
                  <p className="justify">
                    <strong>Note: </strong>For modules marked <SuBadge nomargin />, I have converted them to pass/fail
                    such that these modules do not count towards my GPA. NUS allows 40 units (8 modules) to be converted
                    to pass/fail over 4 years.
                  </p>
                  <p className="justify">
                    For more information about the <TopBadge nomargin nolink /> and{' '}
                    <ProjectBadge nomargin nolink name="" href="#" /> badges, click on the respective badge to find out
                    about the projects and awards I have received for these modules!
                  </p>
                  <UniGradesTab />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ResumeEntry>
          <ResumeEntry
            title="Jurong Pioneer Junior College (JPJC)"
            dates="Feb 2018 &ndash; Dec 2019"
            subtitle="Singapore-Cambridge General Certificate of Education Advanced Level (GCE A-Level)"
            screenWidth={screenWidth}
          >
            <p className="justify">
              As a Junior College student taking H2 Computing as a subject, I have had a lot of experiences and
              opportunities with Computer Science, having joined competitions and events over different sub-disciplines
              within Computing. I was part of my JC's AV crew, and have provided AV support in school events, including
              Orientation in 2019!
            </p>
            <Accordion defaultActiveKey="jcsubjects">
              <Accordion.Item eventKey="jcsubjects">
                <Accordion.Header>Subjects done and grades:</Accordion.Header>
                <Accordion.Body>
                  <p className="justify">
                    <strong>Rank points: </strong>87.5 (out of 90) &mdash; AAA/AC
                  </p>
                  <JcGradesTab />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ResumeEntry>
        </ResumeList>
      </PageSection>
      <MainPageDivider />
      <PageSection title="Work &amp; Internship Experience">
        <ResumeList>
          <ResumeEntry
            title="Oceanus Group Limited"
            subtitle="Software Development Intern, Oceanus Innoventure"
            dates="Jul 2024 &ndash; Aug 2024"
            screenWidth={screenWidth}
          >
            <p className="justify">
              During this internship, I planned, designed and developed a full-stack AI-powered web application
              prototype using the React and Django frameworks, as well as the OpenAI API, from the ground up that is
              used by traders within the company. This helped me to acquire considerable expertise in full-stack
              application development, particularly in generative AI-powered applications and prompt engineering using
              OpenAI's API, over the span of only 6 weeks. These vital web development skills have proved useful in
              subsequent projects, such as <a href="#projects#school-projects">PeerPrep</a>.
            </p>
          </ResumeEntry>
          <ResumeEntry
            title="Bitopia Technology Pte Ltd"
            subtitle="Part-Time Software Developer"
            dates="Aug 2023 &ndash; Dec 2023"
            screenWidth={screenWidth}
          >
            <p className="justify">
              A full-stack web development role I did during my Year 2 Semester 1 in NUS, using Vue/Thymeleaf frontend
              and Java Spring Boot backend. I worked on several projects, including an IoT portal project and an
              integrated valuation management system (IVMS), where I created several essential frontend components of
              the projects (including implementing algorithms for frontend validation of form fields) and had experience
              in creating backend classes in Spring Boot using the Model-View-Controller (MVC) pattern.
            </p>
          </ResumeEntry>
          <ResumeEntry
            title="School of Computer Science and Engineering, Nanyang Technological University"
            subtitle="Temporary Admin Assistant"
            dates="Feb 2022 &ndash; Jun 2022"
            screenWidth={screenWidth}
          >
            <p className="justify">
              In between my National Service and my current education in NUS, I worked at NTU, helping compile their
              faculty's research papers and achievements. I also helped out in small events held by SCSE, such as
              workshops with external organisations like Sea AI Lab. Although I mainly worked as an administrative
              assistant, I gained a lot of knowledge into how research works in universities, especially in the Computer
              Science field.
            </p>
          </ResumeEntry>
        </ResumeList>
      </PageSection>
      <MainPageDivider />
      <PageSection title="Skills">
        <ul>
          <li>
            <strong>Languages: </strong>English (fluent), Mandarin Chinese (conversational)
          </li>
          <li>
            <strong>Software proficiency: </strong>Microsoft Office suite (Word, Excel, PowerPoint), Adobe Photoshop,
            Adobe Illustrator, Canva, Figma, video editing software
          </li>
          <li>
            <strong>Programming languages: </strong>Python, Java, HTML/CSS/JavaScript, C++, C#, C, SQL
          </li>
          <li>
            <strong>Web development frameworks/libraries: </strong>React, Vue, Tailwind, shadcn/ui, Bootstrap, JQuery,
            Material UI
          </li>
          <li>
            <strong>Backend frameworks: </strong>Express.js, Django, Spring Boot
          </li>
          <li>
            <strong>Machine learning frameworks: </strong>Scikit-learn, PyTorch
          </li>
          <li>Able to harness OpenAI API + prompt engineering in real-life applications</li>
          <li>
            <strong>Other languages: </strong>LaTeX typesetting, R, Matlab
          </li>
        </ul>
      </PageSection>
      <PageSection title="Qualifications">
        <ResumeList>
          <ResumeEntry
            title="Hanyu Shuiping Kaoshi (HSK)"
            subtitle="Level 5"
            dates="28 Apr 2018 onwards"
            screenWidth={screenWidth}
          >
            <p className="justify">
              The HSK tests language proficiency of Standard Chinese to foreign learners and overseas Chinese. When I
              did the HSK Level 5 test, it was the 2nd highest level of language proficiency attainable.
            </p>
          </ResumeEntry>
        </ResumeList>
      </PageSection>
      <MainPageDivider />
      <HomePageButton />
    </article>
  );
}

/**
 * Returns the Experience page (/experience).
 *
 * @returns The component representing the Experience page.
 */
export default function Experience() {
  const screenWidth = useWindowParams(true, false)[0];

  document.title = 'Experience | Brendan Koh';

  return (
    <div className="container-wrap">
      <Container className="container container-inner container-sm">
        <Header />
        <ExperienceMainBody screenWidth={screenWidth} />
        <Footer />
      </Container>
    </div>
  );
}
