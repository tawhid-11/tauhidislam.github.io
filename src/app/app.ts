import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PORTFOLIO_DATA } from './data/portfolio-data';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLinkActive, RouterLink],
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
  activeContactTab: 'form' | 'links' = 'form';
  profile = PORTFOLIO_DATA.profile;

  // Contact Form State
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openContactModal(tab: 'form' | 'links' = 'form'): void {
    this.activeContactTab = tab;
    this.isContactModalOpen = true;
    this.isMenuOpen = false;
    this.submitSuccess = false;
    this.submitError = '';
  }

  closeContactModal(): void {
    this.isContactModalOpen = false;
  }

  setContactTab(tab: 'form' | 'links'): void {
    this.activeContactTab = tab;
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

  async submitContactForm(): Promise<void> {
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
      this.submitError = 'Please fill out your name, email, and message.';
      return;
    }

    this.isSubmitting = true;
    this.submitError = '';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'b947c660-4963-48e0-8260-25e4c6c96896',
          from_name: this.contactForm.name,
          email: this.contactForm.email,
          subject: this.contactForm.subject || `Portfolio Message from ${this.contactForm.name}`,
          message: this.contactForm.message
        })
      });

      if (response.ok) {
        this.submitSuccess = true;
        this.contactForm = { name: '', email: '', subject: '', message: '' };
      } else {
        this.triggerMailtoFallback();
        this.submitSuccess = true;
      }
    } catch {
      this.triggerMailtoFallback();
      this.submitSuccess = true;
    } finally {
      this.isSubmitting = false;
    }
  }

  private triggerMailtoFallback(): void {
    const subject = encodeURIComponent(this.contactForm.subject || `Portfolio Inquiry from ${this.contactForm.name}`);
    const body = encodeURIComponent(`Hi Tauhid,\n\n${this.contactForm.message}\n\nBest regards,\n${this.contactForm.name}\n${this.contactForm.email}`);
    window.open(`mailto:${this.profile.email}?subject=${subject}&body=${body}`, '_blank');
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
