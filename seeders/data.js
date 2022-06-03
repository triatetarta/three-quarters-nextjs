import { v4 as uuidv4 } from "uuid";

export const menuData = [
  {
    id: uuidv4(),
    title: "Projects",
    icon: "/assets/code.svg",
    link: "/projects",
  },
  {
    id: uuidv4(),
    title: "Skills",
    icon: "/assets/skills.svg",
    link: "/skills",
  },
  {
    id: uuidv4(),
    title: "Contact",
    icon: "/assets/mail.svg",
    link: "/contact",
  },
  {
    id: uuidv4(),
    title: "Resume",
    icon: "/assets/resume.svg",
    link: "/resume",
  },
];
