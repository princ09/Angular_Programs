import { Component, OnInit, Output } from '@angular/core';
import {  EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() showBooks = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  selectedOption(value):void{
    this.showBooks.emit(value);
  }

}
