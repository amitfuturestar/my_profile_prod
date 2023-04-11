// import images
import Hero_person from "./assets/images/Hero/person_2.png";

import figma from "./assets/images/Skills/figma.png";
// import sketch from "./assets/images/Skills/sketch.png";
// import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import aws from "./assets/images/Skills/aws.png";
import linux from "./assets/images/Skills/linux.png";
import docker from "./assets/images/Skills/docker.png";
import git from "./assets/images/Skills/git.png";
import js from "./assets/images/Skills/js.png";
import nginx from "./assets/images/Skills/nginx.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";
import whtasappQr from "./assets/images/Services/whatsapp_qr_2.jpg";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

// import avatar1 from "./assets/images/Testimonials/avatar1.png";
// import avatar2 from "./assets/images/Testimonials/avatar2.png";
// import avatar3 from "./assets/images/Testimonials/avatar3.png";
// import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";


const quotes = ["“You should hire me because I have a proven ability to lead teams and drive results, through my experience in project management and my natural ability to motivate others. I’m committed to creating a positive work environment and am always looking for ways to help my team grow and succeed.” ", 
"“I should be hired for this role because of my relevant skills, experience, and passion for the industry. I’ve researched the company and can add value to its growth. My positive attitude, work ethics, and long-term goals align with the job requirements, making me a committed and valuable asset to the company.”"];

const quotes_text = quotes[Math.floor(Math.random() * quotes.length)]


