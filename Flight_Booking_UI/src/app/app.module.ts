import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightComponent } from './home/flight/flight.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
// import { CheckAvailabilityComponent } from './check-availability/check-availability.component';
import { AdminComponent } from './admin/admin.component';
import { BookingComponent } from './booking/booking.component';
//import { PassengerComponent } from './admin/passenger/passenger.component';
//import { AddFlightComponent } from './admin/add-flight/add-flight.component';
//import { FlightRoutesComponent } from './admin/flight-routes/flight-routes.component';
import { CancelTicketComponent } from './home/cancel-ticket/cancel-ticket.component';
//import { BookingDetailsComponent } from './admin/booking-details/booking-details.component';
import { AddFlightComponent } from './admin/add-flight/add-flight.component';
import { BookingDetailsComponent } from './admin/booking-details/booking-details.component';
import { FlightRoutesComponent } from './admin/flight-routes/flight-routes.component';
import { PassengerComponent } from './admin/passenger/passenger.component';
import { authGuard } from './auth.guard';
import { BookingResultComponent } from './booking-result/booking-result.component';
//import { FlightComponent } from './home/flight/flight.component';
const routes: Routes = [
  { path: "", component: LoginComponent},
  {path : "home", component:HomeComponent, canActivate: [authGuard]},
  { path: "login", component: LoginComponent }, 
  { path: "signup", component: SignupComponent },
  { path: "home/flight/:source/:destination/:classes/:date", component: FlightComponent},
  { path: "flight", component: FlightComponent, canActivate: [authGuard]},
  {path: "booking", component: BookingComponent, canActivate: [authGuard]},
  {path :"admin", component : AdminComponent, canActivate: [authGuard]},
  {path:"addflight", component : AddFlightComponent, canActivate: [authGuard]},
  {path: "home/cancelBooking", component : CancelTicketComponent, canActivate: [authGuard]},
  {path: "cancelBooking/home", component: HomeComponent, canActivate: [authGuard]},
  {path: "login/signup", component : SignupComponent},
  {path: "signup/login", component : LoginComponent},
  {path: "home/flight/:source/:destination/:classes/:date/booking/:flightId", component : BookingComponent,},
  {path: "admin/manageFlight", component : AddFlightComponent, canActivate: [authGuard]},
  {path: "admin/passengerDetails", component:PassengerComponent},
  {path: "admin/manageRoutes", component : FlightRoutesComponent},
  {path: "admin/bookingDetails",component : BookingDetailsComponent },
  {path: "flight/booking/booking", component : BookingComponent},
  {path: "home/flight/:source/:destination/:classes/:date/booking/:flightId/bookingResult", component : BookingResultComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    FlightComponent,
    BookingComponent,
    AdminComponent,
    PassengerComponent,
    AddFlightComponent,
    FlightRoutesComponent,
    CancelTicketComponent,
    BookingDetailsComponent,
    BookingResultComponent,
    AddFlightComponent,
    FlightRoutesComponent,
    FlightComponent,
    FlightRoutesComponent,
    BookingDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
   // provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
