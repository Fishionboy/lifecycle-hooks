import { Routes } from '@angular/router';
import { HomePage } from './pages/about-page/home-page/home-page';
import { ContactPage } from './pages/about-page/contact-page/contact-page';
import { AboutPage } from './pages/about-page/about-page';

export const routes: Routes = [
    {
        path:'',
        component: HomePage
    },
    {
        path:'about',
        component: AboutPage
    },
    {
        path:'contact',
        component: ContactPage
    },
    {
        path:'**',
        redirectTo: ''
    },
];
