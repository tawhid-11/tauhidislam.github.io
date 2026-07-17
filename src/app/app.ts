import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PORTFOLIO_DATA } from './data/portfolio-data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'ng-portfolio';
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openEmail() {
    window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}`;
  }
}

