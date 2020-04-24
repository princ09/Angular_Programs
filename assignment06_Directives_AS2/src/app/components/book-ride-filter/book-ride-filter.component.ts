import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-book-ride-filter',
  templateUrl: './book-ride-filter.component.html',
  styleUrls: ['./book-ride-filter.component.css']
})
export class BookRideFilterComponent implements OnInit {
  
  //filterdRides:{from:string,to:string,seatAv:number}[] = this.rides;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {

  }
  toGottam(ride:any):boolean{
    if(ride.to=="Gotham"){
      return true;
    }else{
      return false;
    }
  }
  fromGottam(ride:any):boolean{
    if(ride.from=="Gotham"){
      return true;
    }else{
      return false;
    }
  }
  filterToGotham():void{
    console.log("to");
    this.dataService.filterdRides = this.dataService.rides.filter((ride)=>this.toGottam(ride))
    console.log( this.dataService.filterdRides);
  }
  filterFromGotham():void{
    console.log("to");
    this.dataService.filterdRides = this.dataService.rides.filter((ride)=>this.fromGottam(ride))
    console.log( this.dataService.filterdRides);

  }
  displayAll():void{
    console.log("all");
    this.dataService.filterdRides = this.dataService.rides;
  }
}
