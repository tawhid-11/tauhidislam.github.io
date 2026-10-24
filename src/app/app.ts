import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PORTFOLIO_DATA } from './data/portfolio-data';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLinkActive, RouterLink],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'ng-portfolio';
  isMenuOpen = false;
  showScrollTop = false;
  isContactModalOpen = false;
  emailCopied = false;
  profile = PORTFOLIO_DATA.profile;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openContactModal(): void {
    this.isContactModalOpen = true;
    this.isMenuOpen = false;
  }

  closeContactModal(): void {
    this.isContactModalOpen = false;
  }

  copyEmail(): void {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(this.profile.email).then(() => {
        this.emailCopied = true;
        setTimeout(() => (this.emailCopied = false), 2500);
      });
    } else {
      this.openEmail();
    }
  }

  openEmail(): void {
    window.location.href = `mailto:${this.profile.email}`;
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showScrollTop = window.scrollY > 300;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isContactModalOpen) {
      this.closeContactModal();
    }
  }
}
