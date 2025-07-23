import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';


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
