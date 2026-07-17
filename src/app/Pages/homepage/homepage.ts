import { Component } from '@angular/core';
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
export class HomepageComponent {
    heroData = PORTFOLIO_DATA.heroData;
    stats = PORTFOLIO_DATA.stats;
    expertise = PORTFOLIO_DATA.expertise;
    philosophyPoints = PORTFOLIO_DATA.philosophyPoints;

    openEmail() {
        window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}`;
    }
}

