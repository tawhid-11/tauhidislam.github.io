import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PORTFOLIO_DATA, IExperience, ICertification } from '../../data/portfolio-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class ExperienceComponent {
  readonly experiences: IExperience[] = PORTFOLIO_DATA.experiences;
  readonly certifications: ICertification[] = PORTFOLIO_DATA.certifications;
}
