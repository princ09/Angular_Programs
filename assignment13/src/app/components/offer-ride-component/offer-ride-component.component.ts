import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RideServiceService } from 'src/app/ride-service.service';

@Component({
  selector: 'app-offer-ride-component',
  templateUrl: './offer-ride-component.component.html',
  styleUrls: ['./offer-ride-component.component.css']
})
export class OfferRideComponentComponent implements OnInit {
   message:string=""
  constructor(private rideService:RideServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.rideService.saveRide(form.value);
    this.message="Added SuccessFully!!"
}
}
