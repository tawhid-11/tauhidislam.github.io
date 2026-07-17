import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

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

    allProjects = PORTFOLIO_DATA.projects;

    get filteredProjects() {
        if (this.activeFilter === 'All') return this.allProjects;
        return this.allProjects.filter(p => p.tags.includes(this.activeFilter));
    }

    setFilter(f: string) {
        this.activeFilter = f;
    }
}

