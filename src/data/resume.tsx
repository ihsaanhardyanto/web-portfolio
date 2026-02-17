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
    "Full Stack Developer with hands-on experience building scalable web applications using [Next.js](https://nextjs.org/), [React](https://react.dev/), and [Java Spring Boot](https://spring.io/projects/spring-boot). Experienced in end-to-end development, from designing responsive user interfaces to architecting secure RESTful APIs. A collaborative team player accustomed to Agile environments, eager to contribute to meaningful projects while continuously refining technical expertise.",
  avatarUrl:
    "https://utfs.io/f/qggsNLzkMu05zRCRnLaJsQryZ1WaNt0cfkj4GCvS3MBRIoEp",
  techs: ["TypeScript", "JavaScript", "Java", "PHP", "HTML", "CSS", "C", "SQL"],
  frameworks: [
    "Next.js",
    "React",
    "Spring Boot",
    "Vite",
    "TailwindCSS",
    "ShadcnUI",
    "Laravel",
    "Prisma",
    "Redux",
    "Zustand",
    "Zod",
    "Docker",
    "Redis",
    "MySQL",
    "PostgreSQL",
    "Apache Kafka",
    "WebSocket",
    "MinIO",
    "Cucumber",
    "Playwright",
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
      href: "https://dealer.olx.co.id/",
      badges: [],
      location: "Jakarta, Indonesia",
      title: "Frontend Developer Intern",
      logoUrl: "/admo.png",
      start: "Feb 2025",
      end: "Aug 2025",
      description:
        "Collaborated with cross-functional teams to enhance the dealer purchase flow, improve user experience, and boost operational efficiency. Simplified payment processes with user-friendly options and ensured seamless integration with backend systems. Contributed to the usability and visual appeal of the platform, resulting in increased user engagement.",
    },
    {
      company: "Hyundai Autoever Indonesia",
      href: "https://www.hyundai-autoever.com/",
      badges: [],
      location: "Jakarta, Indonesia",
      title: "Full Stack Developer Intern",
      logoUrl: "/haeid.png",
      start: "Sep 2025",
      end: "Feb 2026",
      description:
        "Developing end-to-end enterprise web applications using Java Spring Boot for robust backend services and React for dynamic frontends. Responsible for designing RESTful APIs, managing database integrations, and ensuring seamless data flow between server and client-side architectures.",
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
      title: "Internal Approval Workflow",
      href: "",
      dates: "September 2025 - Present",
      active: true,
      description:
        "Architected a full stack enterprise application to streamline internal approval processes. Built robust backend services using Java Spring Boot to handle complex workflow logic and permissions, integrated with a dynamic React frontend for a seamless user experience.",
      technologies: [
        "Java Spring Boot",
        "TypeScript",
        "React",
        "PostgreSQL",
        "Docker",
        "REST API",
        "Redis",
        "MinIO",
        "Apache Kafka",
        "Web Socket",
        "Zustand",
      ],
      links: [],
      image: "/haeid.png",
      video: "",
    },
    {
      title: "OLX Dealer Platform",
      href: "https://dealer.olx.co.id/",
      dates: "February 2025 - August 2025",
      active: true,
      description:
        "Engineered the core B2B frontend platform for car dealers. Optimized critical purchase flows and payment integrations using Next.js, significantly improving transaction efficiency and user interface responsiveness for high-volume users.",
      technologies: ["Next.js", "TypeScript", "React", "TailwindCSS", "Redux"],
      links: [
        {
          type: "Website",
          href: "https://dealer.olx.co.id/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/admo.png",
      video: "",
    },
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
        "Built comprehensive frontend system for CaLouselF marketplace, featuring admin dashboard for item approval management, seller interface for inventory and offer handling, and integrated user authentication with backend services.",
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
