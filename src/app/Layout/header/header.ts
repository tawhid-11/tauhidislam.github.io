import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.html',
    styleUrl: './header.css'
})
export class HeaderComponent {
openEmail() {
throw new Error('Method not implemented.');
}
    isMenuOpen = false;

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    openEmail() {
        window.location.href = 'mailto:tshakib25@gmail.com';
    }
}
