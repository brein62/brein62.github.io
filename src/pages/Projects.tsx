import { Container, Stack } from "react-bootstrap";
import { useWindowParams } from "../hooks/useWindowParams";
import Header from "../primary/Header";
import Footer from "../primary/Footer";
import PageSection from "../components/base/side-pages/PageSection";
import MainPageDivider from "../components/base/main-page/MainPageDivider";
import HomePageButton from "../components/buttons/HomePageButton";
import ProjectInfo from "../components/base/side-pages/ProjectInfo";
import ProjectContainer from "../components/base/side-pages/ProjectContainer";
import TodoStudyLogo from "../components/base/logos/TodoStudyLogo";
import ProjectColumn from "../components/base/side-pages/ProjectColumn";
import { useEffect } from "react";
import LinkButton from "../components/buttons/LinkButton";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { AnchorScroll } from "../utils/AnchorScroll";

function ProjectsMainBody({ screenWidth } : { screenWidth : number }) {


    // fix React bug when accessing anchors in the page
    useEffect(AnchorScroll, []);

    return (
        <article>
            <PageSection title="Projects">
                <p className="big justify">Here is a list of projects I have done, ranging from simple ones to facilitate my learning to more advanced ones in a variety of programming languages and forms. Most of my project ideas are usually inspired from real-life examples, hobbies, or simple games that I have already planned to create.</p>
                <p className="big justify">Most of my projects are published on my <a href="https://github.com/brein62">GitHub profile</a>, with school projects being published on the school organisation's profile.</p>
                <Stack direction="horizontal" gap={3} className="justify-content-center d-flex">
                    <LinkButton href="https://github.com/brein62" icon={ faGithub } variant="dark" direction="left">
                        GitHub profile
                    </LinkButton>
                    <HomePageButton />
                </Stack>
            </PageSection>
            <MainPageDivider />
            <PageSection title="Personal Projects">
                <ProjectContainer>
                    <ProjectColumn screenWidth={screenWidth}>
                        <ProjectInfo
                            title="Canvas Downloader"
                            date="Aug 2023 &ndash; Present"
                            languages="Python"
                            libraries="TKinter"
                            apis="Canvas API"
                            url="https://github.com/brein62/canvas-downloader"
                            img="/projects/canvas-downloader.png">
                            <p className="justify lastp">
                                A simple cross-platform Python GUI application to download all files from the <a rel="noopener noreferrer" href="https://www.instructure.com/canvas">Canvas</a> learning management system (LMS), allowing students to automatically download and update all files from the Canvas LMS onto their own computer without having to manually download them. Makes use of the Canvas API. This is a Python port of the Canvas downloader feature I did for <TodoStudyLogo /> (my Orbital project).
                            </p>
                        </ProjectInfo>
                        <ProjectInfo
                            title="Personal Portfolio Website"
                            date="Jul 2022 &ndash; Present"
                            languages="HTML, CSS, JavaScript"
                            libraries="React Router, Bootstrap, Font Awesome icons"
                            frameworks="React"
                            img="/projects/personal-portfolio.png"
                            url="https://brein62.github.io">
                            <p className="justify lastp">
                                Yes, this very website itself! Initially starting off as a pure HTML/CSS/JavaScript web project in 2022, I remastered the entire website using React in 2024 to reduce redundant boilerplate code and allow for easier development and additions to the website.
                            </p>
                        </ProjectInfo>
                        <ProjectInfo
                            title="Lights Out"
                            date="2022 &ndash; Present"
                            languages="HTML/CSS/JavaScript"
                            libraries="Bootstrap"
                            frameworks="React"
                            url="https://brein62.github.io/lights-out"
                            >
                            <p className="justify lastp">
                                A Lights Out simulator puzzle game. In this game, you move by clicking on a tile in the grid. This causes the tile clicked and the 4 surrounding tiles to toggle colour (dark to light, light to dark). You solve the puzzle by making all the dark tiles light in colour.
                            </p>
                        </ProjectInfo>
                        <ProjectInfo
                            title="Single-Page Projects"
                            date="13 Jun 2024 (main page)"
                            languages="HTML, CSS (main page)"
                            libraries="Bootstrap, Font Awesome icons (main page)"
                            url="https://brein62.github.io/single-page-projects">
                            <p className="justify lastp">
                                A bunch of single-page web applications I developed over the years. Currently consists of 2 projects: <a href="https://brein62.github.io/single-page-projects/chartester/">chartester</a> and <a href="https://brein62.github.io/single-page-projects/lap-timer/">lap-timer</a>. These projects will be enhanced to include mobile functionality in the future.
                            </p>
                        </ProjectInfo>
                    </ProjectColumn>
                    <ProjectColumn second screenWidth={screenWidth}>
                        <ProjectInfo
                            title="PT Workout Timer"
                            date="Apr 2020"
                            languages="HTML/CSS/JavaScript"
                            libraries="Bootstrap"
                            url="https://brein62.github.io/pt-timer"
                            img="/projects/pt-timer.png">
                            <p className="justify lastp">
                                Made while I was serving National Service quarantining during Circuit Breaker. This PT Timer is based on a guideline HIIT workout routine created by Our Singapore Army. I am planning to update its UI in the near future.
                            </p>
                        </ProjectInfo>
                        <ProjectInfo
                            title="Very Simple Timer"
                            date="21 May 2021, 12 Jun 2024"
                            languages="HTML/CSS/JavaScript"
                            url="https://brein62.github.io/very-simple-timer"
                            img={["/projects/very-simple-timer/light-mode.png", "/projects/very-simple-timer/dark-mode.png"]}
                            >
                            <p className="justify lastp">
                                A very simple stopwatch application made in 1 day to experiment with vanilla JavaScript features and responsive web design. I updated the website on 12 Jun 2024 to allow mobile devices to use this timer and improved the UI slightly.
                            </p>
                        </ProjectInfo>
                        <ProjectInfo
                            title="Online Budget Tracker"
                            date="Jan 2020 &ndash; Feb 2021"
                            languages="Google Apps Script (JavaScript)"
                            img={ ["/projects/online-budget-tracker-1.png", "/projects/online-budget-tracker-2.png", "/projects/online-budget-tracker-3.png"] }>
                            <p className="justify lastp">
                                An expense tracker I maintained from Jan 2020 to Feb 2021 where I entered transactions onto a Google form and a summary of how much money I spent and have left is displayed on a Google Sheets spreadsheet. Although this project is customised for myself, I may produce templates (Google Forms and Google Sheets) to allow other people to use it in the future.
                            </p>
                        </ProjectInfo>
                    </ProjectColumn>
                </ProjectContainer>
            </PageSection>
            <MainPageDivider />
            <PageSection title="School Projects">
                <p className="justify">These are projects that I did as part of school modules or assessments.</p>
                <ProjectContainer>
                    <ProjectColumn screenWidth={ screenWidth }>
                        <ProjectInfo
                            title={ <TodoStudyLogo /> }
                            date="Orbital project (May 2023 &ndash; Aug 2023)"
                            languages="HTML, CSS, JavaScript, Python, SQL"
                            libraries="React Router, Material UI, Dayjs, Draft.js, react-draft-wysiwyg, html-prettify, JSZip, FileSaver.js, Lodash"
                            frameworks="React"
                            apis="Telegram API, Google OAuth integration, Canvas API, Supabase, Quotable API"
                            url={[{"name": "App", "url": "https://todo-study-orbital.vercel.app"},
                                  {"name": "Repository", "url": "https://github.com/orbital-2023-team-5450/todo-study"}
                                 ]}
                            img="/projects/todo-study.png">
                            <p className="justify">
                                <TodoStudyLogo /> is a web application that allows students to study effectively by integrating multiple study features into one platform. It consists of several features, including a <strong>study timer</strong>, <strong>to-do list</strong>, <strong>note-taking</strong>, and <strong>Canvas LMS downloader</strong>. The application also includes a simple <strong>Telegram bot</strong> programmed in Python for reminders and easy sharing of notes within the app.
                            </p>
                            <p className="justify">
                                This project was done as part of the NUS Orbital programme during my Year 1 summer break (summer 2023) with my friend. We managed to achieve an <a href="/#awards#academic-achievements">Apollo 11 (advanced) achievement level</a> for the project.
                            </p>
                        </ProjectInfo>
                    </ProjectColumn>
                    <ProjectColumn second screenWidth={ screenWidth }>
                        <ProjectInfo
                            title="iVolunteer"
                            date="CS2103T project (Aug 2023 &ndash; Nov 2023)"
                            languages="Java"
                            libraries="JavaFX, Jackson, JUnit5"
                            url={[{"name": "Repository", "url": "https://github.com/AY2324S1-CS2103T-T14-4/tp"}, {"name": "User Guide", "url": "https://AY2324S1-CS2103T-T14-4.github.io/tp"}]}
                            img="/projects/ivolunteer.png">
                            <p className="justify">
                                <strong>iVolunteer</strong> is a cross-platform Java volunteer management application, allowing volunteers and volunteer coordinators to plan and participate in volunteer events, handle roles, logistics and other materials swiftly and easily. This application combines the benefits of a <strong>command-line interface (CLI)</strong> with a <strong>graphical user interface</strong> to enhance volunteers' productivity when using the application.
                            </p>
                            <p className="justify">
                                This project is one of many software development projects developed for the module <em>CS2103T Software Engineering</em>, and is based on the AddressBook-Level3 project created by the <a rel="noopener noreferrer" target="_blank" href="https://se-education.org/">SE-EDU initiative</a>.
                            </p>
                        </ProjectInfo>
                        <ProjectInfo
                            title="Migrate AB3 to Java 17"
                            date="CP3108A project (Jun 2024 &ndash; Present)"
                            languages="Java"
                            libraries="JavaFX, Jackson, JUnit5"
                            url={[{"name": "Repository", "url": "https://github.com/brein62/AB3-J17"}]}>
                            <p className="justify">
                                The AddressBook-Level3 project created by the <a rel="noopener noreferrer" target="_blank" href="https://se-education.org/">SE-EDU initiative</a> and used for <em>CS2103T Software Engineering</em> currently runs on Java 11. This project aims to upgrade the components of the project to Java 17 while trying to make the migration process as bug and error-free as possible (on my M1 Mac, the original project I used in CS2103T required some effort on my end due to issues running the JavaFX library and requiring a specific JDK for my Mac to compile and build the project).
                            </p>
                            <p className="justify">
                                This project helped me learn a lot about dependency management in Java/Gradle and the difficulty in running cross-platform GUI applications since different operating systems have their own libraries and environments.
                            </p>
                        </ProjectInfo>
                    </ProjectColumn>
                </ProjectContainer>
            </PageSection>
            <MainPageDivider />
            <PageSection title="Early Projects">
                <p className="justify">These are projects that I did in my early years of programming.</p>
                <ProjectContainer>
                    <ProjectColumn screenWidth={ screenWidth }>
                        <ProjectInfo
                            title="Crash Maze"
                            date="Sep 2012 &ndash; Oct 2012"
                            languages="Game Maker Studio"
                            gap
                            url={[ {"name": "Windows only", "url": "https://drive.google.com/file/d/18KXXXTmbd4es4LVqRAxc1sHyvpXtLRCx/view?usp=drive_link"} ]}
                            img={["/projects/crash-maze/crash-maze.png", "/projects/crash-maze/crash-maze-menu.png", "/projects/crash-maze/crash-maze-2.png", "/projects/crash-maze/crash-maze-old.jpg"]}>
                            <p className="justify">
                                <strong>Crash Maze</strong> is a puzzle game I developed using Game Maker Studio during my primary school years (2012) consisting of 21 levels. The game involves a character moving around in a grid trying to collect coins and diamonds while avoiding enemies in order to get the flag and beat the level. The game is quite easy and you can speedrun the game in 5 minutes if you want to try it out!
                            </p>
                        </ProjectInfo>
                        <ProjectInfo
                            title="Old 2012 Website"
                            date="2012"
                            languages="HTML, CSS, JavaScript"
                            url="https://brenlimits00.coffeecup.com"
                            >
                            <p className="justify">
                                Old website made using <a href="https://www.coffeecup.com/html-editor/">CoffeeCup HTML Editor</a> and hosted on their web servers. Contains a lot of mini-applications, such as calculators, made in HTML/CSS/JavaScript.
                            </p>
                        </ProjectInfo>
                    </ProjectColumn>
                    <ProjectColumn second screenWidth={ screenWidth }>
                        <ProjectInfo
                            title="Other Projects"
                            date="Jan 2012 &ndash; Feb 2012"
                            languages="Visual Basic .NET"
                            url={[ {"name": "Windows only", "url": "https://drive.google.com/drive/folders/18Hfh_lgUndNHeWKvfL-Vhl-nNkxBnEhE?usp=drive_link"} ]}>
                            <p className="justify">
                                I developed several basic applications using Visual Basic .NET in my primary school years (2012). These included some simple games, as well as calculators which helped me to learn basic programming skills back then. The apps include:
                            </p>
                            <ul className="justify">
                                <li><strong>3 Row Attacker Edition 1:</strong> A simple game where you try to shoot all targets by clicking a button/pressing a key on the keyboard. You win when you reach 0 shoots left on all targets.</li>
                                <li><strong>A Very Simple Timer:</strong> A very simple stopwatch that times in intervals of 1 second.</li>
                                <li><strong>Burger Earning Game 1:</strong> A game where you try to earn money by selling burgers.</li>
                                <li><strong>Burger Earning Game 2 - Shop Edition:</strong> A game where you try to earn money by selling items.</li>
                                <li><strong>Calc 1100:</strong> A simple calculator that can do addition, subtraction, multiplication, division, exponentiation, reciprocal, modulo, and convert decimal to octal/hexadecimal.</li>
                                <li><strong>Calc 2000:</strong> A slightly more advanced calculator with more functions and a keypad.</li>
                                <li><strong>Calculator:</strong> Same as <em>Calc 1100</em> above.</li>
                                <li><strong>Quiz1:</strong> A simple quiz game with 2 math questions.</li>
                                <li><strong>Simple Calculator - With Fraction to Decimal Function:</strong> A calculator with the 4 basic operations but can also calculate the decimal values of fractions.</li>
                                <li><strong>Stopwatch:</strong> A very simple stopwatch that times in intervals of 10 milliseconds (though the milliseconds counter isn't very accurate...)</li>
                            </ul>
                        </ProjectInfo>
                    </ProjectColumn>
                </ProjectContainer>
            </PageSection>
            <MainPageDivider />
            <HomePageButton />
        </article>
    );
}

export default function Projects() {

    const screenWidth = useWindowParams(true, false)[0];

    document.title = "Projects | Brendan Koh";

    return (
        <div className="container-wrap">
            <Container className="container container-inner container-sm">
                <Header />
                <ProjectsMainBody screenWidth={screenWidth}/>
                <Footer />
            </Container>
        </div>
    );
}