import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { FlightService } from '../../flight.service';
import { Home } from '../home.component';
import { ActivatedRoute } from '@angular/router';
 
export class Flights{
  constructor(
  flightid:any,
  flightname:any,
  flightclass:any,
  capacity:any,
  date:any,
  timing:any,
  departureTime:any,
  )
{}
}
 
@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.css'
})
export class FlightComponent {
 
  source:string;
  destination:string;
  classes;
  date;
 
  flight:Flights[];
 
  constructor(private flightService : FlightService, private activatedRoute: ActivatedRoute){}
 
  ngOnInit(): void{
    this.source = this.activatedRoute.snapshot.paramMap.get('source');
    this.destination = this.activatedRoute.snapshot.paramMap.get('destination');
    this.classes = this.activatedRoute.snapshot.paramMap.get('classes');
    this.date = this.activatedRoute.snapshot.paramMap.get('date');
    // console.log(this.source);
    // console.log(this.destination);
    // console.log(this.classes);
    this.retrieveFlight();
  }
 
  retrieveFlight(){
      this.flightService.getFlightFilterClasses(this.source,this.destination,this.classes,this.date).subscribe(data =>{
      this.flight = data as Flights[];
    });
  }
 
 
 
 
 
  // homeFlight(){
  //   this.flightService.home(this.home).subscribe(data =>{
  //     this.flight = data as Flights[];
  //   })
  // }
 
}