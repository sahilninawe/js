import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FlightComponent } from './home/flight/flight.component';

const routes: Routes = [
  { path: "", component: HomeComponent}, 
  { path: "login", component: LoginComponent }, 
  { path: "signup", component: SignupComponent },
  { path: "flight", component: FlightComponent}
];

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
