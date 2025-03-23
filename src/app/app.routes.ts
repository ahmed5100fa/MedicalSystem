import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { LoginComponent } from './layout/pages/login/login.component';

export const routes: Routes = [
  {path: '', component:HomeComponent , title: 'Home'},
  {path: 'home' , component: HomeComponent , title: 'Home'},
  {path: 'login' , component: LoginComponent , title: 'Login'}
];
