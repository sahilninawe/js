import { Component } from '@angular/core';
import { FlightService } from '../flight.service';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export class BookingFinalDetails{ 

  pnr:any;
  passenger:{
    id:any
  };
  flight:{
    flightid:any;
    flightname:string;
    timing:any;
    date:any;
  }
  seatsRequired:any;
  seatNumbers:any;
}

@Component({
  selector: 'app-booking-result',
  templateUrl: './booking-result.component.html',
  styleUrl: './booking-result.component.css'
})
export class BookingResultComponent {

  source:string;
  destination:string;
  classes:string;
  flightId:any;

  bookingResult: BookingFinalDetails = new BookingFinalDetails();

  constructor(private flightService: FlightService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void{
      this.source = this.activatedRoute.snapshot.paramMap.get('source');
      this.destination = this.activatedRoute.snapshot.paramMap.get('destination');
      this.classes = this.activatedRoute.snapshot.paramMap.get('classes');
      this.flightId = this.activatedRoute.snapshot.paramMap.get('flightId');
      this.getBookingDetails();
      // console.log(this.source);
      // console.log(this.destination);
      // console.log(this.classes);
 
  }


  getBookingDetails(){
    this.flightService.getBookingById(this.flightId).subscribe(data =>{
      this.bookingResult = data as BookingFinalDetails;
    })
  }

  //to download as pdf

  public downloadFullPagePDF(): void {
    html2canvas(document.body).then(canvas => {
      let pdf = new jsPDF('p', 'mm', 'a4');
      let imgWidth = 210; // A4 width in mm
      let pageHeight = 297;  // A4 height in mm
      let imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('Flightbooking.pdf');
    });
  }

  logout(){
    alert("logout successfull");
    localStorage.clear();
  }
}

