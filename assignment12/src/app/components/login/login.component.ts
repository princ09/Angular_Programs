import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RestServiceService } from 'src/app/rest-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validUser:boolean = true;
  @Output() userLogged = new EventEmitter()
  constructor(private restService:RestServiceService) { }
  authenticate(username,password){
    if(this.restService.authUser(username,password)){
      this.validUser=true;
      this.userLogged.emit(this.validUser)
    }else{
      this.validUser=false;
    }
  }
  ngOnInit(): void {
    this.restService.getUsers();
  }

}
