import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA, IProject } from '../../data/portfolio-data';

@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './portfolio.html',
    styleUrl: './portfolio.css'
})
export class PortfolioComponent {
    filters = ['All', 'Full-Stack', 'Frontend', 'Backend', 'Angular', 'ASP.NET Core'];
    activeFilter = 'All';

    allProjects = PORTFOLIO_DATA.projects;
    selectedProject: IProject | null = null;

    get filteredProjects(): IProject[] {
        if (this.activeFilter === 'All') return this.allProjects;
        return this.allProjects.filter(p => p.tags.includes(this.activeFilter));
    }

    setFilter(f: string): void {
        this.activeFilter = f;
    }

    openProjectModal(p: IProject): void {
        this.selectedProject = p;
        document.body.style.overflow = 'hidden';
    }

    closeProjectModal(): void {
        this.selectedProject = null;
        document.body.style.overflow = 'auto';
    }

    @HostListener('document:keydown.escape')
    onEscape(): void {
        if (this.selectedProject) {
            this.closeProjectModal();
        }
    }
}
