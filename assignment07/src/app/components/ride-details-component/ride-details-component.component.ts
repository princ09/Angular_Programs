import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ride-details-component',
  templateUrl: './ride-details-component.component.html',
  styleUrls: ['./ride-details-component.component.css']
})
export class RideDetailsComponentComponent implements OnInit {
  @Input() rideBooking: any;
  @Output() book = new EventEmitter();
  @Output() canceledBooking = new EventEmitter();
  bookeed:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  booked():void{
  this.bookeed=true;
  this.book.emit(true);
}
cancelBooking():void{
  this.bookeed=false;
  this.book.emit(true);
}
}
