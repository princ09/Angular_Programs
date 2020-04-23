import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  constructor(private http:HttpClient) { }
  fetchEmployeeData():any{
    return this.http.get('./assets/employees.json');
  
  }
  
}
