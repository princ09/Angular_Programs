import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/login/login';

@Component({
  selector: 'app-loginmodal',
  templateUrl: './loginmodal.component.html',
  styleUrls: ['./loginmodal.component.css']
})
export class LoginmodalComponent implements OnInit {
  loginFeild:Login =  new Login();
  users:{username:string,password:string}[]=[
    {"username":"raj","password":"raj12345"},
    {"username":"sahana","password":"sahana.r"}
  ];

  authLogin():void {
    this.users.forEach((obj)=>{
      if(obj.username==this.loginFeild.getusername()){
        if(obj.password==this.loginFeild.getPassword()){
          alert("Login Sucessfull");
          return;
        }
      }
    });
    alert("Login Failed");
    return;
  }

  constructor() { }

  ngOnInit(): void {
       
  }
 
}