export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Software Engineer",
    heighest_qualification:"M.Tech in Computer Science and Engineering",
    firstName: "AMIT",
    LastName: "KUMAR",
    btnText: "Download Cv",
    image: Hero_person,
    hero_content: [
      {
        count: "4+" ,
        text: "Years of Experience in MERN Stack development",
      },
      {
        count: "7+",
        text: "Projects Worked in my career",
      },
    ],
  },
  about:{
    title: "ABOUT ME",
    about_content:[
      {
        para: "Hi. I am a MERN Stack developer for about 4+ years ranging from small scale websites to large scale Fin Tech web applications. (pdf report genrating from backend,razor pay payment gateway integrations too !)",

      },
      {
        para:"It all started in 2019 where I first learnt to build static landing pages. Then I came to know about how servers work with the help of Java script, React,Html, Css and now currently Node.js. That expanded my view upon the possibilities of creating huge applications",

      },{
        para:"Then I slowly started engaging myself building single page application development, state management techniques using Redux.js and Context API and side effects using Redux-thunk and Redux-Saga, building microservices in Node.js and Express.js and knowing how to connect to databases using PostgreSQL and MySQL."

      }
    ]
  },
  skills: {
    title: "Skills",
    subtitle: "SKILLS I AM EXPERIENCED WITH",
    skills_content: [
      {
        name: "Java Script",
        para: "ECMAScript",
        logo: js,
        knowledge:[{
          text:"Write sustainable code that can be modified and scaled."
        },
        {
          text:"Ensure that UI/UX designs are practical."
        },
        {
          text:"Examine the code, requirements, system hazards, and software dependability."
        },
        {
          text:"Work with web developers on both the front-end and back-end."
        },{
          text:"Understanding of Asynchronous Programming"
        },
        {
          text:"Worked with latest feature for example : let, var, const,Spread (...) Operator, Sets , constructor(), Promise , ReplaceAll(), Object.hasOwn() etc.."
        }]
      },
      {
        name: "React js",
        para: "JavaScript library for building user interfaces",
        logo: reactjs,
        knowledge:[{
          text:"Developing new user-facing features using React.js."
        },
        {
          text:"Building reusable components and front-end libraries for future use."
        },
        {
          text:"Translating designs and wireframes into high quality code."
        },
        {
          text:"proficiency in JavaScript, including DOM manipulation and the JavaScript object model."
        },
        {
          text:"Thorough understanding of React.js and its core principles."
        },
      
        {
          text:"proficiency in JavaScript, including DOM manipulation and the JavaScript object model."
        },
        
        {
          text:"Familiarity with RESTful APIs, modern authorization mechanisms, such as JSON Web Token."
        },
        {
          text:"Experience with data structure libraries (e.g., Immutable.js)."
        },
        
        {
          text:"Experience with common front-end development tools such as Babel, Webpack, NPM, etc."
        },
        ]
      },
      // {
      //   name: "Figma",
      //   para: "Lorem ipsum text  dummy",
      //   logo: figma,
      //   knowledge:[{
      //     text:"Write sustainable code that can be modified and scaled."
      //   },
      //   {
      //     text:"Ensure that UI/UX designs are practical."
      //   },
      //   {
      //     text:"Examine the code, requirements, system hazards, and software dependability."
      //   },
      //   {
      //     text:"Work with web developers on both the front-end and back-end."
      //   },
      //   {
      //     text:"Worked with latest feature for example : let, var, const,Spread (...) Operator, Sets , constructor(), Promise , ReplaceAll(), Object.hasOwn() etc.."
      //   }]
      // },
      {
        name: "Node js",
        para: "Backend",
        logo: nodejs,
        knowledge:[{
          text:"Integration of user-facing elements developed by front-end developers with server side logic."
        },
        {
          text:"Writing reusable, testable, and efficient code."
        },
        {
          text:"Design and implementation of low-latency, high-availability, and performant applications."
        },
        {
          text:"Implementation of security and data protection."
        },
        {
          text:"Integration of data storage solutions include databases, key-value stores, blob stores, etc."
        },
        {
          text:"Knowledge of Node.js and frameworks available for it such as Express,NodeMon etc."
        },
        {
          text:"Good understanding of server-side templating languages such as EJS."
        },
        {
          text:"Creating database schemas that represent and support business processes."
        }

      ]
      },
      {
        name: "Aws",
        para: "AWS services",
        logo: aws,
        knowledge:[{
          text:"Deploying ReactJS App on Ubuntu 20.04 LTS on Amazon EC2 instance."
        },
        {
          text:"Install and Configure ngnix on EC2 instance."
        },
        {
          text:"creating a cluster of web server to maintain load balancing."
        },
        {
          text:"configuration of vpc with subnetting."
        },
        {
          text:"configuration of DNS for hosted Web through Nginx and mainting HTTPS certificate."
        },
        {
          text:"configuration of DNS for hosted Web through Nginx and mainting HTTPS certificate."
        },
        {
          text :"worked with EC2, S3, RDS, VPC, S3 Glacier, SNS, EBS, Route 53, SES etc"
        }
      ]
      },
      {
        name: "Linux",
        para: "used for Deployment",
        logo: linux,
        knowledge_url:"https://www.digitalocean.com/community/tutorials/linux-commands",
        knowledge:[{
          text:"installation and configuration Nginx and other dependencies."
        },
        {
          text:"Ownership and Permissions For files and folder."
        },
        {
          text:"Familiar with command using for Read , Write,Execute."
        },
        {
          text:"Most used command ls, pwd, cd, mkdir, cp, mv, uname, aptget, wget, kill, ps, chmod, chown, ifconfig, top, tail, grep, vi etc."
        }]
      },
      {
        name: "Git",
        para: "version control system",
        logo: git,
        knowledge_url:"https://www.freecodecamp.org/news/understanding-git-basics-commands-tips-tricks/",
        knowledge:[{
          text:"Working with branches."
        },
        {
          text:"using git command line , git add, Git commit, Git status,Git branch branch_name, Git checkout branch_name, Git checkout -b branch_name, Git branch, Git log, Git push, Git pull"
        },
        ]
      },
      {
        name: "Nginx",
        para: "Web Server",
        knowledge_url:"https://www.digitalocean.com/community/tutorials/understanding-the-nginx-configuration-file-structure-and-configuration-contexts",
        logo: nginx,
        knowledge:[{
          text:"Understanding the Nginx Configuration File Structure and Configuration Contexts."
        },
        {
          text:"Server Context, HTTP Context, Events Context, Location Context, Upstream Context, Limit_except Context."
        }]
      },
      {
        name: "docker",
        para: "OS-level virtualization",
        logo: docker,
        knowledge:[{
          text:"Operations or systems administration experience, particularly on Linux."
        },
        {
          text:"Knowledge in container networking on Docker."
        },
        {
          text:"Knowledge in application deployment by using CI/CD."
        }]
      },
      {
        name: "Python",
        para: "Python For Data Science",
        logo: python,
        knowledge:[{
          text:"Knowledge of Collect data and identify data sources."
        },
        {
          text:"Analyze huge amounts of data, both structured and unstructured."
        },
        {
          text:"Enhancing the data collection process."
        },
        {
          text:"Processing, cleansing & verifying of data."
        },
        {
          text:"Analysing data for trends and patterns and to find answers to specific questions"
        },
      {
        text:"Create visualisations of data."
      }]
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Collaborating with team, such as full stack designers and front-end developers, Worked with business and design requirements to develop web pages that adhered to company, industry and usability standards .",
        logo: services_logo1,
      },
      {
        title: "Backend",
        para: "Backend developer with over four years of experience. Key member of three software development teams. Expirenced in Node js, Express Js, Nginx and Apache. Passionate about learning new concepts and an excellent team player",
        logo: services_logo2,
      },
      {
        title: "Deployment",
        para: "Good understanding of Infrastructure as Code (Programmable Infrastructure).Implementing Organization Strategy in the environments of Linux.Configuring ec2 with Nginx to deploy Web App.Technical knowledge on EC2, IAM, S3, VPC, Amazon Glacier for archiving data.Monitor logs for better understanding the functioning of the system.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
   // subtitle: "MY CREATION",
   subtitle: "Worked With Team",
    image: person_project,
    project_content: [
      {
        title: "FinApp",
        image: project1,
        link:"https://www.finapp.ai/"
      },
      {
        title: "Jumbo Wealth",
        image: project2,
        link:"https://www.jumbowealth.com/"
      },
      {
        title: "R & D Capital",
        image: project3,
        link:"https://rdcaps.com/"
      },
    ],
  },
  // Testimonials: {
  //   title: "Testimonials",
  //   subtitle: "MY CLIENT REVIEWS",
  //   testimonials_content: [
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar1,
  //       name: "JOHN DOE",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar2,
  //       name: "Tom Alex",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar3,
  //       name: "Johnny",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar4,
  //       name: "ROBBIN",
  //     },
  //   ],
  // },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para:quotes_text,
    //para: "“I should be hired for this role because of my relevant skills, experience, and passion for the industry. I’ve researched the company and can add value to its growth. My positive attitude, work ethics, and long-term goals align with the job requirements, making me a committed and valuable asset to the company.”",
    btnText: "I'm interested",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    whtasappQr: whtasappQr,
    social_media: [
      {
        text: "amit@aifuture.in",
        icon: GrMail,
        link: "mailto:amit@aifuture.in",
      },
      {
        text: "+91 9472307115",
        icon: MdCall,
        link: "https://wa.me/9472307115",
      },
      {
        text: "linkedin",
        icon: AiFillLinkedin,
        link: "https://www.linkedin.com/in/amit-kumar-78b862232/",
      },
      {
        text: "whtasapp through Mobile",
        icon: AiOutlineWhatsApp,
        link: "",
        modal:true
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
