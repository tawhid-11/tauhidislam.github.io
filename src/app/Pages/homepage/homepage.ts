import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homepage',
    imports: [CommonModule, RouterLink],
    standalone: true,
    templateUrl: './homepage.html',
    styleUrl: './homepage.css'
})
export class HomepageComponent {
    heroData = {
        badge: 'WELCOME TO MY WORLD',
        name: 'Md. Tauhid Islam',
        role: 'Jr. Software Engineer',
        description:
            'Specializing in high-performance web applications with Angular and ASP.NET Core and SQL Server. I build scalable digital experiences that users love.',
        image: 'assets/img/tawhid.png',
    };

    stats = [
        { value: '6+', label: ' Months Experience' },
        { value: '3+', label: 'Projects Worked On' },
        { value: '1+', label: 'Happy Clients' },
        { value: '1+', label: 'Open Source' },
    ];

    expertise = [
        { title: 'Angular', icon: 'fa-brands fa-angular', desc: 'Angular21, HTML, CSS, Bootstrap', color: '#dd0031' },
        { title: 'ASP.NET Core', icon: 'fa-brands fa-dot-net', desc: 'MVC, Web API, C#, Entity Framework', color: '#68a063' },
        { title: 'TypeScript', icon: 'fa-brands fa-js', desc: 'Strict typing, Design Patterns, Clean Code', color: '#007acc' },
        { title: 'Web Design', icon: 'fa-solid fa-palette', desc: 'Figma, Bootstrap 5, TailwindCSS', color: '#a78bfa' },
        { title: 'Database', icon: 'fa-solid fa-database', desc: 'PostgreSQL, MySQL, Microsoft SQL Server', color: '#f59e0b' },
    ];

    philosophyPoints = [
        'Performance-first architecture',
        'Clean, readable, and scalable code',
        'Work Smartly not Hardly',
        'Continuous learning & improvement',
    ];

    openEmail() {
        window.location.href = 'mailto:tshakib25@gmail.com';
    }
}
