import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from './login/login.component';
import { UserDetails } from './signup/signup.component';
import { FlightDetails } from './admin/add-flight/add-flight.component';
import { Route } from './admin/flight-routes/flight-routes.component';
import { Booking } from './booking/booking.component';
import { Home } from './home/home.component';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private httpClient: HttpClient) { }

  // //checkAvailability
  // checkingAvailableFlight(home: HomeDetails){
  //   return this.httpClient.post('http://localhost:8080/flight/checkavailable',home);
  // }

  // login
  // loginUser(user :UserLogin):Observable<Object>{
  //   return this.httpClient.post('http://localhost:8080/login',user);
  // }

  //passenger
  showPassengerCount(){
    return this.httpClient.get('http://localhost:8080/passenger/count');
  }

  userExist(loginDetails:any){
    return this.httpClient.post('http://localhost:8080/passenger/login',loginDetails);
  }

  //signup
  userRegister(user : UserDetails){
    return this.httpClient.post('http://localhost:8080/passenger/add',user);
  }

  //flight
  getFlightDetails(){
    return this.httpClient.get('http://localhost:8080/flight/all');
  }

  //flight
  getFlightFilter(source:string, destination:string){
    return this.httpClient.get(`http://localhost:8080/home/route/${source}/${destination}`);
  }

  //flight
  getFlightFilterClasses(source:string, destination:string, classes: string, date:any){
    return this.httpClient.get(`http://localhost:8080/home/filter/${source}/${destination}/${classes}/${date}`);
  }

  //admin
  getPassengers(){
    return this.httpClient.get('http://localhost:8080/passenger/all')
  }

  //admin
  createFlight(flight :FlightDetails){
    return this.httpClient.post('http://localhost:8080/flight/add',flight);
  }

  //admin
  editFlight(flight: FlightDetails){
    return this.httpClient.put(`http://localhost:8080/flight/update/${flight.flightid}`,flight);
  }

  //admin
  deleteFlight(flight : FlightDetails){
    return this.httpClient.delete(`http://localhost:8080/flight/delete/${flight.flightid}`);
  }

  //route
  addRoute(route : Route){
    return this.httpClient.post('http://localhost:8080/route/add',route);
  }

  //route
  editRoute(route : Route){
    return this.httpClient.put(`http://localhost:8080/route/update/${route.routeid}`,route);
  }

  //route
  deleteRoute(route : Route){
    return this.httpClient.delete(`http://localhost:8080/route/delete/${route.routeid}`);
  }

  //booking
  booking(book : Booking){
    return this.httpClient.post('http://localhost:8080/booking/add',book);
  }

  //home
  cancelTicket(pnr:any){
    return this.httpClient.delete(`http://localhost:8080/booking/cancel/${pnr}`);
  }

  //route
  getRoute(){
    return this.httpClient.get('http://localhost:8080/route/all');
  }

  //home
  home(home : Home){
    return this.httpClient.get(`http://localhost:8080/home/filter/${home.source}/${home.destination}/${home.classes}`);
  }

  //bookingDetails
  getBooking(){
    return this.httpClient.get('http://localhost:8080/booking/all');
  }

  //bookingDetails
  getBookingById(flightId:any){
    return this.httpClient.get(`http://localhost:8080/booking/flightId/${flightId}`);
  }
}
