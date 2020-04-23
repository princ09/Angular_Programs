import { Component, OnInit, Input } from '@angular/core';
import { EmployeeDataService } from 'src/app/employee-data.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  @Input() EmpData:any;
  submitted:boolean=false;
  constructor(private employeeService:EmployeeDataService) { }
  employeeData:any[] = [];
  ngOnInit(): void {
    this.employeeData = this.employeeService.fetchEmployeeData();
  }
  onSubmit(updatedEmpData){
    console.log(updatedEmpData)
    this.EmpData=updatedEmpData.value;
    this.submitted=true;

  }
}
