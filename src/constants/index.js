import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  leapfrog,
  MyDjangoBlog,
  threejs,
  sos,
  pokhara_uni,
  signetic,
  powerapps,
  consultant,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "PowerApps / Dynamics 365 Consultant",
    icon: consultant,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Python",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/701px-Python-logo-notext.svg.png",
  },
  {
    name: ".Net",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/2048px-Microsoft_.NET_logo.svg.png",
  },
  {
    name: "Microsoft Dynamics 365",
    icon: "https://www.endeavour365.ca/wp-content/uploads/2022/07/Dynamics-365-logo-boarder.jpg",
  },
  {
    name: "Microsoft Power Platform",
    icon: powerapps,
  },
  {
    name: "Django",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/1920px-Django_logo.svg.png",
  },
];

const degrees = [
  {
    title: "+2 Science",
    icon: sos,
    iconBg: "#383E56",
    date: "July 2014 - August 2016",
    college_name: "SOS Higher Secondary School",
    location: "Pokhara, Nepal",
    sequence: 1,
  },
  {
    title: "BE Computer Engineering",
    icon: pokhara_uni,
    iconBg: "#E6DEDD",
    date: "September 2016 - August 2022",
    college_name: "Nepal Engineering College",
    location: "Bhaktapur, Nepal",
    sequence: 2,
  },
];

const experiences = [
  {
    title: "Microsoft Power Platform Intern",
    company_name: "Leapfrog Technology Inc.",
    icon: leapfrog,
    iconBg: "#FCFBF4",
    date: "September 2021 - November 2021",
    sequence: 1,
    points: [
      "Creating Power Apps (Canvas App, Model Driven App)",
      "Creating Power Automate",
      "Working on Dynamics 365 CRM Plugin",
      "Creating Virtual Agents, Power BI, etc.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Leapfrog Technology Inc.",
    icon: leapfrog,
    iconBg: "#FCFBF4",
    date: "November 2021 - December 2022",
    sequence: 2,
    points: [
      "Working as a Microsoft Power Platfrom Developer",
      "Creating Canvas Apps, Model Driven Apps, Automating with Power Automate",
      "Creating Dashboards with Power BI",
      "Enhancing the Database Logic with Dynamics 365 CRM Plugin",
      "Working with Web resources",
      "Working on HL7 messages for IIS",
      "Working on Medical Billing solutions for Insurance Claims with X12 Data",
      "Working on Web Apps with .net solutions and Azure functions",
      "Working on HIPAA Compliance solutions",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Leapfrog Technology Inc.",
    icon: leapfrog,
    iconBg: "#FCFBF4",
    date: "December 2022 - Present",
    sequence: 3,
    points: [
      "Analyzed, designed, and built solutions using Microsoft Power Platform components such as Power Apps, Power Automate, Power BI, and Virtual Agent.",
      "Built solutions using Model Driven Apps and Canvas Apps and deployed them to different environments.",
      "Troubleshoot deployment issues and applied best practices for performance of the application.",
      "Gained understanding of MS Dataverse and its usage and worked on different EDI solutions such as HL7 and X12 data (X12 277 and X12 835 claim files).",
      "Developed and deployed plugins, Custom Pages, and web resources using .NET and JS.",
      "Developed different rule engines in Dynamics 365 Plugin with YAML configurations to add functionality and increase performance.",
      "Worked on different ASP.NET core Web API and Node.js express API to extend the functionality of PowerApps.",
      "Worked on the Design of System with Publisher Subscriber architecture.",
      "Developed software solutions with strong SOLID principles and different design patterns to enhance the software functionality and codebase.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Signetic",
    description: "Transforming the Pharmacies and Medical Billing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: signetic,
    gitHub: false,
    source_code_link: "https://www.signetic.com/",
  },
  {
    name: "My Django Blog",
    description: "Django Full Stack Website for Blog.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: MyDjangoBlog,
    gitHub: true,
    source_code_link: "https://github.com/sthaRoshan/My-Django-Blog",
  },
];

const socials = [
  {
    platform: "LinkedIn",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/LinkedIn_2021.svg/200px-LinkedIn_2021.svg.png",
    link: "https://www.linkedin.com/in/roshan-shrestha-0bb791188/"
  },
  {
    platform: "Instagram",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/150px-Instagram_logo_2022.svg.png",
    link: "https://www.instagram.com/roshanstha11/"
  }
]

export { services, technologies, experiences, testimonials, projects, degrees, socials };
