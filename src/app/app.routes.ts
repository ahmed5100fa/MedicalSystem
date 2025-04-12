import { ContactUsComponent } from './layout/pages/contact-us/contact-us.component';
import { ReSearchComponent } from './layout/pages/re-search/re-search.component';
import { MedicinesComponent } from './layout/pages/medicines/medicines.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { LoginComponent } from './layout/pages/login/login.component';
import { CareersComponent } from './layout/pages/careers/careers.component';
import { CommitmentComponent } from './layout/pages/commitment/commitment.component';
import { SignupComponent } from './layout/pages/signup/signup.component';

export const routes: Routes = [
  {path: '', component:HomeComponent , title: 'Home'},
  {path: 'home' , component: HomeComponent , title: 'Home'},
  {path: 'login' , component: LoginComponent , title: 'Login'},
  {path: 'signup' , component: SignupComponent , title: 'signup'},
  {path: 'Medicines' , component: MedicinesComponent , title: 'Medicines'},
  {path: 'Research' , component: ReSearchComponent , title: 'Research'},
  {path: 'Careers' , component: CareersComponent , title: 'Careers'},
  {path: 'Commitment' , component: CommitmentComponent , title: 'Careers'},
  {path: 'Contact_Us' , component: ContactUsComponent , title: 'Contact_Us'}
   

];
