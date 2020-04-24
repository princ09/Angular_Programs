import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeDataService } from 'src/app/employee-data.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employeeService:EmployeeDataService) { }
  employeeData:any[] = [];
  @Output() updateEmp = new EventEmitter();
  ngOnInit(): void {
    this.employeeService.fetchEmployeeData().subscribe(
      (data)=>this.employeeData=data
    )
  }
  updateDetail(employee){
    this.updateEmp.emit(employee);
  }

}
