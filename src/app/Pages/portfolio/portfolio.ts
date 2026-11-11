import { Component, HostListener, computed, signal } from '@angular/core';
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
  readonly filters = ['All', 'Full-Stack', 'Backend', 'Frontend', 'Angular', 'ASP.NET Core'];
  readonly allProjects: IProject[] = PORTFOLIO_DATA.projects;

  activeFilter = signal<string>('All');
  selectedProject = signal<IProject | null>(null);

  filteredProjects = computed<IProject[]>(() => {
    const filter = this.activeFilter();
    if (filter === 'All') {
      return this.allProjects;
    }
    return this.allProjects.filter(p =>
      p.tags.some(tag => tag.toLowerCase() === filter.toLowerCase()) ||
      p.tech.some(t => t.toLowerCase().includes(filter.toLowerCase()))
    );
  });

  setFilter(filter: string): void {
    this.activeFilter.set(filter);
  }

  openProjectModal(project: IProject): void {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal(): void {
    this.selectedProject.set(null);
    document.body.style.overflow = 'auto';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.selectedProject()) {
      this.closeProjectModal();
    }
  }
}
