import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PORTFOLIO_DATA, IProfile, IEducation, IContact } from '../../data/portfolio-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  readonly profile: IProfile = PORTFOLIO_DATA.profile;
  readonly techStack: string[] = PORTFOLIO_DATA.techStack;
  readonly education: IEducation[] = PORTFOLIO_DATA.education;
  readonly contact: IContact[] = PORTFOLIO_DATA.contact;

  emailCopied = signal<boolean>(false);

  copyEmail(): void {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(this.profile.email).then(() => {
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
    window.location.href = `mailto:${this.profile.email}`;
  }
}
