import { Icons } from "@/components/icons";
import { Code, HomeIcon, NotebookPenIcon } from "lucide-react";

export const DATA = {
  name: "Ihsaan Hardyanto",
  initials: "IH",
  url: "https://www.ihsaan.my.id/",
  location: "Bandung, ID",
  locationLink: "https://www.google.com/maps/place/bandung",
  description:
    "I love making solutions that make a difference. I regularly work out to keep my energy levels high.",
  summary:
    "I am an undergraduate student [currently pursuing a degree in computer science](/#education) with a strong passion for Software Engineering. I’ve been hands-on with [various projects](/#projects), utilizing technologies like JavaScript, [React](https://react.dev/), [Next.js](https://nextjs.org/) to building dynamic web applications. Additionally I employ [TypeScript](https://www.typescriptlang.org/) to ensure robust, type-safe code, and I work with [PostgreSQL](https://www.postgresql.org/) for database management. I also use [Prisma](https://www.prisma.io/) as an ORM to simplify and streamline database interactions.",
  avatarUrl:
    "https://utfs.io/f/qggsNLzkMu05zRCRnLaJsQryZ1WaNt0cfkj4GCvS3MBRIoEp",
  techs: [
    "Typescript",
    "Javascript",
    "HTML5",
    "CSS3",
    "Php",
    "C",
    "C++",
    "C#",
    "Python",
    "Java",
    "MDX",
  ],
  frameworks: [
    "Next",
    "React",
    "Laravel",
    "TailwindCSS",
    "Bootstrap",
    "Shadcn/UI",
    "Vite",
    "Node.js",
    "Express.js",
    ".NET",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/notes", icon: NotebookPenIcon, label: "Notes" },
    { href: "/projects", icon: Code, label: "Projects" },
  ],
  contact: {
    email: "ihsaan.hardyanto@gmail.com",
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
      company: "Olx Indonesia",
      href: "https://www.olx.co.id/,",
      badges: [],
      location: "Jakarta, Indonesia",
      title: "Frontend Developer Intern",
      logoUrl: "/admo.png",
      start: "Feb 2025",
      end: "Aug 2025",
      description:
        "Explore and learn to integrate dealer and olx web api on frontend using react",
    },
  ],

  org: [
    {
      company: "GDGoC Binus Bandung",
      href: "https://bnccbandung.vercel.app/",
      badges: [],
      location: "Bandung, Indonesia",
      title: "Core team - Frontend Division",
      logoUrl: "/gdg.jpeg",
      start: "Oct 2024",
      end: "Present",
      description: "Explore and teach Frontend using Google technologies.",
    },
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
    {
      company: "Bina Nusantara Computer Club",
      href: "https://bnccbandung.vercel.app/",
      badges: [],
      location: "Bandung, Indonesia",
      title: "R&D Activist",
      logoUrl: "/bncc.png",
      start: "Jan 2023",
      end: "Dec 2023",
      description:
        "During my regeneration period at RnD BNCC Bandung, I immersed myself in learning various tech stacks and workflows implemented within the RnD division. Through collaborative teamwork, I contributed to completing assigned projects, which enabled me to develop both technical expertise and essential team collaboration skills.",
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
      title: "Sangfor",
      href: "",
      dates: "January 2025",
      active: true,
      description:
        "Developed responsive landing page with integrated form validation system connected to Aiven cloud database infrastructure and deployed on DigitalOcean VPS.",
      technologies: ["TypeScript", "MySQL", "Laravel", "PHP"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ihsaanhardyanto/sangfor",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "http://noww80gwg0sw0sksoc8wg4ko.159.223.55.144.sslip.io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image:
        "https://6wopiao8ao.ufs.sh/f/qggsNLzkMu059JkXTxMZD9Vqbgctlsu8iIZOPEXkfnMTrd5N",
      video: "",
    },
    {
      title: "CaLouselF",
      href: "",
      dates: "December 2024",
      active: true,
      description:
        "Built comprehensive frontend system for CaLouselF marketplace, featuring admin dashboard for item approval management, chseller interface for inventory and offer handling, and integrated user authentication with backend services.",
      technologies: ["Java", "MySQL"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ihsaanhardyanto/CaLouselF/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://utfs.io/f/qggsNLzkMu05aHSdh21BAOSfuEv3XZdxUb25DVYGT6i7yhCI",
      video: "",
    },
    {
      title: "Shyuppi",
      href: "",
      dates: "September 2024 - October 2024",
      active: true,
      description:
        "Admin dashboard designed specifically for marketplace management.",
      technologies: [
        "Postgres",
        "Zod",
        "TypeScript",
        "Neon",
        "NextJS",
        "ReactJS",
        "Prisma",
        "TailwindCSS",
        "Clerk",
        "ShadcnUI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ihsaanhardyanto/shyuppi-admin",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Technoscape",
      href: "https://technoscape.id/",
      dates: "April 2024 - June 2024",
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
    {
      title: "BIMSQ Sorting Visualizer",
      href: "https://technoscape.id/",
      dates: "December 2023 - June 2024",
      active: true,
      description:
        "Creating a dashboard and user interface for a sorting visualizer to compare the effectiveness of different sorting algorithms.",
      technologies: ["Vite", "ReactJS", "ShadcnUI", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://bimsq-sort.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ihsaanhardyanto/bimsq-sort",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bimsq.png",
      video: "",
    },
    {
      title: "POG Restaurant",
      href: "",
      dates: "September 2024",
      active: true,
      description:
        "Built a C-based restaurant system with features to browse the menu, place orders, and process payments, including automated change calculation.",
      technologies: ["C"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ihsaanhardyanto/POG-Restaurant",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/una.png",
      video: "",
    },
  ],
} as const;
