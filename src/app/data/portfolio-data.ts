export interface IHeroData {
  badge: string;
  name: string;
  role: string;
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
  tech: string[];
  github: string;
  demo: string;
}

export const PORTFOLIO_DATA = {
  heroData: {
    badge: 'WELCOME TO MY WORLD',
    name: 'Md. Tauhid Islam',
    role: 'Junior Full Stack Software Engineer',
    description:
      'Specializing in high-performance web applications with Angular and ASP.NET Core and SQL Server. I build scalable digital experiences that users love.',
    image: 'assets/img/tawhid.png',
  } as IHeroData,

  stats: [
    { value: '12+', label: ' Months Experience' },
    { value: '8+', label: 'Projects Worked On' },
    { value: '4+', label: 'Happy Clients' },
    { value: '5+', label: 'Open Source' },
  ] as IStat[],

  expertise: [
    { title: 'Angular', icon: 'fa-brands fa-angular', desc: 'Angular, HTML, CSS, Bootstrap', color: '#dd0031' },
    { title: 'ASP.NET Core', icon: 'fa-brands fa-dot-net', desc: 'MVC, Web API, Web API Core, C#, Entity Framework Core, Dapper, ADO .NET, MediatR, Clean Architecture, NLayered Architecture, CQRS, Unit Testing, Integration Testing, Dependency Injection', color: '#68a063' },
    { title: 'TypeScript', icon: 'fa-brands fa-js', desc: 'Strict typing, Design Patterns, Clean Code', color: '#007acc' },
    { title: 'Web Design', icon: 'fa-solid fa-palette', desc: 'CSS, SCSS, Figma, Bootstrap 5, TailwindCSS', color: '#a78bfa' },
    { title: 'Database', icon: 'fa-solid fa-database', desc: 'PostgreSQL, MySQL, MSSQL, Microsoft SQL Server', color: '#f59e0b' },
  ] as IExpertise[],

  philosophyPoints: [
    'Performance-first architecture',
    'Clean, readable, and scalable code, Maintainable software solutions',
    'Work Smartly not Hardly',
    'Continuous learning & improvement',
  ] as string[],

  profile: {
    name: 'Md. Tauhid Islam',
    role: 'Junior Full Stack Software Engineer',
    location: 'Savar, Dhaka, Bangladesh',
    email: 'tshakib25@gmail.com',
    bio: `Motivated Computer Science & Engineering student with a strong foundation in software development and modern IT technologies. Skilled in building scalable, responsive web applications using Angular, ASP.NET MVC/Core, C#, and SQL Server. Proficient in software engineering principles, system development processes, and leveraging modern development tools to create efficient solutions. Seeking opportunities to contribute to both software development and technical IT roles, with a focus on continuous skill enhancement and real-world impact.`,
    bio2: `When I'm a student, I'm learning from experienced developers, contributing to open source projects, and speaking at technology conferences. I believe technology should empower people, not complicate their lives.`,
    image: 'assets/img/tawhid.png',
  } as IProfile,

  techStack: [
    'Angular', 'TypeScript', 'JavaScript', 'ASP.NET MVC, Web API Core', 'C#', 'SQL Server',
    'PostgreSQL', 'Docker', 'AWS', 'CI/CD',
    'Bootstrap', 'TailwindCSS','SCSS', 'Git', 'GitHub', 'Agile Methodologies', 'RESTful APIs', 'Microservices Architecture', 'Clean Architecture',
  ] as string[],

  education: [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'IUBAT- International University of Business Agriculture and Technology',
      year: '2022 – 2026',
      grade: 'CGPA: 3.73/4.0',
    },
    {
      degree: 'HSC in Science',
      institution: 'Mohammadpur Kendriya College',
      year: '2018 – 2020',
      grade: 'GPA: 5.0/5.0',
    },
    {
      degree: 'SSC in Science',
      institution: 'Konda School and College',
      year: '2016 – 2018',
      grade: 'GPA: 4.61/5.0',
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
      description: 'Working with Senior Engineer and Team Members for building an excellent type of software for better user experience.',
      skills: ['Angular', 'ASP.NET Core', 'TypeScript', 'SQL Server', 'Agile Methodologies', 'SDLC', 'MVC', 'Web API', 'RESTful APIs', 'Microservices Architecture', 'Clean Architecture'],
      current: true,
    },
    {
      designation: 'Junior Full Stack Software Engineer',
      organization: 'Tech Stdio',
      tenure: 'Dec 2025 – Mar 2026',
      type: 'Full-time',
      description: 'Working with Senior Engineer and Team Members for building an excellent type of software for better user experience.',
      skills: ['Angular', 'ASP.NET Core', 'TypeScript', 'SQL Server', 'Agile Methodologies'],
      current: true,
    },
    {
      designation: 'Intern',
      organization: 'Tech Stdio',
      tenure: 'Aug 2025 – Nov 2025',
      type: 'Full-time',
      description: 'Developed scalable website using Angular and Asp .NET Core. Integrated REST APIs. Take help from junior developers and improved team collaboration through process improvements.',
      skills: ['Angular', 'ASP.NET Core', 'SQL Server', 'Web API', 'MVC'],
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
      name: 'SportsHub',
      role: 'Lead Developer',
      associationWith: 'Full-Stack',
      tags: ['Angular', 'ASP .NET Core', 'Full-Stack', 'SQL SERVER', 'WEB API', 'SignalR', 'Background Service', 'Bkash Integration'],
      imgUrl: 'assets/img/sportshub.png',
      desc: 'A real-time cricket tournament management platform with live scoring, SignalR integration, and bKash payment gateway.',
      tech: ['Angular', 'ASP.NET Core', 'WEB API', 'SignalR', 'Background Service', 'Bkash Integration', 'SQL Server'],
      github: 'https://github.com/tawhid-11/SportsHubFrontend',
      demo: '#',
    },
    {
      name: 'SportsHub API',
      role: 'Lead Developer',
      associationWith: 'Full-Stack',
      tags: ['Angular', 'ASP .NET Core', 'Full-Stack', 'SQL SERVER'],
      imgUrl: 'assets/img/backend.png',
      desc: 'A real-time cricket tournament management platform with live scoring, SignalR integration, and bKash payment gateway.',
      tech: ['Angular', 'ASP.NET Core', 'WEB API', 'SignalR', 'Background Service', 'Bkash Integration', 'SQL Server'],
      github: 'https://github.com/tawhid-11/SportsHubBackend',
      demo: '#',
    },
    {
      name: 'Doctor Appointment System',
      role: 'Backend Developer',
      associationWith: 'Full-Stack',
      tags: ['Full-Stack', 'ASP .NET Core', 'PostgreSQL', 'Supabase'],
      imgUrl: 'assets/img/doctor.png',
      desc: 'Patient can book a required Doctor From the Website and Doctor Also view the Patient List.',
      tech: ['ASP .NET Core', 'MVC', 'PostgreSQL', 'Supabase', 'cshtml'],
      github: 'https://github.com/tawhid-11/DoctorsAppointmentSystem',
      demo: '#',
    },
  ] as IProject[],
};
