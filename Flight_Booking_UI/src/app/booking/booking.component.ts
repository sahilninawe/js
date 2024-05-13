import { Component, Input } from '@angular/core';
import { FlightService } from '../flight.service';
import { ActivatedRoute, Router } from '@angular/router';

export class Booking{
  bookingId:any;
  pnr:any;
  seatsRequired:any;
  passenger={
    "id":""
  };
  flight:any={
    "flightid":""
  };
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  tid: number;
  classes : string;
  price:any;
  pid:any;

  ngOnInit(): void{
    this.tid = Number(this.route.snapshot.paramMap.get('flightId'));
    this.classes = this.route.snapshot.paramMap.get('classes');
    this.booking.flight.flightid = this.tid;
    this.pid = localStorage.getItem('id');
    this.booking.passenger.id = this.pid;
    this.priceCalculation();
  }

  booking:Booking = new Booking();

  constructor(private flightService: FlightService, private route:ActivatedRoute, private nav : Router ) {}


  bookTicket(){
    this.flightService.booking(this.booking).subscribe();
    console.log(this.booking);
    alert("Booked Successfully");
  }  

  priceCalculation(){
    if(this.classes === 'AC First Class(1A)'){
      this.price = 300;
    }
    else if(this.classes === 'AC 2 Tier(2A)'){
      this.price = 250;
    }
    else if(this.classes === 'First Class(FC)'){
      this.price = 280;
    }
    else if(this.classes === 'AC 3 Tier(3A)'){
      this.price = 230;
    }
    else if(this.classes === 'Sleeper(SL)'){
      this.price = 200;
    }
    else if(this.classes === 'Second Sitting(2S)'){
      this.price = 180;
    }
    else{
      this.price = 150;
    }
  }
}
