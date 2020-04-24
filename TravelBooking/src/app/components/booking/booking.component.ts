import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ValidateDate } from './dateValidator';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingForm;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.bookingForm = this.fb.group(
      {
        'source':['',[Validators.required,Validators.pattern('^[A-Z]{3}$')]],
        'destination':['',[Validators.required,Validators.pattern('^[A-Z]{3}$')]],
        'date':['',[Validators.required , ValidateDate]],
        'noOfTickets':['',[Validators.required,Validators.min(1),Validators.max(5)]],
        'type':['',[Validators.required]]
      }
    )
  }
  onSubmit(){
    console.log(this.bookingForm)
  }
  get bf(){
   return this.bookingForm.controls;
 }
}
