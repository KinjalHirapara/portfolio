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
    id: "experience",
    title: "Experience",
    icon: BriefcaseIcon,
  },
  {
    id: "works",
    title: "Works",
    icon: RectangleStackIcon,
  },
  {
    id: "about",
    title: "About",
    icon: UserIcon,
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
    title: " Web Developer (Volunteer)",
    company: "Youthline, Christchurch, NZ",
    duration: "November 2025 - Present",
    responsibilities: [
      "Managing and updating  the Youthline WordPress website, adding new pages and features.",
      "Customized themes and plugins to enhance user experience and meet specific site requirements.",
      "Collaborated with the team using Scrum, ensuring  timely updates, task tracking, and smooth project workflow.",
    ],
  },
  {
    title: "Software Developer",
    company: " Predictable Data, USA",
    duration: "June 2025 - Present",
    responsibilities: [
      "Built a scalable front-end architecture using React functional components, improving responsiveness and overall performance by 40%.",
      "Developed reusable React components with Jest testing structure to ensure maintainability, reliability, and consistent quality across the platform.",
      "Integrated Syncfusion Data Grid and Fluent UI for dynamic data visualization and a modern, consistent user experience.",
      "Designed and implemented RESTful API interactions to enable efficient, optimized data-fetching and smooth backend integration.",
      "Created and maintained detailed documentation, tracked and resolved bugs, and delivered timely fixes to improve stability and performance.",
      "Worked on AI workflow automation using Claude Code, setting up sub-agents and slash commands to coordinate tasks such as code review, testing, and task implementation, streamlining multi-stage development workflows.",
    ],
  },
  {
    title: "Software Developer",
    company: "Amnex Technologies",
    city: "Ahmedabad, Gujarat, India",
    duration: "March 2021 - Oct 2024",
    responsibilities: [
      "Developed interactive and responsive dashboard applications using Angular, HTML, SCSS, and visualization libraries like ECharts and Kendo UI.",
      "Transformed prototype designs into dynamic, user-friendly web applications, ensuring seamless performance across devices.",
      "Integrated RESTful APIs to enable real-time data interaction and ensure smooth communication between frontend and backend systems.",
      "Built reusable Angular components and implemented lazy loading, reactive forms, and state management to enhance performance, streamline workflows, and ensure consistent, maintainable code.",
      "Collaborated closely with designers and backend teams to translate business requirements into functional UI features.",
      "Utilized Git for version control, managing code branches, pull requests, and ensuring clean, collaborative development workflows.",
    ],
  },
  {
    title: "Front End Developer",
    company: "Timeloop Technologies",
    city: "Anand, Gujarat, India",
    duration: "June 2018 - Feb 2021",
    responsibilities: [
      "Started my career as a Junior Front-End Developer, building interactive and responsive web applications using JavaScript.",
      "Focused on writing clean, maintainable code while improving API integration and data handling for smoother user interactions.",
      "Gained experience in DOM manipulation, event handling, and front-end performance optimization to enhance page speed and responsiveness.",
      "Worked closely with senior developers and UX teams to translate wireframes into pixel-perfect, cross-browser-compatible applications.",
      "Contributed to debugging and improving front-end workflows to ensure consistent performance across different environments.",

      "Advanced into a Front-End Developer role, gaining hands-on experience in building dynamic and responsive web applications using Angular.",
      "Developed reusable Angular components, optimized data binding, and improved state management for better application performance.",
      "Worked on multiple projects, including a Property Management Tool, Project Management System, Leave Management System, theme-based web applications, and various dashboard applications, focusing on responsive design and functionality.",
      "Learned and applied Git version control, contributing to branch management, code synchronization, and collaborative development workflows.",
      "Used Trello and TMetric for task updates, tagging, time tracking, and Agile sprint progress monitoring, improving team communication and workflow efficiency.",
    ],
  },
];

type Project = {
  title: string;
  overline: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  external?: string;
};

export const projects: Project[] = [
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
  {
    title: "NMDC",
    overline: "Amnex Technologies",
    description:
      "Worked as a UI Developer on the NMDC project, building a web-based monitoring dashboard for real-time tracking of mining operations. Used Angular, Kendo UI, and ECharts to create responsive, data-driven interfaces, and integrated RESTful APIs to deliver live performance insights for both on-site and admin users.",
    tech: ["Angular", "Bootstrap", "API Integration", "Kendo UI", "ECharts"],
    image: NMDCImg,
  },
  {
    title: "Circle Vision",
    overline: "Timeloop Technologies",
    description:
      "This platform allows real estate brokers to list properties for sale or rent through auto-generated websites using their uploaded content like text, images, videos, and 3D tours. I worked as a Front-End Developer, where I designed and developed new features and integrated APIs to enhance the overall functionality and user experience.",
    tech: ["Angular", "Bootstrap", "API Integration", "jQuery", "HTML", "CSS"],
    image: circleVisionImg,
  },
  {
    title: "CF Sales Portal",
    overline: "Timeloop Technologies",
    description:
      "CF Sales Portal is a web-based tool specially developed for the sales team of our client to manage their processes in a simplified manner. This portal is a central point of all the sales information, forecasting and management applications.",
    tech: ["HTML", "CSS", "jQuery", "Bootstrap", "API Integration"],
    image: cfsalesImg,
  },
  {
    title: "Tekwoods",
    overline: "Timeloop Technologies",
    description:
      "We built a web-based tool for a client in the Netherlands to help manage their employees, projects, and invoices more easily. My role was to design and develop responsive front-end pages and integrate RESTful APIs to ensure smooth data flow and functionality.",
    tech: ["HTML", "CSS", "jQuery", "Bootstrap", "API Integration"],
    image: tekwoodImg,
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
