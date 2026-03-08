import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './portfolio.html',
    styleUrl: './portfolio.css'
})
export class PortfolioComponent {
    filters = ['All', 'Angular', 'Full-Stack', 'ASP .NET Core', 'SQL SERVER', 'WEB API', 'SignalR', 'Background Service', 'Bkash Integration', 'PostgreSQL', 'Supabase'];
    activeFilter = 'All';

    allProjects = [
        {
            name: 'SportsHub ',
            role: 'Lead Developer',
            associationWith: 'Full-Stack',
            tags: ['Angular', 'ASP .NET Core', 'Full-Stack', 'SQL SERVER', 'WEB API', 'SignalR', 'Background Service', 'Bkash Integration'],
            imgUrl: 'assets/img/sportshub.png',
            desc: 'A real-time cricket tournament management platform with live scoring, SignalR integration, and bKash payment gateway.',
            tech: ['Angular 21', 'ASP.NET Core', 'WEB API', 'SignalR', 'Background Service', 'Bkash Integration', 'SQL Server'],
            github: 'https://github.com/tawhid-11/SportsHubFrontend',
            demo: '#',
        },
        {
            name: 'SportsHub',
            role: 'Lead Developer',
            associationWith: 'Full-Stack',
            tags: ['Angular', 'ASP .NET Core', 'Full-Stack', 'SQL SERVER'],
            imgUrl: 'assets/img/backend.png',
            desc: 'A real-time cricket tournament management platform with live scoring, SignalR integration, and bKash payment gateway.',
            tech: ['Angular 21', 'ASP.NET Core', 'WEB API', 'SignalR', 'Background Service', 'Bkash Integration', 'SQL Server'],
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
        }
    ];

    get filteredProjects() {
        if (this.activeFilter === 'All') return this.allProjects;
        return this.allProjects.filter(p => p.tags.includes(this.activeFilter));
    }

    setFilter(f: string) {
        this.activeFilter = f;
    }
}
