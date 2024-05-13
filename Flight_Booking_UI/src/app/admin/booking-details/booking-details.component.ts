import { Component } from '@angular/core';
import { FlightService } from '../../flight.service';

export class BookDetails{
  constructor(
  bookingId:any,
  pnr:any,
  noOfSeat:any,
  passenger:{
    id:any;
  },
  flight:{
    flightid:any;
  }
  ){}
}

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrl: './booking-details.component.css'
})
export class BookingDetailsComponent{

  bookDetails : BookDetails[];

  constructor(private flightservice: FlightService){}

  ngOnInit(): void{
    this.showBooking();
  }

  showBooking(){
    this.flightservice.getBooking().subscribe(data =>{
      this.bookDetails = data as BookDetails[];
    });
  }
}
