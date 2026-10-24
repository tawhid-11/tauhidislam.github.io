import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
    selector: 'app-homepage',
    imports: [CommonModule, RouterLink],
    standalone: true,
    templateUrl: './homepage.html',
    styleUrl: './homepage.css'
})
export class HomepageComponent implements OnInit, OnDestroy {
    heroData = PORTFOLIO_DATA.heroData;
    stats = PORTFOLIO_DATA.stats;
    expertise = PORTFOLIO_DATA.expertise;
    philosophyPoints = PORTFOLIO_DATA.philosophyPoints;

    displayedRole = '';
    private roleIndex = 0;
    private charIndex = 0;
    private isDeleting = false;
    private typingTimer: any;
    emailCopied = false;

    ngOnInit(): void {
        this.typeEffect();
    }

    ngOnDestroy(): void {
        if (this.typingTimer) {
            clearTimeout(this.typingTimer);
        }
    }

    private typeEffect(): void {
        const roles = this.heroData.animatedRoles && this.heroData.animatedRoles.length > 0 
            ? this.heroData.animatedRoles 
            : [this.heroData.role];
        const currentRole = roles[this.roleIndex % roles.length];

        if (this.isDeleting) {
            this.displayedRole = currentRole.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.displayedRole = currentRole.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let speed = this.isDeleting ? 35 : 75;

        if (!this.isDeleting && this.charIndex === currentRole.length) {
            speed = 2200; // Pause at end of role
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.roleIndex++;
            speed = 400; // Pause before typing next role
        }

        this.typingTimer = setTimeout(() => this.typeEffect(), speed);
    }

    copyEmail(): void {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email).then(() => {
                this.emailCopied = true;
                setTimeout(() => (this.emailCopied = false), 2500);
            });
        } else {
            this.openEmail();
        }
    }

    openEmail(): void {
        window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}`;
    }
}
