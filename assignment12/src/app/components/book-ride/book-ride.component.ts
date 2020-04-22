import { Component, OnInit } from '@angular/core';
import { RestServiceService } from 'src/app/rest-service.service';

@Component({
  selector: 'app-book-ride',
  templateUrl: './book-ride.component.html',
  styleUrls: ['./book-ride.component.css']
})
export class BookRideComponent implements OnInit {
  rides:any;
  constructor(private restService:RestServiceService) { }

  ngOnInit(): void {
    this.restService.getRides().subscribe(
      (data)=>this.rides=data
    )
  }

}
