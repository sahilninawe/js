import { Component } from '@angular/core';
import { FlightService } from '../../flight.service';
 
export class Route{
  routeid:any;
  source:string;
  destination:string;
  flight:any ={
    "flightid":""
  };
}
 
export class RouteDetails{
  constructor(
    routeid:any,
    source:string,
    destination:string,
    flight:any ={
      "flightid":""
    }
  ){}
}
 
@Component({
  selector: 'app-flight-routes',
  templateUrl: './flight-routes.component.html',
  styleUrl: './flight-routes.component.css'
})
export class FlightRoutesComponent {
 
  ngOnInit(): void{
    this.getroute();
  }
 
  route: Route = new Route();
 
  routeDetails: RouteDetails[];
 
  constructor(private flightService: FlightService){}
 
  getroute(){
    this.flightService.getRoute().subscribe(data =>{
      this.routeDetails = data as RouteDetails[];
    })
  }
 
  addroute(){
    this.flightService.addRoute(this.route).subscribe(data =>{
      alert("Route Added Successfully");
      this.getroute();
    })
  }
 
  editroute(){
    this.flightService.editRoute(this.route).subscribe(data =>{
      alert("Route Edited Successfully");
      this.getroute();
    })
  }
 
  deleteroute(){
    this.flightService.deleteRoute(this.route).subscribe(data =>{
      alert("Route Deleted Successfully");
      this.getroute();
    })
  }
 
}