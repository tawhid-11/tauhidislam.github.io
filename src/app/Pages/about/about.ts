import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './about.html',
    styleUrl: './about.css'
})
export class AboutComponent {
    profile  = {
        name: 'Md. Tauhid Islam',
        role: 'Jr Software Engineer',
        location: 'Dhaka, Bangladesh',
        email: 'tshakib25@gmail.com',
        bio: `Motivated Computer Science & Engineering student with a strong foundation in software development and modern IT technologies. Skilled in building scalable, responsive web applications using Angular, ASP.NET MVC/Core, C#, and SQL Server. Proficient in software engineering principles, system development processes, and leveraging modern development tools to create efficient solutions. Seeking opportunities to contribute to both software development and technical IT roles, with a focus on continuous skill enhancement and real-world impact.`,
        bio2: `When I'm a student, I'm learning from experienced developers, contributing to open source projects,  and speaking at technology conferences. I believe technology should empower people, not complicate their lives.`,
        image: 'assets/img/tawhid.png'
    };

    techStack = [
        'Angular 21', 'TypeScript', 'JavaScript', 'ASP.NET MVC/Core', 'C#', 'SQL Server',
        'PostgreSQL', 'Docker', 'AWS',
        'Bootstrap', 'TailwindCSS', 'Git', 'GitHub', 'Agile Methodologies', 'RESTful APIs', 'Microservices Architecture'
    ];

    education = [
        {
            degree: 'Bachelor of Science in Computer Science',
            institution: 'IUBAT- International University of Business Agriculture and Technology',
            year: '2022 – 2026',
            grade: 'CGPA: 3.75/4.0'
        },
         {
            degree: 'HSC in Science',
            institution: 'Mohammadpur Kendriya College',
            year: '2018 – 2020',
            grade: 'GPA: 5.0/5.0'
        },
         {
            degree: 'SSC in Science',
            institution: 'Konda School and College',
            year: '2016 – 2018',
            grade: 'GPA: 4.61/5.0'
        }
    ];

    contact = [
        { icon: 'fa-solid fa-envelope', label: 'Email', value: 'tshakib25@gmail.com', link: 'mailto:tshakib25@gmail.com' },
        { icon: 'fa-brands fa-github', label: 'GitHub', value: 'https://github.com/tawhid-11', link: 'https://github.com/tawhid-11' },
        { icon: 'fa-brands fa-linkedin', label: 'LinkedIn', value: 'https://www.linkedin.com/in/md-tauhid-islam-146406240', link: 'https://www.linkedin.com/in/md-tauhid-islam-146406240' },
        { icon: 'fa-solid fa-location-dot', label: 'Location', value: 'Dhaka, Bangladesh', link: null },
    ];
}
