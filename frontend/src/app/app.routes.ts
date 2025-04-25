import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { FreeTestComponent } from './components/free-test/free-test.component';

export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'signup',component:SignupComponent},
    {path: 'login',component:LoginComponent},
    {path: 'free-test',component:FreeTestComponent}
        
];
