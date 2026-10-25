export interface IHeroData {
  badge: string;
  name: string;
  role: string;
  animatedRoles: string[];
  description: string;
  image: string;
}

export interface IStat {
  value: string;
  label: string;
}

export interface IExpertise {
  title: string;
  icon: string;
  desc: string;
  color: string;
}

export interface IProfile {
  name: string;
  role: string;
  location: string;
  email: string;
  bio: string;
  bio2: string;
  image: string;
}

export interface IEducation {
  degree: string;
  institution: string;
  year: string;
  grade: string;
}

export interface IContact {
  icon: string;
  label: string;
  value: string;
  link: string | null;
}

export interface IExperience {
  designation: string;
  organization: string;
  tenure: string;
  type: string;
  description: string;
  skills: string[];
  current: boolean;
}

export interface ICertification {
  name: string;
  issuer: string;
  year: string;
  icon: string;
}

export interface IProject {
  name: string;
  role: string;
  associationWith: string;
  tags: string[];
  imgUrl: string;
  desc: string;
  features: string[];
  tech: string[];
  github: string;
  demo: string;
}

export const PORTFOLIO_DATA = {
  heroData: {
    badge: 'WELCOME TO MY WORLD',
    name: 'Md. Tauhid Islam',
    role: 'Junior Full Stack Software Engineer',
    animatedRoles: [
      'Full Stack Software Engineer',
      'ASP.NET Core & C# Specialist',
      'Angular & Frontend Developer',
      'Clean Architecture Enthusiast',
      'SQL Server & Database Designer'
    ],
    description:
      'Specializing in high-performance web applications with Angular, ASP.NET Core, and SQL Server. I build scalable, clean-architected digital experiences that users love.',
    image: 'assets/img/tawhid.png',
  } as IHeroData,

  stats: [
    { value: '1+ Years', label: 'Hands-on Experience' },
    { value: '8+', label: 'Projects Completed' },
    { value: '100%', label: 'Commitment & Quality' },
    { value: '5+', label: 'Open Source Repos' },
  ] as IStat[],

  expertise: [
    { title: 'Angular', icon: 'fa-brands fa-angular', desc: 'Angular 17/18/19, TypeScript, Signals, RxJS, Responsive UI & Bootstrap 5', color: '#dd0031' },
    { title: 'ASP.NET Core', icon: 'fa-brands fa-dot-net', desc: 'RESTful Web APIs, C#, Clean Architecture, CQRS, MediatR, Entity Framework Core, Dapper', color: '#68a063' },
    { title: 'TypeScript & JavaScript', icon: 'fa-brands fa-js', desc: 'Strict Typing, Modern ES6+, Design Patterns, Clean & Scalable Code', color: '#007acc' },
    { title: 'Database & SQL', icon: 'fa-solid fa-database', desc: 'Microsoft SQL Server, PostgreSQL, Schema Design, Stored Procedures, Optimization', color: '#f59e0b' },
    { title: 'Real-Time & Integration', icon: 'fa-solid fa-bolt', desc: 'SignalR WebSockets, Background Services, bKash Payment Gateway, Third-party APIs', color: '#a78bfa' },
    { title: 'DevOps & Tools', icon: 'fa-brands fa-git-alt', desc: 'Git, GitHub, Postman, Supabase, Agile Methodologies, CI/CD Deployment', color: '#38bdf8' },
  ] as IExpertise[],

  philosophyPoints: [
    'Performance-first and scalable software architecture',
    'Clean, maintainable code following SOLID principles',
    'Work smartly with modern tooling and best practices',
    'Continuous learning, open communication & improvement',
  ] as string[],

  profile: {
    name: 'Md. Tauhid Islam',
    role: 'Junior Full Stack Software Engineer',
    location: 'Savar, Dhaka, Bangladesh',
    email: 'tshakib25@gmail.com',
    bio: `Motivated Computer Science & Engineering student with a strong foundation in software development and modern web technologies. Skilled in building scalable, responsive web applications using Angular, ASP.NET Core, C#, and SQL Server. Proficient in software engineering principles, system development processes, and leveraging modern development tools to create efficient solutions. Seeking opportunities to contribute to both software development and technical IT roles, with a focus on continuous skill enhancement and real-world impact.`,
    bio2: `As an aspiring software engineer, I actively collaborate with senior developers, contribute to open-source initiatives, and explore modern cloud & backend architecture. I believe in writing code that solves real-world problems and creates seamless user experiences.`,
    image: 'assets/img/tawhid.png',
  } as IProfile,

  techStack: [
    'Angular', 'TypeScript', 'JavaScript', 'ASP.NET Core', 'C#', 'SQL Server',
    'PostgreSQL', 'Entity Framework Core', 'Dapper', 'SignalR', 'Clean Architecture',
    'Bootstrap 5', 'TailwindCSS', 'SCSS', 'Git & GitHub', 'RESTful APIs', 'MediatR', 'CQRS',
  ] as string[],

  education: [
    {
      degree: 'Bachelor of Science in Computer Science & Engineering',
      institution: 'IUBAT - International University of Business Agriculture and Technology',
      year: '2022 – 2026',
      grade: 'CGPA: 3.73 / 4.00',
    },
    {
      degree: 'HSC in Science',
      institution: 'Mohammadpur Kendriya College',
      year: '2018 – 2020',
      grade: 'GPA: 5.00 / 5.00',
    },
    {
      degree: 'SSC in Science',
      institution: 'Konda School and College',
      year: '2016 – 2018',
      grade: 'GPA: 4.61 / 5.00',
    },
  ] as IEducation[],

  contact: [
    { icon: 'fa-solid fa-envelope', label: 'Email', value: 'tshakib25@gmail.com', link: 'mailto:tshakib25@gmail.com' },
    { icon: 'fa-brands fa-github', label: 'GitHub', value: 'https://github.com/tawhid-11', link: 'https://github.com/tawhid-11' },
    { icon: 'fa-brands fa-linkedin', label: 'LinkedIn', value: 'https://www.linkedin.com/in/md-tauhid-islam-146406240', link: 'https://www.linkedin.com/in/md-tauhid-islam-146406240' },
    { icon: 'fa-solid fa-location-dot', label: 'Location', value: 'Savar, Dhaka, Bangladesh', link: null },
  ] as IContact[],

  experiences: [
    {
      designation: 'Junior Full Stack Software Engineer',
      organization: 'Global Software Architects',
      tenure: 'May 2026 – Present',
      type: 'Full-time',
      description: 'Architecting and developing scalable enterprise web applications with ASP.NET Core Web API, Clean Architecture, and Angular. Collaborating closely with senior engineers in Agile sprints to deliver reliable, high-performance software.',
      skills: ['Angular', 'ASP.NET Core', 'TypeScript', 'SQL Server', 'Agile Methodologies', 'RESTful APIs', 'Clean Architecture', 'CQRS'],
      current: true,
    },
    {
      designation: 'Junior Full Stack Software Engineer',
      organization: 'Tech Stdio',
      tenure: 'Dec 2025 – Mar 2026',
      type: 'Full-time',
      description: 'Engineered responsive frontend interfaces in Angular and integrated RESTful APIs with ASP.NET Core. Optimized database queries in SQL Server and contributed to core client deliverables.',
      skills: ['Angular', 'ASP.NET Core', 'TypeScript', 'SQL Server', 'Entity Framework Core'],
      current: false,
    },
    {
      designation: 'Software Engineer Intern',
      organization: 'Tech Stdio',
      tenure: 'Aug 2025 – Nov 2025',
      type: 'Internship',
      description: 'Developed scalable web modules using Angular and ASP.NET Core MVC. Integrated REST APIs, established solid foundations in SDLC and Git workflows, and assisted in unit testing and code refactoring.',
      skills: ['Angular', 'ASP.NET Core', 'SQL Server', 'Web API', 'Git'],
      current: false,
    },
  ] as IExperience[],

  certifications: [
    { name: 'Python with Machine Learning', issuer: 'Creative IT', year: '2026', icon: 'fa-brands fa-python' },
    { name: 'Full Stack Web Development', issuer: 'Tech Stdio', year: '2025', icon: 'fa-solid fa-laptop-code' },
    { name: 'CISCO Packet Tracer', issuer: 'Udemy', year: '2025', icon: 'fa-solid fa-network-wired' },
  ] as ICertification[],

  projects: [
    {
      name: 'SportsHub (Frontend)',
      role: 'Lead Frontend Developer',
      associationWith: 'Full-Stack Project',
      tags: ['All', 'Full-Stack', 'Frontend', 'Angular'],
      imgUrl: 'assets/img/sportshub.png',
      desc: 'A real-time cricket tournament management platform featuring live ball-by-ball score updates, interactive tournament brackets, and seamless payment integration.',
      features: [
        'Real-time live scoring updates with SignalR WebSockets',
        'Dynamic tournament fixture scheduling & automatic points table',
        'Integrated bKash merchant gateway for tournament fee payments',
        'Responsive, reactive Angular architecture with clean component design',
      ],
      tech: ['Angular', 'TypeScript', 'SignalR', 'Bootstrap 5', 'RxJS', 'HTML5/CSS3'],
      github: 'https://github.com/tawhid-11/SportsHubFrontend',
      demo: '',
    },
    {
      name: 'SportsHub API (Backend)',
      role: 'Backend Architect & Developer',
      associationWith: 'Full-Stack Project',
      tags: ['All', 'Full-Stack', 'Backend', 'ASP.NET Core'],
      imgUrl: 'assets/img/backend.png',
      desc: 'Robust backend API engineered with Clean Architecture, ASP.NET Core, and SQL Server. Handles real-time websocket broadcasting, tournament logic, and secure payment transactions.',
      features: [
        'Clean Architecture & CQRS pattern implementation with MediatR',
        'SignalR real-time hubs for instant live match broadcasting',
        'Entity Framework Core with optimized SQL Server queries & indexing',
        'Background Services for automated scheduling & recurring match tasks',
        'Secure JWT token authentication and role-based authorization',
      ],
      tech: ['ASP.NET Core', 'C#', 'SQL Server', 'Entity Framework Core', 'SignalR', 'Clean Architecture', 'MediatR'],
      github: 'https://github.com/tawhid-11/SportsHubBackend',
      demo: '',
    },
    {
      name: 'Doctor Appointment System',
      role: 'Full Stack Developer',
      associationWith: 'Healthcare System',
      tags: ['All', 'Full-Stack', 'Backend'],
      imgUrl: 'assets/img/doctor.png',
      desc: 'Comprehensive medical appointment platform where patients can find specialists and book appointments, while doctors manage consultation schedules and patient records.',
      features: [
        'Patient & Doctor customized role-based portals',
        'Doctor availability scheduling and real-time appointment booking',
        'PostgreSQL database integration via Supabase cloud infrastructure',
        'Secure session handling and server-side validation with ASP.NET Core',
      ],
      tech: ['ASP.NET Core MVC', 'C#', 'PostgreSQL', 'Supabase', 'Bootstrap', 'JavaScript'],
      github: 'https://github.com/tawhid-11/DoctorsAppointmentSystem',
      demo: '',
    },
    {
      name: 'E-Commerce Clean Architecture API',
      role: 'Backend Architect & Developer',
      associationWith: 'Enterprise API',
      tags: ['All', 'Full-Stack', 'Backend', 'ASP.NET Core'],
      imgUrl: 'assets/img/backend.png',
      desc: 'Robust E-Commerce backend API engineered with Clean Architecture, CQRS, and SQL Server. Features secure product catalog management, order processing, and payment integration.',
      features: [
        'Clean Architecture adhering to SOLID and separation of concerns',
        'Repository & Unit of Work patterns for decoupled database operations',
        'JWT token authentication, refresh tokens, and role-based access control',
        'Optimized Microsoft SQL Server schema with relational integrity and indexes',
        'Swagger / OpenAPI interactive documentation for seamless API consumption',
      ],
      tech: ['ASP.NET Core', 'C#', 'SQL Server', 'Entity Framework Core', 'Clean Architecture', 'JWT'],
      github: 'https://github.com/tawhid-11',
      demo: '',
    },
  ] as IProject[],
};
