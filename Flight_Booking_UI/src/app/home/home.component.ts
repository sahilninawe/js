import { Component } from '@angular/core';
import { FlightService } from '../flight.service';
import { FlightComponent } from './flight/flight.component';

export class Home{
  source:string;
  destination:string;
  date:any;
  classes:string;
  type:any;
}

export class Flights{
  constructor(
  flightId:any,
  flightName:any,
  flightClass:any,
  capacity:any,
  price:any,
  date:any,
  timing:any,
  )
{}
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // ngOnInit(): void{
  //   this.homeDetails();
  // }

  constructor(private flightService: FlightService){}

  home : Home = new Home();

  name = localStorage.getItem('name');

  flight: Flights[];

  onSelectClass(event : Event){
    this.home.classes = (event.target as HTMLSelectElement).value;
    // console.log(this.home.classes);
  }

  onSelectGeneral(event :Event){
    this.home.type = (event.target as HTMLSelectElement).value;
  }

  // homeDetails(){
  //   this.flightService.home(this.home).subscribe();
  // }

  logout(){
    alert("Logout successfull");
    localStorage.clear();
  }
  
}
