import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Lorraine Makuyana",
  initials: "DV",
  url: "https://lorrainemakuyana.github.io/",
  location: "Scotland, United Kingdom",
  locationLink: "https://www.google.com/maps/place/scotland",
  description:
    "Dynamic software engineer with over 2 years experience delivering value with every impactful product engineered!",
  summary:
    "To me, technology represents the realization of our dreams. It has the flexibility to feed my curiosity and be a creator and builder in any sector. I stay alert by constantly being engaged in learning and keeping up with new techniques to improve both my problem-solving and technical skills.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Redux",
    "Next.js",
    "Typescript",
    "Node.js",
    "Java",
    "Firebase",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/lorrainemakuyana",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lorraine-makuyana/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/lolomakuyana",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Sailboat Labs",
      href: "https://sailboatlabs.com/",
      badges: [],
      location: "Remote",
      title: "Software Developer/Engineer",
      logoUrl: "/sailboat.png",
      start: "Jun 2022",
      end: "Aug 2024",
      description:
        "Designed and implemented a robust web application utilizing Next.js, TypeScript, and Firebase, generating over $10k in revenue for sports teams to acquire new equipment, purchase new uniforms, and court renovations. Spearheaded end-to-end development of mobile applications leveraging React Native and Firebase with minimal supervision resulting in widespread customer adoption and satisfaction which significantly boosted revenue. Implemented end-to-end automated tests for web applications using Cypress, identifying and resolving bugs before deployment. Increased web and mobile application performance using Redux, improving data flow and state consistency. Effectively integrated into dynamic cross-functional teams with diverse expertise ensuring optimal project delivery",
    },
    {
      company: "Bruteforce Engineering Zimbabwe",
      badges: [],
      href: "https://netrozim.co.zw/",
      location: "Harare",
      title: "Software Research and Development Intern",
      logoUrl: "/bruteforce.png",
      start: "Jun 2021",
      end: "Aug 2021",
      description:
        "Led the development of an IoT smart office system enhancing security and safety while streamlining admintrative tasks. Designed and implemented robust APIs using Node.js and SQL to support seamless functionality and coordination between system architecture.",
    },
    {
      company: "CYST Company Ltd",
      href: "https://teamcyst.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineering Intern",
      logoUrl: "/cyst.png",
      start: "May 2021",
      end: "Jul 2021",
      description:
        "Developed JavaScript and React features leveraging the firm’s API which are now used to improve payment efficiency",
    },
  ],
  education: [
    {
      school: "University of St Andrews",
      href: "https://www.st-andrews.ac.uk/",
      degree: "MSc. Computer Science ",
      logoUrl: "/standrews.png",
      start: "2024",
      end: "2025",
    },
    {
      school: "Ashesi University",
      href: "https://ashesi.edu.gh/",
      degree: "BSc. Computer Engineering",
      logoUrl: "/ashesi.png",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "YourLife Platform",
      href: "https://yourlife.io/",
      dates: "2023 - 2024",
      active: true,
      description:
        "A fundraising platform for sports teams allowing secure donations through using a Stripe payment gateway. It allows all CRUD operations for teams, players, and coaches, and includes a dashboard for fundraiser analytics.",
      technologies: [
        "Next.js",
        "Typescript",
        "Firebase",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Redux"
      ],
      links: [
        {
          type: "Website",
          href: "https://yourlife.io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/yourlife.png",
      video:
        "",
    },
    {
      title: "Learn With Mochi App",
      href: "https://learnwithmochi.com/app",
      dates: "2022 - 2024",
      active: true,
      description:
        "An engaging mobile application available on both android and iOS with animated lessons for kids to learn robotics and other topics through a gamified experience. It includes parental control functionality to unlock some features.",
      technologies: [
        "React Native",
        "Typescript",
        "Firebase",
        "TailwindCSS",
        // "ML",
        "Redux",
        "iOS",
        "Android"
      ],
      links: [
        {
          type: "Website",
          href: "https://learnwithmochi.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mochi.png",
      video: "",
    },
    {
      title: "Expressionz",
      href: "https://expressionz.xyz/",
      dates: "2023 - 2024",
      active: true,
      description:
        "An end-to-end platform for artists to create custom emojis and gifs out of NFT tokens.",
      technologies: [
        "Next.js",
        "Typescript",
        "Express",
        "TailwindCSS",
        "Firebase",
        "Web3",
        "GSAP"
      ],
      links: [
        {
          type: "Website",
          href: "https://expressionz.xyz/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/dillionverma/llm.report",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/expressionz.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
