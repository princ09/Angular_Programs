import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Ride } from './models/ride';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {
  private rideURls = './assets/rides.json';
  private userURls = './assets/users.json';
  private users:User[];
  constructor(private http: HttpClient) { }
  getRides(): Observable<Ride[]> {
    return this.http.get<Ride[]>(
      this.rideURls 
    );
  }
  getUsers(){
    this.http.get<User[]>(this.userURls ).subscribe(
      (data)=>this.users=data
    );
  }

  authUser(uname:string,pass:string):boolean {
    let found:boolean = false;
   this.users.forEach(
     (user)=>{
      console.log(Object.getPrototypeOf(user));
       if(user.username==uname && user.password==pass){
         found=true;
       }
     }
   )
   return found;
  }
}
