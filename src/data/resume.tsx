import { Icons } from "@/components/icons";
import { Code, HomeIcon, NotebookPenIcon } from "lucide-react";

export const DATA = {
  name: "Ihsaan Hardyanto",
  initials: "IH",
  url: "https://ihsaan-hardyanto.vercel.app/",
  location: "Bandung, ID",
  locationLink: "https://www.google.com/maps/place/bandung",
  description: "I enjoy creating solutions that make a difference.",
  summary:
    "I am an undergraduate student [currently pursuing a degree in computer science](/#education) with a strong passion for Software Engineering. I’ve been hands-on with [various projects](/#projects), utilizing technologies like JavaScript, [React](https://react.dev/), [Next.js](https://nextjs.org/) to building dynamic web applications. Additionally I employ [TypeScript](https://www.typescriptlang.org/) tp ensure robust, type-safe code, and I work with [Postgres](https://www.postgresql.org/) for database management.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "C",
    "HTML",
    "CSS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/notes", icon: NotebookPenIcon, label: "Notes" },
    { href: "/projects", icon: Code, label: "Projects" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/ihsaan-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/ihsaan-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/ihsaan-twitter",
        icon: Icons.x,

        navbar: true,
      },

      Instagram: {
        name: "Instagram",
        url: "https://dub.sh/ihsaan-ig",
        icon: Icons.instagram,
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
      company: "Bina Nusantara Computer Club",
      href: "https://bnccbandung.vercel.app/",
      badges: [],
      location: "Bandung, Indonesia",
      title: "R&D Staff",
      logoUrl: "/bncc.png",
      start: "Dec 2023",
      end: "Dec 2024",
      description:
        "Implemented Agile Scrum as the primary framework for managing BNCC's largest project, Technoscape, a web-based platform. Served as Scrum Master on multiple occasions, guiding cross-functional teams in developing projects using Next.js and TypeScript. Collaborated closely with the Public Relations team to ensure seamless UI/UX integration. Led the team in leveraging various open-source libraries, fostering efficient development practices and smooth project delivery.",
    },
  ],
  education: [
    {
      school: "BINUS University",
      href: "https://binus.ac.id/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/binus.png",
      start: "2022",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Technoscape",
      href: "https://technoscape.id/",
      dates: "March 2023 - May 2023",
      active: true,
      description:
        "Developed code for the admin dashboard, focusing on building efficient and scalable components for backend management.",
      technologies: ["HTML", "CSS", "JS", "Git", "Github", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://technoscape.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/intro.mp4",
    },
  ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  // ],
} as const;
