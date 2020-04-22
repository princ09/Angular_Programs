import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() showBook:String; 
  bookCollection  = {
    "Romance":["Dark Lover","Twilight","Halfway to the Grave","Darkfever"],
    "Action":["The Last Odyssey","Super Adjacent","Zero Divergence","Malice"],
    "Adventure":["Ivanhoe","Three Musketeers","Twenty Thousand Leagues Under the Sea","Treasure Island"]
  };
 
  constructor() { }
   displayData():void{
     console.log(this.bookCollection["Romance"]);
   }
  ngOnInit(): void {
    this.displayData();
  }

}
