import {
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  sexshop,
  RickandMorty,
  storage,
  threejs,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "",
    iconBg: "#383E56",
    date: "August 2022 - at the moment",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "To collaborate in a work team to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
];

const projects = [
  {
    name: "Sex shop",
    description:
      "Web application, users can view and interact with various products that can meet their needs and/or search for what they require, as well as add products to the cart.",
    tags: [
      {
        name: "Next",
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
    image: sexshop,
    source_code_link: "https://github.com/bufssexshop/bufs-next-app",
  },
  {
    name: "Rick and Morty",
    description:
      "Web application that enables users to allows the user to search for characters, explore different dimensions, and learn about the characters that have appeared in the show.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "reduxtoolkit",
        color: "green-text-gradient",
      },
      {
        name: "material UI",
        color: "pink-text-gradient",
      },
    ],
    image: RickandMorty,
    source_code_link: "https://github.com/jonathanParamo/RickAndMorty",
  },
  {
    name: "Storage administration",
    description:
      "This web application allows the user to register or log in, as well as edit their profile. Additionally, it enables the creation, editing, and deletion of products and warehouses",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: storage,
    source_code_link: "https://github.com/jonathanParamo/storageAdministration",
  },
];

export { services, technologies, experiences, testimonials, projects };
