import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PORTFOLIO_DATA } from './data/portfolio-data';
import { BackgroundAnimationComponent } from './components/background-animation/background-animation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
    BackgroundAnimationComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Md. Tauhid Islam · Portfolio';
  readonly profile = PORTFOLIO_DATA.profile;

  // UI Reactive State via Angular 19 Signals
  isMenuOpen = signal<boolean>(false);
  showScrollTop = signal<boolean>(false);
  isContactModalOpen = signal<boolean>(false);
  emailCopied = signal<boolean>(false);
  activeContactTab = signal<'form' | 'links'>('form');

  // Contact Form State
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  isSubmitting = signal<boolean>(false);
  submitSuccess = signal<boolean>(false);
  submitError = signal<string>('');

  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  openContactModal(tab: 'form' | 'links' = 'form'): void {
    this.activeContactTab.set(tab);
    this.isContactModalOpen.set(true);
    this.isMenuOpen.set(false);
    this.submitSuccess.set(false);
    this.submitError.set('');
  }

  closeContactModal(): void {
    this.isContactModalOpen.set(false);
  }

  setContactTab(tab: 'form' | 'links'): void {
    this.activeContactTab.set(tab);
  }

  copyEmail(): void {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(this.profile.email).then(() => {
        this.emailCopied.set(true);
        setTimeout(() => this.emailCopied.set(false), 2500);
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

  async submitContactForm(): Promise<void> {
    const { name, email, message, subject } = this.contactForm;
    if (!name.trim() || !email.trim() || !message.trim()) {
      this.submitError.set('Please fill out your name, email, and message.');
      return;
    }

    this.isSubmitting.set(true);
    this.submitError.set('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'b947c660-4963-48e0-8260-25e4c6c96896',
          from_name: name.trim(),
          email: email.trim(),
          subject: subject?.trim() || `Portfolio Inquiry from ${name.trim()}`,
          message: message.trim()
        })
      });

      if (response.ok) {
        this.submitSuccess.set(true);
        this.contactForm = { name: '', email: '', subject: '', message: '' };
      } else {
        this.fallbackMailto();
        this.submitSuccess.set(true);
      }
    } catch {
      this.fallbackMailto();
      this.submitSuccess.set(true);
    } finally {
      this.isSubmitting.set(false);
    }
  }

  private fallbackMailto(): void {
    const sub = encodeURIComponent(this.contactForm.subject || `Inquiry from ${this.contactForm.name}`);
    const body = encodeURIComponent(`Hi Tauhid,\n\n${this.contactForm.message}\n\nFrom: ${this.contactForm.name} (${this.contactForm.email})`);
    window.open(`mailto:${this.profile.email}?subject=${sub}&body=${body}`, '_blank');
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.showScrollTop.set(window.scrollY > 300);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isContactModalOpen()) {
      this.closeContactModal();
    }
  }
}
