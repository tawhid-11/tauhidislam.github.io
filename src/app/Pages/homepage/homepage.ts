import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PORTFOLIO_DATA, IHeroData, IStat, IExpertise, IProject } from '../../data/portfolio-data';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class HomepageComponent implements OnInit, OnDestroy {
  readonly heroData: IHeroData = PORTFOLIO_DATA.heroData;
  readonly stats: IStat[] = PORTFOLIO_DATA.stats;
  readonly expertise: IExpertise[] = PORTFOLIO_DATA.expertise;
  readonly philosophyPoints: string[] = PORTFOLIO_DATA.philosophyPoints;
  readonly featuredProjects: IProject[] = PORTFOLIO_DATA.projects.slice(0, 3);

  // Animated Role Rotating State
  currentRoleIndex = signal<number>(0);
  displayedRole = signal<string>(this.heroData.animatedRoles[0] || this.heroData.role);
  emailCopied = signal<boolean>(false);

  private roleInterval: any = null;

  ngOnInit(): void {
    const roles = this.heroData.animatedRoles;
    if (roles && roles.length > 1) {
      this.roleInterval = setInterval(() => {
        const nextIndex = (this.currentRoleIndex() + 1) % roles.length;
        this.currentRoleIndex.set(nextIndex);
        this.displayedRole.set(roles[nextIndex]);
      }, 3000);
    }
  }

  ngOnDestroy(): void {
    if (this.roleInterval) {
      clearInterval(this.roleInterval);
    }
  }

  copyEmail(): void {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email).then(() => {
        this.emailCopied.set(true);
        setTimeout(() => this.emailCopied.set(false), 2400);
      }).catch(() => {
        this.openEmailClient();
      });
    } else {
      this.openEmailClient();
    }
  }

  openEmailClient(): void {
    window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}`;
  }
}
