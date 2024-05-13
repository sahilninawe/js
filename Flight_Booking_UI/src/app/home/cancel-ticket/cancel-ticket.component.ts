import { Component } from '@angular/core';
import { FlightService } from '../../flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-ticket',
  templateUrl: './cancel-ticket.component.html',
  styleUrl: './cancel-ticket.component.css'
})
export class CancelTicketComponent {

  pnr:any;

  constructor(private flightService: FlightService, private router: Router){}

  cancel(){
    if(this.pnr){
      this.flightService.cancelTicket(this.pnr).subscribe(data =>{
        alert("ticket Cancelled Successfully");
        this.router.navigate(['/home']);
      });
    }
    else{
      alert("Invalid PNR number");
  }
}
}
