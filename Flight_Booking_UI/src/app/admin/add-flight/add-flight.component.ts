import { Component} from '@angular/core';
import { FlightService } from '../../flight.service';

export class FlightDetails{
  flightid:any;
  flightname:any;
  flightclass:any;
  capacity:any;
  date:any;
  timing:any;
  departureTime:any;
}

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
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrl: './add-flight.component.css'
})
export class AddFlightComponent {

  flight: FlightDetails = new FlightDetails();

  flights: Flights[];

  ngOnInit(): void{
    this.showFlight();
  }

  constructor(private flightService: FlightService){}

  showFlight(){
    this.flightService.getFlightDetails().subscribe(data =>{
      this.flights = data as Flights[];
    });
  }

  addFlight(){
    this.flightService.createFlight(this.flight).subscribe(data => {
      console.log(data);
      alert("New Flight Created Successfully");
      this.showFlight();
    })
  }

  editFlight(){
    this.flightService.editFlight(this.flight).subscribe(data =>{
      alert("Flight Details Edited Successfully");
      this.showFlight();
    })
  }

  deleteflight(){
    this.flightService.deleteFlight(this.flight).subscribe(data =>{
      alert("Flight Deleted Successfully");
      this.showFlight();
    })
  }


}
