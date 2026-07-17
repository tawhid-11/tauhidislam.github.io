import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PORTFOLIO_DATA } from '../../data/portfolio-data';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './about.html',
    styleUrl: './about.css'
})
export class AboutComponent {
    profile = PORTFOLIO_DATA.profile;
    techStack = PORTFOLIO_DATA.techStack;
    education = PORTFOLIO_DATA.education;
    contact = PORTFOLIO_DATA.contact;
}

