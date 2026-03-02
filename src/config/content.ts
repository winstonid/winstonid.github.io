export const siteConfig = {
  name: "Your Portfolio",
  title: "Someone's Portfolio",
  description: "A showcase of my work and thoughts",
  social: {
    github: "https://github.com/tomcomtang/astro-multiplepage-portfolio",
    twitter: "https://x.com/astrodotbuild",
    email: "mailto:364786053@qq.com",
  },
};

export const homeContent = {
  title: "Hello, I'm Winston Millamena Jr.",
  description:
    "The ability to translate complex enterprise solutions into tangible business value has defined my 25-year career in EAM and IWMS implementations. ",
  buttons: {
    about: {
      text: "View About",
      href: "/about/",
    },
    posts: {
      text: "Read Posts",
      href: "/posts/",
    },
  },
  images: {
    light: "https://multiplepage-portfolio.edgeone.app/assets/images/tech-background-light.svg",
    dark: "/assets/images/tech-background-dark.svg",
  },
};

export const aboutContent = {
  meta: {
    title: "About - Winston's Millamena Jr Portfolio",
    description: "Learn more about my background, skills, and experience",
  },
  title: "About Me",
  description:
    "Results-driven Project Manager with 20+ years of experience leading large-scale EAM, IWMS, and CMMS implementations across healthcare, hospitality, utilities, and government sectors. Proven ability to manage multi-million-dollar budgets, cross-functional teams (30+ members), and complex integrations (SAP, IoT, Cloud). Adept at risk mitigation, stakeholder alignment, and Agile/Waterfall delivery. PMP trained with expertise in Maximo, TRIRIGA, and ERP systems.",
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Docker",
    "Git",
    "AWS",
  ],
  image: {
    src: "/assets/images/about/coder.jpg",
    alt: "Profile",
  },
  experience: {
    title: "Experience",
    items: [
      {
        period: "2024 - Present",
        position: "Maximo Principal | Project Manager - Maximo MAS",
        company: "Naviam",
        description:
          "Led three concurrent projects, including Hong Kong Land and Hong Kong Business Aviation Center, ensuring timely delivery and adherence to budget within 6 months| Streamlined project deliverables, enhancing team efficiency by 30% within 3 months through the introduction of agile methodologies and regular status updates. Efficiently allocate resources, both human and technical, to ensure the successful execution of projects. This involves overseeing project portfolios, ensuring adherence to timelines, budgets, and quality standards. | Liaise with client to ensure timely communications, regular project status & proactive issue handling",
      },
      {
        period: "2021 - 2024",
        position: "Head of Service Delivery",
        company: "Maximo Business Solutions, Inc.",
        description:
          "Directed / Supervised entire Delivery Team of 30+ resources (PMO team, Technical & Functional teams, infrastructure teams, Software Support & Maintenance team) | Client Portfolio: Managed 12+ Maximo/SAP projects, including Petron, Bank of Philippines, and Light Rail Manila.| Providing the Delivery organisation with guidance for any project- related issues/concerns that will be encountered and Manage critical situations that will arise from the projects |Providing PMO governance, assurances and compliance for delivered services",
      },
      {
        period: "2020 - 2021",
        position: "EAM Solution Architect (Maximo) | Business Dev & Delivery ",
        company: "IBM",
        description: "Establishes architecture standards for custom and Commercial Off- the-shelf Systems and applications to support the Asset Management ecosystem including EAM, APM, GIS, BIM, ERP, Mobility, sensor devices, etc.| Provide technical leadership to architects and technical leads working on different environments, projects, accounts | Advise on the selection of key enterprise tools (e.g. data source, IOT, sensors, scheduling, graphic design, analytics, mobility); | Support expansion activities such as preparing estimates and defining technical solutions to proposals | Provide industry mentorship, strategies, and our standard methodologies;",
      },
    ],
  },
  connect: {
    title: "Let's Connect",
    description:
      "Feel free to reach out if you want to collaborate or just say hi! You can find us on social media or drop us an",
    email: {
      text: "email",
      href: "mailto:winstonid@gmail.com",
    },
  },
};

export const projectsContent = {
  meta: {
    title: "Projects - Your Portfolio",
    description: "Showcase of my best work and projects",
  },
  title: "Our Projects",
  description:
    "Here you can showcase your best work. Each project should include a brief description, the technologies used, and any notable achievements. This helps potential clients or employers understand your capabilities.",
  projects: [
    {
      title: "Project One",
      description:
        "A brief description of your first project. Explain what it does and what technologies you used.",
      image: "/assets/images/projects/project1.jpg",
      href: "#",
    },
    {
      title: "Project Two",
      description:
        "Describe your second project here. Highlight the key features and your role in development.",
      image: "/assets/images/projects/project2.jpg",
      href: "#",
    },
    {
      title: "Project Three",
      description:
        "Share details about your third project. What problems did it solve? What was the outcome?",
      image: "/assets/images/projects/project3.png",
      href: "#",
    },
  ],
};

