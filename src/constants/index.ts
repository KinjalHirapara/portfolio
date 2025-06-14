import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  CpuChipIcon,
  RectangleStackIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

// import backend from "./backend.png";
// import creator from "./creator.png";
// import mobile from "./mobile.png";
// import web from "./web.png";

// import css from "./tech/css.png";
// import docker from "./tech/docker.png";
// import figma from "./tech/figma.png";
// import git from "./tech/git.png";
// import html from "./tech/html.png";
// import javascript from "./tech/javascript.png";
// import mongodb from "./tech/mongodb.png";
// import nodejs from "./tech/nodejs.png";
// import reactjs from "./tech/reactjs.png";
// import redux from "./tech/redux.png";
// import tailwind from "./tech/tailwind.png";
// import typescript from "./tech/typescript.png";
// import threejs from "./tech/threejs.svg";

// import meta from "./company/meta.png";
// import shopify from "./company/shopify.png";
// import starbucks from "./company/starbucks.png";
// import tesla from "./company/tesla.png";

// import carrent from "./carrent.png";
// import jobit from "./jobit.png";
// import tripguide from "./tripguide.png";

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
  // {
  //   id: "tech",
  //   title: "Tech",
  //   icon: CpuChipIcon,
  // },
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

// const services = [
//   {
//     title: "Web Developer",
//     icon: web,
//   },
//   {
//     title: "React Native Developer",
//     icon: mobile,
//   },
//   {
//     title: "Backend Developer",
//     icon: backend,
//   },
//   {
//     title: "Content Creator",
//     icon: creator,
//   },
// ];

// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
//   {
//     name: "docker",
//     icon: docker,
//   },
// ];

const experiences = [
  {
    title: "Software Engineer",
    company: "Tech Solutions Inc.",
    duration: "June 2021 - Present",
    responsibilities: [
      "Developed and maintained web applications using React and Node.js.",
      "Collaborated with cross-functional teams to define, design, and ship new features.",
      "Participated in code reviews and contributed to team knowledge sharing.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Creative Agency",
    duration: "January 2020 - May 2021",
    responsibilities: [
      "Designed and implemented user interfaces for client projects.",
      "Worked closely with designers to create responsive and accessible web applications.",
      "Optimized applications for maximum speed and scalability.",
    ],
  },
  {
    title: "Intern Developer",
    company: "Startup Hub",
    duration: "June 2019 - December 2019",
    responsibilities: [
      "Assisted in the development of a mobile application using React Native.",
      "Conducted testing and debugging of applications.",
      "Gained experience in Agile methodologies and version control systems.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];
export { experiences };
// export { services, technologies, experiences, testimonials, projects };
