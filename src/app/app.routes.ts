import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./Pages/homepage/homepage').then(c => c.HomepageComponent)
    },
    {
        path: 'about',
        loadComponent: () =>
            import('./Pages/about/about').then(c => c.AboutComponent)
    },
    {
        path: 'experience',
        loadComponent: () =>
            import('./Pages/experience/experience').then(c => c.ExperienceComponent)
    },
    {
        path: 'portfolio',
        loadComponent: () =>
            import('./Pages/portfolio/portfolio').then(c => c.PortfolioComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
