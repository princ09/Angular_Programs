import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-ride-component',
  templateUrl: './book-ride-component.component.html',
  styleUrls: ['./book-ride-component.component.css']
})
export class BookRideComponentComponent implements OnInit {
  rides:{from:string,to:string,seatAv:number}[] = [
    {"from":"Versova Junction","to":"Gotham","seatAv":3},
    {"from":"PTP","to":"Gotham","seatAv":2},
    {"from":"Gotham","to":"East-Fort","seatAv":1},
    {"from":"Gotham","to":"Central-Fort","seatAv":5}

  ]
  selectedRide:any;
  isBooked:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
selectRide(ride: any){
  this.selectedRide = ride;
}
}
