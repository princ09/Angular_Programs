import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment14';
  empToUpdate:any;
  openForm:boolean = false;
  openUpdateComponent(empData){
    this.empToUpdate = empData;
    this.openForm=true;
  }
}
