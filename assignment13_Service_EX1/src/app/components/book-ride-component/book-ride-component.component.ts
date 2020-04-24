import { Component, OnInit } from '@angular/core';
import { RideServiceService } from 'src/app/ride-service.service';

@Component({
  selector: 'app-book-ride-component',
  templateUrl: './book-ride-component.component.html',
  styleUrls: ['./book-ride-component.component.css']
})
export class BookRideComponentComponent implements OnInit {
   bookedRide:any;
   message:string;
  constructor(public rideService:RideServiceService) { }
  ngOnInit(): void {  }
  addRide(ride:any){
    this.bookedRide = ride;
    this.rideService.updateRide(ride,"dec");
    
  }
  cancelBooking(){
    this.rideService.updateRide(this.bookedRide,"inc");
    this.bookedRide=undefined;

  }
}
