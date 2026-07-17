import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './experience.html',
    styleUrl: './experience.css'
})
export class ExperienceComponent {
    experiences = PORTFOLIO_DATA.experiences;
    certifications = PORTFOLIO_DATA.certifications;
}

