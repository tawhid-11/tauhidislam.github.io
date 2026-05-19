import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './experience.html',
    styleUrl: './experience.css'
})
export class ExperienceComponent {
    experiences = [
        {
            designation: 'Jr. Software Engineer',
            organization: 'Global Software Architects',
            tenure: 'May 2026 – Present',
            type: 'Full-time',
            description: 'Working with Senior Engineer and Team Members for building an excellent type of software for better user experience.',
            skills: ['Angular 21', 'ASP.NET Core', 'TypeScript', 'SQL Server', 'Agile Methodologies'],
            current: true
        },

        {
            designation: 'Jr. Software Engineer',
            organization: 'Tech Stdio',
            tenure: 'Dec 2025 – Mar 2026',
            type: 'Full-time',
            description: 'Working with Senior Engineer and Team Members for building an excellent type of software for better user experience.',
            skills: ['Angular 21', 'ASP.NET Core', 'TypeScript', 'SQL Server', 'Agile Methodologies'],
            current: true
        },
        {
            designation: 'Jr. Software Engineer Intern',
            organization: 'Tech Stdio',
            tenure: 'Aug 2025 – Nov 2025',
            type: 'Full-time',
            description: 'Developed scalable website using Angular and Asp .NET Core. Integrated REST APIs. Take help from junior developers and improved team collaboration through process improvements.',
            skills: ['Angular', 'ASP.NET Core', 'SQL Server', 'Web API', 'MVC'],
            current: false
        }
    ];

    certifications = [
        { name: 'Python with Machine Learning', issuer: 'Creative IT', year: '2026', icon: 'fa-brands fa-python' },
        { name: 'Full Stack Web Development', issuer: 'Tech Stdio', year: '2025', icon: 'fa-solid fa-laptop-code' },
        { name: 'Computer Networking', issuer: 'Udemy', year: '2025', icon: 'fa-solid fa-network-wired' },
    ];
}
