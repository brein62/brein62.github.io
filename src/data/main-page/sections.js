import { faGithub } from '@fortawesome/free-brands-svg-icons'

/**
 * Sections in the main page.
 */
const sections = {
  "sections": [
    {
      "title": "About Me & Experience",
      "img": [ "/personal/me-eating.jpg", "/personal/me-skiing.jpg" ],
      "href": "/#experience",
      "content": "I am currently a Year 3 undergraduate studying Computer Science at the <a href=\"https://www.comp.nus.edu.sg/\">School of Computing, National University of Singapore (NUS)</a>. I am proficient in many programming languages including Python, C++, HTML/CSS/JavaScript and Java and have done several software engineering projects in the past. I have had many years of experience programming as a hobby beforehand."
    },
    {
      "title": "Projects",
      "img": [ "/projects/canvas-downloader.png", "/projects/todo-study.png", "/projects/crash-maze/crash-maze.png" ],
      "href": "/#projects",
      "buttons": [
        {
          "title": "GitHub profile",
          "icon": faGithub,
          "variant": "dark",
          "href": "https://github.com/brein62"
        }
      ],
      "content": "I have worked on several personal programming projects over the past few years, including school assignments, work-related projects and personal projects. Click on the button below to learn more about what I have created so far!"
    },
    {
      "title": "Competitions & Awards",
      "img": [ "/documents/noi-2019-medal-cert.jpg" ],
      "href": "/#awards",
      "content": "I enjoy challenging myself and honing my skills in Computing and other subjects, and have joined several competitions over the past few years. I have won several awards for academic performance and participated in many competitions and olympiads over the years, such as achieving a Silver Medal at the <strong>2019 National Olympiad in Informatics (NOI)</strong>."
    }, 
    {
      "title": "Community Engagement & Volunteer Work",
      "img": [ "/volunteering/soc-flag-2022-top.png", "/volunteering/yro-group-photo.jpeg" ],
      "href": "/#volunteering",
      "content": "I am passionate in serving my local community through spreading my love of Computer Science and teaching to those around me, as well as helping many beneficiaries with their basic needs and necessities. I have been involved in many community engagement projects and events, both in Computing events and non-Computing events."
    },
    {
      "title": "Personal & Hobbies",
      "img": [ "/personal/cup-stacking.png" ],
      "href": "/#personal",
      "content": "Not only do I program for fun, I also do have a lot of hobbies and interesting facts about myself! This page is dedicated to what I do in my daily life and my hobbies."
    }
  ]
};

export default sections;