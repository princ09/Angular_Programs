import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  rides:{from:string,to:string,seatAv:number}[] = [
    {"from":"Versova Junction","to":"Gotham","seatAv":3},
    {"from":"PTP","to":"Gotham","seatAv":2},
    {"from":"Gotham","to":"East-Fort","seatAv":1},
    {"from":"Gotham","to":"Central-Fort","seatAv":5}

  ]
  filterdRides:{from:string,to:string,seatAv:number}[] = this.rides;
  constructor() { }
}
