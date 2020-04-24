import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RideServiceService {
  rides:any=[
    {"name":"James","from":"Versova Junction","to":"Gotham","car":"Innova","seatAv":3},
    {"name":"Jemmy","from":"PTP","to":"Gotham","car":"Ford","seatAv":2},
    {"name":"Joyce","from":"Gotham","to":"East-Fort","car":"Suzuki","seatAv":1},
    {"name":"Jammii","from":"Gotham","to":"Central-Fort","car":"Lamborgini","seatAv":5}
  ]
  getData():void{
    return this.rides;
  }
  saveRide(data:any):void{
    this.rides.push(data);
    console.log(data.from)
    console.log(data.to)
    console.log(this.rides[this.rides.length-1]);
  }
  updateRide(ride,dec):void{
    this.rides.forEach(ele => {
      if(ele.from == ride.from && ele.to==ride.to){
        if(dec=="dec"){
          ele.seatAv-=1;
        }else{
          ele.seatAv+=1;
        }
        
      }
    });
  }
  constructor() { }
}
