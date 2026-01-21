import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  RectangleStackIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import { FaHtml5, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { RiClaudeFill } from "react-icons/ri";

import {
  SiTypescript,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
} from "react-icons/si";

import NMDCImg from "../assets/NMDC/1.png";
import circleVisionImg from "../assets/Timeloop/175_01.png";
import portfolioImg from "../assets/Personal/portfolio.png";
import cfsalesImg from "../assets/CF_Sales/184_Appointment.png";
import tekwoodImg from "../assets/Tekwoods/180_3.png";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
export const navLinks = [
  {
    id: "home",
    title: "Home",
    icon: HomeIcon,
  },
  {
    id: "about",
    title: "About",
    icon: UserIcon,
  },
  {
    id: "experience",
    title: "Experience",
    icon: BriefcaseIcon,
  },
  {
    id: "projects",
    title: "Projects",
    icon: RectangleStackIcon,
  },
  {
    id: "contact",
    title: "Contact",
    icon: EnvelopeIcon,
  },
];

export const skills = [
  {
    name: "Angular",
    icon: <SiAngular className="text-red-500 w-8 h-8" />,
    class: "bg-gradient-to-tr from-red-300 via-red-400 to-red-700",
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-400 w-8 h-8" />,
    class: "bg-gradient-to-tr from-cyan-300 via-cyan-400 to-cyan-700",
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500 w-8 h-8" />,
    class: "bg-gradient-to-tr from-orange-300 via-orange-400 to-orange-700",
  },
  {
    name: "SCSS",
    icon: <SiSass className="text-pink-500 w-8 h-8" />,
    class: "bg-gradient-to-tr from-pink-300 via-pink-400 to-pink-700",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400 w-8 h-8" />,
    class: "bg-gradient-to-tr from-yellow-300 via-yellow-400 to-yellow-700",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600 w-8 h-8" />,
    class: "bg-gradient-to-tr from-blue-300 via-blue-400 to-blue-700",
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="text-purple-600 w-8 h-8" />,
    class: "bg-gradient-to-tr from-purple-300 via-purple-400 to-purple-700",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400 w-8 h-8" />,
    class: "bg-gradient-to-tr from-sky-300 via-sky-400 to-sky-700",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="w-8 h-8 text-[#181717]" />,
    class: "bg-gradient-to-tr from-[#525252] via-[#181717] to-[#0d0d0d]",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-600 w-8 h-8" />,
    class: "bg-gradient-to-tr from-green-300 via-green-400 to-green-700",
  },
  {
    name: "Claude Code",
    icon: <RiClaudeFill className="w-8 h-8 text-[#c6613f]" />,
    class: "bg-gradient-to-tr from-[#e58b6a] via-[#c6613f] to-[#8f442c]",
  },
];

export const experiences = [
  {
    title: "Volunteer Web Developer",
    company: "Youthline",
    city: "Christchurch, New Zealand",
    duration: "November 2025 - Present",
    responsibilities: [
      "Contribute to the ongoing development and maintenance of the Youthline WordPress platform by building new service pages, updating content, and implementing new features. Customize themes and plugins to improve user experience and meet project requirements. Work closely with the team in a Scrum-based workflow to ensure timely delivery, effective task tracking, and smooth project execution.",
    ],
  },
  {
    title: "Software Developer",
    company: "Predictable Data",
    city: "USA",
    duration: "June 2025 - Present",
    responsibilities: [
      "Developed scalable, reusable frontend components using React, ensuring responsive design and cross-device compatibility.",
      "Integrated Syncfusion Data Grid and Fluent UI component libraries to build interactive, user-friendly interfaces and rich data-driven features.",
      "Built and maintained unit and integration test suites with Jest to improve reliability, catch regressions early, and ensure consistent behavior across components.",
      "Implemented and optimized RESTful API interactions to support efficient data retrieval and seamless backend integration.",
      "Tracked, documented, and resolved functional and performance issues, improving overall application stability and quality.",
      "Built AI-powered workflow automations using Claude Code, creating custom sub-agents and commands to streamline end-to-end development workflows including coding, review, testing, and documentation.",
    ],
  },
  {
    title: "Software Developer",
    company: "Amnex Technologies",
    city: "Ahmedabad, Gujarat, India",
    duration: "March 2021 - Oct 2024",
    responsibilities: [
      "Developed interactive, responsive dashboard applications using Angular, HTML, SCSS, and visualization libraries such as ECharts and Kendo UI.",
      "Translated design prototypes and requirements into dynamic, user-friendly web applications with consistent performance across devices.",
      "Built reusable Angular components and implemented lazy loading, reactive forms, and state management to improve performance, streamline workflows, and ensure clean, maintainable code.",
      "Integrated RESTful APIs to enable real-time data interaction and seamless communication between frontend and backend systems.",
      "Worked closely with designers and backend engineers to convert business requirements into functional, high-quality UI features.",
      "Used Git for version control, managing branches and pull requests, and maintaining clean, collaborative development workflows.",
    ],
  },
  {
    title: "Front End Developer",
    company: "Timeloop Technologies",
    city: "Anand, Gujarat, India",
    duration: "June 2018 - Feb 2021",
    responsibilities: [
      "Started as a Junior Frontend Developer, building interactive and responsive web applications using HTML, CSS and JavaScript, focusing on clean, maintainable code and smooth API-based data handling.",
      "Gained strong experience in DOM manipulation, event handling, and frontend performance optimization to improve page speed and responsiveness.",
      "Worked closely with senior developers and UX designers to translate wireframes into pixel-perfect, cross-browser-compatible user interfaces.",
      "Progressed into a Frontend Developer role, working extensively with Angular to build dynamic, responsive, and scalable web applications.",
      "Developed reusable Angular components, improved data binding, and strengthened state management to enhance application performance and maintainability.",

      "Contributed to multiple products including a Property Management Tool, Project Management System, Leave Management System, theme-based applications, and data dashboards, with a strong focus on responsive design and usability.",
      "Adopted Git-based workflows, contributing to branch management, code reviews, and collaborative development processes.",
      "Used tools like Trello and TMetric for task tracking, time management, and sprint progress monitoring in an Agile workflow.",
    ],
  },
];

type Project = {
  title: string;
  overline: string;
  description: string;
  tech: string[];
  image: string;
  gallery?: string[];
  github?: string;
  external?: string;
};

export const projects: Project[] = [
  {
    title: "NMDC",
    overline: "Amnex Technologies",
    description:
      "Worked as a Software Developer on the National Mineral Development Corporation (NMDC) project, building a web-based monitoring dashboard for real-time tracking of mining operations. Used Angular, Kendo UI, and ECharts to create responsive, data-driven interfaces, and integrated RESTful APIs to deliver live performance insights for both on-site and admin users.",
    tech: ["Angular", "Bootstrap", "API Integration", "Kendo UI", "ECharts"],
    image: NMDCImg,
    gallery: Array.from(
      { length: 32 },
      (_, index) => `/assets/NMDC/${index + 1}.png`,
    ),
  },
  {
    title: "Circle Vision",
    overline: "Timeloop Technologies",
    description:
      "This is a CMS-based property management and website generation platform built for real estate brokers. The tool allows users to manage property listings and content and generate public-facing websites by selecting a theme. Once a theme is selected, the system automatically displays uploaded content such as images, videos, and text inside the chosen layout, making it easy to publish professional property websites without manual design work. I worked as a Frontend Developer on this platform, where I built and enhanced core features using Angular and designed multiple responsive UI themes. I implemented dynamic content rendering so platform data could be mapped seamlessly to different themes, improving flexibility, usability, and overall user experience.",
    tech: ["Angular", "Bootstrap", "API Integration", "jQuery", "HTML", "CSS"],
    image: circleVisionImg,
    gallery: [
      "/assets/circlevision/175_01.png",
      "/assets/circlevision/176_02.png",
      "/assets/circlevision/177_03.png",
      "/assets/circlevision/178_04.png",
      "/assets/circlevision/theme1.png",
      "/assets/circlevision/theme2.png",
    ],
  },
  {
    title: "CF Sales Portal",
    overline: "Timeloop Technologies",
    description:
      "CF Sales Portal is a web-based tool specially developed for the sales team of our client to manage their processes in a simplified manner. This portal is a central point of all the sales information, forecasting and management applications. Worked as a Frontend Developer, Developed responsive, user-friendly interfaces and integrated backend services to deliver a smooth and efficient user experience across the portal.",
    tech: ["HTML", "CSS", "jQuery", "Bootstrap", "API Integration"],
    image: cfsalesImg,
    gallery: [
      "/assets/cfsales/184_Appointment.png",
      "/assets/cfsales/185_Audit.png",
      "/assets/cfsales/186_Customers_Data.png",
      "/assets/cfsales/190_Dashboard.png",
      "/assets/cfsales/191_Question_Sets.png",
    ],
  },
  {
    title: "Tekwoods",
    overline: "Timeloop Technologies",
    description:
      "Worked as a Frontend Developer on a web-based management system for a client in the Netherlands, designed to manage employees, projects, and invoices. Built responsive, user-friendly interfaces and integrated RESTful APIs to ensure smooth data flow and reliable application functionality.",
    tech: ["HTML", "CSS", "jQuery", "Bootstrap", "API Integration"],
    image: tekwoodImg,
    gallery: [
      "/assets/techwood/17.png",
      "/assets/techwood/180_3.png",
      "/assets/techwood/181_1.png",
      "/assets/techwood/182_4.png",
      "/assets/techwood/183_5.png",
    ],
  },
  {
    title: "Portfolio Website",
    overline: "Personal Project",
    description:
      "Designed and developed a personal portfolio website using TypeScript and Tailwind CSS, focusing on clean layout, responsive design, and smooth user experience to showcase projects and skills effectively.",
    tech: ["TypeScript", "Tailwind CSS"],
    image: portfolioImg,
    github: "https://github.com/KinjalHirapara/monika-portfolio/",
    external: "https://monika-patel-portfolio.netlify.app/",
  },
];
export const contactdetails = [
  {
    icon: <FaEnvelope className="text-primary" />,
    text: "kinjalhirapara25@gmail.com",
  },
  {
    icon: <FaPhone className="text-primary" />,
    text: "+64 224154944",
  },
  {
    icon: <FaMapMarkerAlt className="text-primary" />,
    text: "Christchurch, Canterbury, New Zealand",
  },
];
