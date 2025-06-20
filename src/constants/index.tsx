import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  RectangleStackIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import { FaHtml5, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import {
  SiTypescript,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
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
    id: "works",
    title: "Works",
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
    name: "Git",
    icon: <SiGit className="text-orange-500 w-8 h-8" />,
    class: "bg-gradient-to-tr from-orange-300 via-orange-400 to-orange-700",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-600 w-8 h-8" />,
    class: "bg-gradient-to-tr from-green-300 via-green-400 to-green-700",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    company: "Professional Development",
    city: "Christchurch, New Zealand",
    duration: "Dec 2024 - Present",
    responsibilities: [
      "Actively enhancing my skills through hands-on learning, I created a portfolio website using React and Tailwind CSS. I'm expanding my understanding of React and building a self-learning full-stack project with Node.js to gain hands-on experience with modern web development practices.",
    ],
  },
  {
    title: "Software Developer(UI)",
    company: "Amnex Technologies",
    city: "Ahmedabad, Gujarat, India",
    duration: "March 2021 - Oct 2024",
    responsibilities: [
      "In this role, I was responsible for developing interactive and responsive web applications using Angular, HTML, SCSS, and visualization libraries like ECharts and Kendo UI. I transformed prototype designs into dynamic, user-friendly web applications, ensuring seamless performance across devices. I integrated RESTful APIs to enable real-time data interaction and ensure smooth communication between the frontend and backend systems. By developing reusable Angular components, I improved code efficiency and consistency across the application. I collaborated closely with designers and backend teams to translate business requirements into functional UI features.",
    ],
  },
  {
    title: "Front End Developer",
    company: "Timeloop Technologies",
    city: "Anand, Gujarat, India",
    duration: "June 2018 – Feb 2021",
    responsibilities: [
      "Started my career as a Junior Front-End Developer, building interactive and responsive web applications using JavaScript. Focused on writing clean, maintainable code while improving API integration and data handling for smoother user interactions. Gained experience in DOM manipulation, event handling, and optimizing front-end performance to enhance page speed and responsiveness. Worked closely with senior developers and UX teams, translating wireframes into pixel-perfect, cross-browser-compatible applications while debugging and improving front-end workflows.",
      " As I progressed in my role as a Front-End Developer, I gained hands-on experience in building dynamic and responsive web applications using Angular. I focused on developing reusable Angular components, optimizing data binding, and improving state management for better application performance. I worked on CMS application, Project Management System, Leave Management System, theme-based applications, and verious dashboard applications focusing on responsive design and functionality. I learned and applied Git version control, contributing to branch management and code synchronization within a collaborative development environment. I utilized Trello and TMetric for task updates, tagging, time tracking, and Agile sprint progress monitoring, improving team communication and workflow efficiency.",
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
    tech: [
      "VS Code",
      "Angular",
      "Bootstrap",
      "API Integration",
      "Kendo UI",
      "ECharts",
    ],
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
