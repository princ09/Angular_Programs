import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {
  rides:{from:string,to:string,seatAv:number}[] = [
    {"from":"Versova Junction","to":"Gotham","seatAv":3},
    {"from":"PTP","to":"Gotham","seatAv":2},
    {"from":"Gotham","to":"East-Fort","seatAv":1},
    {"from":"Gotham","to":"Central-Fort","seatAv":5}

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
