import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        title: 'Login'
    },
    {
        path:'register',
        component: RegisterComponent,
        title: 'Register'
    },
    {
        path:'home',
        component: HomeComponent,
        title:'Home'
    }
];
