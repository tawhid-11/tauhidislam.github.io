import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/homepage/homepage').then(c => c.HomepageComponent)
    },
    {
        path: 'about',
        loadComponent: () =>
            import('./pages/about/about').then(c => c.AboutComponent)
    },
    {
        path: 'experience',
        loadComponent: () =>
            import('./pages/experience/experience').then(c => c.ExperienceComponent)
    },
    {
        path: 'portfolio',
        loadComponent: () =>
            import('./pages/portfolio/portfolio').then(c => c.PortfolioComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];

