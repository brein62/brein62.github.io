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
import Navigation from '../components/base/Navigation';
import ResumeAccordion from '../components/base/side-pages/ResumeAccordion';
import LinkButton from '../components/buttons/LinkButton';
import { faArrowUpRightFromSquare, faFilePdf } from '@fortawesome/free-solid-svg-icons';

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
          I am a Year 4 student currently pursuing a Bachelor of Computing (Computer Science) at the School of
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
                <strong>GPA: </strong>4.88/5 (as of Dec 2025)
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
                  <p className="justify">Click on the module code to view the module's page on NUSMods.</p>
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
            title="Bitopia Technology Pte Ltd"
            subtitle="Software Developer/Engineer (Internship)"
            dates="May 2025 &ndash; Aug 2025"
            screenWidth={screenWidth}
          >
            <p className="justify">
              A full-stack web development role I did in Year 3 Summer as part of the{' '}
              <em>Student Internship Programme (SIP)</em> in NUS, with primary focus on backend development using Java
              Spring Boot. The scope was separate from my previous part-time role at Bitopia, as I focused on building
              reusable asynchronous AI infrastructure for enterprise applications. Over the 11 weeks, I gained
              experience in reusable system design and architecture, technical documentation, and several technologies
              including <strong>RabbitMQ</strong>, <strong>Prometheus/Grafana</strong>, and{' '}
              <strong>Tesseract OCR</strong>.
            </p>
            <p className="justify">
              This internship involved a <strong>private sector project</strong> where I worked on creation of reusable
              AI SDK microservices, as well as reliable message queue architectures in RabbitMQ through retry and
              dead-letter queues (DLQs), with focus on traceability and observability of messages through Prometheus and
              Grafana. In the last two weeks of my internship, I also worked on a small AI document processing feature
              using Tesseract OCR and LLMs.
            </p>
            <p className="justify">
              I also did AI research, exploring computer vision, regression, classification, time-series forecasting,
              and clustering tasks in enterprise contexts, and designed architecture to connect the Python AI
              microservices to Java Spring Boot and business intelligence contexts for a{' '}
              <strong>public sector project</strong>.
            </p>
            <div className="d-flex flex-wrap gap-2 mb-3">
              <LinkButton
                direction="left"
                href="/documents/Brendan-Koh-SIP-Final-Project-Report.pdf"
                icon={faFilePdf}
                variant="danger"
              >
                Final Project Report
              </LinkButton>
              <LinkButton direction="left" href="https://www.bitopiatech.com/" icon={faArrowUpRightFromSquare}>
                Bitopia Technology
              </LinkButton>
            </div>
            <ResumeAccordion>
              <ul>
                <li>
                  Built a reusable AI SDK microservice with Spring Boot and Vue with API and GUI for testing multiple
                  large language models (LLMs) (OpenAI, Google Gemini, Anthropic Claude) with cost and token
                  information, allowing for informed cost-benefit analysis of different AI models.{' '}
                </li>
                <li>
                  Designed and architected a reusable, reliable, and fault-tolerant RabbitMQ architecture utilising
                  retry/dead-letter queues with Prometheus/Grafana observability, ensuring message persistence in
                  production and preventing loss in business revenue across 5+ applications.
                </li>
                <li>
                  Developed an asynchronous AI image processing workflow for an enterprise application using the
                  RabbitMQ reliability architecture, speeding up image processing by 4 times while ensuring fault
                  tolerance and traceability.
                </li>
                <li>
                  Engineered and managed 3 containerised microservices (RabbitMQ, Grafana, Prometheus) for the RabbitMQ
                  reliability architecture implementation in the enterprise application, leveraging Docker Compose for
                  easy deployment and scaling.
                </li>
                <li>
                  Implemented a document processing feature using Tesseract OCR and LLMs for structured data extraction
                  within private sector enterprise project, saving processing time by 90%.
                </li>
                <li>
                  Architected systems to integrate Python ML APIs with Spring Boot and business intelligence tools,
                  while conducting ML research for enterprise and public sector use cases (regression, classification,
                  time-series, clustering).
                </li>
                <li>
                  Authored technical documentation (JavaDoc, READMEs, architecture diagrams) to address critical gaps in
                  system knowledge, supporting long-term maintainability and knowledge transfer within the team, while
                  also reducing handover time by 60%.
                </li>
              </ul>
            </ResumeAccordion>
          </ResumeEntry>
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
            <ResumeAccordion>
              <ul>
                <li>
                  Planned, designed and developed a full-stack AI-powered web application prototype in React and Django
                  frameworks from the ground up used by traders within the company.
                </li>
                <li>
                  Drafted a Business Requirements Document (BRD) from scratch for the web application, capturing project
                  scope, deliverables, workflows for traders and long-term business costs, aligning technical design
                  with business impact.
                </li>
                <li>
                  Partnered with traders through multiple product demonstrations throughout the 5-week development
                  process, gathering feedback on usability and requirements to refine the product roadmap.
                </li>
                <li>
                  Acquired considerable expertise in full-stack application development, particularly in generative
                  AI-powered applications and prompt engineering using OpenAI's API over 6 weeks.
                </li>
              </ul>
            </ResumeAccordion>
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
            <ResumeAccordion>
              <ul>
                <li>
                  Developed several backend models and classes in Spring Boot vital for applications, catering to
                  clients' requirements.
                </li>
                <li>
                  Gained significant experience in backend web development using Spring Boot, as well as knowledge on
                  how frontend and backend in web applications are integrated.
                </li>
              </ul>
            </ResumeAccordion>
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
      <Navigation selectedPage="Experience" screenWidth={screenWidth} />
      <Container className="container container-inner container-sm">
        <Header />
        <ExperienceMainBody screenWidth={screenWidth} />
        <Footer />
      </Container>
    </div>
  );
}
