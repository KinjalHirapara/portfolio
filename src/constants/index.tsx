import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  RectangleStackIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaServer,
} from "react-icons/fa";
import { RiClaudeFill } from "react-icons/ri";

import {
  SiTypescript,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiPostgresql,
  SiCanva,
  SiFigma,
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
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-700 w-8 h-8" />,
    class: "bg-gradient-to-tr from-blue-300 via-blue-400 to-blue-700",
  },
  {
    name: "RESTful API",
    icon: <FaServer className="text-emerald-600 w-8 h-8" />,
    class: "bg-gradient-to-tr from-emerald-300 via-emerald-400 to-emerald-700",
  },
  {
    name: "Canva",
    icon: <SiCanva className="text-cyan-500 w-8 h-8" />,
    class: "bg-gradient-to-tr from-cyan-300 via-cyan-400 to-cyan-700",
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-fuchsia-500 w-8 h-8" />,
    class: "bg-gradient-to-tr from-fuchsia-300 via-fuchsia-400 to-fuchsia-700",
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
    summary:
      "Support and extend Youthline's WordPress platform with new pages, feature updates, and UX-focused improvements.",
    learningNote:
      "Strengthened collaboration in Scrum workflows while balancing delivery speed with maintainable implementation.",
    responsibilities: [
      "Contributed to the development and maintenance of the Youthline WordPress platform, building new service pages and implementing feature enhancements.",
      "Customized WordPress themes and plugins to improve UX and meet project requirements.",
      "Managed content updates and ensured responsive, accessible design across devices.",
      "Collaborated in a Scrum-based Agile workflow for task tracking and timely delivery.",
    ],
  },
  {
    title: "Software Developer",
    company: "Predictable Data",
    city: "USA (Remote)",
    duration: "June 2025 - Present",
    summary:
      "Build scalable frontend systems with React and modern UI libraries, focusing on reliability and product quality.",
    learningNote:
      "Improved end-to-end ownership by combining testing discipline, performance tuning, and workflow automation.",
    responsibilities: [
      "Developed scalable, reusable React components with responsive and cross-browser compatibility.",
      "Built rich data-driven UIs using Syncfusion Data Grid, Fluent UI, and TypeScript.",
      "Implemented RESTful API integrations for seamless backend communication.",
      "Applied TDD practices using Jest for unit and integration testing.",
      "Followed Agile Scrum methodology, Git workflows, and code reviews.",
      "Optimized performance and resolved functional issues to improve application stability.",
      "Built AI-powered workflow automations using Claude Code, creating custom sub-agents to streamline development, testing, and documentation.",
    ],
  },
  {
    title: "Software Developer",
    company: "Amnex Technologies",
    city: "Ahmedabad, India",
    duration: "March 2021 - Oct 2024",
    summary:
      "Delivered complex Angular dashboard applications with real-time data, reusable components, and strong API integration.",
    learningNote:
      "Gained deep experience in translating business-heavy requirements into scalable, maintainable frontend architecture.",
    responsibilities: [
      "Developed interactive, responsive dashboard applications using Angular, HTML, SCSS, Kendo UI, and ECharts.",
      "Built reusable Angular components with lazy loading, reactive forms, and state management for scalable architecture.",
      "Integrated RESTful APIs for real-time data visualization and seamless backend communication.",
      "Translated design prototypes into high-performance, cross-device compatible web applications.",
      "Collaborated with designers and backend teams in an Agile Scrum environment.",
      "Managed version control using Git, handling branching strategies and pull requests.",
    ],
  },
  {
    title: "Front End Developer",
    company: "Timeloop Technologies",
    city: "Anand, India",
    duration: "June 2018 - Feb 2021",
    summary:
      "Progressed from junior to frontend developer while building responsive web products across multiple client domains.",
    learningNote:
      "Built a strong foundation in core frontend principles, performance optimization, and collaborative delivery.",
    responsibilities: [
      "Progressed from Junior to Frontend Developer through strong performance and technical growth.",
      "Built responsive, cross-browser applications using HTML, CSS, JavaScript, and Angular.",
      "Developed reusable, modular components improving scalability and maintainability.",
      "Delivered product features for enterprise tools including management systems and dashboards.",
      "Collaborated in Agile Scrum teams, using Git, Trello, and structured sprint workflows.",
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
